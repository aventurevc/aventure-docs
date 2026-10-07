import { z } from "zod/v4";
declare const ResearchFindingSchemaDefinition: z.ZodObject<{
    gateId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    quote: z.ZodString;
    sourceUrl: z.ZodString;
    statement: z.ZodString;
}, z.core.$strip>;
type ResearchFindingDefinition = z.infer<typeof ResearchFindingSchemaDefinition>;
/**
 * One fact you researched, with the page and exact text that support it. The run checks the quote against the page before it writes the fact.
 *
 * @openapiSchema ResearchFinding
 * @endpoint POST /v1/harness/runs
 * @usedBySchema HarnessRunCreateSchema
 * @contractShape research.finding
 * @contractRole canonical
 */
export declare const ResearchFindingSchema: z.ZodType<ResearchFindingDefinition>;
export type ResearchFinding = z.infer<typeof ResearchFindingSchema>;
export {};
//# sourceMappingURL=finding.d.ts.map