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
export declare const EntityTypeSchema: z.ZodEnum<{
    "Business Line": "Business Line";
    Company: "Company";
    Fund: "Fund";
    Government: "Government";
    "Investment Firm": "Investment Firm";
    Nonprofit: "Nonprofit";
    Organization: "Organization";
    Product: "Product";
    Service: "Service";
}>;
export type EntityType = z.infer<typeof EntityTypeSchema>;
//# sourceMappingURL=type.d.ts.map