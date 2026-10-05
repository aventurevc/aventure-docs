// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Optional answer layer for a natural-language entity search. `passage` adds the text passages, from public research snippets and linked news, that best answer the question about the subject entities, their peers, or the top results; `synthesis` adds a written answer grounded only in those records and passages, citing each, and implies `passage`.
 *
 * @openapiSchema SearchLayer
 * @endpoint POST /v1/search/natural/entities
 * @contractShape search.layer
 * @contractRole canonical
 */
export const SearchLayerSchema = z.enum(["passage", "synthesis"]);
//# sourceMappingURL=layer.js.map