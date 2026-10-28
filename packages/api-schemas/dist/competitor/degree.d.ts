import { z } from "zod/v4";
/**
 * direct lists the subject's curated competitors; secondOrder lists products that compete with at least one of those direct competitors, which need not compete with the subject.
 *
 * @openapiSchema CompetitorDegree
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @contractShape competitor.degree
 * @contractRole canonical
 */
export declare const CompetitorDegreeSchema: z.ZodEnum<{
    direct: "direct";
    secondOrder: "secondOrder";
}>;
export type CompetitorDegree = z.infer<typeof CompetitorDegreeSchema>;
//# sourceMappingURL=degree.d.ts.map