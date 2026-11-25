# 一方乱行 · Cactus

使用 Astro Cactus 主题，发布到 https://luanxing.github.io/ 。主题许可见 LICENSE。

## 网页写文章

在 GitHub 的 `blog/content/posts` 下创建 `文章英文名.md`：

```markdown
---
title: 立山开板（一）
publishDate: '2026-11-25'
description: 从第一次想去立山，到真正准备出发。
tags: ['滑雪', '旅行']
ogImage: /icon.svg
---

正文从这里开始。

![立山雪景](/images/tateyama/01.jpg)
```

照片上传到 `blog/public/images`，正文用 `/images/文件名.jpg` 引用。封面可和文章放在同一个文件夹，文件夹内正文命名为 `index.md`，在 frontmatter 添加：

```yaml
coverImage:
  src: ./cover.jpg
  alt: 立山的雪景
```

`draft: true` 可保留草稿，生产站不会生成该文。提交到 master 后自动发布，归档与搜索会自动更新。

## Codespaces 预览

```bash
cd /workspaces/Luanxing.github.io/blog
npm ci
npm run dev -- --host 0.0.0.0
```

在 Ports 打开 4321。端口保持私有。搜索索引在正式构建后生成。

## 搜索引擎

站点地图 https://luanxing.github.io/sitemap-index.xml ，RSS https://luanxing.github.io/rss.xml 。robots.txt 允许搜索引擎及 OAI-SearchBot 抓取。

Google Search Console 用「网址前缀」添加 `https://luanxing.github.io/`，通过 HTML 标签或文件验证后提交站点地图，并用网址检查申请首页和新文章收录。验证字符串需要由账号所有者获取。

文章的 `publishDate` 为首次发布日期，正文实质更新时可填写 `updatedDate: '2026-11-25'`。元信息会分别标注两者。封面图会自动用于分享预览和文章结构化数据。正文图请写清楚替代文字，实际旅行日期放在正文。搜索排名和 AI 引用由各平台决定。
