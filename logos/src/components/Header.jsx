import { CATEGORIES, getAccent } from '../lib/categories';
import { BookmarkIcon } from './Icons';

/**
 * Sticky top bar: wordmark, "Saved" toggle, and a horizontally
 * scrollable rail of category filter pills.
 */
export default function Header({
  activeCategory,
  onCategoryChange,
  showBookmarkedOnly,
  onToggleBookmarked,
  bookmarkCount,
}) {
  return (
    <header className="sticky top-0 z-20 border-b border-white/5 bg-[#0B0F19]/85 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <div className="mx-auto max-w-lg">
        {/* Wordmark row */}
        <div className="flex items-center justify-between px-4 pb-2 pt-4">
          <h1 className="font-serif text-2xl font-semibold tracking-[0.3em] text-[#F3F4F6]">
            LOGOS
          </h1>

          <button
            type="button"
            onClick={onToggleBookmarked}
            aria-pressed={showBookmarkedOnly}
            className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B] ${
              showBookmarkedOnly
                ? 'border-[#F59E0B]/50 bg-[#F59E0B]/15 text-[#F59E0B]'
                : 'border-white/10 text-[#9CA3AF] hover:border-white/20 hover:text-[#F3F4F6]'
            }`}
          >
            <BookmarkIcon filled={showBookmarkedOnly} className="h-3.5 w-3.5" />
            <span>Only Bookmarked</span>
            <span className="tabular-nums opacity-70">{bookmarkCount}</span>
          </button>
        </div>

        {/* Category rail. Negative-free padding + snap keeps pills tappable edge to edge. */}
        <nav aria-label="Categories" className="no-scrollbar overflow-x-auto">
          <ul className="flex w-max snap-x gap-2 px-4 pb-3 pt-1">
            {CATEGORIES.map((category) => {
              const isActive = category === activeCategory;
              return (
                <li key={category} className="snap-start">
                  <button
                    type="button"
                    onClick={() => onCategoryChange(category)}
                    aria-pressed={isActive}
                    className={`whitespace-nowrap rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9CA3AF] ${
                      isActive
                        ? getAccent(category).pillActive
                        : 'border-white/10 bg-[#161F30] text-[#9CA3AF] hover:text-[#F3F4F6]'
                    }`}
                  >
                    {category}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
