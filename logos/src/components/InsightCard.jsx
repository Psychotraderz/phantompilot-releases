import { memo } from 'react';
import { getAccent } from '../lib/categories';
import { BookmarkIcon, ExternalLinkIcon, SparkIcon } from './Icons';

/**
 * One wisdom card: category + bookmark, title, three insights,
 * an accent-tinted daily action, and a source footer with an outbound link.
 * Memoized so toggling one bookmark doesn't re-render every card.
 */
function InsightCard({ insight, bookmarked, onToggleBookmark }) {
  const { id, category, title, card_body, actionable_step, source_name, affiliate_url } = insight;
  const accent = getAccent(category);

  return (
    <article className="rounded-2xl border border-white/5 bg-[#161F30] p-5 shadow-lg shadow-black/20 sm:p-6">
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${accent.badge}`}
        >
          {category}
        </span>
        <button
          type="button"
          onClick={() => onToggleBookmark(id)}
          aria-pressed={bookmarked}
          aria-label={bookmarked ? `Remove "${title}" from bookmarks` : `Bookmark "${title}"`}
          className={`-mr-2 rounded-full p-2 transition-transform active:scale-90 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#9CA3AF] ${
            bookmarked ? accent.text : 'text-[#9CA3AF] hover:text-[#F3F4F6]'
          }`}
        >
          <BookmarkIcon filled={bookmarked} className="h-5 w-5" />
        </button>
      </div>

      {/* 2. Title */}
      <h2 className="mt-3 font-serif text-xl font-bold tracking-tight text-[#F3F4F6]">{title}</h2>

      {/* 3. Body: core insights */}
      <ul className={`mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#D1D5DB] ${accent.marker}`}>
        {card_body.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      {/* 4. Actionable step */}
      <div className={`mt-5 rounded-xl border-l-4 border p-3.5 ${accent.panel}`}>
        <p className={`flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider ${accent.text}`}>
          <SparkIcon className="h-3 w-3" />
          Today’s Practice
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-[#F3F4F6]">{actionable_step}</p>
      </div>

      {/* 5. Footer row */}
      <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/5 pt-4">
        <p className="min-w-0 text-xs leading-snug text-[#9CA3AF]">
          <span className="sr-only">Source: </span>
          {source_name}
        </p>
        {affiliate_url && (
          <a
            href={affiliate_url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className={`inline-flex shrink-0 items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${accent.button}`}
          >
            Read Full Source
            <ExternalLinkIcon className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </article>
  );
}

export default memo(InsightCard);
