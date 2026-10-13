// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Conflict kind that identifies which details shape a 409 response carries.
 *
 * @openapiSchema DomainConflictType
 * @standardProblemResponse
 * @usedBySchema ClassificationInactiveTagDetailsSchema
 * @usedBySchema DomainConflictDetailsSchema
 * @usedBySchema DuplicateCreateReviewSchema
 * @usedBySchema NewsSourceUrlConflictSchema
 * @usedBySchema StrictUrlLookupConflictSchema
 * @usedBySchema UrlDuplicateConflictSchema
 * @contractShape domain.conflict-type
 * @contractRole canonical
 */
export const DomainConflictTypeSchema = z.union([
    z.enum([
        "URL_DUPLICATE",
        "STRICT_URL_LOOKUP",
        "DUPLICATE_CREATE_REVIEW",
        "CLASSIFICATION_INACTIVE_TAG",
        "NEWS_SOURCE_URL",
    ]),
    z.string(),
]);
//# sourceMappingURL=conflict-type.js.map