// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Geographic scope tier for location directory
 *
 * @openapiSchema LocationScope
 * @endpoint GET /v1/addresses/locations/{scope}
 * @endpoint POST /v1/addresses/locations/batch
 * @usedBySchema LocationIdentifierSchema
 * @contractShape location.scope
 * @contractRole canonical
 */
export const LocationScopeSchema = z.enum(["country", "state", "city"]);
//# sourceMappingURL=scope.js.map