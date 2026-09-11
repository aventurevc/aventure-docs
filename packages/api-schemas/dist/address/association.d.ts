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
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/lookup
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/addresses
 * @endpoint GET /v1/entities/{entityId}/addresses/{addressJoinId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/people
 * @endpoint GET /v1/entities/{entityId}/people/{associationId}
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/addresses
 * @endpoint GET /v1/people/{personId}/addresses/{addressJoinId}
 * @endpoint GET /v1/people/{personId}/entities
 * @endpoint GET /v1/people/{personId}/entities/{associationId}
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint GET /v1/people/{personId}/similar
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/lookup/matches
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/people/lookup/batch
 * @endpoint POST /v1/search/all
 * @usedBySchema AddressSchema
 * @contractShape address.association
 * @contractRole canonical
 */
export declare const AddressAssociationSchema: z.ZodType<AddressAssociationDefinition>;
export type AddressAssociation = z.infer<typeof AddressAssociationSchema>;
export {};
//# sourceMappingURL=association.d.ts.map