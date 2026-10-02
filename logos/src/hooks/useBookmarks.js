import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'logos:bookmarks';

/** Reads saved IDs; storage can throw in private mode or be corrupted, so fail soft. */
function readStoredIds() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/**
 * Offline bookmarks persisted to localStorage as an array of card IDs.
 * IDs are compared as strings so numeric seed IDs and Supabase IDs
 * (bigint or uuid) behave the same.
 */
export function useBookmarks() {
  const [ids, setIds] = useState(() => new Set(readStoredIds().map(String)));

  // Persist on every change.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]));
    } catch {
      // Storage unavailable; bookmarks still work for this session.
    }
  }, [ids]);

  // Keep multiple open tabs in sync.
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === STORAGE_KEY) setIds(new Set(readStoredIds().map(String)));
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const isBookmarked = useCallback((id) => ids.has(String(id)), [ids]);

  const toggleBookmark = useCallback((id) => {
    setIds((prev) => {
      const next = new Set(prev);
      const key = String(id);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }, []);

  return { bookmarkCount: ids.size, isBookmarked, toggleBookmark };
}
