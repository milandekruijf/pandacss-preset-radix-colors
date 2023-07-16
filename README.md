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

- [Radix UI](https://github.com/radix-ui) team for creating the wonderfully crafted colors
- [Chakra](https://chakra-ui.com/) team for creating PandaCSS
