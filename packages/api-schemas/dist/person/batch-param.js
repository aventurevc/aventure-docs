// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { PageParamSchema } from "../client/pagination/page-param.js";
export const PERSON_BATCH_ENDPOINT = "/v1/people/batch";
/**
 * Request-side query params for `POST /v1/people/batch`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint POST /v1/people/batch
 * @contractShape person.batch-param
 * @contractRole canonical
 */
export const PersonBatchParamSchema = PageParamSchema.extend({
    /** Cursor for pagination (format: timestamp::uuid) */
    cursor: z.string().optional(),
    /** Prioritize people with images before the default sort */
    hasImageFirst: z.boolean().optional(),
    /** Include private fields. Defaults to private for admin API key or ROLE_ADMIN callers; client-secret/client-read callers stay public. */
    includePrivate: z.boolean().optional(),
    /** Max association values per person */
    maxAssociations: z.int().optional(),
    /** Permit monogram fallback */
    permitMonogram: z.boolean().optional(),
    /** Batch projection mode. Omit or use core for Person rows; association returns PersonDetail rows with bounded associations. */
    projection: z.enum(["core", "association"]).optional(),
}).check(({ value, issues }) => {
    if (value.cursor !== undefined && value.cursor !== "" && value.sort !== undefined) {
        issues.push({
            code: "custom",
            origin: "custom",
            path: ["sort"],
            input: value.sort,
            message: "sort is not supported when cursor is provided",
        });
    }
});
//# sourceMappingURL=batch-param.js.map