# Waline 评论配置

客户端已接入每篇文章底部。服务地址留空时不显示，且不会加载第三方评论资源。

## 服务端

按官方教程 https://waline.js.org/guide/deploy/vercel.html 创建服务：

1. 使用 GitHub 登录 Vercel，从官方 Waline 模板创建独立项目。
2. 在 Storage 通过 Marketplace 创建 Neon 数据库，选择免费方案，将其连接到评论项目。
3. 在 Neon SQL Editor 执行官方建表文件 https://github.com/walinejs/waline/blob/main/assets/waline.pgsql 。仅对新空数据库执行一次。
4. 回 Vercel Redeploy，使数据库连接配置生效。
5. 访问服务地址 /ui/register，立即注册。首个注册用户为管理员。
6. 按官方环境变量说明配置 SITE_NAME=一方乱行、SITE_URL=https://luanxing.github.io；不要将 LOGIN 设置为 force，以允许访客留言。数据库密码等仅保存在 Vercel 环境变量，不要写进博客仓库。

## 启用

在 Pages CMS「评论设置」里填入服务根地址，例如 https://你的项目.vercel.app，不带 /ui；保存。也可以编辑 blog/src/config/comments.json。等待 GitHub Actions 成功后，文章底部会出现「查看或写留言」。

检查留言、回复、管理员删除以及不同文章评论隔离是否正常。客户端按文章 pathname 关联评论，因此已发布文章尽量不改 URL。客户端不要求登录，昵称必填、邮箱选填。若客户端设置与服务端要求不一致，以服务端为准。

评论单独保存在 Neon，不在博客 Markdown 或 Pages CMS 中；通过 Waline /ui 管理。服务未完成部署与实测前，不要声称评论已可用。
