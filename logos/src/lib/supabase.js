import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

/**
 * Supabase client, or `null` when env vars are absent.
 * A null client means the app runs purely on the bundled seed data.
 */
export const supabase = url && anonKey ? createClient(url, anonKey) : null;
