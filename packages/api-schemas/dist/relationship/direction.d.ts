import { z } from "zod/v4";
/**
 * How entities relationships join interprets sourceEntityId and targetEntityId.
 *
 * @openapiSchema RelationshipDirection
 * @endpoint GET /v1/entities/relationships/types
 * @usedBySchema EntityRelationshipTypeOptionSchema
 * @contractShape relationship.direction
 * @contractRole canonical
 */
export declare const RelationshipDirectionSchema: z.ZodEnum<{
    directional: "directional";
    symmetric: "symmetric";
    typeOriented: "typeOriented";
}>;
export type RelationshipDirection = z.infer<typeof RelationshipDirectionSchema>;
//# sourceMappingURL=direction.d.ts.map