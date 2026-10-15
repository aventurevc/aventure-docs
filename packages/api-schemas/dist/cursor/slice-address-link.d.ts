import { z } from "zod/v4";
declare const CursorSliceAddressLinkSchemaDefinition: z.ZodObject<{
    content: z.ZodArray<z.ZodType<{
        id: number;
        owner: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        };
        role?: "domicile" | "dominant" | "origin" | null | undefined;
    }, import("../address/link.ts").AddressLinkSchemaInput, z.core.$ZodTypeInternals<{
        id: number;
        owner: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        };
        role?: "domicile" | "dominant" | "origin" | null | undefined;
    }, import("../address/link.ts").AddressLinkSchemaInput>>>;
    nextCursor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type CursorSliceAddressLinkDefinition = z.infer<typeof CursorSliceAddressLinkSchemaDefinition>;
export interface CursorSliceAddressLinkSchemaInput extends z.input<typeof CursorSliceAddressLinkSchemaDefinition> {
}
/**
 * @openapiSchema CursorSliceAddressLink
 * @endpoint GET /v1/addresses/{addressId}/links
 * @contractShape cursor.slice-address-link
 * @contractRole canonical
 */
export declare const CursorSliceAddressLinkSchema: z.ZodType<CursorSliceAddressLinkDefinition, CursorSliceAddressLinkSchemaInput>;
export type CursorSliceAddressLink = z.infer<typeof CursorSliceAddressLinkSchema>;
export {};
//# sourceMappingURL=slice-address-link.d.ts.map