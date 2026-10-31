// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const EntityFilterRequestValueShapeSchemaKnownMembers = z.enum([
    "ARRAY",
    "BOOLEAN",
    "INTEGER_RANGE_ARRAY",
    "DECIMAL_RANGE_ARRAY",
]);
/**
 * Canonical request value shape derived from the bound Kotlin property type.
 *
 * @openapiSchema EntityFilterRequestValueShape
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @endpoint POST /v1/entities/filters/refine
 * @usedBySchema EntityFilterRequestBindingSchema
 * @contractShape entity.filter-request-value-shape
 * @contractRole canonical
 */
export const EntityFilterRequestValueShapeSchema = Object.assign(z.union([EntityFilterRequestValueShapeSchemaKnownMembers, z.string()]), { enum: EntityFilterRequestValueShapeSchemaKnownMembers.enum });
//# sourceMappingURL=filter-request-value-shape.js.map