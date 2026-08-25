import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedIn, setRedirectAfterLogin, setSelectedProperty } from "./storage";

const VIEW_PATH = "/viewcard";

/**
 * Opens a property detail page, asking the visitor to log in first when needed.
 * `onRequireLogin` is called instead of navigating for logged out visitors.
 */
export function useOpenProperty(onRequireLogin) {
  const navigate = useNavigate();

  return useCallback(
    (item) => {
      setSelectedProperty(item);

      if (isLoggedIn()) {
        navigate(VIEW_PATH);
        return;
      }

      setRedirectAfterLogin(VIEW_PATH);
      if (onRequireLogin) onRequireLogin();
    },
    [navigate, onRequireLogin]
  );
}
