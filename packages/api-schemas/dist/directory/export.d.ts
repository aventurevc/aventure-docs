import { z } from "zod/v4";
declare const DirectoryExportSchemaDefinition: z.ZodObject<{
    allowance: z.ZodObject<{
        access: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodEnum<{
            ADDITIONAL_USAGE: "ADDITIONAL_USAGE";
            BILLING_BLOCKED: "BILLING_BLOCKED";
            EXHAUSTED: "EXHAUSTED";
            INCLUDED: "INCLUDED";
            PLAN_REQUIRED: "PLAN_REQUIRED";
        }>, z.ZodString]> & {
            enum: {
                ADDITIONAL_USAGE: "ADDITIONAL_USAGE";
                BILLING_BLOCKED: "BILLING_BLOCKED";
                EXHAUSTED: "EXHAUSTED";
                INCLUDED: "INCLUDED";
                PLAN_REQUIRED: "PLAN_REQUIRED";
            };
        }>>;
        limit: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        remaining: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        resetAt: z.ZodISODateTime;
        used: z.ZodInt;
    }, z.core.$strip>;
    column: z.ZodArray<z.ZodString>;
    directory: z.ZodEnum<{
        companies: "companies";
        investors: "investors";
        people: "people";
    }>;
    hasNext: z.ZodBoolean;
    page: z.ZodInt;
    row: z.ZodArray<z.ZodArray<z.ZodString>>;
    size: z.ZodInt;
    totalElements: z.ZodNumber;
}, z.core.$strip>;
type DirectoryExportDefinition = z.infer<typeof DirectoryExportSchemaDefinition>;
export interface DirectoryExportSchemaInput extends z.input<typeof DirectoryExportSchemaDefinition> {
}
/**
 * A metered directory page with ordered headers and text cells; absent values are empty strings.
 *
 * @openapiSchema DirectoryExport
 * @endpoint POST /v1/directory/exports
 * @contractShape directory.export
 * @contractRole canonical
 */
export declare const DirectoryExportSchema: z.ZodType<DirectoryExportDefinition, DirectoryExportSchemaInput>;
export type DirectoryExport = z.infer<typeof DirectoryExportSchema>;
export {};
//# sourceMappingURL=export.d.ts.map