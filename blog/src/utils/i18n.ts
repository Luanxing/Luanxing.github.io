const japaneseLabels: Record<string, string> = {
  首页: "ホーム",
  文章: "記事",
  归档: "アーカイブ",
  关于: "このブログについて",
};
export function menuPath(path: string, pathname: string): string {
  if (!pathname.startsWith("/ja/")) return path;
  if (path === "/posts/") return "/ja/#articles";
  return ["/", "/archive/", "/about/"].includes(path) ? `/ja${path}` : path;
}
export function menuTitle(title: string, pathname: string): string {
  return pathname.startsWith("/ja/") ? japaneseLabels[title] ?? title : title;
}
