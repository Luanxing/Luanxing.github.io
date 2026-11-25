const modules = import.meta.glob('./pages/posts/*.md', { eager: true });
export const posts = Object.values(modules)
  .filter(post => !post.frontmatter.draft)
  .sort((a, b) => b.frontmatter.date.localeCompare(a.frontmatter.date));
