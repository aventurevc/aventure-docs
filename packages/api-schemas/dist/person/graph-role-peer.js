// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntitySchema } from "../entity/entity.js";
import { PersonGraphMemberSchema } from "./graph-member.js";
const PersonGraphRolePeerSchemaDefinition = z.object({
    /** Entity where the peer holds the matched title (association projection) */
    entity: EntitySchema,
    /** Role-peer person rail member; titleName carries the matched title */
    person: PersonGraphMemberSchema,
});
/**
 * Person holding the same title at a sector-comparable entity
 *
 * @openapiSchema PersonGraphRolePeer
 * @endpoint GET /v1/people/{personId}/graph
 * @usedBySchema PersonGraphSchema
 * @contractShape person.graph-role-peer
 * @contractRole canonical
 */
export const PersonGraphRolePeerSchema = PersonGraphRolePeerSchemaDefinition;
//# sourceMappingURL=graph-role-peer.js.map