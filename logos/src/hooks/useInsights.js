import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { SEED_INSIGHTS } from '../data/seedInsights';

/**
 * Loads cards from the Supabase `insights` table.
 *
 * State starts as the seed data so the feed renders instantly (and keeps
 * working offline or when Supabase isn't configured). A successful,
 * non-empty fetch replaces it; any failure leaves the seed data in place.
 */
export function useInsights() {
  const [insights, setInsights] = useState(SEED_INSIGHTS);
  const [loading, setLoading] = useState(Boolean(supabase));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!supabase) return; // Not linked yet: seed data only.

    let cancelled = false; // Guards against setting state after unmount.

    async function fetchInsights() {
      setLoading(true);
      const { data, error: fetchError } = await supabase
        .from('insights')
        .select('id, category, title, card_body, actionable_step, source_name, affiliate_url')
        .order('id', { ascending: true });

      if (cancelled) return;

      if (fetchError) {
        console.error('[Logos] Supabase fetch failed:', fetchError.message);
        setError(fetchError.message);
      } else if (data?.length) {
        setInsights(data.map(normalize));
        setError(null);
      }
      setLoading(false);
    }

    fetchInsights();
    return () => {
      cancelled = true;
    };
  }, []);

  return { insights, loading, error };
}

/** Accepts `card_body` stored as text[], jsonb array, or a JSON string. */
function normalize(row) {
  let body = row.card_body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      body = [body];
    }
  }
  return { ...row, card_body: Array.isArray(body) ? body : [] };
}
