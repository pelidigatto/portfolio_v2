"use client";

import { useState, useEffect } from "react";

export function useSessionStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const item = window.sessionStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      } else {
        window.sessionStorage.setItem(key, JSON.stringify(initialValue));
      }
    } catch (error) {
      console.error("Error reading sessionStorage:", error);
    }
  }, [initialValue, key]);

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error("Error writing sessionStorage:", error);
    }
  };

  return [storedValue, setValue] as const;
}
