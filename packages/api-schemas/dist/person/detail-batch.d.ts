import { z } from "zod/v4";
declare const PersonDetailBatchSchemaDefinition: z.ZodObject<{
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
type PersonDetailBatchDefinition = z.infer<typeof PersonDetailBatchSchemaDefinition>;
/**
 * Batch request for person detail enrichment. Each selector array accepts at most 200 values, and at most 200 selectors may be submitted across personId, slug, and url.
 *
 * @openapiSchema PersonDetailBatch
 * @endpoint POST /v1/people/detail/batch
 * @contractShape person.detail-batch
 * @contractRole canonical
 */
export declare const PersonDetailBatchSchema: z.ZodType<PersonDetailBatchDefinition>;
export type PersonDetailBatch = z.infer<typeof PersonDetailBatchSchema>;
export {};
//# sourceMappingURL=detail-batch.d.ts.map