// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Caller-chosen handling when the canonical classification value exists but is dormant.
 *
 * @openapiSchema EntityClassificationInactiveTagOverride
 * @standardProblemResponse
 * @usedBySchema ClassificationInactiveTagDetailsSchema
 * @contractShape entity.classification-inactive-tag-override
 * @contractRole canonical
 */
export const EntityClassificationInactiveTagOverrideSchema = z.enum([
    "REACTIVATE",
    "ATTACH_INACTIVE",
]);
//# sourceMappingURL=classification-inactive-tag-override.js.map