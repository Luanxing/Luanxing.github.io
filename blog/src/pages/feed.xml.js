import rss from '@astrojs/rss';
import { posts } from '../posts.js';
export function GET(context) {
  return rss({ title: '一方乱行', description: 'Otto 的旅行、户外与生活记录。', site: context.site, items: posts.map(post => ({ title: post.frontmatter.title, description: post.frontmatter.description, pubDate: new Date(post.frontmatter.date), link: post.url })), customData: '<language>zh-CN</language>' });
}
