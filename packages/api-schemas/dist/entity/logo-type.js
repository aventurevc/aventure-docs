// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Entity logo slot: SQUARE is the square icon read back as `core.image.logoSquare`; STANDARD is the horizontal wordmark read back as `core.image.logo`.
 *
 * @openapiSchema EntityLogoType
 * @endpoint GET /v1/entities/{entityId}/logo
 * @contractShape entity.logo-type
 * @contractRole canonical
 */
export const EntityLogoTypeSchema = z.enum(["SQUARE", "STANDARD"]);
//# sourceMappingURL=logo-type.js.map