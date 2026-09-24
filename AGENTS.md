# Repository Guidelines

## プロジェクト構成とモジュール

本リポジトリは React、TypeScript、Vite、Tailwind CSS による静的ポートフォリオです。アプリケーションの起点は `src/app/`（`main.tsx`、`App.tsx`、共通スタイル）に置きます。

画面セクションは Feature-Driven Architecture に従い、`src/features/<feature>/` に配置します。各 feature 内で `components/` と `data/` を完結させてください。例: `src/features/works/components/Works.tsx`、`src/features/works/data/projects.ts`。

feature に依存しないコードは `src/shared/` に置きます。再利用UIは `components/`、サイト共通データは `data/`、型定義は `types/` です。変更せず配信する静的ファイルは `public/`、GitHub Pages のワークフローは `.github/workflows/deploy.yml` にあります。生成物の `dist/` は編集しません。

## 開発・ビルドコマンド

- `npm install`：ロックされた依存関係をインストールします。
- `npm run dev`：Vite の開発サーバーを起動します。
- `npm run build`：TypeScript の検査後、`dist/` に本番用ファイルを出力します。
- `npm run preview`：ビルド済みの `dist/` をローカルで確認します。

プルリクエスト前には必ず `npm run build` を実行してください。現時点でテストランナーは未導入です。複雑なロジックを追加する際は、テスト基盤と対象機能のテストを同時に追加します。

## コーディング規約

TypeScript と関数コンポーネントを使用します。既存コードに合わせ、インデントは2スペース、文字列はシングルクォート、セミコロンは省略します。コンポーネント名・ファイル名は PascalCase（`ProjectCard.tsx`）、データ・ヘルパーは camelCase（`projects.ts`）にしてください。

スタイリングは Tailwind のユーティリティクラスを使います。グローバルCSSと Tailwind の読み込みは `src/app/styles/index.css` に限定し、`style` 属性は避けます。プロフィールや実績の内容はコンポーネントに直書きせず、対応する `data/` ファイルで管理します。

## アーキテクチャと設定

feature は `shared` を参照できますが、`shared` から feature を参照してはいけません。新しいセクションは `src/features/<name>/components/<Name>.tsx` として追加し、`src/app/App.tsx` から組み込みます。

`vite.config.ts` の `base` は GitHub Pages 用に `/portfolio/` です。リポジトリ名を変更する場合は、この値と README の公開URLを併せて更新してください。

## コミットとプルリクエスト

履歴には `first commit` のような短い命令形のメッセージがあります。以後は変更内容が分かる `Add contact section`、`Fix mobile navigation spacing` のような形式を使い、コミットは目的ごとに小さく保ちます。

プルリクエストには、ユーザーに見える変更内容、関連Issue（ある場合）、`npm run build` の成功確認を記載します。見た目を変更した場合はスクリーンショットも添付してください。
