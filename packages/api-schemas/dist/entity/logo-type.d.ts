import { z } from "zod/v4";
/**
 * Distinguishes square icon vs standard/horizontal entity logo
 *
 * @openapiSchema EntityLogoType
 * @endpoint GET /v1/media
 * @endpoint GET /v1/entities/{entityId}/media/logo
 * @contractShape entity.logo-type
 * @contractRole canonical
 */
export declare const EntityLogoTypeSchema: z.ZodEnum<{
    SQUARE: "SQUARE";
    STANDARD: "STANDARD";
}>;
export type EntityLogoType = z.infer<typeof EntityLogoTypeSchema>;
//# sourceMappingURL=logo-type.d.ts.map