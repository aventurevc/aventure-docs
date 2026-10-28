// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * direct lists the subject's curated competitors; secondOrder lists products that compete with at least one of those direct competitors, which need not compete with the subject.
 *
 * @openapiSchema CompetitorDegree
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @contractShape competitor.degree
 * @contractRole canonical
 */
export const CompetitorDegreeSchema = z.enum(["direct", "secondOrder"]);
//# sourceMappingURL=degree.js.map