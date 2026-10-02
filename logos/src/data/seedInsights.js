/**
 * Seed records so the app works out of the box, before Supabase is linked.
 * Shape matches the `insights` table (see supabase/schema.sql).
 */
export const SEED_INSIGHTS = [
  {
    id: 1,
    category: 'Philosophy',
    title: 'The Cosmopolitan Duty',
    card_body: [
      'Ancient Stoics rejected isolation and hyper-individualism.',
      'They viewed humanity as a single interconnected organism (Sympatheia).',
      'True virtue requires active, ethical participation in your local community.',
    ],
    actionable_step:
      'Choose one small action today that serves someone else without expecting praise.',
    source_name: 'Meditations by Marcus Aurelius',
    affiliate_url: 'https://amazon.com',
  },
  {
    id: 2,
    category: 'Health',
    title: 'Circadian Anchoring',
    card_body: [
      'Viewing natural sunlight within 30-60 minutes of waking triggers a critical cortisol peak.',
      'This biological timer sets a countdown clock for nighttime melatonin production.',
      'Looking through a window or screen does not work; photic energy must hit retinal cells directly.',
    ],
    actionable_step:
      'Step outside for 10 minutes immediately after waking up, even if it is overcast.',
    source_name: 'Stanford University Medicine (Huberman Lab)',
    affiliate_url: 'https://amazon.com',
  },
  {
    id: 3,
    category: 'Science',
    title: 'Goodhart’s Law',
    card_body: [
      "'When a measure becomes a target, it ceases to be a good measure.'",
      'Optimizing strictly for arbitrary metrics causes people to subconsciously game the system.',
      'This destroys the actual, underlying quality or health goal you originally aimed for.',
    ],
    actionable_step:
      'Identify one metric you are obsessing over and switch focus entirely to the systemic habit.',
    source_name: 'Charles Goodhart Economics Studies',
    affiliate_url: 'https://amazon.com',
  },
  {
    id: 4,
    category: 'Enlightenment',
    title: 'The Second Arrow Principle',
    card_body: [
      'Buddhist psychology states that life shoots two distinct arrows at us.',
      'The first arrow is the unavoidable external event (pain, bad luck, a rude comment).',
      'The second arrow is your emotional reaction to it. The second arrow is entirely self-inflicted.',
    ],
    actionable_step:
      "When something minor goes wrong today, tell yourself: 'The first arrow landed. I will not shoot myself with the second.'",
    source_name: 'The Sallatha Sutta (Ancient Text)',
    affiliate_url: 'https://amazon.com',
  },
  {
    id: 5,
    category: 'Technology',
    title: 'Amdahl’s Law for Productivity',
    card_body: [
      'Optimizing a tech component that only handles 5% of a task yields almost zero macro speedup.',
      "Similarly, spending hours tweaking your app's font or layout is a waste of mental energy.",
      'You must locate and systematically optimize the absolute bottleneck of your workflow.',
    ],
    actionable_step:
      'Find the single task causing 80% of your daily delays, and focus your energy on fixing just that.',
    source_name: 'Gene Amdahl (Computer Architecture)',
    affiliate_url: 'https://amazon.com',
  },
];
