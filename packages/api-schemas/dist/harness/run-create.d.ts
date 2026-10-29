import { z } from "zod/v4";
declare const HarnessRunCreateSchemaDefinition: z.ZodObject<{
    finding: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<{
        end?: number | null | undefined;
        gateId?: string | null | undefined;
        quote?: string | undefined;
        sourceDocumentId?: string | null | undefined;
        sourceUrl: string;
        start?: number | null | undefined;
        statement?: string | undefined;
        writerSurface?: string | null | undefined;
    }, import("../research/finding.ts").ResearchFindingSchemaInput, z.core.$ZodTypeInternals<{
        end?: number | null | undefined;
        gateId?: string | null | undefined;
        quote?: string | undefined;
        sourceDocumentId?: string | null | undefined;
        sourceUrl: string;
        start?: number | null | undefined;
        statement?: string | undefined;
        writerSurface?: string | null | undefined;
    }, import("../research/finding.ts").ResearchFindingSchemaInput>>>>>;
    mode: z.ZodOptional<z.ZodEnum<{
        COMPREHENSIVE: "COMPREHENSIVE";
        INDIVIDUAL: "INDIVIDUAL";
    }>>;
    model: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    taskPresetKey: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    url: z.ZodString;
    userPrompt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type HarnessRunCreateDefinition = z.infer<typeof HarnessRunCreateSchemaDefinition>;
export interface HarnessRunCreateSchemaInput extends z.input<typeof HarnessRunCreateSchemaDefinition> {
}
/**
 * Request one research run
 *
 * @openapiSchema HarnessRunCreate
 * @endpoint POST /v1/research-runs
 * @endpoint POST /v1/research/runs
 * @contractShape harness.run-create
 * @contractRole canonical
 */
export declare const HarnessRunCreateSchema: z.ZodType<HarnessRunCreateDefinition, HarnessRunCreateSchemaInput>;
export type HarnessRunCreate = z.infer<typeof HarnessRunCreateSchema>;
export {};
//# sourceMappingURL=run-create.d.ts.map