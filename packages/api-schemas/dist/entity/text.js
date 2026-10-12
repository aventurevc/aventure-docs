// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ContentComplianceSchema } from "../content/compliance.js";
import { EntityPersonOwnerSchema } from "./person-owner.js";
const EntityTextSchemaDefinition = z.object({
    /** Derived character/word counts and governed-contract compliance for this text row; null when not evaluated. */
    compliance: ContentComplianceSchema.nullish(),
    createdAt: z.iso.datetime({ offset: true }).nullish(),
    /** Type-safe identifier for text records */
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
    /** Value object for text type classification */
    textType: z.string(),
    updatedAt: z.iso.datetime({ offset: true }).nullish(),
});
/**
 * Canonical entity/person text read record
 *
 * @openapiSchema EntityText
 * @endpoint GET /v1/entities/{entityId}/texts
 * @endpoint GET /v1/entities/{entityId}/texts/{textId}
 * @endpoint GET /v1/people/{personId}/texts
 * @endpoint GET /v1/people/{personId}/texts/{textId}
 * @usedBySchema PageEntityTextSchema
 * @contractShape entity.text
 * @contractRole canonical
 */
export const EntityTextSchema = EntityTextSchemaDefinition;
//# sourceMappingURL=text.js.map