import { z } from "zod/v4";
/**
 * Entity logo slot: SQUARE is the square icon read back as `core.image.logoSquare`; STANDARD is the horizontal wordmark read back as `core.image.logo`.
 *
 * @openapiSchema EntityLogoType
 * @endpoint GET /v1/entities/{entityId}/logo
 * @contractShape entity.logo-type
 * @contractRole canonical
 */
export declare const EntityLogoTypeSchema: z.ZodEnum<{
    SQUARE: "SQUARE";
    STANDARD: "STANDARD";
}>;
export type EntityLogoType = z.infer<typeof EntityLogoTypeSchema>;
//# sourceMappingURL=logo-type.d.ts.map