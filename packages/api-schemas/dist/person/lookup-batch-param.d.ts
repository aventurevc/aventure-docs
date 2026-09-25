import { z } from "zod/v4";
export declare const PERSON_LOOKUP_BATCH_ENDPOINT: "/v1/people/lookup-batch";
/**
 * Request-side query params for `POST /v1/people/lookup-batch`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint POST /v1/people/lookup-batch
 * @contractShape person.lookup-batch-param
 * @contractRole canonical
 */
export declare const PersonLookupBatchParamSchema: z.ZodObject<{
    includePrivate: z.ZodOptional<z.ZodBoolean>;
    page: z.ZodOptional<z.ZodInt>;
    size: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
export type PersonLookupBatchParam = z.infer<typeof PersonLookupBatchParamSchema>;
//# sourceMappingURL=lookup-batch-param.d.ts.map