import { z } from "zod/v4";
declare const UniqueIdTypeAliasSchemaDefinition: z.ZodObject<{
    alias: z.ZodArray<z.ZodString>;
    canonical: z.ZodString;
    label: z.ZodString;
    ownerScope: z.ZodArray<z.ZodEnum<{
        entity: "entity";
        person: "person";
    }>>;
    pattern: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type UniqueIdTypeAliasDefinition = z.infer<typeof UniqueIdTypeAliasSchemaDefinition>;
/**
 * Canonical uniqueId type value plus its label, accepted aliases, owner scope, and format pattern.
 *
 * @openapiSchema UniqueIdTypeAlias
 * @endpoint GET /v1/unique-ids/types
 * @contractShape unique.id-type-alias
 * @contractRole canonical
 */
export declare const UniqueIdTypeAliasSchema: z.ZodType<UniqueIdTypeAliasDefinition>;
export type UniqueIdTypeAlias = z.infer<typeof UniqueIdTypeAliasSchema>;
export {};
//# sourceMappingURL=id-type-alias.d.ts.map