-- Портал первой помощи: схема базы данных Supabase.
-- Выполните целиком в Supabase → SQL Editor → New query → Run.
-- Скрипт можно запускать повторно.

-- ---------- Профили ----------
create table if not exists public.profiles (
  id uuid primary key references auth.users on delete cascade,
  email text,
  full_name text,
  avatar_url text,
  region text,
  role text not null default 'volunteer' check (role in ('volunteer', 'coordinator', 'admin')),
  created_at timestamptz not null default now()
);

-- Профиль создаётся автоматически при первом входе.
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name'),
    new.raw_user_meta_data ->> 'avatar_url'
  )
  on conflict (id) do nothing;
  return new;
end $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- Роли проверяем функциями security definer, чтобы политики не зацикливались.
create or replace function public.is_staff()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.profiles where id = auth.uid() and role in ('coordinator', 'admin'));
$$;

create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.profiles where id = auth.uid() and role = 'admin');
$$;

-- Менять роль может только администратор (и не себе). SQL Editor работает без auth.uid() — там можно.
create or replace function public.protect_role()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if new.role is distinct from old.role and auth.uid() is not null then
    if not public.is_admin() or auth.uid() = old.id then
      raise exception 'only an administrator can change roles';
    end if;
  end if;
  if new.email is distinct from old.email and auth.uid() is not null then
    new.email := old.email;
  end if;
  return new;
end $$;

drop trigger if exists profiles_protect_role on public.profiles;
create trigger profiles_protect_role before update on public.profiles
  for each row execute function public.protect_role();

alter table public.profiles enable row level security;
drop policy if exists "profiles read" on public.profiles;
create policy "profiles read" on public.profiles for select using (id = auth.uid() or public.is_staff());
drop policy if exists "profiles update" on public.profiles;
create policy "profiles update" on public.profiles for update using (id = auth.uid() or public.is_admin());

-- ---------- Темы (добавленные или изменённые через админку) ----------
create table if not exists public.topics (
  slug text primary key check (slug ~ '^[a-z0-9][a-z0-9-]{1,60}$'),
  data jsonb not null,
  published boolean not null default true,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users on delete set null
);

alter table public.topics enable row level security;
drop policy if exists "topics read" on public.topics;
create policy "topics read" on public.topics for select using (published or public.is_staff());
drop policy if exists "topics write" on public.topics;
create policy "topics write" on public.topics for all using (public.is_staff()) with check (public.is_staff());

-- ---------- Новости ----------
create table if not exists public.news (
  id uuid primary key default gen_random_uuid(),
  title jsonb not null,
  body jsonb not null,
  cover_url text,
  audience text not null default 'public' check (audience in ('public', 'volunteers')),
  published boolean not null default true,
  author_id uuid references auth.users on delete set null,
  created_at timestamptz not null default now()
);

alter table public.news enable row level security;
drop policy if exists "news read" on public.news;
create policy "news read" on public.news for select using (
  (published and (audience = 'public' or auth.uid() is not null)) or public.is_staff()
);
drop policy if exists "news write" on public.news;
create policy "news write" on public.news for all using (public.is_staff()) with check (public.is_staff());

-- ---------- Прогресс и результаты ----------
create table if not exists public.topic_progress (
  user_id uuid not null references auth.users on delete cascade,
  slug text not null,
  completed_at timestamptz not null default now(),
  primary key (user_id, slug)
);

alter table public.topic_progress enable row level security;
drop policy if exists "progress read" on public.topic_progress;
create policy "progress read" on public.topic_progress for select using (user_id = auth.uid() or public.is_staff());
drop policy if exists "progress insert" on public.topic_progress;
create policy "progress insert" on public.topic_progress for insert with check (user_id = auth.uid());
drop policy if exists "progress update" on public.topic_progress;
create policy "progress update" on public.topic_progress for update using (user_id = auth.uid());
drop policy if exists "progress delete" on public.topic_progress;
create policy "progress delete" on public.topic_progress for delete using (user_id = auth.uid());

create table if not exists public.quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users on delete cascade,
  kind text not null check (kind in ('topic', 'exam')),
  slug text,
  score int not null check (score >= 0),
  total int not null check (total > 0 and total <= 30 and score <= total),
  created_at timestamptz not null default now()
);
create index if not exists quiz_attempts_user on public.quiz_attempts (user_id, created_at desc);

alter table public.quiz_attempts enable row level security;
drop policy if exists "attempts read" on public.quiz_attempts;
create policy "attempts read" on public.quiz_attempts for select using (user_id = auth.uid() or public.is_staff());
drop policy if exists "attempts insert" on public.quiz_attempts;
create policy "attempts insert" on public.quiz_attempts for insert with check (user_id = auth.uid());

-- ---------- Хранилище картинок ----------
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do update set public = true;

drop policy if exists "media read" on storage.objects;
create policy "media read" on storage.objects for select using (bucket_id = 'media');
drop policy if exists "media write" on storage.objects;
create policy "media write" on storage.objects for insert with check (bucket_id = 'media' and public.is_staff());
drop policy if exists "media update" on storage.objects;
create policy "media update" on storage.objects for update using (bucket_id = 'media' and public.is_staff());
drop policy if exists "media delete" on storage.objects;
create policy "media delete" on storage.objects for delete using (bucket_id = 'media' and public.is_staff());

-- ---------- Первый администратор ----------
-- Войдите на сайт через Google, затем выполните (подставьте свою почту):
-- update public.profiles set role = 'admin' where email = 'you@gmail.com';
