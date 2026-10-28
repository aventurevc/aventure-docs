import { z } from "zod/v4";
declare const EntityAnalysisDraftSchemaDefinition: z.ZodObject<{
    entityId: z.ZodUUID;
    runId: z.ZodUUID;
    section: z.ZodArray<z.ZodType<{
        citation: {
            quote: string;
            sourceDocumentId: string;
        }[];
        figure?: {
            column?: string[] | undefined;
            entry: {
                cell: {
                    citation: number;
                    excerpt: string;
                }[];
                label: string;
            }[];
            title: string;
            type: string;
        }[] | undefined;
        key: string;
        origin: string;
        paragraph: {
            label?: string | null | undefined;
            text: string;
        }[];
        title: string;
    }, import("./analysis-section.ts").EntityAnalysisSectionSchemaInput, z.core.$ZodTypeInternals<{
        citation: {
            quote: string;
            sourceDocumentId: string;
        }[];
        figure?: {
            column?: string[] | undefined;
            entry: {
                cell: {
                    citation: number;
                    excerpt: string;
                }[];
                label: string;
            }[];
            title: string;
            type: string;
        }[] | undefined;
        key: string;
        origin: string;
        paragraph: {
            label?: string | null | undefined;
            text: string;
        }[];
        title: string;
    }, import("./analysis-section.ts").EntityAnalysisSectionSchemaInput>>>;
    version: z.ZodInt;
}, z.core.$strip>;
type EntityAnalysisDraftDefinition = z.infer<typeof EntityAnalysisDraftSchemaDefinition>;
export interface EntityAnalysisDraftSchemaInput extends z.input<typeof EntityAnalysisDraftSchemaDefinition> {
}
/**
 * Private, unverified analysis for one research run.
 *
 * @openapiSchema EntityAnalysisDraft
 * @endpoint GET /v1/research-runs/{runId}/draft
 * @endpoint GET /v1/research/runs/{runId}/draft
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @contractShape entity.analysis-draft
 * @contractRole canonical
 */
export declare const EntityAnalysisDraftSchema: z.ZodType<EntityAnalysisDraftDefinition, EntityAnalysisDraftSchemaInput>;
export type EntityAnalysisDraft = z.infer<typeof EntityAnalysisDraftSchema>;
export {};
//# sourceMappingURL=analysis-draft.d.ts.map