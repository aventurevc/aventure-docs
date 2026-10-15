// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AddressAssociationRoleSchema } from "./association-role.js";
import { EntityPersonOwnerSchema } from "../entity/person-owner.js";
const AddressLinkSchemaDefinition = z.object({
    /** Association join id, scoped to the entity or person owner kind */
    id: z.int(),
    owner: EntityPersonOwnerSchema,
    /** Association role; null means unclassified */
    role: AddressAssociationRoleSchema.nullish(),
});
/**
 * One current or historical owner association to an address
 *
 * @openapiSchema AddressLink
 * @endpoint GET /v1/addresses/{addressId}/links
 * @usedBySchema CursorSliceAddressLinkSchema
 * @contractShape address.link
 * @contractRole canonical
 */
export const AddressLinkSchema = AddressLinkSchemaDefinition;
//# sourceMappingURL=link.js.map