// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ContentComplianceSchema } from "../content/compliance.js";
import { EntityPersonOwnerSchema } from "./person-owner.js";
const EntityTextSchemaDefinition = z.object({
    /** Character and word counts for this text and whether it meets its type's length and paragraph rules; null when not checked. */
    compliance: ContentComplianceSchema.nullish(),
    createdAt: z.iso.datetime({ offset: true }).nullish(),
    /** Expanded row written with this summary by expandedWriterBrief, including its compliance. Null when this response does not represent a paired create. */
    get expandedText() {
        return EntityTextSchemaDefinition.nullish();
    },
    /** Id of the expanded row a summary create wrote in the same transaction from expandedWriterBrief; read it at GET /v1/entities/{entityId}/texts/{textId}. Null on every other response. */
    expandedTextId: z.int().nullish(),
    /** Identifier of a text record */
    id: z.int(),
    /** Whether this is the owner's current text of its textType; setting it clears the flag on the owner's other texts of that type. */
    isCurrent: z.boolean().nullish(),
    /** Whether this is the owner's primary text of its textType; setting it clears the flag on the owner's other texts of that type. */
    isPrimary: z.boolean().nullish(),
    language: z.string().nullish(),
    /** Owning record, nested ids only: owner.entityId or owner.personId — exactly one is set, and no name fields. Writes are scoped by the owning entity/person route; owner is never a write field. */
    owner: EntityPersonOwnerSchema,
    text: z.string(),
    textName: z.string().nullish(),
    /** Kind of text record */
    textType: z.string(),
    updatedAt: z.iso.datetime({ offset: true }).nullish(),
});
/**
 * A text record, such as a description, of an entity or person.
 *
 * @openapiSchema EntityText
 * @endpoint GET /v1/entities/{entityId}/texts
 * @endpoint GET /v1/entities/{entityId}/texts/{textId}
 * @usedBySchema PageEntityTextSchema
 * @contractShape entity.text
 * @contractRole canonical
 */
export const EntityTextSchema = EntityTextSchemaDefinition;
//# sourceMappingURL=text.js.map