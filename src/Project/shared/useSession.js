import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  APP_EVENTS,
  getShortlist,
  isLoggedIn as readLoginStatus,
  logout as clearSession,
} from "./storage";

/**
 * Login status and shortlist count kept in sync with the app storage events,
 * plus a logout handler that returns the user to the home page.
 */
export function useSession() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(readLoginStatus);
  const [shortlistCount, setShortlistCount] = useState(0);

  useEffect(() => {
    const handleLoginChange = () => setIsLoggedIn(readLoginStatus());
    window.addEventListener(APP_EVENTS.loginStatusChanged, handleLoginChange);
    return () => {
      window.removeEventListener(APP_EVENTS.loginStatusChanged, handleLoginChange);
    };
  }, []);

  useEffect(() => {
    const updateCount = () => setShortlistCount(getShortlist().length);
    updateCount();
    window.addEventListener(APP_EVENTS.shortlistUpdated, updateCount);
    return () => {
      window.removeEventListener(APP_EVENTS.shortlistUpdated, updateCount);
    };
  }, []);

  const logout = useCallback(() => {
    clearSession();
    navigate("/");
  }, [navigate]);

  return { isLoggedIn, shortlistCount, logout };
}
