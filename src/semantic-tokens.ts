import { slate, slateDark, slateDarkP3, slateP3 } from "@radix-ui/colors";
import { getScales } from "./radix-colors";
import { keysToObj, mergeObjs } from "./utils";

export function getSemanticTokens(darkMode?: boolean) {
  const scales = getScales();

  return {
    slate: {
      light: {
        1: {
          value: {
            base: slate.slate1,
            _p3: "{colors.slate.light.p3.1}",
          },
        },
        p3: {
          1: {
            value: slateP3.slate1,
          },
        },
      },
      dark: {
        1: {
          value: {
            base: slateDark.slate1,
            _p3: "{colors.slate.dark.p3.1}",
          },
        },
        p3: {
          1: {
            value: slateDarkP3.slate1,
          },
        },
      },
      1: {
        value: {
          base: `{colors.slate.light.1}`,
          _dark: `{colors.slate.dark.1}`,
        },
      },
    },
  };
}

// // TODO: Maybe clean up a little bit, it's hard to read.
// export function getSemanticTokens(darkMode?: boolean) {
//   const scales = getScales(darkMode);

//   return mergeObjs(
//     {},
//     ...scales
//       .filter((scale) => !scale.dark)
//       .map((scale) => {
//         // Remove the 'light' tag because otherwise it will be used
//         // for the semantic token, and we want it to be neutral.
//         const tagIndex = scale.tags.indexOf("light");
//         if (tagIndex !== -1) scale.tags.splice(tagIndex, 1);

//         // Find a dark scale with the exact same properties as the
//         // current scale, tanking in account the name, alpha and p3.
//         const darkScale = scales.find(
//           (x) =>
//             x.name === scale.name &&
//             x.alpha === scale.alpha &&
//             x.p3 === scale.p3 &&
//             x.dark
//         );

//         if (!darkScale) return null;

//         return keysToObj(
//           scale.tags,
//           Object.assign(
//             {},
//             ...Object.entries(scale.shades).map(([i, value]) => ({
//               [i]: {
//                 value: {
//                   base: `{colors.${scale.path}.${i}}`,
//                   _dark: `{colors.${darkScale.path}.${i}}`,
//                 },
//               },
//             }))
//           )
//         );
//       })
//       .filter(Boolean)
//   );
// }
