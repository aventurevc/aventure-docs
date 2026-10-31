// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const EmployeeCountMatchModeSchemaKnownMembers = z.enum(["numeric", "overlap", "containment"]);
/**
 * How the requested bounds match the selected current workforce observation.
 *
 * @openapiSchema EmployeeCountMatchMode
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
 * @usedBySchema EmployeeCountRangeSchema
 * @contractShape employee.count-match-mode
 * @contractRole canonical
 */
export const EmployeeCountMatchModeSchema = Object.assign(z.union([EmployeeCountMatchModeSchemaKnownMembers, z.string()]), { enum: EmployeeCountMatchModeSchemaKnownMembers.enum });
//# sourceMappingURL=count-match-mode.js.map