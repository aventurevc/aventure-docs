import { z } from "zod/v4";
declare const IdentificationSubjectSchemaDefinition: z.ZodObject<{
    context: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    location: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    sourceNewsId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    sourceUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    url: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
type IdentificationSubjectDefinition = z.infer<typeof IdentificationSubjectSchemaDefinition>;
/**
 * The company or person to identify. Send the name plus every URL, location, and source you have; a website or profile URL usually settles the answer without any model call.
 *
 * @openapiSchema IdentificationSubject
 * @endpoint POST /v1/entities/lookup
 * @endpoint POST /v1/people/lookup
 * @contractShape identification.subject
 * @contractRole canonical
 */
export declare const IdentificationSubjectSchema: z.ZodType<IdentificationSubjectDefinition>;
export type IdentificationSubject = z.infer<typeof IdentificationSubjectSchema>;
export {};
//# sourceMappingURL=subject.d.ts.map