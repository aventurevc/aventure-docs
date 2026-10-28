// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const WriterClaimSurfaceSchemaKnownMembers = z.enum(["ENTITY_TEXT", "RESEARCH_SNIPPET", "BOTH"]);
/**
 * Output surface selected for a sourced writer claim.
 *
 * @openapiSchema WriterClaimSurface
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/research-runs
 * @endpoint POST /v1/research/runs
 * @usedBySchema ResearchFindingSchema
 * @contractShape writer.claim-surface
 * @contractRole canonical
 */
export const WriterClaimSurfaceSchema = Object.assign(z.union([WriterClaimSurfaceSchemaKnownMembers, z.string()]), { enum: WriterClaimSurfaceSchemaKnownMembers.enum });
//# sourceMappingURL=claim-surface.js.map