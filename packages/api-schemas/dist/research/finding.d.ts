import { z } from "zod/v4";
declare const ResearchFindingSchemaDefinition: z.ZodObject<{
    end: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    gateId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    quote: z.ZodOptional<z.ZodString>;
    sourceDocumentId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    sourceUrl: z.ZodString;
    start: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    statement: z.ZodString;
    writerSurface: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodEnum<{
        BOTH: "BOTH";
        ENTITY_TEXT: "ENTITY_TEXT";
        RESEARCH_SNIPPET: "RESEARCH_SNIPPET";
    }>, z.ZodString]> & {
        enum: {
            BOTH: "BOTH";
            ENTITY_TEXT: "ENTITY_TEXT";
            RESEARCH_SNIPPET: "RESEARCH_SNIPPET";
        };
    }>>;
}, z.core.$strip>;
type ResearchFindingDefinition = z.infer<typeof ResearchFindingSchemaDefinition>;
export interface ResearchFindingSchemaInput extends z.input<typeof ResearchFindingSchemaDefinition> {
}
/**
 * One fact you researched, with the page and exact text that support it. The run checks the quote against the page before it writes the fact.
 *
 * @openapiSchema ResearchFinding
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/research-runs
 * @endpoint POST /v1/research/runs
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema EnrichmentPromptSchema
 * @usedBySchema HarnessRunCreateSchema
 * @usedBySchema WriterBriefSchema
 * @contractShape research.finding
 * @contractRole canonical
 */
export declare const ResearchFindingSchema: z.ZodType<ResearchFindingDefinition, ResearchFindingSchemaInput>;
export type ResearchFinding = z.infer<typeof ResearchFindingSchema>;
export {};
//# sourceMappingURL=finding.d.ts.map