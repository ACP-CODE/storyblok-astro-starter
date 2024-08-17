# Astro Starter Kit: Storyblok

```sh
npm create astro@latest -- --template ACP-CODE/storyblok-astro-starter
```

## 🚀 项目结构

在您的 Astro 项目中，您将看到以下文件夹和文件：

```text
/
├── config/
│   ├── integrations/
│   │   ├── index.js
│   │   ├── robots.js
│   │   ├── sitemap.js
│   │   └── storyblok.js
│   ├── ssr/
│   │   ├── cloudflare/
│   │   ├── netlify/
│   │   ├── node/
│   │   └── vercel/
│   ├── index.js
│   └── vite.config.js
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BaseHead.astro
│   │   └── Card.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── package.json
├── postcss.config.cjs
├── tsconfig.json
└── wrangler.toml
```

Astro 在 `src/pages/` 目录中查找 `.astro` 或 `.md` 文件。每个页面都根据其文件名显示为一个路由。

`src/components/` 没有什么特别的，但我们喜欢将任何 Astro/React/Vue/Svelte/Preact 组件放在那里。

任何静态资产（如图像）都可以放在 `public/` 目录中。

## ✨ Upgrade

要升级现有项目，请使用自动化的 `@astrojs/upgrade CLI` 工具。或者，通过运行包管理器的升级命令来手动升级：

```sh
# Recommended:
npx @astrojs/upgrade

# Manual:
npm install astro@latest
pnpm upgrade astro --latest
yarn upgrade astro --latest
```

## 🛠 Configration

### `.env`

使用模版 `.env.example` 创建 `.env` 与 `.env.production` 文件。

```yaml
# SITE CONFIG
SITE_URL=<YOUR_SITE_URL>

# STORYBLOK CONFIG
STORYBLOK_TOKEN=<YOUR_STORYBLOK_TOKEN>
```

### `ssl:https`

```sh
mkcert -key-file localhost-key.pem -cert-file localhost.pem localhost 127.0.0.1 ::1
```

> **可选:**
>
> ```sh
> local-ssl-proxy --source 3000 --target 4321 --cert localhost.pem --key localhost-key.pem
> ```

## 🌏 SSR Adapters

首选 `@astrojs/vercel` , `@astrojs/cloudflare` 与 `@astrojs/node` (适合自己部署)。而 `@astrojs/netlify` 配置相对复杂，具体参见。

> - `vercel` 支持 [vercel 网络分析](https://vercel.com/docs/analytics) ，[vercel 图像优化](https://vercel.com/docs/image-optimization)
> - `cloudflare` 提供 CDN、网络安全和其他服务。

<details>
<summary>@astrojs/<b>cloudflare</b></summary>
</details>

<details>
<summary>@astrojs/<b>netlify</b></summary>
</details>

<details>
<summary>@astrojs/<b>node</b></summary>
</details>

<details>
<summary>@astrojs/<b>vercel</b></summary>
</details>

## 🧞 Commands

所有命令都从项目根目录的终端运行：

| Command                      | Action                                           |
| :--------------------------- | :----------------------------------------------- |
| `npm install`                | Installs dependencies                            |
| `npm run dev`                | Starts local dev server at `localhost:4321`      |
| `npm run build`              | Build your production site to `./dist/`          |
| `npm run preview`            | Preview your build locally, before deploying     |
| `npm run astro ...`          | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help`    | Get help using the Astro CLI                     |
| `npm run preview:cloudflare` | Preview with `wrangler`                          |

## 👨‍💻 Deploy

<details>
<summary>@astrojs/<b>cloudflare</b></summary>
</details>

<details>
<summary>@astrojs/<b>netlify</b></summary>
</details>

<details>
<summary>@astrojs/<b>node</b></summary>
</details>

<details>
<summary>@astrojs/<b>vercel</b></summary>
</details>

## Is npm downloading dependencies too slow? Switch and set up mirror sources!

1. 查看当前镜像源

```sh
npm config get registry
```

2. 设置镜像源

```sh
npm config set registry https://registry.npmmirror.com/
```

3. 删除镜像(删除淘宝镜像，恢复默认镜像)

```sh
npm config delete registry https://registry.npm.taobao.org
```

> 默认镜像源: https://registry.npmjs.org

## 👀 Want to learn more?

欢迎随时查看[官方文档](https://docs.astro.build) 或进入Astro 官方[Discord 服务器](https://astro.build/chat) 探讨。
