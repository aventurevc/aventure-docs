import { z } from "zod/v4";
declare const PersonEnrichmentPromptSchemaDefinition: z.ZodObject<{
    userPrompt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type PersonEnrichmentPromptDefinition = z.infer<typeof PersonEnrichmentPromptSchemaDefinition>;
export interface PersonEnrichmentPromptSchemaInput extends z.input<typeof PersonEnrichmentPromptSchemaDefinition> {
}
/**
 * Optional steering prompt for one person enrichment run
 *
 * @openapiSchema PersonEnrichmentPrompt
 * @endpoint POST /v1/people/{personId}/enrichments
 * @contractShape person.enrichment-prompt
 * @contractRole canonical
 */
export declare const PersonEnrichmentPromptSchema: z.ZodType<PersonEnrichmentPromptDefinition, PersonEnrichmentPromptSchemaInput>;
export type PersonEnrichmentPrompt = z.infer<typeof PersonEnrichmentPromptSchema>;
export {};
//# sourceMappingURL=enrichment-prompt.d.ts.map