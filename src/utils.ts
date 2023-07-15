import * as colors from "@radix-ui/colors";

export function getColorTokens() {
  const mappedData = getMappedData();

  return mergeMap(mappedData, (x) => {
    let mappedScales = Object.entries(x.scales).map(([i, value]) => ({
      [i]: { value },
    }));
    mappedScales = objectListToObject(mappedScales);

    return keysToObjectWithValue(x.keys, mappedScales);
  });
}

export function mergeMap<T>(arr: T[], fn: (v: T) => any) {
  return mergeObjects({}, ...arr.map(fn));
}

export function getMappedData() {
  return Object.entries(colors).map(([name, scales]) => {
    const keys = nameToKeys(name);
    const path = keysToPath(keys);

    // Derive name from keys because first
    // index is always the full name without
    // all the extras (dark, a)
    name = keys[0];

    // Get if color is a dark or alpha variant
    const dark = keys.includes("dark");
    const alpha = keys.includes("a");

    // Map the scale values to the index of the
    // scale they are in. This works because
    // radix indexes their colors from 1 to 12
    let mappedScales = Object.values(scales).map((shade, i) => ({
      [i + 1]: shade,
    }));
    mappedScales = objectListToObject(mappedScales);

    return { name, keys, path, dark, alpha, scales: mappedScales };
  });
}

export function objectListToObject(list: any[]) {
  return Object.assign({}, ...list);
}

export function keysToObjectWithValue(keys: string[], value: any) {
  if (keys.length === 0) return value;

  const key = keys[0];
  const restKeys = keys.slice(1);
  const obj = keysToObjectWithValue(restKeys, value);

  return { [key]: obj };
}

export function isObject(value: any) {
  return value && typeof value === "object" && !Array.isArray(value);
}

export function nameToKeys(name: string) {
  return name.split(/(?=[A-Z0-9])/).map((key) => key.toLowerCase());
}

export function keysToPath(keys: string[]) {
  return keys.join(".");
}

export function mergeObjects(target: any, ...sources: any[]) {
  if (!sources.length) return target;

  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });

        mergeObjects(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeObjects(target, ...sources);
}
