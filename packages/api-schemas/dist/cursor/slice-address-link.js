// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AddressLinkSchema } from "../address/link.js";
const CursorSliceAddressLinkSchemaDefinition = z.object({
    content: z.array(AddressLinkSchema),
    nextCursor: z.string().nullish(),
});
/**
 * @openapiSchema CursorSliceAddressLink
 * @endpoint GET /v1/addresses/{addressId}/links
 * @contractShape cursor.slice-address-link
 * @contractRole canonical
 */
export const CursorSliceAddressLinkSchema = CursorSliceAddressLinkSchemaDefinition;
//# sourceMappingURL=slice-address-link.js.map