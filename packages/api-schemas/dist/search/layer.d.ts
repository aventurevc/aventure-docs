import { z } from "zod/v4";
/**
 * Optional answer layer for a natural-language entity search. `passage` adds the text passages, from public research snippets and linked news, that best answer the question about the subject entities, their peers, or the top results; `synthesis` adds a written answer grounded only in those records and passages, citing each, and implies `passage`. A competitor, market, or provider question ("who competes with X", "top X companies", "who provides X") is always ranked by the judged probability that each entity answers it, so `judgment` adds nothing beyond that; `web` adds web search evidence, and the companies those results name, before judging. Other questions ignore `judgment` and `web`.
 *
 * @openapiSchema SearchLayer
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @contractShape search.layer
 * @contractRole canonical
 */
export declare const SearchLayerSchema: z.ZodEnum<{
    judgment: "judgment";
    passage: "passage";
    synthesis: "synthesis";
    web: "web";
}>;
export type SearchLayer = z.infer<typeof SearchLayerSchema>;
//# sourceMappingURL=layer.d.ts.map