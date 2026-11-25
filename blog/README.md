# 一方乱行

Astro 源码位于仓库的 `blog` 目录。GitHub Pages 地址为 https://luanxing.github.io/ 。

## 网页编辑文章

在 GitHub 打开 `blog/src/pages/posts`，用 Add file → Create new file 创建 `文章英文名.md`。

```markdown
---
layout: ../../layouts/Post.astro
title: 文章标题
date: '2026-11-25'
description: 一句话简介
cover: /images/tateyama/cover.jpg
coverAlt: 立山雪景
---

这里开始写正文。

![上山时的照片](/images/tateyama/01.jpg)
```

不配封面时省略 `cover` 和 `coverAlt`。照片在 `blog/public/images` 下使用 Add file → Upload files 上传，可按游记创建子目录。照片和 Markdown 都会公开。图片建议缩小到长边 1600–2000 像素并保留原图。

归档按 `date` 的月份自动整理，RSS 自动更新。`date` 请用带引号的 YYYY-MM-DD。

## 发布

仓库 Settings → Pages → Build and deployment → Source 选择 GitHub Actions。

`astro-blog` 分支和 PR 会构建检查。合并到 `master` 后自动发布。Actions 失败时先查看日志，构建成功的运行提供 `github-pages` 网页压缩包。

## Codespaces 预览

```bash
cd /workspaces/Luanxing.github.io/blog
npm ci
npm run dev -- --host 0.0.0.0
```

在 Ports 中打开 4321 端口，保持私有可见性。修改保存后预览自动更新。
