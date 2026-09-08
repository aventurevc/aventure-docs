// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const StrictUrlLookupConflictSchemaDefinition = z.object({
    /** Every entity id that currently owns the normalized URL. May be empty when the conflict is between persons; combined with candidatePersonId always > 1. */
    candidateEntityId: z.array(z.uuid()),
    /** Every person id that currently owns the normalized URL. May be empty when the conflict is between entities; combined with candidateEntityId always > 1. */
    candidatePersonId: z.array(z.uuid()),
    /** Human-readable hint describing which disambiguating query parameters to add. */
    hint: z.string(),
    /** Normalized URL match key the lookup resolved against. Null when normalization could not produce a stable key. */
    normalizedUrl: z.string().nullish(),
    /** Raw URL the caller queried. */
    url: z.string(),
    /** URL type the caller specified, or null if the lookup did not constrain by urlType. */
    urlType: z.string().nullish(),
});
/**
 * Typed extension on ProblemDetail.details for HTTP 409 when a strict URL lookup (GET /v1/entities/detail?url=...) resolves to more than one current owner. The candidate lists return every current owner that matches the normalized URL key; the caller must add disambiguating signals (urlType, typeRecord, slug) to resolve to a single owner.
 *
 * @openapiSchema StrictUrlLookupConflict
 * @standardProblemResponse
 * @usedBySchema DomainConflictDetailsSchema
 * @contractShape strict.url-lookup-conflict
 * @contractRole canonical
 */
export const StrictUrlLookupConflictSchema = StrictUrlLookupConflictSchemaDefinition;
//# sourceMappingURL=url-lookup-conflict.js.map