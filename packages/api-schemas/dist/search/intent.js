// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Question shape the planner read from a natural-language search. `discovery` lists entities matching a description; `profile` asks what a named entity does, offers, or how it stands; `peer` asks for a named entity's competitors or look-alikes; `comparison` asks how two or more named entities compare.
 *
 * @openapiSchema SearchIntent
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema SearchInterpretationSchema
 * @contractShape search.intent
 * @contractRole canonical
 */
export const SearchIntentSchema = z.enum(["discovery", "profile", "peer", "comparison"]);
//# sourceMappingURL=intent.js.map