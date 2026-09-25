import { z } from "zod/v4";
declare const AddressAssociationSchemaDefinition: z.ZodObject<{
    endDate: z.ZodOptional<z.ZodNullable<z.ZodISODate>>;
    id: z.ZodInt;
    isCurrent: z.ZodBoolean;
    role: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        domicile: "domicile";
        dominant: "dominant";
        origin: "origin";
    }>>>;
    startDate: z.ZodOptional<z.ZodNullable<z.ZodISODate>>;
}, z.core.$strip>;
type AddressAssociationDefinition = z.infer<typeof AddressAssociationSchemaDefinition>;
/**
 * One role and effective period for a physical address association
 *
 * @openapiSchema AddressAssociation
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/addresses
 * @endpoint GET /v1/entities/{entityId}/addresses/{addressJoinId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/people
 * @endpoint GET /v1/entities/{entityId}/people/{associationId}
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/addresses
 * @endpoint GET /v1/people/{personId}/addresses/{addressJoinId}
 * @endpoint GET /v1/people/{personId}/entities
 * @endpoint GET /v1/people/{personId}/entities/{associationId}
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint GET /v1/people/{personId}/similar
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/all
 * @endpoint POST /v1/search/natural/entities
 * @usedBySchema AddressSchema
 * @contractShape address.association
 * @contractRole canonical
 */
export declare const AddressAssociationSchema: z.ZodType<AddressAssociationDefinition>;
export type AddressAssociation = z.infer<typeof AddressAssociationSchema>;
export {};
//# sourceMappingURL=association.d.ts.map