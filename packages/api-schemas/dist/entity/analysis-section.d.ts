import { z } from "zod/v4";
declare const EntityAnalysisSectionSchemaDefinition: z.ZodObject<{
    citation: z.ZodArray<z.ZodType<{
        quote: string;
        sourceDocumentId: string;
    }, import("./analysis-citation.ts").EntityAnalysisCitationSchemaInput, z.core.$ZodTypeInternals<{
        quote: string;
        sourceDocumentId: string;
    }, import("./analysis-citation.ts").EntityAnalysisCitationSchemaInput>>>;
    figure: z.ZodOptional<z.ZodArray<z.ZodType<{
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
    }, import("./analysis-figure.ts").EntityAnalysisFigureSchemaInput, z.core.$ZodTypeInternals<{
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
    }, import("./analysis-figure.ts").EntityAnalysisFigureSchemaInput>>>>;
    key: z.ZodString;
    origin: z.ZodUnion<readonly [z.ZodEnum<{
        AGENT: "AGENT";
        USER: "USER";
    }>, z.ZodString]> & {
        enum: {
            AGENT: "AGENT";
            USER: "USER";
        };
    };
    paragraph: z.ZodArray<z.ZodType<{
        label?: string | null | undefined;
        text: string;
    }, import("./analysis-paragraph.ts").EntityAnalysisParagraphSchemaInput, z.core.$ZodTypeInternals<{
        label?: string | null | undefined;
        text: string;
    }, import("./analysis-paragraph.ts").EntityAnalysisParagraphSchemaInput>>>;
    title: z.ZodString;
}, z.core.$strip>;
type EntityAnalysisSectionDefinition = z.infer<typeof EntityAnalysisSectionSchemaDefinition>;
export interface EntityAnalysisSectionSchemaInput extends z.input<typeof EntityAnalysisSectionSchemaDefinition> {
}
/**
 * One unverified analysis section; replace it by its snippet type key.
 *
 * @openapiSchema EntityAnalysisSection
 * @endpoint GET /v1/research-runs/{runId}/draft
 * @endpoint GET /v1/research/runs/{runId}/draft
 * @endpoint PUT /v1/research-runs/{runId}/draft/sections/{sectionKey}
 * @endpoint PUT /v1/research/runs/{runId}/draft/sections/{sectionKey}
 * @usedBySchema EntityAnalysisDraftSchema
 * @contractShape entity.analysis-section
 * @contractRole canonical
 */
export declare const EntityAnalysisSectionSchema: z.ZodType<EntityAnalysisSectionDefinition, EntityAnalysisSectionSchemaInput>;
export type EntityAnalysisSection = z.infer<typeof EntityAnalysisSectionSchema>;
export {};
//# sourceMappingURL=analysis-section.d.ts.map