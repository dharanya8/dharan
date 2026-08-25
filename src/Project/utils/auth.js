import { readJson, removeItem, writeJson } from "./storage";

const SESSION_KEY = "session";
const SESSION_TTL_MS = 60 * 60 * 1000;

export const OTP_TTL_MS = 5 * 60 * 1000;
export const OTP_MAX_ATTEMPTS = 5;

export const isLoggedIn = () => {
  const session = readJson(SESSION_KEY);
  if (!session || typeof session.expiresAt !== "number") return false;
  if (session.expiresAt <= Date.now()) {
    removeItem(SESSION_KEY);
    return false;
  }
  return true;
};

export const startSession = () => {
  writeJson(SESSION_KEY, { expiresAt: Date.now() + SESSION_TTL_MS });
  window.dispatchEvent(new Event("loginStatusChanged"));
};

export const endSession = () => {
  removeItem(SESSION_KEY);
  window.dispatchEvent(new Event("loginStatusChanged"));
};

// Placeholder for a server-issued OTP: the code must be generated and verified
// by the backend and delivered out of band once an SMS provider is wired up.
export const generateOtp = () => {
  const buffer = new Uint32Array(1);
  crypto.getRandomValues(buffer);
  return (100000 + (buffer[0] % 900000)).toString();
};

export const normalizeMobile = (value) => value.replace(/\D/g, "").slice(0, 15);

export const isValidMobile = (value) => /^\d{6,15}$/.test(value);

// Only same-origin, non protocol-relative paths may be used as a redirect
// target, so a crafted value cannot bounce the user to an external site.
export const safeRedirectPath = (value, fallback = "/") => {
  if (typeof value !== "string") return fallback;
  if (!value.startsWith("/") || value.startsWith("//")) return fallback;
  return value;
};
