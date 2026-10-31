// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const ResearchDetailRangeSchemaDefinition = z.strictObject({
    /** Inclusive exact maximum as a JSON STRING, in the native reference unit. */
    max: z
        .string()
        .regex(/^-?[0-9]+(\.[0-9]+)?$/)
        .nullish(),
    /** Exact source-stated basis after trim; omitted selects an unknown basis. */
    measurementBasis: z.string().nullish(),
    /** Inclusive exact minimum as a JSON STRING, in the native reference unit. */
    min: z
        .string()
        .regex(/^-?[0-9]+(\.[0-9]+)?$/)
        .nullish(),
    /** Exact source-stated scope after trim; omitted selects an unknown scope. */
    reportingScope: z.string().nullish(),
    /** Exact targetPath from GET research-detail types; not a label or leaf alias. */
    targetPath: z.string(),
    /** Full source-native monetary reference: currency and any period/interval; no USD or FX default. */
    valueResearchDetail: z.string(),
});
/**
 * One monetary metric tuple. Tuples are AND-ed. Select the latest current eligible observation within exact targetPath/valueResearchDetail/reportingScope/measurementBasis before testing bounds. Unknown qualifiers match null, never any recorded value. Only stored exact decimalValue observations qualify; legacy Float rows retain unknown precision.
 *
 * @openapiSchema ResearchDetailRange
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/people
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/directory/shared/slug/{slug}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/directory/exports
 * @endpoint POST /v1/directory/shared
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/entities/filters/search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityFilterSchema
 * @usedBySchema EntityListFilterSchema
 * @contractShape research.detail-range
 * @contractRole canonical
 */
export const ResearchDetailRangeSchema = ResearchDetailRangeSchemaDefinition;
//# sourceMappingURL=detail-range.js.map