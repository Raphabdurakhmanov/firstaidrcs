import { describe, expect, it } from "vitest";
import { cleanText, parsePosts, parseRss } from "../lib/rcs-news";

describe("новости redcrescent.uz", () => {
  it("чистит html и сущности", () => {
    expect(cleanText("<p>Семинар&nbsp;в&#8230; &laquo;Бухаре&raquo;</p>")).toBe("Семинар в… «Бухаре»");
  });

  it("разбирает ответ WordPress API с картинкой", () => {
    const [n] = parsePosts([
      {
        id: 3357,
        date_gmt: "2026-08-07T14:00:23",
        link: "https://redcrescent.uz/ru/news/test/",
        title: { rendered: "Подготовка к ЧС &#8212; семинар" },
        excerpt: { rendered: "<p>Короткий текст</p>" },
        _embedded: { "wp:featuredmedia": [{ source_url: "big.jpg", media_details: { sizes: { medium_large: { source_url: "mid.jpg" } } } }] },
      },
    ]);
    expect(n.title).toBe("Подготовка к ЧС — семинар");
    expect(n.image).toBe("mid.jpg");
    expect(n.date).toBe("2026-08-07T14:00:23Z");
    expect(n.excerpt).toBe("Короткий текст");
  });

  it("разбирает RSS и берёт первую картинку из текста", () => {
    const xml = `<rss><channel><item><title><![CDATA[ДЕЯТЕЛЬНОСТЬ НА ЖЕЛЕЗНОЙ ДОРОГЕ]]></title><link>https://redcrescent.uz/ru/news/a/</link>
      <pubDate>Fri, 10 Oct 2025 04:48:07 +0000</pubDate><description><![CDATA[<p>Описание</p>]]></description>
      <content:encoded><![CDATA[<p><img src="https://redcrescent.uz/wp-content/uploads/a.jpg" /></p>]]></content:encoded></item></channel></rss>`;
    const [n] = parseRss(xml);
    expect(n.title).toBe("ДЕЯТЕЛЬНОСТЬ НА ЖЕЛЕЗНОЙ ДОРОГЕ");
    expect(n.image).toBe("https://redcrescent.uz/wp-content/uploads/a.jpg");
    expect(n.link).toBe("https://redcrescent.uz/ru/news/a/");
  });
});
