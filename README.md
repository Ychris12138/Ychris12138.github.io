# Rui Yang — Personal Homepage

This repository contains my personal academic homepage:

**https://ychris12138.github.io**

I use it to introduce my research, projects, publications, and open-source work. The site is bilingual (English / 中文) and built with React + Vite.

## Use it as a template

If you like the layout, feel free to reuse it for your own homepage.

```bash
git clone https://github.com/Ychris12138/Ychris12138.github.io.git
cd Ychris12138.github.io
npm install
npm run dev
```

Most personal information is kept in:

```text
src/data/content.js
```

You can replace the name, bio, research interests, projects, publications, contact information, and links there without changing the page structure.

For your own GitHub Pages site, rename the repository to:

```text
<your-github-username>.github.io
```

Then enable **GitHub Pages → GitHub Actions** in the repository settings. The included workflow in `.github/workflows/deploy.yml` will build and deploy the site automatically after pushes to `main`.

## Development

```bash
npm install
npm run dev
```

Build locally with:

```bash
npm run build
npm run preview
```

## Main files

```text
src/data/content.js              # Homepage content in English and Chinese
src/context/LanguageContext.jsx  # Language switching
src/components/                  # Page sections
.github/workflows/deploy.yml     # GitHub Pages deployment
```

If you build your homepage from this repository, a link back to this project is appreciated, but not required.
