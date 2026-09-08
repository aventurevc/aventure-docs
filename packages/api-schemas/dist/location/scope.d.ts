import { z } from "zod/v4";
/**
 * Geographic scope tier for location directory
 *
 * @openapiSchema LocationScope
 * @endpoint GET /v1/addresses/locations/{scope}
 * @endpoint POST /v1/addresses/locations/batch
 * @usedBySchema LocationIdentifierSchema
 * @contractShape location.scope
 * @contractRole canonical
 */
export declare const LocationScopeSchema: z.ZodEnum<{
    city: "city";
    country: "country";
    state: "state";
}>;
export type LocationScope = z.infer<typeof LocationScopeSchema>;
//# sourceMappingURL=scope.d.ts.map