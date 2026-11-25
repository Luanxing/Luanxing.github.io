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
