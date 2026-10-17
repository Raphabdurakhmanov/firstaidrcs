import Link from "next/link";
import { notFound } from "next/navigation";
import { getDict } from "@/lib/i18n/server";
import { getNewsItem, getSession, isStaff } from "@/lib/data";
import { fmtDate } from "@/components/NewsCard";

export default async function NewsItemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!/^[0-9a-f-]{36}$/i.test(id)) notFound();
  const { lang, t } = await getDict();
  const [item, session] = await Promise.all([getNewsItem(id), getSession()]);
  if (!item) notFound();
  const staff = isStaff(session?.profile);

  return (
    <section className="section">
      <div className="wrap" style={{ maxWidth: 860 }}>
        <nav className="crumbs">
          <Link href="/news">← {t.allNews}</Link>
        </nav>
        <div className="row" style={{ marginTop: 20 }}>
          <span className="small muted">{fmtDate(item.created_at, lang)}</span>
          {item.audience === "volunteers" && <span className="tag red">{t.volunteersOnly}</span>}
          {staff && (
            <Link className="link" href={`/admin/news/edit?id=${item.id}`}>
              ✎ {t.adm.edit}
            </Link>
          )}
        </div>
        <h1 className="h2">{item.title[lang]}</h1>
        {item.cover_url && <img src={item.cover_url} alt="" style={{ borderRadius: 20, margin: "24px 0", width: "100%" }} />}
        <div className="prose">
          {item.body[lang]
            .split(/\n{2,}|\r\n\r\n/)
            .filter(Boolean)
            .map((p, i) => (
              <p key={i} style={{ whiteSpace: "pre-line" }}>
                {p}
              </p>
            ))}
        </div>
      </div>
    </section>
  );
}
