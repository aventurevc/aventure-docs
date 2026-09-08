// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Canonical entity classification for the organization, product, and service records stored in the entity domain.
 *
 * @openapiSchema EntityType
 * @standardProblemResponse
 * @usedBySchema EntityFilterSchema
 * @usedBySchema EntityListFilterSchema
 * @usedBySchema EntityPersonAssociationSchema
 * @usedBySchema EntitySchema
 * @usedBySchema EntitySitemapUrlSchema
 * @usedBySchema EntityTypeCountSchema
 * @usedBySchema EntityTypeGroupMembershipSchema
 * @usedBySchema NewsResolvedEntityLinkSchema
 * @usedBySchema PersonListArrayFilterSchema
 * @usedBySchema SearchDuplicateCandidateScoreSchema
 * @contractShape entity.type
 * @contractRole canonical
 */
export const EntityTypeSchema = z.enum([
    "Company",
    "Investment Firm",
    "Fund",
    "Nonprofit",
    "Government",
    "Organization",
    "Business Line",
    "Product",
    "Service",
]);
//# sourceMappingURL=type.js.map