import { getDict } from "@/lib/i18n/server";
import { builtinTopic, getDbTopics, getTopics } from "@/lib/data";
import { CATEGORIES } from "@/lib/content";
import TopicEditor from "@/components/admin/TopicEditor";
import { l, type Topic } from "@/lib/types";

export default async function EditTopicPage({ searchParams }: { searchParams: Promise<{ slug?: string }> }) {
  const { slug } = await searchParams;
  const { lang } = await getDict();
  const [all, db] = await Promise.all([getTopics(true), getDbTopics()]);
  const existing = slug ? all.find((x) => x.slug === slug) ?? null : null;
  const empty: Topic = {
    slug: "",
    cat: "basics",
    icon: "✚",
    order: Math.max(0, ...all.map((x) => x.order)) + 1,
    core: false,
    published: true,
    title: l("", "", ""),
    summary: l("", "", ""),
    steps: [l("", "", "")],
    warning: l("", "", ""),
    quiz: [],
  };
  return (
    <TopicEditor
      lang={lang}
      initial={existing ?? empty}
      isNew={!existing}
      isBuiltin={Boolean(existing && builtinTopic(existing.slug))}
      isEdited={Boolean(existing && db.some((d) => d.slug === existing.slug))}
      categories={CATEGORIES.map(({ id, title }) => ({ id, title }))}
      takenSlugs={all.map((x) => x.slug)}
    />
  );
}
