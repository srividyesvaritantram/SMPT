/**
 * TEMPORARY CONTENT VISIBILITY
 * ---------------------------------------------------------------------------
 * Central switchboard for content that is temporarily hidden from the public
 * website. Nothing is deleted: set a flag back to `true` to restore that
 * individual page / card / detail view.
 *
 * Values:
 *   true  -> visible (normal behaviour)
 *   false -> temporarily hidden
 *
 * Admin:
 *   false hides the complete /admin interface (including nested routes) and
 *   the Admin link in the site navigation. The admin code itself is untouched.
 *
 * Courses / Offerings:
 *   false keeps the cards and "Know More" buttons on the public pages, but
 *   blocks the corresponding detail view. Direct visits to a detail URL show
 *   a temporary notice instead of the detail content.
 *
 * Events:
 *   Each event card/section can be switched independently. Hidden event data
 *   and components remain in the source for later restoration.
 */
export const CONTENT_VISIBILITY = {
  // ── Admin ────────────────────────────────────────────────────────────────
  admin: false,

  // ── Courses — detail views ───────────────────────────────────────────────
  // Every course now has real detail content in the project, so all detail
  // views are open. Set an individual flag to false to hide it again without
  // deleting any content.
  courses: {
    sriVidya: true,
    chandiVidya: true,
    shaivam: true,
    vaishnavam: true,
    ganapatyam: true,
    skaandam: true,
    shaktam: true,
    souram: true,
    // Used by the /courses/:id catch-all route.
    wildcardDetail: true,
  },

  // ── Offerings — detail views / expandable sections ───────────────────────
  offerings: {
    templeSilpaShastra: true,
    southIndianIconography: true,
    homas: true,
    archana: true,
    abhishekam: true,
    yantraPuja: true,
  },

  // ── Events — card sections ───────────────────────────────────────────────
  events: {
    // Three Śrāvaṇa event previews shown on the Events page.
    shravanaMasa: true,
    shravanaSomavara: true,
    shravanaMangalavara: true,

    // Additional event-card collections on the Events page. These remain in
    // the code and can be switched back on independently.
    shravana2026Schedule: true,
    // Legacy placeholder grid ("Coming Soon" cards with no dates/details).
    // Kept in the code for later restoration, but not shown because it does
    // not contain real event content.
    comingSoonEvents: false,

    // Individual cards in the "Past Divine Events" grid.
    completedEvents: {
      panchami: true, // Vārāhī Ammavaru
      gajanana: true, // Gajānana Sankata Hara Chaturthi
      navaratri: true,
    },
  },
};

/** True when the requested content should be shown. */
export function isContentVisible(group, key) {
  return CONTENT_VISIBILITY[group]?.[key] !== false;
}
