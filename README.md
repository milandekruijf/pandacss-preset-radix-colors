[![Downloads][npm-shield]][npm-url]
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

# 🐼 PandaCSS preset for Radix Colors

Brings [Radix Colors](https://www.radix-ui.com/colors) to [🐼 PandaCSS](https://panda-css.com/)

## Installation

```bash
npm install --save-dev pandacss-preset-radix-colors @radix-ui/colors
```

## Usage

Add the preset to your PandaCSS configuration (`panda.config.ts`)

```ts
import { defineConfig } from "@pandacss/dev";

// Import the preset. The name can be anything you want
import radixColorsPreset from "pandacss-preset-radix-colors";

export default defineConfig({
  presets: [
    radixColorsPreset(),
    // Re-add the panda preset if you want to keep
    // the default keyframes, breakpoints, tokens
    // and textStyles provided by PandaCSS
    "@pandacss/preset-panda",
  ],
});
```

### Good to know

The tokens have a different format than you would probably expect. All color names are split up on every capital letter and number, so you would get token paths such as `slate.dark.a.1`, `slate.a.1` and `slate.1` instead of `slateDarkA1`, `slateA1` and `slate1`.

## Options

### Dark mode

You can add dark mode support by setting `darkMode` to `true`. The default condition has been set to `.dark &`, which can be changed as shown below. [Learn more about conditions here](https://panda-css.com/docs/customization/conditions).

```ts
...
presets: [
  radixColorsPreset({
    darkMode: true,
    // darkMode: {
    //   condition: ".dark &"
    // }
  }),
],
```

Using base colors such as `slate.1` or `slate.a.1` would turn into `slate.dark.1` and `slate.dark.a.1` automatically when your condition is met. A new `light` variant (such as `slate.light.1`) will be added as well that can be used to keep a shade light no matter the dark condition.

## Attributions

- [Radix](https://github.com/radix-ui) team for creating the wonderfully crafted colors
- [Chakra](https://github.com/chakra-ui) team for creating [🐼 PandaCSS](https://panda-css.com/)

[contributors-shield]: https://img.shields.io/github/contributors/milandekruijf/pandacss-preset-radix-colors.svg?style=for-the-badge
[contributors-url]: https://github.com/milandekruijf/pandacss-preset-radix-colors/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/milandekruijf/pandacss-preset-radix-colors.svg?style=for-the-badge
[forks-url]: https://github.com/milandekruijf/pandacss-preset-radix-colors/network/members
[stars-shield]: https://img.shields.io/github/stars/milandekruijf/pandacss-preset-radix-colors.svg?style=for-the-badge
[stars-url]: https://github.com/milandekruijf/pandacss-preset-radix-colors/stargazers
[issues-shield]: https://img.shields.io/github/issues/milandekruijf/pandacss-preset-radix-colors.svg?style=for-the-badge
[issues-url]: https://github.com/milandekruijf/pandacss-preset-radix-colors/issues
[license-shield]: https://img.shields.io/github/license/milandekruijf/pandacss-preset-radix-colors.svg?style=for-the-badge
[license-url]: https://github.com/milandekruijf/pandacss-preset-radix-colors/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/milandekruijf
[npm-shield]: https://img.shields.io/npm/dw/pandacss-preset-radix-colors?style=for-the-badge
[npm-url]: https://www.npmjs.com/package/pandacss-preset-radix-colors
