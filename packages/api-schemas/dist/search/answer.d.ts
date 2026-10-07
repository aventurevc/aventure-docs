import { z } from "zod/v4";
/**
 * Written answer to a natural-language question, grounded only in the response's entity records and passages. LOW confidence with no paragraph means the evidence does not answer the question.
 *
 * @openapiSchema SearchAnswer
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema NaturalSearchResultSchema
 * @contractShape search.answer
 * @contractRole canonical
 */
export declare const SearchAnswerSchema: z.ZodObject<{
    citation: z.ZodArray<z.ZodType<{
        entityId: string;
        source: string;
        sourceId: string;
    }, unknown, z.core.$ZodTypeInternals<{
        entityId: string;
        source: string;
        sourceId: string;
    }, unknown>>>;
    confidence: z.ZodEnum<{
        HIGH: "HIGH";
        LOW: "LOW";
        MEDIUM: "MEDIUM";
    }>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    paragraph: z.ZodArray<z.ZodType<{
        citation: {
            entityId: string;
            source: string;
            sourceId: string;
        }[];
        text: string;
        topic?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        citation: {
            entityId: string;
            source: string;
            sourceId: string;
        }[];
        text: string;
        topic?: string | null | undefined;
    }, unknown>>>;
    relatedQuery: z.ZodArray<z.ZodString>;
    text: z.ZodString;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type SearchAnswer = z.infer<typeof SearchAnswerSchema>;
//# sourceMappingURL=answer.d.ts.map