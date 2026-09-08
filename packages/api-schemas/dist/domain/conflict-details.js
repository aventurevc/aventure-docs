// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ClassificationInactiveTagDetailsSchema } from "../classification/inactive-tag-details.js";
import { DuplicateCreateReviewSchema } from "../duplicate/create-review.js";
import { NewsSourceUrlConflictSchema } from "../news/source-url-conflict.js";
import { StrictUrlLookupConflictSchema } from "../strict/url-lookup-conflict.js";
import { UrlDuplicateConflictSchema } from "../url/duplicate-conflict.js";
/**
 * Polymorphic envelope for RFC 9457 ProblemDetail.details on HTTP 409 responses. The concrete variant depends on the conflict kind: URL ownership collisions return UrlDuplicateConflict; ambiguous strict URL lookups return StrictUrlLookupConflict; create-time duplicate review gates return DuplicateCreateReview; classification writes that touch an inactive tag bucket return ClassificationInactiveTagDetails; news publication+URL uniqueness violations return NewsSourceUrlConflict. Inspect ProblemDetail.code/type and the field set present on details to identify the variant.
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