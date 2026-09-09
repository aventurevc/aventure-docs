import { z } from "zod/v4";
declare const EntityFilterChoiceSchemaDefinition: z.ZodObject<{
    label: z.ZodString;
    scope: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        max: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        min: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strict>>>;
    value: z.ZodString;
}, z.core.$strip>;
type EntityFilterChoiceDefinition = z.infer<typeof EntityFilterChoiceSchemaDefinition>;
/**
 * Filter choice payload served by filter endpoints
 *
 * @openapiSchema EntityFilterChoice
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @endpoint POST /v1/entities/filters/refine
 * @usedBySchema EntityFilterEntrySchema
 * @contractShape entity.filter-choice
 * @contractRole canonical
 */
export declare const EntityFilterChoiceSchema: z.ZodType<EntityFilterChoiceDefinition>;
export type EntityFilterChoice = z.infer<typeof EntityFilterChoiceSchema>;
export {};
//# sourceMappingURL=filter-choice.d.ts.map