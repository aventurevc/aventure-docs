import { z } from "zod/v4";
declare const EntityFilterHeadquartersStateCitySchemaDefinition: z.ZodObject<{
    city: z.ZodArray<z.ZodString>;
    state: z.ZodString;
}, z.core.$strip>;
type EntityFilterHeadquartersStateCityDefinition = z.infer<typeof EntityFilterHeadquartersStateCitySchemaDefinition>;
/**
 * City within a state
 *
 * @openapiSchema EntityFilterHeadquartersStateCity
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @endpoint POST /v1/entities/filters/refine
 * @usedBySchema EntityFilterHeadquartersCountrySchema
 * @contractShape entity.filter-headquarters-state-city
 * @contractRole canonical
 */
export declare const EntityFilterHeadquartersStateCitySchema: z.ZodType<EntityFilterHeadquartersStateCityDefinition>;
export type EntityFilterHeadquartersStateCity = z.infer<typeof EntityFilterHeadquartersStateCitySchema>;
export {};
//# sourceMappingURL=filter-headquarters-state-city.d.ts.map