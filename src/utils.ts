import * as colors from "@radix-ui/colors";

/**
 * Get color tokens usable in PandaCSS's preset/config.
 */
export function getColorTokens() {
  const mappedData = getMappedData();
  return mergeObjectMap(mappedData, (x) => {
    let mappedScales = Object.entries(x.scales).map(([i, value]) => ({
      [i]: { value },
    }));
    mappedScales = objectListToObject(mappedScales);
    return keysToObjectWithValue(x.keys, mappedScales);
  });
}

/**
 * Same as map but merges the returned objects together.
 *
 * @param arr The objects to map
 * @param fn The function to map with
 * @returns The merged object
 */
export function mergeObjectMap<T>(arr: T[], fn: (v: T) => any) {
  return mergeObjects({}, ...arr.map(fn));
}

/**
 * Mapping the data we get from `@radix-ui/colors` into
 * something more usable for us.
 */
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

/**
 * Convert an array of objects to a single object. This
 * will also merge duplicate keys.
 *
 * @param list The list of objects to convert
 * @returns The object
 */
export function objectListToObject(list: any[]) {
  return Object.assign({}, ...list);
}

/**
 * Convert an array of keys to an object with the
 * given value used for the last object.
 *
 * @param keys The keys to convert to an object
 * @param value The value to use for the last object
 * @returns The object
 */
export function keysToObjectWithValue(keys: string[], value: any) {
  if (keys.length === 0) return value;
  const key = keys[0];
  const restKeys = keys.slice(1);
  const obj = keysToObjectWithValue(restKeys, value);
  return { [key]: obj };
}

/**
 * Check if a value is an object (`{}`)
 *
 * @param value The value to check
 * @returns If the value is an object
 */
export function isObject(value: any) {
  return value && typeof value === "object" && !Array.isArray(value);
}

/**
 * Convert a name to keys. This will split the name
 * by capital letters and numbers.
 *
 * @param name The name to convert to keys
 * @returns The keys
 */
export function nameToKeys(name: string) {
  return name.split(/(?=[A-Z0-9])/).map((key) => key.toLowerCase());
}

/**
 * Convert an array of keys to a path string, joining
 * them with a period (`.`).
 *
 * @param keys The keys to convert to a path
 * @returns The path string
 */
export function keysToPath(keys: string[]) {
  return keys.join(".");
}

/**
 * Merge objects together. This will merge objects
 * together recursively and merge duplicate keys.
 *
 * @param target The target object
 * @param sources The source objects
 * @returns The merged object
 */
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
