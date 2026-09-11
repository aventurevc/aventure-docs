// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityPersonAssociationSchema } from "../entity/person-association.js";
import { PersonSchema } from "./person.js";
import { PersonSimilarityContextSchema } from "./similarity-context.js";
const PersonSimilarityResultSchemaDefinition = z.object({
    /** Current titled association for the similar-person card; null when no current titled role is available. */
    currentRole: EntityPersonAssociationSchema.nullish(),
    person: PersonSchema,
    similarity: PersonSimilarityContextSchema,
});
/**
 * Similar person list row with the provenance that explains why it appears. Rows carry the canonical Person projection; load full detail through the person detail endpoints.
 *
 * @openapiSchema PersonSimilarityResult
 * @endpoint GET /v1/people/{personId}/similar
 * @usedBySchema PagePersonSimilarityResultSchema
 * @contractShape person.similarity-result
 * @contractRole canonical
 */
export const PersonSimilarityResultSchema = PersonSimilarityResultSchemaDefinition;
//# sourceMappingURL=similarity-result.js.map