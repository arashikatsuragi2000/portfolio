# Portfolio

React + TypeScript + Vite + Tailwind CSS で作成したポートフォリオサイトです。

## Development

```bash
npm install
npm run dev
```

## Content

プロフィールとリンクは `src/shared/data/profile.ts`、実績は `src/features/works/data/projects.ts`、経歴は `src/features/experience/data/career.ts` を編集してください。

## Deploy to GitHub Pages

`main` ブランチへの push でGitHub Actionsが自動的に公開します。初回のみ、GitHubリポジトリの **Settings → Pages → Build and deployment → Source** を **GitHub Actions** に設定してください。

このリポジトリ名が `portfolio` の場合、公開先は `https://arashikatsuragi2000.github.io/portfolio/` です。リポジトリ名を変更する場合は、`vite.config.ts` の `base` も同じ名前に変更してください。
