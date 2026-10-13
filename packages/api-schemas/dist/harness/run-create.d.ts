import { z } from "zod/v4";
declare const HarnessRunCreateSchemaDefinition: z.ZodObject<{
    finding: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<{
        gateId?: string | null | undefined;
        quote: string;
        sourceUrl: string;
        statement: string;
    }, import("../research/finding.ts").ResearchFindingSchemaInput, z.core.$ZodTypeInternals<{
        gateId?: string | null | undefined;
        quote: string;
        sourceUrl: string;
        statement: string;
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
 * Create one harness enrichment run
 *
 * @openapiSchema HarnessRunCreate
 * @endpoint POST /v1/harness/runs
 * @contractShape harness.run-create
 * @contractRole canonical
 */
export declare const HarnessRunCreateSchema: z.ZodType<HarnessRunCreateDefinition, HarnessRunCreateSchemaInput>;
export type HarnessRunCreate = z.infer<typeof HarnessRunCreateSchema>;
export {};
//# sourceMappingURL=run-create.d.ts.map