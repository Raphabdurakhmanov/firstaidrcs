import Link from "next/link";
import { getDict } from "@/lib/i18n/server";
import { getSession, isStaff } from "@/lib/data";
import { supabaseConfigured } from "@/lib/supabase/env";
import AdminTabs from "@/components/admin/AdminTabs";

export const metadata = { title: "Админ-панель", robots: { index: false } };

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const { t } = await getDict();
  const session = await getSession();

  if (!supabaseConfigured()) {
    return (
      <section className="section">
        <div className="wrap">
          <div className="notice">{t.auth.notConfigured}</div>
        </div>
      </section>
    );
  }
  if (!session) {
    return (
      <section className="section">
        <div className="wrap center">
          <Link className="btn" href="/login?next=/admin">
            {t.login}
          </Link>
        </div>
      </section>
    );
  }
  if (!isStaff(session.profile)) {
    return (
      <section className="section">
        <div className="wrap">
          <div className="notice">{t.adm.noAccess}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="section alt" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <span className="eyebrow">
          <i />
          {t.roles[session.profile!.role]}
        </span>
        <h1 className="h2" style={{ fontSize: 38 }}>
          {t.adm.title}
        </h1>
        <AdminTabs
          labels={{ stats: t.adm.stats, topics: t.adm.topics, news: t.adm.news, volunteers: t.adm.volunteers }}
          showVolunteers={true}
        />
        {children}
      </div>
    </section>
  );
}
