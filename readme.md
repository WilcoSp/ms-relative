![License](https://img.shields.io/npm/l/ms-relative) [![npm](https://img.shields.io/npm/v/ms-relative)](https://www.npmjs.com/package/ms-relative)
[![JSR](https://jsr.io/badges/@wilcosp/ms-relative)](https://jsr.io/@wilcosp/ms-relative)
[![Vitest](https://github.com/wilcosp/ms-relative/actions/workflows/test.yml/badge.svg)](https://github.com/wilcosp/ms-relative/actions/workflows/test.yml)

# ms-relative

Ms-relative is a new ms utility library build from the ground up that mines
[Intl.RelativeTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat) to be available in most languages/locales.

## Features

-   Mines [Intl.RelativeTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat) to be available in most languages/locales.
-   Treeshakable so you only bundle what you.
-   Modular so you can pick what you need & to get the smallest bundles from your favourite bundler. (esm only)
-   Available in both ESM & Commonjs (npm only)
-   Available on [NPM](https://www.npmjs.com/package/ms-relative), [JSR](https://jsr.io/@wilcosp/ms-relative) & your favorite js cdn
-   Bundled for browsers & commonjs
-   Most building blocks are exported, so you can get the result from a step earlier if wanted

## Note

Can only be used with least Node 16.6, Deno 1.12, Chrome/Edge 92, Firefox 90 & Safari 15.4.

## Install

### Via NPM

```
npm i ms-relative --save
pnpm add ms-relative
yarn add ms-relative
bun add ms-relative
```

### Via JSR

```
npx jsr add @wilcosp/ms-relative
yarn dlx jsr add @wilcosp/ms-relative
pnpm dlx jsr add @wilcosp/ms-relative
bunx jsr add @wilcosp/ms-relative
deno add @wilcosp/ms-relative
```

### Via cdn

-   Jsdelivr: https://cdn.jsdelivr.net/npm/ms-relative@{current version}
-   Esm.sh: https://esm.sh/ms-relative@{current version}
-   Unpkg: https://unpkg.com/ms-relative@{current version}

(replace {current version} with the current version of ms-relative, it's best to not use @latest)

# Examples

## format

Format ms time to human readable string

```ts
import { format } from "ms-relative" // for npm
// or
import { format } from "@wilcosp/ms-relative" // for jsr
// or
import { format } from `https://cdn.jsdelivr.net/npm/ms-relative@${current version}` // cdn (can also be esm.sh or unpkg)

format(1080003000, { style: "long", locale:  "en-US"}) => "5 days 3 seconds"
format(489348005000, { style: "short", max: 2, locale: "en-US") => "6 yr. 10 wk."
```

## parseToMs

Parse a human readable string to ms

(because ms isn't supported by relativeTimeFormat you need to leave out the unit to add ms)

```ts
import { parseToMs } from "ms-relative" // for npm
// or
import { parseToMs } from "@wilcosp/ms-relative" // for jsr
// or
import { parseToMs } from `https://esm.sh/ms-relative@${current version}` // cdn (can also be jsdelivr or unpkg)

parseToMs("year 5 days 10 minutes", { locale: "en-US", style: "long" }) => 79_974_600_000

```

// more example will be following
