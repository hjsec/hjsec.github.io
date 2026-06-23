# 花江安全 (HJSec) - 社团官网

> 桂林电子科技大学计算机与信息安全学院大学生科技协会 · 安全部  
> 🌐 官网地址：https://hjsec.github.io  
> 📅 项目创建：2026.06.18 · 文档整理：2026.06.23

---

## 项目简介

本项目是**花江安全**（原科协安全部）的社团官方网站，基于 [Accessible Astro Starter](https://github.com/incluud/accessible-astro-starter) 二次开发。  
网站包含首页、关于我们、成员展示、招新页面、知识库等功能，所有内容通过 Markdown / MDX 管理，无需后端数据库。

**技术栈：** Astro 6、Node.js、GitHub Pages、Docker (可选)。  
**核心设计理念：** 静态生成（SSG）、响应式布局、无障碍访问、极简维护。

---

## 快速上手

### 1. 克隆项目
```bash
git clone git@github.com:hjsec/hjsec.github.io.git
cd hjsec.github.io
```

### 2. 安装依赖
```bash
npm install
```

### 3. 本地预览
```bash
npm run dev
```
浏览器打开 `http://localhost:4321` 即可实时预览，修改代码会自动刷新。

---

## 成员管理

### 收集信息
1. 使用腾讯文档 / Excel 创建表格，表头如下：
   ```
   id,name,image,bio,motto,grade,links
   ```
   - `id`：唯一标识（英文/拼音，用于网址和文件名）
   - `name`：显示名称（中文可）
   - `image`：头像文件名（如 `today.jpg`，图片放在 `public/img/` 下）
   - `bio`：一句话简介
   - `motto`：格言（选填）
   - `grade`：年级（如 `2025`，会自动按年级分组）
   - `links`：个人链接，格式 `类型:URL`，多个用英文逗号分隔  
     示例：`github:https://github.com/todaymvp, blog:https://todaymvp.github.io`

2. 成员填写后，导出为 **CSV 文件**（UTF-8 编码，逗号分隔）。

3. 将头像图片放入 `public/img/`，文件名与表格 `id` 一致（如 `today.jpg`）。

### 批量导入成员
在项目根目录运行：
```bash
node csv2mdx.mjs 成员.csv
```
脚本会自动在 `src/content/projects/` 下生成每个成员的 `.mdx` 文件。  
刷新页面即可看到新成员卡片，按年级分组排列。

> 💡 `.mdx` 文件 = YAML 头部（结构化信息）+ Markdown 正文（个人介绍），可以直接编辑。

---

## 部署

### 自动部署（GitHub Actions）
项目已配置好 `.github/workflows/deploy.yml`，每次推送 `main` 分支会自动构建并部署到 GitHub Pages。  
**仓库 Settings → Pages → Build and deployment → 选择 GitHub Actions。**

### 手动构建
```bash
npm run build
```
构建产物在 `dist/` 目录，可自行上传到任何静态服务器（如 Nginx、Docker 容器）。

### 服务器 Docker 测试
```bash
docker run --rm -it -v $PWD:/app -w /app -p 8060:4321 node:22-alpine sh -c "npm ci && npm run dev -- --host"
```

---

## 核心文件清单

| 文件 / 目录 | 作用 |
|-------------|------|
| `theme.config.ts` | **站点全局配置**：名称、导航菜单、主题颜色、SEO 信息 |
| `src/pages/index.astro` | 首页（Hero + 宣传图 + 特色卡片） |
| `src/pages/about.astro` | 关于我们（社团介绍、方向、资源） |
| `src/pages/contact.astro` | 加入我们（招新信息、靶场、QQ 群） |
| `src/pages/portfolio/index.astro` | 成员列表页（按年级分组） |
| `src/pages/portfolio/[project].astro` | 成员详情页（个人空间） |
| `src/pages/blog/` | 知识库页面（什么是 CTF、安全方向、学习路线等） |
| `src/content/projects/` | **成员数据**（.mdx 文件，由 CSV 导入生成） |
| `public/img/` | 头像、宣传照、Logo 等静态图片 |
| `public/robots.txt` | 搜索引擎爬虫规则 |
| `src/components/Footer.astro` | 页脚（版权、友链、资源中心） |
| `src/components/Hero.astro` | 首页大标题和按钮 |
| `src/assets/scss/_optimized-pages.scss` | 自定义样式（卡片、格言特效、移动端优化） |
| `csv2mdx.mjs` | **批量导入成员的 Node.js 脚本** |
| `astro.config.mjs` | Astro 构建配置（站点地址、插件等） |
| `README.md` | 项目文档（本文件） |

**修改页面内容时，通常只需编辑对应的 `.astro` 文件或 `.md` 文章，不必改动布局组件。**

---

## 技术说明 & 开发经验

### 为什么选择 Astro 而不是 Hugo / Quartz？
- **Quartz 4**：适合个人博客（基于 Hugo），但官网需要更灵活的布局，魔改成本高。
- **Hugo**：单二进制文件，极快，但 Go Template 语法古老，学习曲线陡峭，适合文档站。
- **Astro**：现代静态生成器，组件化开发，原生支持 Markdown 和 MDX，可自由控制 HTML/CSS，非常适合需要成员展示和自定义布局的社团官网。

### 什么是 MDX？和 Markdown 有什么区别？
- **Markdown (.md)**：纯文本标记语言，适合写文章。
- **MDX (.mdx)**：Markdown + JSX 组件 + YAML Frontmatter。  
  我们用它来存储成员信息：**YAML 头部**写 id、格言、链接等结构化数据，**Markdown 正文**写个人介绍。

### CSV 导入原理
`csv2mdx.mjs` 使用 `csv-parse` 库解析 CSV，并自动生成符合 Astro 内容集合规范的 `.mdx` 文件。  
路径、年级标签、空链接等边界情况均已处理。  
**注意**：CSV 中若字段含逗号，必须用英文双引号包裹；中文字段也要用双引号，避免编码问题。

### 样式调整注意事项
- 谨慎修改全局 SCSS（`_optimized-pages.scss`），容易引发样式覆盖和缓存问题。
- 页面内联样式（`style="..."`）优先级最高，适合临时微调。
- 主题自带颜色变量（`--color-primary` 等），尽量使用变量以保证暗色模式兼容。

### 浏览器兼容性 & 缓存
- 修改后如果页面没变化，先尝试硬刷新 (`Ctrl+Shift+R`) 或打开无痕窗口测试。
- 开发服务器 (`npm run dev`) 支持热更新，但极端情况下需手动清除 `.astro` 缓存目录。

---

## 贡献与致谢

- 网站由 **步六孤** 创建并维护，基于 [Accessible Astro Starter](https://github.com/incluud/accessible-astro-starter) 二次开发。
- 原主题作者：[Incluud](https://incluud.dev) · 致敬所有开源贡献者 🧡

---

> 📅 本文档于 2026 年 6 月 23 日整理完成。  
> 花江安全的故事，由你续写。