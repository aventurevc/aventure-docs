import { z } from "zod/v4";
/**
 * URL matching mode for URL-backed filters and duplicate checks.
 *
 * @openapiSchema UrlMatchMode
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/summary
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/entities/filters/search
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityFilterSchema
 * @usedBySchema EntityListFilterSchema
 * @contractShape url.match-mode
 * @contractRole canonical
 */
export declare const UrlMatchModeSchema: z.ZodEnum<{
    domain: "domain";
    hostPath: "hostPath";
}>;
export type UrlMatchMode = z.infer<typeof UrlMatchModeSchema>;
//# sourceMappingURL=match-mode.d.ts.map