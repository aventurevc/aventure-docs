import { z } from "zod/v4";
declare const UrlTypeAliasSchemaDefinition: z.ZodObject<{
    alias: z.ZodArray<z.ZodString>;
    canonical: z.ZodString;
    hostDomain: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
type UrlTypeAliasDefinition = z.infer<typeof UrlTypeAliasSchemaDefinition>;
export interface UrlTypeAliasSchemaInput extends z.input<typeof UrlTypeAliasSchemaDefinition> {
}
/**
 * A URL type, its accepted spellings, and the website hosts that identify it.
 *
 * @openapiSchema UrlTypeAlias
 * @endpoint GET /v1/url-types
 * @contractShape url.type-alias
 * @contractRole canonical
 */
export declare const UrlTypeAliasSchema: z.ZodType<UrlTypeAliasDefinition, UrlTypeAliasSchemaInput>;
export type UrlTypeAlias = z.infer<typeof UrlTypeAliasSchema>;
export {};
//# sourceMappingURL=type-alias.d.ts.map