import { z } from "zod/v4";
/**
 * Google's direct answer shown above the results
 *
 * @openapiSchema SearchAnswerBox
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/web/search
 * @usedBySchema WebSearchSchema
 * @contractShape search.answer-box
 * @contractRole canonical
 */
export declare const SearchAnswerBoxSchema: z.ZodObject<{
    answer: z.ZodString;
    snippet: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type SearchAnswerBox = z.infer<typeof SearchAnswerBoxSchema>;
//# sourceMappingURL=answer-box.d.ts.map