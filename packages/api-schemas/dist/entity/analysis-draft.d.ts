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
    verification: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        section: z.ZodArray<z.ZodType<{
            failure: {
                passage: string;
                problem: "citedLegalPage" | "invalidSection" | "missingCitation" | "notApplicable" | "prose" | "quoteNotFound" | "restatement" | "unreadSource";
                proseProblem?: string | null | undefined;
                reason: string;
                rule: string;
            }[];
            key: string;
            outcome: "failed" | "passed";
            passage?: string | null | undefined;
            problem?: "citedLegalPage" | "invalidSection" | "missingCitation" | "notApplicable" | "prose" | "quoteNotFound" | "restatement" | "unreadSource" | null | undefined;
            prosePolicyVersion?: string | null | undefined;
            proseProblem?: string | null | undefined;
            rule?: string | null | undefined;
            violation?: string | null | undefined;
        }, import("./analysis-section-verification.ts").EntityAnalysisSectionVerificationSchemaInput, z.core.$ZodTypeInternals<{
            failure: {
                passage: string;
                problem: "citedLegalPage" | "invalidSection" | "missingCitation" | "notApplicable" | "prose" | "quoteNotFound" | "restatement" | "unreadSource";
                proseProblem?: string | null | undefined;
                reason: string;
                rule: string;
            }[];
            key: string;
            outcome: "failed" | "passed";
            passage?: string | null | undefined;
            problem?: "citedLegalPage" | "invalidSection" | "missingCitation" | "notApplicable" | "prose" | "quoteNotFound" | "restatement" | "unreadSource" | null | undefined;
            prosePolicyVersion?: string | null | undefined;
            proseProblem?: string | null | undefined;
            rule?: string | null | undefined;
            violation?: string | null | undefined;
        }, import("./analysis-section-verification.ts").EntityAnalysisSectionVerificationSchemaInput>>>;
        version: z.ZodInt;
    }, z.core.$strip>>>;
    version: z.ZodInt;
}, z.core.$strip>;
type EntityAnalysisDraftDefinition = z.infer<typeof EntityAnalysisDraftSchemaDefinition>;
export interface EntityAnalysisDraftSchemaInput extends z.input<typeof EntityAnalysisDraftSchemaDefinition> {
}
/**
 * Private analysis for one research run, with section acceptance outcomes.
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