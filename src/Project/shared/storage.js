export const STORAGE_KEYS = {
  isLoggedIn: "isLoggedIn",
  shortlist: "shortlist",
  selectedProperty: "selectedProperty",
  redirectAfterLogin: "redirectAfterLogin",
  recentSearches: "recentSearches",
};

export const APP_EVENTS = {
  loginStatusChanged: "loginStatusChanged",
  shortlistUpdated: "shortlistUpdated",
};

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    const parsed = JSON.parse(raw);
    return parsed === null ? fallback : parsed;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function emitAppEvent(name) {
  window.dispatchEvent(new Event(name));
}

export function isLoggedIn() {
  return localStorage.getItem(STORAGE_KEYS.isLoggedIn) === "true";
}

export function login() {
  localStorage.setItem(STORAGE_KEYS.isLoggedIn, "true");
  emitAppEvent(APP_EVENTS.loginStatusChanged);
}

export function logout() {
  localStorage.removeItem(STORAGE_KEYS.isLoggedIn);
  localStorage.removeItem(STORAGE_KEYS.shortlist);
  emitAppEvent(APP_EVENTS.loginStatusChanged);
  emitAppEvent(APP_EVENTS.shortlistUpdated);
}

export function getShortlist() {
  const list = readJson(STORAGE_KEYS.shortlist, []);
  return Array.isArray(list) ? list : [];
}

export function saveShortlist(list) {
  writeJson(STORAGE_KEYS.shortlist, list);
  emitAppEvent(APP_EVENTS.shortlistUpdated);
}

export function isShortlisted(list, item) {
  return list.some((p) => p.name === item.name);
}

/**
 * Adds the property when missing, removes it when present.
 * Returns { list, added } describing the result.
 */
export function toggleShortlistItem(item) {
  const existing = getShortlist();
  const added = !isShortlisted(existing, item);
  const list = added
    ? [...existing, item]
    : existing.filter((p) => p.name !== item.name);

  saveShortlist(list);
  return { list, added };
}

export function removeShortlistItem(list, name) {
  const updated = list.filter((item) => item.name !== name);
  saveShortlist(updated);
  return updated;
}

export function getSelectedProperty() {
  return readJson(STORAGE_KEYS.selectedProperty, null);
}

export function setSelectedProperty(item) {
  writeJson(STORAGE_KEYS.selectedProperty, item);
}

export function setRedirectAfterLogin(path) {
  localStorage.setItem(STORAGE_KEYS.redirectAfterLogin, path);
}

export function getRedirectAfterLogin() {
  return localStorage.getItem(STORAGE_KEYS.redirectAfterLogin);
}

export function getRecentSearches() {
  const list = readJson(STORAGE_KEYS.recentSearches, []);
  return Array.isArray(list) ? list : [];
}

export function saveRecentSearches(list) {
  writeJson(STORAGE_KEYS.recentSearches, list);
}
