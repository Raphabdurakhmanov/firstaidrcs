import Link from "next/link";
import { getDict } from "@/lib/i18n/server";

export default async function NotFound() {
  const { t } = await getDict();
  return (
    <section className="section">
      <div className="wrap center">
        <div className="score">404</div>
        <h1>{t.topic.notFound}</h1>
        <div className="row" style={{ justifyContent: "center", marginTop: 20 }}>
          <Link href="/topics" className="btn">
            {t.allTopics} →
          </Link>
          <a href="tel:103" className="btn ghost">
            ☎ 103
          </a>
        </div>
      </div>
    </section>
  );
}
