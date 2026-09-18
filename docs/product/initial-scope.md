# Initial product scope — autonomous student and read-only sharing

## Status

**Partially deliberated.** This document records initial scope decisions made by the Product Owner. It is not yet a complete Product Specification or Product Readiness baseline.

## Decisions

1. The student starts and uses the first product instance autonomously.
2. A professional relationship is not required for onboarding, evaluation or progress monitoring.
3. The student may share their profile through a link.
4. In this first instance, the professional who receives the link can only view the student's metrics.
5. In the first session, the student sees a visual mapping of their current metrics through avatar-based graphics.
6. Performance evolution depends on consecutive metric collections; it is not promised from a single initial evaluation.

## First-session promise

The first session must produce an understandable visual representation of the student's current state. The avatar-based metric mapping is the primary result of the initial evaluation.

The initial mapping draws from the [candidate metric catalog](candidate-metric-catalog.md), which includes height, weight and candidate circumference measures for the trunk and limbs. The catalog remains open until its terminology and collection protocol are approved.

The student may use the product with an incomplete metric collection. A complete collection increases avatar accuracy, and the product must communicate that relationship explicitly without preventing use of the remaining experience.

The completeness communication combines three observable elements:

1. an avatar-accuracy percentage;
2. pending regions visibly identified on the avatar mapping;
3. a checklist of remaining collections.

The product must distinguish this initial state from evolution: an avatar mapping can exist after the first collection, while performance evolution becomes meaningful only after comparable subsequent collections exist.

## Explicit exclusions from the first instance

- professional dashboard;
- professional-managed student enrollment;
- editing student data by a professional;
- group, class or academy management;
- professional workflow beyond read-only metric viewing.

## Deferred questions

- **TBD — first RPG action:** after completing or partially skipping the initial mapping, the first mission or action that starts the student's RPG journey is not defined yet.
- Which exact metrics are visible through a shared link?
- Which metrics compose the initial avatar mapping, and how are they visually represented?
- What makes collections consecutive and comparable?
- How many valid collections are necessary before the product presents performance evolution?
- Is the link public, restricted, expiring or revocable?
- Does the profile include avatar, progress history, goals, photos or only measurements?
- What consent, visibility and deletion controls are required?

These questions are intentionally not answered here. The observable sharing promise must be completed in Product Engineering before Platform Engineering derives access, privacy or availability guarantees.
