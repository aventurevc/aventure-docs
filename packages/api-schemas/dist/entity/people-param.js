// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { PageParamSchema } from "../pagination/page-param.js";
export const ENTITY_PEOPLE_ENDPOINT = "/v1/entities/{entityId}/people";
/**
 * Request-side query params for `GET /v1/entities/{entityId}/people`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint GET /v1/entities/{entityId}/people
 * @contractShape entity.people-param
 * @contractRole canonical
 */
export const EntityPeopleParamSchema = PageParamSchema.extend({
    /** Return count metadata without full content */
    countOnly: z.boolean().optional(),
    /** Include person address records */
    includeAddress: z.boolean().optional(),
    /** Include person URL records */
    includeUrl: z.boolean().optional(),
    /** Current association filter */
    isCurrent: z.boolean().optional(),
    /** Permit generated monogram fallback */
    permitMonogram: z.boolean().optional(),
    /** Writes only: the person's slug when the body omits personId. List reads ignore it; use search to narrow listed people. */
    personSlug: z.string().optional(),
    /** Match titleName containing this text as a whole-word phrase, ignoring case: founder matches Co-Founder, Founder & CEO, and CEO and Co-Founder, but not Founding Partner. Omit to include all titles; this does not filter titleFunction or titleLevel. */
    role: z.string().optional(),
    /** Search term filter */
    search: z.string().optional(),
});
//# sourceMappingURL=people-param.js.map