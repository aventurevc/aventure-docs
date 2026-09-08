import { z } from "zod/v4";
declare const EntityTypeAliasSchemaDefinition: z.ZodObject<{
    alias: z.ZodArray<z.ZodString>;
    canonical: z.ZodString;
    canOwnPublicProductServiceRoute: z.ZodBoolean;
    description: z.ZodString;
    productServiceRouteSegment: z.ZodString;
    publicPathPrefix: z.ZodString;
}, z.core.$strip>;
type EntityTypeAliasDefinition = z.infer<typeof EntityTypeAliasSchemaDefinition>;
/**
 * Canonical EntityType value, accepted aliases, and public routing metadata.
 *
 * @openapiSchema EntityTypeAlias
 * @endpoint GET /v1/entities/types
 * @contractShape entity.type-alias
 * @contractRole canonical
 */
export declare const EntityTypeAliasSchema: z.ZodType<EntityTypeAliasDefinition>;
export type EntityTypeAlias = z.infer<typeof EntityTypeAliasSchema>;
export {};
//# sourceMappingURL=type-alias.d.ts.map