import { z } from "zod/v4";
/**
 * Kind of entity: an organization type such as Company or Investment Firm, or a Product or Service.
 *
 * @openapiSchema EntityType
 * @standardProblemResponse
 * @usedBySchema EntityFilterMetaSchema
 * @usedBySchema EntityFilterSchema
 * @usedBySchema EntityListFilterSchema
 * @usedBySchema EntityPersonAssociationSchema
 * @usedBySchema EntitySchema
 * @usedBySchema EntityTypeGroupMembershipSchema
 * @usedBySchema IdentificationSubjectSchema
 * @usedBySchema NewsResolvedEntityLinkSchema
 * @usedBySchema PersonListArrayFilterSchema
 * @usedBySchema ResearchDetailTypeSchema
 * @usedBySchema ResearchSnippetTypeSchema
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