# 杨锐的个人主页 / Rui Yang's Homepage

基于 React + Vite 的中英双语学术个人主页，内容根据杨锐的简历和 GitHub 公开仓库整理。页面支持自动识别浏览器语言、手动切换中英文，并记住访客的语言选择。

A bilingual academic homepage built with React and Vite. Content is based on Rui Yang's CV and public GitHub repositories. The site detects the browser language, supports manual Chinese/English switching, and remembers the visitor's choice.

## 本地运行 / Local development

```bash
npm install
npm run dev
```

构建和预览生产版本：

```bash
npm run build
npm run preview
```

## 内容来源与隐私 / Content and privacy

- 姓名、教育背景、研究方向、科研项目与论文来自当前简历。
- 开源项目名称、链接和介绍依据 [Ychris12138 的 GitHub 主页](https://github.com/Ychris12138)及仓库 README。
- 页面只公开 GitHub 上已有的学校邮箱；未加入手机号。
- 当前没有公开简历 PDF，因为原始简历含手机号。发布脱敏版本后，可将文件放入 `public/` 并在 `src/data/content.js` 中填写 `resumeUrl`。

页面文案集中在 `src/data/content.js`，语言状态位于 `src/context/LanguageContext.jsx`。

## 发布为 GitHub 个人主页 / Deploy to GitHub Pages

项目已经包含 `.github/workflows/deploy.yml`。该工作流会在每次推送到 `main` 后构建 Vite 项目并部署到 GitHub Pages。

### 第一次发布

1. 登录 GitHub，新建一个公开仓库，仓库名必须是 `Ychris12138.github.io`。不要添加 README、`.gitignore` 或 License，保持空仓库。
2. 在本项目目录运行：

   ```bash
   git init
   git add .
   git commit -m "feat: publish bilingual personal homepage"
   git branch -M main
   git remote add origin https://github.com/Ychris12138/Ychris12138.github.io.git
   git push -u origin main
   ```

3. 打开仓库的 `Settings` -> `Pages`，在 `Build and deployment` 中将 `Source` 设为 `GitHub Actions`。
4. 打开仓库的 `Actions` 页面，等待 `Deploy to GitHub Pages` 工作流成功。
5. 访问 <https://ychris12138.github.io>。

### 以后更新

```bash
git add .
git commit -m "content: update homepage"
git push
```

推送后 GitHub Actions 会自动重新发布。

## Project structure

```text
github-homepage/
├── .github/workflows/deploy.yml  # GitHub Pages deployment
├── public/                       # Static assets
├── src/
│   ├── components/               # Page sections
│   ├── context/LanguageContext.jsx
│   ├── data/content.js           # Chinese and English content
│   ├── App.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```
