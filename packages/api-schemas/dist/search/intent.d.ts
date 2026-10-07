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
export declare const SearchIntentSchema: z.ZodEnum<{
    comparison: "comparison";
    discovery: "discovery";
    peer: "peer";
    profile: "profile";
}>;
export type SearchIntent = z.infer<typeof SearchIntentSchema>;
//# sourceMappingURL=intent.d.ts.map