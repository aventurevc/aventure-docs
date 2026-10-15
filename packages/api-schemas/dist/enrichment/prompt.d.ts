import { z } from "zod/v4";
declare const EnrichmentPromptSchemaDefinition: z.ZodObject<{
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
    userPrompt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type EnrichmentPromptDefinition = z.infer<typeof EnrichmentPromptSchemaDefinition>;
export interface EnrichmentPromptSchemaInput extends z.input<typeof EnrichmentPromptSchemaDefinition> {
}
/**
 * Optional steering prompt or cited findings for one company, product, or service enrichment run
 *
 * @openapiSchema EnrichmentPrompt
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @contractShape enrichment.prompt
 * @contractRole canonical
 */
export declare const EnrichmentPromptSchema: z.ZodType<EnrichmentPromptDefinition, EnrichmentPromptSchemaInput>;
export type EnrichmentPrompt = z.infer<typeof EnrichmentPromptSchema>;
export {};
//# sourceMappingURL=prompt.d.ts.map