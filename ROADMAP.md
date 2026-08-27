# Fashion Roadmap

Status: APPROVED. Scope: static investor-facing demo only. Nothing beyond
this is planned yet.

Current repo state: fresh `ngx-prime-default` Angular template. Auth /
dashboard / profile / settings pages from the template are used as-is —
no changes there.

Goal: make the product vision navigable and demoable for investors. No
backend, no persistence beyond local/static state — but content must be
real and realistic, not dummy/lorem-ipsum. All static content lives as JSON
files under `src/data/` (following the existing `src/data/company` pattern),
one dataset per entity type, loaded by services/components — not hardcoded
in components.

## Decide: which of these go in the demo?

### Entities (static JSON data, realistic content)

- [x] `item` — a few items across different types (apartment,
      house, land, etc.)
- [x] `offering` — sale + rental offerings tied to those items
- [x] `decision` — item history entries (renovation, repair, utility) —
      this is the "digital passport" differentiator
- [x] `collection` — a few developments
- [x] `brand` — a few brand profiles
- [x] `boutique` — a few boutiques
- [x] `stylist` — a few stylists, linked to boutiques
- [x] `request` — a few buyer/tenant requests
- [x] `user` — public profile view
- [x] `comment` — comments/reviews on a few entities
- [x] `event` — the occasion a decision is made for (wedding, gala,
      photoshoot, runway show), linking client, stylist, items, models,
      and decisions together
- [x] `model` — a person who wears items at events professionally,
      distinct from a client

### Components per entity (`*-view`, `*-short`, `*-icon`, `*-form`)

- [x] item: view, short, icon, form
- [x] offering: view, short, icon, form
- [x] decision: view, short, form (no icon per README)
- [x] collection: view, short, icon, form
- [x] brand: view, short, icon, form
- [x] boutique: view, short, icon, form
- [x] stylist: view, short, icon, form
- [x] request: view, short, icon, form
- [x] user: view, short, icon, form
- [x] comment: comments-view, comment-short, comment-form
- [x] event: view, short (no icon/form yet)
- [x] model: view, short (no icon/form yet)

### Pages

- [x] Feed — scrollable feed, swipe left/right (favourite/ignore)
      against local static state
- [x] Explore — search/filter UI against the static dataset
- [x] Map — pins for entities, static coordinates in fixtures
- [x] Editor — forms render and validate, no persistence
- [x] item — dedicated detail page (replaces generic Entity page)
- [x] offering — dedicated detail page
- [x] decisions — dedicated detail page
- [x] collection — dedicated detail page
- [x] brand — dedicated detail page
- [x] boutique — dedicated detail page
- [x] stylist — dedicated detail page
- [x] client — dedicated detail page (replaces generic user-facing Entity view)
- [x] events — list page with search
- [x] event — dedicated detail page
- [x] models — list page with search
- [x] model — dedicated detail page

Removed: Sign, Workspace (already covered by existing template pages),
Investment (not needed yet). Workspace's role is replaced by Explore.
Entity (generic) is replaced by one dedicated page per entity type.

Note: `request` and `comment` entities have no dedicated page — they only
appear embedded inside other pages/entities (e.g. comments on an entity
page, requests inside Feed/Explore). `user`'s dedicated page is named
`client` to avoid confusion with the auth/account user.

### Explicitly out of scope for this demo

- Real backend/database/API
- Real CRUD / persistence
- Business-profile claiming
- Enforced visibility/permission logic (can show badges without enforcing)
- Verification, moderation, monetization
