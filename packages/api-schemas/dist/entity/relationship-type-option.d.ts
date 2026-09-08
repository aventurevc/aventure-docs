import { z } from "zod/v4";
declare const EntityRelationshipTypeOptionSchemaDefinition: z.ZodObject<{
    acquisitionManaged: z.ZodBoolean;
    alias: z.ZodArray<z.ZodString>;
    canonical: z.ZodString;
    description: z.ZodString;
    direction: z.ZodEnum<{
        directional: "directional";
        symmetric: "symmetric";
        typeOriented: "typeOriented";
    }>;
    exclusiveRelationshipType: z.ZodArray<z.ZodString>;
    joinable: z.ZodBoolean;
    pairRule: z.ZodString;
    readOnly: z.ZodBoolean;
    sourceRole: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    targetRole: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type EntityRelationshipTypeOptionDefinition = z.infer<typeof EntityRelationshipTypeOptionSchemaDefinition>;
/**
 * Published relationship catalog row. Directional values use sourceRole and targetRole to name sourceEntityId and targetEntityId.
 *
 * @openapiSchema EntityRelationshipTypeOption
 * @endpoint GET /v1/entities/relationships/types
 * @contractShape entity.relationship-type-option
 * @contractRole canonical
 */
export declare const EntityRelationshipTypeOptionSchema: z.ZodType<EntityRelationshipTypeOptionDefinition>;
export type EntityRelationshipTypeOption = z.infer<typeof EntityRelationshipTypeOptionSchema>;
export {};
//# sourceMappingURL=relationship-type-option.d.ts.map