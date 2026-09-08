import { z } from "zod/v4";
declare const UrlTypeAliasSchemaDefinition: z.ZodObject<{
    alias: z.ZodArray<z.ZodString>;
    canonical: z.ZodString;
    hostDomain: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
type UrlTypeAliasDefinition = z.infer<typeof UrlTypeAliasSchemaDefinition>;
/**
 * Canonical urlType value plus accepted alias and platform host tokens.
 *
 * @openapiSchema UrlTypeAlias
 * @endpoint GET /v1/entities/urls/types
 * @endpoint GET /v1/people/urls/types
 * @endpoint GET /v1/url-types
 * @contractShape url.type-alias
 * @contractRole canonical
 */
export declare const UrlTypeAliasSchema: z.ZodType<UrlTypeAliasDefinition>;
export type UrlTypeAlias = z.infer<typeof UrlTypeAliasSchema>;
export {};
//# sourceMappingURL=type-alias.d.ts.map