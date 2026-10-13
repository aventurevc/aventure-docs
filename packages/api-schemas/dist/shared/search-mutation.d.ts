import { z } from "zod/v4";
declare const SharedSearchMutationSchemaDefinition: z.ZodObject<{
    id: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    query: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type SharedSearchMutationDefinition = z.infer<typeof SharedSearchMutationSchemaDefinition>;
/**
 * Publish a query under a stable client UUID; retries return the same saved answer.
 *
 * @openapiSchema SharedSearchMutation
 * @endpoint POST /v1/search/shared
 * @contractShape shared.search-mutation
 * @contractRole canonical
 */
export declare const SharedSearchMutationSchema: z.ZodType<SharedSearchMutationDefinition>;
export type SharedSearchMutation = z.infer<typeof SharedSearchMutationSchema>;
export {};
//# sourceMappingURL=search-mutation.d.ts.map