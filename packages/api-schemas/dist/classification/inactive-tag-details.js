// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityClassificationInactiveTagOverrideSchema } from "../entity/classification-inactive-tag-override.js";
const ClassificationInactiveTagDetailsSchemaDefinition = z.object({
    /** Allowed inactiveTagOverride values for this conflict */
    availableOverrides: z.array(EntityClassificationInactiveTagOverrideSchema),
    /** Existing dormant value slug or lookup key */
    slug: z.string(),
    /** Existing tag id in res_type_ref */
    tagId: z.int(),
});
/**
 * ProblemDetail.details for HTTP 409 when a classification value exists but is inactive.
 *
 * @openapiSchema ClassificationInactiveTagDetails
 * @standardProblemResponse
 * @usedBySchema DomainConflictDetailsSchema
 * @contractShape classification.inactive-tag-details
 * @contractRole canonical
 */
export const ClassificationInactiveTagDetailsSchema = ClassificationInactiveTagDetailsSchemaDefinition;
//# sourceMappingURL=inactive-tag-details.js.map