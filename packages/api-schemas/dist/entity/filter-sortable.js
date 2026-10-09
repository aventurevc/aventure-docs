// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Entity filter sortable
 *
 * @openapiSchema EntityFilterSortable
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema SortOrderEntityFilterSortableSchema
 * @contractShape entity.filter-sortable
 * @contractRole canonical
 */
export const EntityFilterSortableSchema = z.union([
    z.enum([
        "ID",
        "NAME_BRAND",
        "YEAR_FOUNDED",
        "STATUS_OPERATING",
        "UPDATED_AT",
        "CREATED_AT",
        "NEXT_DUE_AT",
        "DATA_COMPLETION_COVERAGE",
        "TOTAL_RAISED",
        "AMOUNT_INVESTED",
        "RECENT_INVESTMENT_AT",
        "STAGE",
        "MOST_RECENT_AMOUNT",
        "LATEST_VALUATION",
        "MOST_RECENT_DATE",
        "ACCELERATOR_BRAND",
        "ACCELERATOR_COHORT",
        "HEADQUARTERS_COUNTRY",
        "EMPLOYEE_COUNT",
    ]),
    z.string(),
]);
//# sourceMappingURL=filter-sortable.js.map