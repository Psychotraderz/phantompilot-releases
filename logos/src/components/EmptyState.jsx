import { BookmarkIcon } from './Icons';

/**
 * Shown when the current filters produce no cards.
 * Copy adapts to whether the user is in "bookmarked only" mode.
 */
export default function EmptyState({ bookmarkedOnly, category, onReset }) {
  const inCategory = category !== 'All' ? ` in ${category}` : '';

  return (
    <div className="flex flex-col items-center rounded-2xl border border-dashed border-white/10 px-6 py-14 text-center">
      <div className="mb-4 rounded-full bg-[#161F30] p-4 text-[#9CA3AF]">
        <BookmarkIcon className="h-6 w-6" />
      </div>
      <h2 className="font-serif text-lg font-semibold text-[#F3F4F6]">
        {bookmarkedOnly ? `No saved cards${inCategory}` : `Nothing here yet${inCategory}`}
      </h2>
      <p className="mt-2 max-w-xs text-sm text-[#9CA3AF]">
        {bookmarkedOnly
          ? 'Tap the bookmark icon on any card to keep it here. Saved cards stay on this device, even offline.'
          : 'New insights for this category are on the way. Try another category in the meantime.'}
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-[#F3F4F6] transition-colors hover:bg-white/5"
      >
        {bookmarkedOnly ? 'Browse all cards' : 'Show all categories'}
      </button>
    </div>
  );
}
