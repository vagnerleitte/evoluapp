# EvoluApp — knowledge portal

This portal is the entry point for product-specific knowledge. The reusable decision methodology lives in [`../framework/`](../framework/); do not copy its normative documents into this directory.

## Reading order and authority

1. **Domain** (`domain/`) — business concepts, users and outcomes independent of product or technology.
2. **Product** (`product/`) — approved observable behaviours and scope.
3. **Platform** (`platform/`) — capabilities and guarantees required to support the product.
4. **Architecture** (`architecture/`) — accepted structural decisions and ADRs.
5. **Implementation planning** (`implementation-planning/`) — incremental plan and accepted work packages.
6. **Engineering contract** (`engineering-contract/`) — implementation agreements that constrain assigned work.
7. **Reviews** (`reviews/`) — derived audits and evidence; they do not redefine prior layers.

## Current state

- The existing PWA is an imported prototype and is not the approved product specification.
- The product direction is evolving toward a gamified RPG-style fitness experience.
- The domain layer has one candidate discovery record, [initial audience hypothesis](domain/initial-discovery.md); it has not been approved as a normative domain baseline.
- The product layer has a partial [initial scope record](product/initial-scope.md) and a [candidate metric catalog](product/candidate-metric-catalog.md); neither is a complete Product Specification.
- The platform, architecture, implementation-planning and engineering-contract layers have not yet been established.
- No implementation work package is authorized by this portal yet.
- The next authorized activity is **domain and product discovery** to define the RPG fitness proposition before estimation and implementation planning.

## Reference material

- [Current PWA design-system audit](design-system-cheatsheet.md) — descriptive audit of the imported prototype, including [visual reference](resources/design-system-cheatsheet.html).
