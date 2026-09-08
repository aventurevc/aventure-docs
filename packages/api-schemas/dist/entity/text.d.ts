import { z } from "zod/v4";
declare const EntityTextSchemaDefinition: z.ZodObject<{
    compliance: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        characterCount: z.ZodInt;
        meetsRequirements: z.ZodBoolean;
        violation: z.ZodArray<z.ZodString>;
        wordCount: z.ZodInt;
    }, z.core.$strip>>>;
    createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    id: z.ZodInt;
    isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isPrimary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    language: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    owner: z.ZodObject<{
        entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    }, z.core.$strip>;
    source: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    text: z.ZodString;
    textName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    textType: z.ZodString;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
}, z.core.$strip>;
type EntityTextDefinition = z.infer<typeof EntityTextSchemaDefinition>;
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
export declare const EntityTextSchema: z.ZodType<EntityTextDefinition>;
export type EntityText = z.infer<typeof EntityTextSchema>;
export {};
//# sourceMappingURL=text.d.ts.map