import { z } from "zod/v4";
declare const ContactDetailSchemaDefinition: z.ZodObject<{
    contactType: z.ZodEnum<{
        EMAIL: "EMAIL";
        PHONE: "PHONE";
    }>;
    contactUsage: z.ZodEnum<{
        PERSONAL: "PERSONAL";
        UNDETERMINED: "UNDETERMINED";
        WORK: "WORK";
    }>;
    contactValue: z.ZodString;
    createdAt: z.ZodISODateTime;
    id: z.ZodInt;
    isPrimary: z.ZodBoolean;
    owner: z.ZodObject<{
        entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    }, z.core.$strip>;
    suppressed: z.ZodBoolean;
    updatedAt: z.ZodISODateTime;
}, z.core.$strip>;
type ContactDetailDefinition = z.infer<typeof ContactDetailSchemaDefinition>;
export interface ContactDetailSchemaInput extends z.input<typeof ContactDetailSchemaDefinition> {
}
/**
 * One email address or phone number of a company or person. A signed-in subscriber reads the contacts of a publicly visible record through the metered list routes; a caller who may edit the owner also sees opted-out (suppressed) rows.
 *
 * @openapiSchema ContactDetail
 * @endpoint GET /v1/entities/{entityId}/contact-details
 * @endpoint GET /v1/people/{personId}/contact-details
 * @contractShape contact.detail
 * @contractRole canonical
 */
export declare const ContactDetailSchema: z.ZodType<ContactDetailDefinition, ContactDetailSchemaInput>;
export type ContactDetail = z.infer<typeof ContactDetailSchema>;
export {};
//# sourceMappingURL=detail.d.ts.map