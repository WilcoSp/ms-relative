![License](https://img.shields.io/npm/l/ms-relative) [![npm](https://img.shields.io/npm/v/ms-relative?cv=0.0.5)](https://www.npmjs.com/package/ms-relative)
[![JSR](https://jsr.io/badges/@wilcosp/ms-relative?cv=0.0.5)](https://jsr.io/@wilcosp/ms-relative)
[![Vitest](https://github.com/wilcosp/ms-relative/actions/workflows/vitest.yml/badge.svg?cv=0.0.5)](https://github.com/wilcosp/ms-relative/actions/workflows/test.yml)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/ms-relative?color=green&cv=0.0.5)](https://bundlephobia.com/package/ms-relative)
[![GitHub Repo stars](https://img.shields.io/github/stars/wilcosp/ms-relative?style=flat&logo=github&color=green&cv=0.0.5)](https://github.com/WilcoSp/ms-relative)

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

Can only be used with least Node 16‎.6, Deno 1‎.12, Chrome/Edge 92, Firefox 90 & Safari 15‎.4.

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

-   Jsdelivr: https://cdn.jsdelivr.net/npm/ms-relative@0.0.5
-   Esm.sh: https://esm.sh/ms-relative@0.0.5
-   Unpkg: https://unpkg.com/ms-relative@0.0.5

# Examples

## Unit variables

All units are being exported

```ts
import { second, minute, hour, day, week, year } from "ms-relative" // for npm
// or
import { second, minute, hour, day, week, year  } from "@wilcosp/ms-relative" // for jsr
// or
import { second, minute, hour, day, week, year  } from `https://cdn.jsdelivr.net/npm/ms-relative@0.0.5

second // amount of ms in a second
minute // amount of ms in a minute
hour // amount of ms in an hour
day // amount of ms in a day
week // amount of ms in a week
year // average amount of ms in a year

```

## format

Format ms time to human readable string

```ts
import { format, day, second, year, week } from "ms-relative" // for npm
// or
import { format, day, second, year, week } from "@wilcosp/ms-relative" // for jsr
// or
import { format, day, second, year, week } from `https://cdn.jsdelivr.net/npm/ms-relative@0.0.5` // cdn (can also be esm.sh or unpkg)

format(1080003000, { style: "long", locale:  "en-US"}) => "5 days 3 seconds"
format(5 * day + 3 * second, { style: "long", locale:  "en-US"}) => "5 days 3 seconds"

format(489348000000, { style: "short", max: 2, locale: "en-US"}) => "6 yr. 10 wk."
format(year * 6 + 10 * week + 4 * day, { style: "short", max: 2, locale: "en-US"}) => "6 yr. 10 wk."
```

## formatList

similar to format but uses Intl.ListFormat to join the parts together

```ts
import { formatList, day, second, year, week } from "ms-relative" // for npm
// or
import { format, day, second, year, week } from "@wilcosp/ms-relative" // for jsr
// or
import { format, day, second, year, week } from `https://esm.sh/ms-relative@0.0.5` // cdn (can also be jsdelivr or unpkg)

formatList(1080003000, { relativeStyle: "long", listStyle: "long", locale:  "en-US"}) => "5 days and 3 seconds"
formatList(5 * day + 3 * second, { relativeStyle: "long", listStyle: "short", locale:  "en-US"}) => "5 days & 3 seconds"

formatList(489348000000, { relativeStyle: "short", listStyle: "short", max: 2, locale: "en-US"}) => "6 yr. & 10 wk."
formatList(year * 6 + 10 * week + 4 * day, { relativeStyle: "short", listStyle: "short", listType: "unit", max: 2, locale: "en-US"}) => "6 yr., 10 wk."
```

## parseToMs

Parse a human readable string to ms

(because ms isn't supported by relativeTimeFormat you need to leave out the unit to add ms)

```ts
import { parseToMs } from "ms-relative" // for npm
// or
import { parseToMs } from "@wilcosp/ms-relative" // for jsr
// or
import { parseToMs } from `https://esm.sh/ms-relative@0.0.5` // cdn (can also be jsdelivr or unpkg)

parseToMs("year 5 days 10 minutes", { locale: "en-US", style: "long" }) => 79_974_600_000

```

## msToMap & msToObject

Get a Map or object from a given time in ms with the keys being the unit types

```ts
import { msToMap, msToObject, year, minute } from "ms-relative"; // for npm
// or
import { msToMap, msToObject, year, minute } from "@wilcosp/ms-relative"; // for jsr
// or
import { msToMap, msToObject, year, minute } from "https://unpkg.com/ms-relative@0.0.5"; //cdn, can also be used with jsdelivr or esn.sh

msToMap(year * 6 + minute * 4) => Map([ ["year", 6], ["minute", 4] ])

msToObject(day * 5 + hour * 9 + second * 10, {max: 2}) => { day: 5,  hour: 9 }
```
