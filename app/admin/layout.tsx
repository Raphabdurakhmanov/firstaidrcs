import { redirect } from "next/navigation";
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
  if (!session) redirect("/login");
  if (!isStaff(session.profile)) {
    return (
      <section className="section">
        <div className="wrap">
          <div className="notice">{t.adm.noAccess}</div>
          <form action="/auth/signout" method="post" style={{ marginTop: 16 }}>
            <button className="btn ghost small">{t.logout}</button>
          </form>
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
        <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
          <h1 className="h2" style={{ fontSize: 38 }}>
            {t.adm.title}
          </h1>
          <form action="/auth/signout" method="post">
            <button className="btn ghost small">{t.logout}</button>
          </form>
        </div>
        <AdminTabs
          labels={{ stats: t.adm.stats, topics: t.adm.topics, news: t.adm.news, volunteers: t.adm.volunteers, applications: t.adm.applications }}
          showVolunteers={true}
        />
        {children}
      </div>
    </section>
  );
}
