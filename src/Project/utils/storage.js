const isPlainObjectKeyUnsafe = (key) =>
  key === "__proto__" || key === "constructor" || key === "prototype";

const stripUnsafeKeys = (value) => {
  if (Array.isArray(value)) return value.map(stripUnsafeKeys);
  if (value && typeof value === "object") {
    return Object.keys(value).reduce((acc, key) => {
      if (!isPlainObjectKeyUnsafe(key)) acc[key] = stripUnsafeKeys(value[key]);
      return acc;
    }, {});
  }
  return value;
};

export const readJson = (key, fallback = null) => {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    return stripUnsafeKeys(JSON.parse(raw));
  } catch {
    localStorage.removeItem(key);
    return fallback;
  }
};

export const readList = (key) => {
  const value = readJson(key, []);
  return Array.isArray(value) ? value : [];
};

export const writeJson = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage full or unavailable */
  }
};

export const removeItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch {
    /* storage unavailable */
  }
};
