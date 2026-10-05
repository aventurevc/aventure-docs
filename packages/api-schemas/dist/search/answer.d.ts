import { z } from "zod/v4";
/**
 * Written answer to a natural-language question, grounded only in the response's entity records and passages. LOW confidence with no citation means the evidence does not answer the question.
 *
 * @openapiSchema SearchAnswer
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @usedBySchema NaturalSearchResultSchema
 * @contractShape search.answer
 * @contractRole canonical
 */
export declare const SearchAnswerSchema: z.ZodObject<{
    citation: z.ZodArray<z.ZodType<{
        entityId: string;
        source: "entityRecord" | "newsArticle" | "researchSnippet";
        sourceId: string;
    }, unknown, z.core.$ZodTypeInternals<{
        entityId: string;
        source: "entityRecord" | "newsArticle" | "researchSnippet";
        sourceId: string;
    }, unknown>>>;
    confidence: z.ZodEnum<{
        HIGH: "HIGH";
        LOW: "LOW";
        MEDIUM: "MEDIUM";
    }>;
    text: z.ZodString;
}, z.core.$strip>;
export type SearchAnswer = z.infer<typeof SearchAnswerSchema>;
//# sourceMappingURL=answer.d.ts.map