# 花江安全 - 社团官网

> 桂林电子科技大学计算机与信息安全学院大学生科技协会 · 安全部  
> 官网地址：https://hjsec.github.io

---

## 项目简介

本项目是基于 [Accessible Astro Starter](https://github.com/incluud/accessible-astro-starter) 二次开发的安全社团官网，使用 Astro 6 构建，部署于 GitHub Pages。  
网站包含首页、关于我们、成员展示、招新页面、知识库等功能，所有内容均通过 Markdown/MDX 管理，无需后端。

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
1. 使用腾讯文档/Excel 创建表格，表头如下：
   ```
   id,name,image,bio,motto,grade,links
   ```
   - `id`：唯一标识（英文/拼音，用于网址）
   - `name`：显示名称（中文可）
   - `image`：头像文件名（如 `today.jpg`，图片放在 `public/img/` 下）
   - `bio`：一句话简介
   - `motto`：格言
   - `grade`：年级（如 `2025`，会自动分组）
   - `links`：链接，格式为 `类型:URL`，多个用英文逗号分隔（如 `github:https://..., blog:https://...`）

2. 成员填写后，导出为 **CSV 文件**（UTF-8 编码）。

3. 将头像图片放入 `public/img/`，文件名与表格 `id` 一致。

### 导入成员
在项目根目录运行：
```bash
node csv2mdx.mjs 成员.csv
```
脚本会自动在 `src/content/projects/` 下生成每个成员的 `.mdx` 文件，刷新页面即可看到新成员卡片。

---

## 部署

### 自动部署（GitHub Actions）
项目已配置好 `.github/workflows/deploy.yml`，每次推送 `main` 分支会自动构建并部署到 GitHub Pages。

**只需要确保仓库设置中 Pages 的部署源为 GitHub Actions。**

### 手动构建
```bash
npm run build
```
构建产物在 `dist/` 目录，可自行上传到任何静态服务器。

---

## 核心文件说明

| 文件/目录 | 作用 |
|-----------|------|
| `theme.config.ts` | 站点名称、导航菜单、主题颜色等全局配置 |
| `src/pages/index.astro` | 首页 |
| `src/pages/about.astro` | 关于我们页面 |
| `src/pages/contact.astro` | 加入我们页面 |
| `src/pages/portfolio/index.astro` | 成员列表页 |
| `src/pages/portfolio/[project].astro` | 成员详情页 |
| `src/pages/blog/` | 知识库页面（什么是 CTF、安全方向等） |
| `src/content/projects/` | 成员数据文件（由 CSV 导入生成） |
| `public/img/` | 头像、宣传照等静态图片 |
| `src/components/Footer.astro` | 页脚（版权、友链等） |
| `src/components/Hero.astro` | 首页大标题和按钮 |
| `csv2mdx.mjs` | 批量导入成员的 Node.js 脚本 |

**修改页面内容时，通常只需编辑对应的 `.astro` 文件或 `.md` 文章，不必改动布局组件。**

---

## 贡献与致谢

- 网站由 **步六孤** 创建并维护。
- 原主题：Accessible Astro Starter by [Incluud](https://incluud.dev)。
- 致敬所有开源贡献者 🧡

---

> 📅 本文档于 2026 年 6 月 23 日整理完成，至此往后，花江安全的故事由你续写。
