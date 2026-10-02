/** Filter pills shown in the header, in display order. */
export const CATEGORIES = ['All', 'Health', 'Science', 'Enlightenment', 'Philosophy', 'Technology'];

/*
 * Accent themes. Class strings are written out in full (never concatenated)
 * so Tailwind's scanner can find them at build time.
 */
const GOLD = {
  text: 'text-[#F59E0B]',
  badge: 'text-[#F59E0B] bg-[#F59E0B]/10 ring-1 ring-inset ring-[#F59E0B]/25',
  panel: 'bg-[#F59E0B]/[0.06] border-[#F59E0B]/30',
  marker: 'marker:text-[#F59E0B]',
  button: 'bg-[#F59E0B] text-[#0B0F19] hover:bg-[#FBBF24] focus-visible:outline-[#F59E0B]',
  pillActive: 'bg-[#F59E0B] text-[#0B0F19] border-[#F59E0B]',
};

const EMERALD = {
  text: 'text-[#10B981]',
  badge: 'text-[#10B981] bg-[#10B981]/10 ring-1 ring-inset ring-[#10B981]/25',
  panel: 'bg-[#10B981]/[0.06] border-[#10B981]/30',
  marker: 'marker:text-[#10B981]',
  button: 'bg-[#10B981] text-[#0B0F19] hover:bg-[#34D399] focus-visible:outline-[#10B981]',
  pillActive: 'bg-[#10B981] text-[#0B0F19] border-[#10B981]',
};

/** Neutral style for the "All" pill. */
const NEUTRAL = {
  pillActive: 'bg-[#F3F4F6] text-[#0B0F19] border-[#F3F4F6]',
};

const ACCENTS = {
  Philosophy: GOLD,
  Enlightenment: GOLD,
  Health: EMERALD,
  Science: EMERALD,
  Technology: EMERALD,
};

/** Returns the accent theme for a category; unknown categories fall back to emerald. */
export function getAccent(category) {
  if (category === 'All') return NEUTRAL;
  return ACCENTS[category] ?? EMERALD;
}
