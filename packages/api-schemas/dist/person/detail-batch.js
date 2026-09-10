// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const PersonDetailBatchSchemaDefinition = z
    .strictObject({
    /** Sort results by image presence */
    hasImageFirst: z.boolean().default(false).optional(),
    /** Include address values */
    includeAddress: z.boolean().default(true).optional(),
    /** Include association values */
    includeAssociation: z.boolean().default(true).optional(),
    /** Include URL links */
    includeUrl: z.boolean().default(true).optional(),
    /** Max association values per person */
    maxAssociations: z.int().default(40).optional(),
    /** Permit monogram fallbacks */
    permitMonogram: z.boolean().default(true).optional(),
    /** Person UUID values */
    personId: z.array(z.uuid()).max(200).optional(),
    /** Person slug values */
    slug: z
        .array(z
        .string()
        .regex(/^[\t-\r\u0020\u00A0\u1680\u2000-\u200A\u2028-\u2029\u202F\u205F\u3000]*(?:[A-Za-z0-9_\u212A-]{1,255}[\t-\r\u0020\u00A0\u1680\u2000-\u200A\u2028-\u2029\u202F\u205F\u3000]*)?(?![\s\S])/))
        .max(200)
        .optional(),
    /** Person URL values */
    url: z.array(z.string()).max(200).optional(),
})
    .check(({ value, issues }) => {
    if ((value.personId?.length ?? 0) + (value.slug?.length ?? 0) + (value.url?.length ?? 0) >
        200) {
        issues.push({
            code: "custom",
            origin: "custom",
            path: [],
            input: value,
            message: "combined array item count must be at most 200",
        });
    }
});
/**
 * Batch request for person detail enrichment. Each selector array accepts at most 200 values, and at most 200 selectors may be submitted across personId, slug, and url.
 *
 * @openapiSchema PersonDetailBatch
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/people/lookup/batch
 * @contractShape person.detail-batch
 * @contractRole canonical
 */
export const PersonDetailBatchSchema = PersonDetailBatchSchemaDefinition;
//# sourceMappingURL=detail-batch.js.map