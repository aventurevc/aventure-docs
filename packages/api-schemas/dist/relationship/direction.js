// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * How entities relationships join interprets sourceEntityId and targetEntityId.
 *
 * @openapiSchema RelationshipDirection
 * @endpoint GET /v1/entities/relationships/types
 * @usedBySchema EntityRelationshipTypeOptionSchema
 * @contractShape relationship.direction
 * @contractRole canonical
 */
export const RelationshipDirectionSchema = z.enum(["symmetric", "typeOriented", "directional"]);
//# sourceMappingURL=direction.js.map