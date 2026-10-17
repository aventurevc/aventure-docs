import { z } from "zod/v4";
/**
 * Output surface selected for a sourced writer claim.
 *
 * @openapiSchema WriterClaimSurface
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/research-runs
 * @usedBySchema ResearchFindingSchema
 * @contractShape writer.claim-surface
 * @contractRole canonical
 */
export declare const WriterClaimSurfaceSchema: z.ZodUnion<readonly [z.ZodEnum<{
    BOTH: "BOTH";
    ENTITY_TEXT: "ENTITY_TEXT";
    RESEARCH_SNIPPET: "RESEARCH_SNIPPET";
}>, z.ZodString]> & {
    enum: {
        BOTH: "BOTH";
        ENTITY_TEXT: "ENTITY_TEXT";
        RESEARCH_SNIPPET: "RESEARCH_SNIPPET";
    };
};
export type WriterClaimSurface = z.infer<typeof WriterClaimSurfaceSchema>;
//# sourceMappingURL=claim-surface.d.ts.map