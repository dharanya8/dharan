import { useCallback, useState } from "react";
import { getShortlist, isShortlisted, toggleShortlistItem } from "./storage";

/**
 * Shortlist state for property cards.
 * onToggle receives true when the property was added, false when removed.
 */
export function useShortlist(onToggle) {
  const [shortlist, setShortlist] = useState(getShortlist);

  const toggle = useCallback(
    (item) => {
      const { list, added } = toggleShortlistItem(item);
      setShortlist(list);
      if (onToggle) onToggle(added);
    },
    [onToggle]
  );

  const contains = useCallback(
    (item) => isShortlisted(shortlist, item),
    [shortlist]
  );

  return { shortlist, toggle, contains };
}
