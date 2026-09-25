import { z } from "zod/v4";
declare const PersonLookupBatchSchemaDefinition: z.ZodObject<{
    hasImageFirst: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    includeAddress: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    includeAssociation: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    includeUrl: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    maxAssociations: z.ZodOptional<z.ZodDefault<z.ZodInt>>;
    permitMonogram: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    personId: z.ZodOptional<z.ZodArray<z.ZodUUID>>;
    slug: z.ZodOptional<z.ZodArray<z.ZodString>>;
    url: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
type PersonLookupBatchDefinition = z.infer<typeof PersonLookupBatchSchemaDefinition>;
/**
 * Batch request for person detail enrichment. Each selector array accepts at most 200 values, and at most 200 selectors may be submitted across personId, slug, and url.
 *
 * @openapiSchema PersonLookupBatch
 * @endpoint POST /v1/people/lookup-batch
 * @contractShape person.lookup-batch
 * @contractRole canonical
 */
export declare const PersonLookupBatchSchema: z.ZodType<PersonLookupBatchDefinition>;
export type PersonLookupBatch = z.infer<typeof PersonLookupBatchSchema>;
export {};
//# sourceMappingURL=lookup-batch.d.ts.map