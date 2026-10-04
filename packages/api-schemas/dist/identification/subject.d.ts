import { z } from "zod/v4";
declare const IdentificationSubjectSchemaDefinition: z.ZodObject<{
    context: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    kind: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        ENTITY: "ENTITY";
        PERSON: "PERSON";
    }>>>;
    location: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    providerId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    sourceNewsId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    sourceUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    typeRecord: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        "Business Line": "Business Line";
        Company: "Company";
        Fund: "Fund";
        Government: "Government";
        "Investment Firm": "Investment Firm";
        Nonprofit: "Nonprofit";
        Organization: "Organization";
        Product: "Product";
        Service: "Service";
    }>>>;
    url: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
type IdentificationSubjectDefinition = z.infer<typeof IdentificationSubjectSchemaDefinition>;
/**
 * The company, Product, Service, or person to identify. Send the name plus every URL, location, and source you have; a website or profile URL usually settles the answer without any model call.
 *
 * @openapiSchema IdentificationSubject
 * @endpoint POST /v1/entities/lookup
 * @endpoint POST /v1/lookup
 * @endpoint POST /v1/people/lookup
 * @contractShape identification.subject
 * @contractRole canonical
 */
export declare const IdentificationSubjectSchema: z.ZodType<IdentificationSubjectDefinition>;
export type IdentificationSubject = z.infer<typeof IdentificationSubjectSchema>;
export {};
//# sourceMappingURL=subject.d.ts.map