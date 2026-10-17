import Link from "next/link";
import { getDict } from "@/lib/i18n/server";
import { getDbTopics, getTopics } from "@/lib/data";
import { BUILTIN_TOPICS, CATEGORIES } from "@/lib/content";
import TopicIcon from "@/components/TopicIcon";

export default async function AdminTopics() {
  const { lang, t } = await getDict();
  const [all, db] = await Promise.all([getTopics(true), getDbTopics()]);
  const dbSlugs = new Set(db.map((x) => x.slug));
  const builtin = new Set(BUILTIN_TOPICS.map((x) => x.slug));

  return (
    <div className="panel">
      <div className="row" style={{ marginBottom: 16 }}>
        <h2 style={{ margin: 0 }}>
          {t.adm.topics} · {all.length}
        </h2>
        <span className="spacer" />
        <Link href="/admin/topics/edit" className="btn small">
          + {t.adm.newTopic}
        </Link>
      </div>
      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>{t.nav.topics}</th>
              <th>{t.categories}</th>
              <th>?</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {all.map((x) => (
              <tr key={x.slug}>
                <td className="muted">{x.order}</td>
                <td>
                  <Link href={`/topics/${x.slug}`}>
                    <b>
                      <TopicIcon icon={x.icon} /> {x.title[lang]}
                    </b>
                  </Link>
                  <div className="row small" style={{ gap: 6, marginTop: 4 }}>
                    <span className="muted">/{x.slug}</span>
                    {builtin.has(x.slug) && !dbSlugs.has(x.slug) && <span className="tag">{t.adm.builtIn}</span>}
                    {builtin.has(x.slug) && dbSlugs.has(x.slug) && <span className="tag red">{t.adm.edited}</span>}
                    {!builtin.has(x.slug) && <span className="tag green">{t.adm.custom}</span>}
                    {x.published === false && <span className="tag gray">{t.adm.hidden}</span>}
                    {x.core && <span className="tag red">{t.topic.core}</span>}
                  </div>
                </td>
                <td className="small">{CATEGORIES.find((c) => c.id === x.cat)?.title[lang]}</td>
                <td className="small">{x.quiz.length}</td>
                <td>
                  <Link className="link" href={`/admin/topics/edit?slug=${x.slug}`}>
                    {t.adm.edit}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
