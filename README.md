# aVenture documentation and public API

This repository publishes [aVenture documentation](https://docs.aventure.vc), the public OpenAPI document at `openapi/openapi.json`, and its matching Zod package at `packages/api-schemas`.

The release workflow delivers the generated specification and compiled schema package together. Fern imports that same specification; edit API contracts at their source and regenerate them rather than editing generated files here.

Author documentation under `fern/`. Run `fern check` to validate it and `fern docs dev` to preview it. The existing GitHub workflow publishes documentation changes from `main` and verifies the downloadable specification and operation pages.

The OpenAPI Download on the API reference page preserves the released document exactly. Fern's managed `/openapi.json` supplies its rendered operation catalog.
