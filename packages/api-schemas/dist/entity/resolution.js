// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityDetailSchema } from "./detail.js";
const EntityResolutionSchemaDefinition = z.object({
    /** Entity ids that all currently own the queried URL when status is AMBIGUOUS; empty otherwise. Re-query a single id to disambiguate. */
    candidateEntityId: z.array(z.uuid()),
    /** Full entity detail when status is MATCHED; absent otherwise. */
    detail: EntityDetailSchema.nullish(),
    /** Raw identifier exactly as queried (UUID string, slug, or URL). */
    input: z.string(),
    /** Which identifier kind this row was queried by. */
    inputType: z.enum(["ID", "SLUG", "URL"]),
    /** Resolution outcome for this input. */
    status: z.enum(["MATCHED", "AMBIGUOUS", "MISSING"]),
});
/**
 * Resolution of one queried identifier (id, slug, or current joined URL) to its current entity. Echoes the raw input; matched rows carry the full detail, ambiguous rows carry the conflicting candidate ids, missing rows carry neither.
 *
 * @openapiSchema EntityResolution
 * @endpoint POST /v1/entities/detail/resolve
 * @contractShape entity.resolution
 * @contractRole canonical
 */
export const EntityResolutionSchema = EntityResolutionSchemaDefinition;
//# sourceMappingURL=resolution.js.map