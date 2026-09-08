import { z } from "zod/v4";
declare const EntityDetailCoverageSlotSchemaDefinition: z.ZodObject<{
    count: z.ZodInt;
    coverage: z.ZodEnum<{
        ABSENT: "ABSENT";
        NOT_EVALUABLE: "NOT_EVALUABLE";
        PRESENT: "PRESENT";
    }>;
    gateId: z.ZodString;
    howToObtain: z.ZodString;
    label: z.ZodString;
    owningRead: z.ZodString;
    parentPersonId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    parentProductServiceId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    required: z.ZodBoolean;
    unobtainableAllowed: z.ZodBoolean;
}, z.core.$strip>;
type EntityDetailCoverageSlotDefinition = z.infer<typeof EntityDetailCoverageSlotSchemaDefinition>;
/**
 * One completion gate evaluated against the assembled entity detail.
 *
 * @openapiSchema EntityDetailCoverageSlot
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @usedBySchema EntitySuggestionResultSchema
 * @contractShape entity.detail-coverage-slot
 * @contractRole canonical
 */
export declare const EntityDetailCoverageSlotSchema: z.ZodType<EntityDetailCoverageSlotDefinition>;
export type EntityDetailCoverageSlot = z.infer<typeof EntityDetailCoverageSlotSchema>;
export {};
//# sourceMappingURL=detail-coverage-slot.d.ts.map