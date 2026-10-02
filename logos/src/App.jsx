import { useMemo, useState } from 'react';
import Header from './components/Header';
import InsightCard from './components/InsightCard';
import EmptyState from './components/EmptyState';
import { useInsights } from './hooks/useInsights';
import { useBookmarks } from './hooks/useBookmarks';

export default function App() {
  // UI state
  const [activeCategory, setActiveCategory] = useState('All');
  const [showBookmarkedOnly, setShowBookmarkedOnly] = useState(false);

  // Data (seed data now, Supabase once configured) and offline bookmarks
  const { insights, loading, error } = useInsights();
  const { bookmarkCount, isBookmarked, toggleBookmark } = useBookmarks();

  // Derived feed — recomputed synchronously, so filtering is instant.
  const visibleInsights = useMemo(
    () =>
      insights.filter(
        (item) =>
          (activeCategory === 'All' || item.category === activeCategory) &&
          (!showBookmarkedOnly || isBookmarked(item.id)),
      ),
    [insights, activeCategory, showBookmarkedOnly, isBookmarked],
  );

  const resetFilters = () => {
    setActiveCategory('All');
    setShowBookmarkedOnly(false);
  };

  return (
    <div className="min-h-dvh bg-[#0B0F19] font-sans text-[#F3F4F6]">
      <Header
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        showBookmarkedOnly={showBookmarkedOnly}
        onToggleBookmarked={() => setShowBookmarkedOnly((v) => !v)}
        bookmarkCount={bookmarkCount}
      />

      <main className="mx-auto max-w-lg px-4 pb-[calc(2.5rem+env(safe-area-inset-bottom))] pt-5">
        {/* Non-blocking status: seed cards stay visible while loading or on error. */}
        <div aria-live="polite" className="text-center text-xs text-[#9CA3AF]">
          {loading && <p className="mb-4 animate-pulse">Syncing latest insights…</p>}
          {error && <p className="mb-4">Offline — showing saved library.</p>}
        </div>

        {visibleInsights.length === 0 ? (
          <EmptyState
            bookmarkedOnly={showBookmarkedOnly}
            category={activeCategory}
            onReset={resetFilters}
          />
        ) : (
          <div className="space-y-5">
            {visibleInsights.map((insight) => (
              <InsightCard
                key={insight.id}
                insight={insight}
                bookmarked={isBookmarked(insight.id)}
                onToggleBookmark={toggleBookmark}
              />
            ))}
          </div>
        )}

        <footer className="mt-10 text-center font-serif text-xs tracking-[0.25em] text-[#9CA3AF]/60">
          ΛΟΓΟΣ
        </footer>
      </main>
    </div>
  );
}
