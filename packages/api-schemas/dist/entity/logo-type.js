// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Distinguishes square icon vs standard/horizontal entity logo
 *
 * @openapiSchema EntityLogoType
 * @endpoint GET /v1/media
 * @contractShape entity.logo-type
 * @contractRole canonical
 */
export const EntityLogoTypeSchema = z.enum(["SQUARE", "STANDARD"]);
//# sourceMappingURL=logo-type.js.map