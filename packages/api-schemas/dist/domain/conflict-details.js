// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ClassificationInactiveTagDetailsSchema } from "../classification/inactive-tag-details.js";
import { DuplicateCreateReviewSchema } from "../duplicate/create-review.js";
import { NewsSourceUrlConflictSchema } from "../news/source-url-conflict.js";
import { StrictUrlLookupConflictSchema } from "../strict/url-lookup-conflict.js";
import { UrlDuplicateConflictSchema } from "../url/duplicate-conflict.js";
/**
 * Details of an HTTP 409 conflict. conflictType names the shape: URL_DUPLICATE when the URL is already a current URL on another record; STRICT_URL_LOOKUP when an exact URL lookup matches more than one record; DUPLICATE_CREATE_REVIEW when a create or lookup returns candidate records to review; CLASSIFICATION_INACTIVE_TAG when a classification value exists but is inactive; NEWS_SOURCE_URL when another article already has the same publication and URL.
 *
 * @openapiSchema DomainConflictDetails
 * @standardProblemResponse
 * @usedBySchema ProblemDetailSchema
 * @contractShape domain.conflict-details
 * @contractRole canonical
 */
export const DomainConflictDetailsSchema = z.union([
    UrlDuplicateConflictSchema,
    StrictUrlLookupConflictSchema,
    DuplicateCreateReviewSchema,
    ClassificationInactiveTagDetailsSchema,
    NewsSourceUrlConflictSchema,
]);
//# sourceMappingURL=conflict-details.js.map