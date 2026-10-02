import { z } from "zod/v4";
declare const EnrichmentPromptSchemaDefinition: z.ZodObject<{
    userPrompt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type EnrichmentPromptDefinition = z.infer<typeof EnrichmentPromptSchemaDefinition>;
/**
 * Optional steering for one company or person enrichment run
 *
 * @openapiSchema EnrichmentPrompt
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @contractShape enrichment.prompt
 * @contractRole canonical
 */
export declare const EnrichmentPromptSchema: z.ZodType<EnrichmentPromptDefinition>;
export type EnrichmentPrompt = z.infer<typeof EnrichmentPromptSchema>;
export {};
//# sourceMappingURL=prompt.d.ts.map