"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminTabs({ labels, showVolunteers }: { labels: Record<"stats" | "topics" | "news" | "volunteers" | "applications", string>; showVolunteers: boolean }) {
  const path = usePathname();
  const tabs: [string, string][] = [
    ["/admin", labels.stats],
    ["/admin/topics", labels.topics],
    ["/admin/applications", labels.applications],
    ["/admin/news", labels.news],
  ];
  if (showVolunteers) tabs.push(["/admin/volunteers", labels.volunteers]);
  return (
    <nav className="tabs">
      {tabs.map(([href, label]) => (
        <Link key={href} href={href} className={(href === "/admin" ? path === href : path.startsWith(href)) ? "on" : ""}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
