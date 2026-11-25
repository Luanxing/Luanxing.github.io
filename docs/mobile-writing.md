# 手机更新博客

入口：https://luanxing.github.io/admin/

编辑器：https://app.pagescms.org/

首次使用通过 GitHub 登录，安装 Pages CMS GitHub App，仅选择 Luanxing.github.io 仓库。进入仓库后选择 master 分支。这里的授权独立于 ChatGPT 的 GitHub 连接，需要仓库所有者首次操作。

## 写作与发布

1. 在「文章」中打开已有文章或新建文章。
2. 填写标题、文章日期、摘要和标签。
3. 在正文的图文编辑器中插入图片、写文字；可切换 Source 编辑 Markdown。
4. 保持「草稿」开启并保存，保存的是 GitHub 中的草稿文件。
5. 准备发布时关闭「草稿」并保存；GitHub Actions 自动构建、发布。

图片保存在 blog/public/images，正文引用路径以 /images/ 开头。使用随机文件名，避免手机照片重名覆盖。照片使用 JPG、PNG、WebP 等浏览器支持的格式；HEIC 请先转换。建议上传前将长边缩至约 2000px。

分享预览图用于转发链接时的预览；正文图片在编辑器中插入。原有文章的网址保持不变，已发布文章请避免重命名文件。

## 草稿与检查

公开仓库中的草稿和图片仍可以被访问；draft: true 只控制博客不生成文章页面、RSS 和搜索条目。第二篇立山开板准备文章继续保持草稿。

保存不代表部署已经成功。若博客未更新，请到仓库 Actions 检查 Build and publish Astro blog 是否完成。
