[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

# Radix Colors preset for PandaCSS

Brings [Radix Colors](https://www.radix-ui.com/colors) to [PandaCSS](https://panda-css.com/)

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
    // Re-add the base and panda presets because otherwise
    // they will be removed entirely
    "@pandacss/preset-base",
    "@pandacss/preset-panda",
  ],
});
```

## Options

### Dark mode

You can add dark mode support by setting `darkMode` to `true`. The default condition has been set to `.dark &`, which can be changed as shown below

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

And then you can conditionally style for dark mode using the `_dark` modifier. [Learn more](https://panda-css.com/docs/concepts/conditional-styles)

```ts
// Also works with cva or config recipes
css({
  color: "slate.1",
  // Overwrite the color when the mode is set to dark
  _dark: {
    color: "slate.11",
  },
});
```

## Attributions

- [Radix](https://github.com/radix-ui) team for creating the wonderfully crafted colors
- [Chakra](https://github.com/chakra-ui) team for creating PandaCSS

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
