import { z } from "zod/v4";
export declare const ENTITY_INVESTOR_ACTIVITY_ENDPOINT: "/v1/entities/{entityId}/investor-activity";
/**
 * Request-side query params for `GET /v1/entities/{entityId}/investor-activity`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint GET /v1/entities/{entityId}/investor-activity
 * @contractShape entity.investor-activity-param
 * @contractRole canonical
 */
export declare const EntityInvestorActivityParamSchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodInt>;
    portfolioOutcome: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        ACQUIRED: "ACQUIRED";
        CLOSED: "CLOSED";
        OPERATING: "OPERATING";
        PUBLIC: "PUBLIC";
        UNKNOWN: "UNKNOWN";
    }>, z.ZodString]> & {
        enum: {
            ACQUIRED: "ACQUIRED";
            CLOSED: "CLOSED";
            OPERATING: "OPERATING";
            PUBLIC: "PUBLIC";
            UNKNOWN: "UNKNOWN";
        };
    }>;
    size: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
export type EntityInvestorActivityParam = z.infer<typeof EntityInvestorActivityParamSchema>;
//# sourceMappingURL=investor-activity-param.d.ts.map