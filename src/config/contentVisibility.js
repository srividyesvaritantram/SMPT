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
  courses: {
    sriVidya: false,
    chandiVidya: false,
    shaivam: false,
    vaishnavam: false,
    ganapatyam: false,
    skaandam: false,
    shaktam: false,
    souram: false,
    // Used by the /courses/:id catch-all route.
    wildcardDetail: false,
  },

  // ── Offerings — detail views / expandable sections ───────────────────────
  offerings: {
    templeSilpaShastra: false,
    southIndianIconography: false,
    homas: false,
    archana: false,
    abhishekam: false,
    yantraPuja: false,
  },

  // ── Events — card sections ───────────────────────────────────────────────
  events: {
    // Three Śrāvaṇa event previews shown on the Events page.
    shravanaMasa: false,
    shravanaSomavara: false,
    shravanaMangalavara: false,

    // Additional event-card collections on the Events page. These remain in
    // the code and can be switched back on independently.
    shravana2026Schedule: false,
    comingSoonEvents: false,

    // Individual cards in the "Past Divine Events" grid.
    completedEvents: {
      panchami: true, // Vārāhī Ammavaru
      gajanana: true, // Gajānana Sankata Hara Chaturthi
      navaratri: false,
    },
  },
};

/** True when the requested content should be shown. */
export function isContentVisible(group, key) {
  return CONTENT_VISIBILITY[group]?.[key] !== false;
}
