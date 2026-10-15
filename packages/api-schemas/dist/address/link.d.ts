import { z } from "zod/v4";
declare const AddressLinkSchemaDefinition: z.ZodObject<{
    id: z.ZodInt;
    owner: z.ZodObject<{
        entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    }, z.core.$strip>;
    role: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        domicile: "domicile";
        dominant: "dominant";
        origin: "origin";
    }>>>;
}, z.core.$strip>;
type AddressLinkDefinition = z.infer<typeof AddressLinkSchemaDefinition>;
export interface AddressLinkSchemaInput extends z.input<typeof AddressLinkSchemaDefinition> {
}
/**
 * One current or historical owner association to an address
 *
 * @openapiSchema AddressLink
 * @endpoint GET /v1/addresses/{addressId}/links
 * @usedBySchema CursorSliceAddressLinkSchema
 * @contractShape address.link
 * @contractRole canonical
 */
export declare const AddressLinkSchema: z.ZodType<AddressLinkDefinition, AddressLinkSchemaInput>;
export type AddressLink = z.infer<typeof AddressLinkSchema>;
export {};
//# sourceMappingURL=link.d.ts.map