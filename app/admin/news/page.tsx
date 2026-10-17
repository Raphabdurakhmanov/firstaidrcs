import Link from "next/link";
import { getDict } from "@/lib/i18n/server";
import { getNews } from "@/lib/data";
import { fmtDate } from "@/components/NewsCard";

export default async function AdminNews() {
  const { lang, t } = await getDict();
  const news = await getNews(200, { includeDrafts: true });
  return (
    <div className="panel">
      <div className="row" style={{ marginBottom: 16 }}>
        <h2 style={{ margin: 0 }}>
          {t.adm.news} · {news.length}
        </h2>
        <span className="spacer" />
        <Link href="/admin/news/edit" className="btn small">
          + {t.adm.newNews}
        </Link>
      </div>
      {news.length ? (
        <div className="table-wrap">
          <table className="table">
            <tbody>
              {news.map((n) => (
                <tr key={n.id}>
                  <td>
                    <b>{n.title[lang]}</b>
                    <div className="row small" style={{ gap: 6, marginTop: 4 }}>
                      <span className="muted">{fmtDate(n.created_at, lang)}</span>
                      {n.audience === "volunteers" && <span className="tag red">{t.volunteersOnly}</span>}
                      {!n.published && <span className="tag gray">{t.adm.hidden}</span>}
                    </div>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <Link className="link" href={`/admin/news/edit?id=${n.id}`}>
                      {t.adm.edit}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="empty">{t.newsEmpty}</div>
      )}
    </div>
  );
}
