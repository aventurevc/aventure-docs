import { z } from "zod/v4";
declare const EntityFilterHeadquartersCountrySchemaDefinition: z.ZodObject<{
    country: z.ZodString;
    state: z.ZodArray<z.ZodType<{
        city: string[];
        state: string;
    }, import("./filter-headquarters-state-city.ts").EntityFilterHeadquartersStateCitySchemaInput, z.core.$ZodTypeInternals<{
        city: string[];
        state: string;
    }, import("./filter-headquarters-state-city.ts").EntityFilterHeadquartersStateCitySchemaInput>>>;
}, z.core.$strip>;
type EntityFilterHeadquartersCountryDefinition = z.infer<typeof EntityFilterHeadquartersCountrySchemaDefinition>;
export interface EntityFilterHeadquartersCountrySchemaInput extends z.input<typeof EntityFilterHeadquartersCountrySchemaDefinition> {
}
/**
 * Country with its states (and optionally cities)
 *
 * @openapiSchema EntityFilterHeadquartersCountry
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @endpoint POST /v1/entities/filters/refine
 * @usedBySchema EntityFilterHeadquartersOptionSetSchema
 * @contractShape entity.filter-headquarters-country
 * @contractRole canonical
 */
export declare const EntityFilterHeadquartersCountrySchema: z.ZodType<EntityFilterHeadquartersCountryDefinition, EntityFilterHeadquartersCountrySchemaInput>;
export type EntityFilterHeadquartersCountry = z.infer<typeof EntityFilterHeadquartersCountrySchema>;
export {};
//# sourceMappingURL=filter-headquarters-country.d.ts.map