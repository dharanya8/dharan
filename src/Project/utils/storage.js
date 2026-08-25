// Wrappers around localStorage that keep storage failures (disabled storage,
// quota errors, corrupt JSON) from breaking rendering, while still surfacing
// them on the console instead of swallowing them silently.

export function readItem(key, fallback = null) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw === null ? fallback : raw;
  } catch (error) {
    console.error(`localStorage: failed to read "${key}"`, error);
    return fallback;
  }
}

export function readJSON(key, fallback = null) {
  let raw;
  try {
    raw = window.localStorage.getItem(key);
  } catch (error) {
    console.error(`localStorage: failed to read "${key}"`, error);
    return fallback;
  }

  if (raw === null) return fallback;

  try {
    const parsed = JSON.parse(raw);
    return parsed === null ? fallback : parsed;
  } catch (error) {
    console.error(`localStorage: corrupt JSON in "${key}", discarding it`, error);
    removeItem(key);
    return fallback;
  }
}

export function readArray(key) {
  const value = readJSON(key, []);
  return Array.isArray(value) ? value : [];
}

export function writeItem(key, value) {
  try {
    window.localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.error(`localStorage: failed to write "${key}"`, error);
    return false;
  }
}

export function writeJSON(key, value) {
  let raw;
  try {
    raw = JSON.stringify(value);
  } catch (error) {
    console.error(`localStorage: failed to serialize value for "${key}"`, error);
    return false;
  }
  return writeItem(key, raw);
}

export function removeItem(key) {
  try {
    window.localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(`localStorage: failed to remove "${key}"`, error);
    return false;
  }
}
