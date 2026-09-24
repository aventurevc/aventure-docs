import { z } from "zod/v4";
export declare const ENTITY_PEOPLE_ENDPOINT: "/v1/entities/{entityId}/people";
/**
 * Request-side query params for `GET /v1/entities/{entityId}/people`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint GET /v1/entities/{entityId}/people
 * @contractShape entity.people-param
 * @contractRole canonical
 */
export declare const EntityPeopleParamSchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodInt>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    countOnly: z.ZodOptional<z.ZodBoolean>;
    includeAddress: z.ZodOptional<z.ZodBoolean>;
    includePrivate: z.ZodOptional<z.ZodBoolean>;
    includeUrl: z.ZodOptional<z.ZodBoolean>;
    isCurrent: z.ZodOptional<z.ZodBoolean>;
    permitMonogram: z.ZodOptional<z.ZodBoolean>;
    personSlug: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodString>;
    search: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type EntityPeopleParam = z.infer<typeof EntityPeopleParamSchema>;
//# sourceMappingURL=people-param.d.ts.map