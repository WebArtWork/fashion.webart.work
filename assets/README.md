# Fashion

Fashion is a platform built around one core idea: **every important outfit
decision should be documented against the event it was made for** — not just
a sale, but a verifiable record of what a client chose, tried, reserved, or
wore, and why. Brands and boutiques get a place to show the story behind
their pieces; clients and stylists get real transparency and history instead
of a one-off transaction.

This repository is currently a static, investor-facing demo of that product
vision — real, realistic content and a fully navigable app, with no backend
or persistence behind it yet (see [ROADMAP.md](ROADMAP.md) for what's in and
out of scope for this phase).

## The core entities

- **Item** — a physical piece (dress, bag, accessory, etc.) with its
  characteristics, brand, and availability.
- **Decision** — a single client decision made on an item, in the context of
  a specific event: tried on, reserved, purchased, rented, or returned. This
  is the "digital passport" of the client's journey with a piece.
- **Event** — the occasion a decision is made for: a wedding, gala,
  photoshoot, red carpet appearance, or other event, with its date,
  location, and dress code/style notes.
- **Offering** — a sale or rental offering tied to an item.
- **Collection** — a set of items grouped by a brand's line or season.
- **Brand** — the designer or company behind a collection.
- **Boutique** / **Stylist** — the businesses and individuals who represent
  items and offerings, and who guide clients toward a decision.
- **Model** — a person who wears items at events professionally, distinct
  from a client.
- **Request** — a client's stated need for an upcoming event (occasion,
  size, budget, style), for matching against offerings.
- **Comment** — reviews/feedback on an item, offering, boutique, stylist, or
  brand.

## How people use it

- **Feed** — a swipeable stream of offerings; favourite what's interesting,
  ignore what isn't.
- **Explore** — search and filter offerings by type, deal, status, price,
  and brand.
- **Map** — find boutiques by location, with a summary panel per pin.
- **Editor** — try out the data-entry forms for any entity.
- Every entity also has its own dedicated page showing its full profile,
  history, and related offerings/comments.

## Who's behind a decision

Items and offerings are never anonymous: each one can be linked to the
brand behind it, the boutique and stylist representing it, and the event
and decision history that back up how it was actually worn and chosen — so
a client can see who to trust and why, not just what's being sold.

## Status

See [ROADMAP.md](ROADMAP.md) for exactly what's built, what's explicitly
out of scope for this phase (no real backend, no persistence, no
verification/moderation/monetization yet), and why.

For contributor/developer setup and coding conventions, see
[AGENTS.md](AGENTS.md).
