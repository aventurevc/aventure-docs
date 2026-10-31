// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityFilterRequestValueShapeSchema } from "./filter-request-value-shape.js";
/**
 * Property path and value shape in the canonical EntityFilter JSON body.
 *
 * @openapiSchema EntityFilterRequestBinding
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @endpoint POST /v1/entities/filters/refine
 * @usedBySchema EntityFilterMetaSchema
 * @contractShape entity.filter-request-binding
 * @contractRole canonical
 */
export const EntityFilterRequestBindingSchema = z.object({
    /** Ordered property names from EntityFilter to the value to replace or clear. */
    path: z.array(z.string()),
    /** Inclusive range-bound property names, minimum then maximum; empty for non-ranges. */
    rangeBound: z.array(z.string()),
    /** Shape of the value at path; ranges are arrays of inclusive bound objects. */
    valueShape: EntityFilterRequestValueShapeSchema,
});
//# sourceMappingURL=filter-request-binding.js.map