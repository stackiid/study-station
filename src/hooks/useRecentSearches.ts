import { useCallback, useState } from "react";
import { readLocalStorage, writeLocalStorage } from "../utils/helpers";

const STORAGE_KEY = "studystation:recent-searches";
const MAX_ENTRIES = 6;

export function useRecentSearches() {
  const [recent, setRecent] = useState<string[]>(() =>
    readLocalStorage(STORAGE_KEY, []),
  );

  const addSearch = useCallback((term: string) => {
    const trimmed = term.trim();
    if (trimmed.length < 2) return;

    setRecent((previous) => {
      const next = [
        trimmed,
        ...previous.filter(
          (entry) => entry.toLowerCase() !== trimmed.toLowerCase(),
        ),
      ].slice(0, MAX_ENTRIES);
      writeLocalStorage(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const clearSearches = useCallback(() => {
    setRecent([]);
    writeLocalStorage(STORAGE_KEY, []);
  }, []);

  return { recent, addSearch, clearSearches };
}
