import { useCallback, useEffect, useRef, useState } from "react";

const DEFAULT_DURATION = 3000;

/**
 * Auto-hiding toast state: show(title, description) displays the message for
 * `duration` milliseconds.
 */
export function useToast(duration = DEFAULT_DURATION) {
  const [toast, setToast] = useState(null);
  const timeoutRef = useRef(null);

  const hide = useCallback(() => {
    clearTimeout(timeoutRef.current);
    setToast(null);
  }, []);

  const show = useCallback(
    (title, description) => {
      clearTimeout(timeoutRef.current);
      setToast({ title, description });
      timeoutRef.current = setTimeout(() => setToast(null), duration);
    },
    [duration]
  );

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  return { toast, show, hide };
}
