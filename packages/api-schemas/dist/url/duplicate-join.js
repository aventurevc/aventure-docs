// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityPersonOwnerSchema } from "../entity/person-owner.js";
const UrlDuplicateJoinSchemaDefinition = z.object({
    /** Owner of the URL: either entityId or personId is populated depending on the owner kind. Use the populated id to read or update the owner's URL. */
    owner: EntityPersonOwnerSchema,
    /** Identifier of the existing URL record that already holds this address. */
    urlId: z.int(),
});
/**
 * Entity or person that currently owns a normalized URL.
 *
 * @openapiSchema UrlDuplicateJoin
 * @standardProblemResponse
 * @usedBySchema UrlDuplicateConflictSchema
 * @contractShape url.duplicate-join
 * @contractRole canonical
 */
export const UrlDuplicateJoinSchema = UrlDuplicateJoinSchemaDefinition;
//# sourceMappingURL=duplicate-join.js.map