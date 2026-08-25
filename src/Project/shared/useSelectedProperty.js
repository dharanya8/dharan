import { useEffect, useState } from "react";
import { getSelectedProperty } from "./storage";

/** The property the user last opened, restored from storage on mount. */
export function useSelectedProperty() {
  const [property, setProperty] = useState(null);

  useEffect(() => {
    setProperty(getSelectedProperty());
  }, []);

  return property;
}
