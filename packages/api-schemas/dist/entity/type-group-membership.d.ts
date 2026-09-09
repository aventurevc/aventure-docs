import { z } from "zod/v4";
declare const EntityTypeGroupMembershipSchemaDefinition: z.ZodObject<{
    typeGroup: z.ZodEnum<{
        Investor: "Investor";
        Organization: "Organization";
    }>;
    typeRecord: z.ZodArray<z.ZodEnum<{
        "Business Line": "Business Line";
        Company: "Company";
        Fund: "Fund";
        Government: "Government";
        "Investment Firm": "Investment Firm";
        Nonprofit: "Nonprofit";
        Organization: "Organization";
        Product: "Product";
        Service: "Service";
    }>>;
}, z.core.$strip>;
type EntityTypeGroupMembershipDefinition = z.infer<typeof EntityTypeGroupMembershipSchemaDefinition>;
/**
 * Canonical concrete entity types included by one entity type group.
 *
 * @openapiSchema EntityTypeGroupMembership
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @usedBySchema EntityFilterOptionSetMetaSchema
 * @contractShape entity.type-group-membership
 * @contractRole canonical
 */
export declare const EntityTypeGroupMembershipSchema: z.ZodType<EntityTypeGroupMembershipDefinition>;
export type EntityTypeGroupMembership = z.infer<typeof EntityTypeGroupMembershipSchema>;
export {};
//# sourceMappingURL=type-group-membership.d.ts.map