// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const RevenueEstimateRegimeSchemaKnownMembers = z.enum([
    "reportedRegulatory",
    "financialAum",
    "vcTechSaas",
    "traditionalOperating",
]);
/**
 * Revenue model behind an estimate: reportedRegulatory = revenue a regulator publishes; financialAum = fees on assets under management; vcTechSaas = venture-backed software scaled by headcount and funding; traditionalOperating = industry revenue per employee.
 *
 * @openapiSchema RevenueEstimateRegime
 * @endpoint GET /v1/entities/{entityId}/revenue-estimate
 * @usedBySchema EntityRevenueEstimateSchema
 * @contractShape revenue.estimate-regime
 * @contractRole canonical
 */
export const RevenueEstimateRegimeSchema = Object.assign(z.union([RevenueEstimateRegimeSchemaKnownMembers, z.string()]), { enum: RevenueEstimateRegimeSchemaKnownMembers.enum });
//# sourceMappingURL=estimate-regime.js.map