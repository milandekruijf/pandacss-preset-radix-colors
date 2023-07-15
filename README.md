# Radix Colors preset for PandaCSS

Brings [Radix Colors](https://www.radix-ui.com/colors) to [PandaCSS](https://panda-css.com/)

## Installation

```bash
npm install --save-dev pandacss-preset-radix-colors
```

## Usage

Add the preset to your PandaCSS configuration (`panda.config.ts`)

```ts
import { defineConfig } from "@pandacss/dev";
import radixColorsPreset from "pandacss-preset-radix-colors";

export default defineConfig({
  presets: [radixColorsPreset()],
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

## Attributions

- [Radix UI](https://github.com/radix-ui) team for creating the wonderfully crafted colors
- [Chakra](https://chakra-ui.com/) team for creating PandaCSS
