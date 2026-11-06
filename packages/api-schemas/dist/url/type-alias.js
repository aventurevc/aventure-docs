// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const UrlTypeAliasSchemaDefinition = z.object({
    /** Other spellings accepted for this URL type. */
    alias: z.array(z.string()),
    /** Canonical urlType value. */
    canonical: z.string(),
    /** Host domains used by URL inference for this urlType. */
    hostDomain: z.array(z.string()),
});
/**
 * A URL type, its accepted spellings, and the website hosts that identify it.
 *
 * @openapiSchema UrlTypeAlias
 * @endpoint GET /v1/url-types
 * @contractShape url.type-alias
 * @contractRole canonical
 */
export const UrlTypeAliasSchema = UrlTypeAliasSchemaDefinition;
//# sourceMappingURL=type-alias.js.map