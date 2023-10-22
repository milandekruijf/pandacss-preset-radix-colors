export function keysToObj(keys: string[], value: any) {
  if (keys.length === 0) return value;

  const key = keys[0];
  const obj = keysToObj(keys.slice(1), value);

  return { [key]: obj };
}

export function isObject(value: any) {
  return value && typeof value === "object" && !Array.isArray(value);
}

export function mergeObjs(target: any, ...sources: any[]) {
  if (!sources.length) return target;

  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });

        mergeObjs(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeObjs(target, ...sources);
}
