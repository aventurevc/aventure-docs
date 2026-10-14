import { z } from "zod/v4";
/**
 * Profile panel to embed in a person detail read: graph, investorActivity, similar, blogPost, or investment.
 *
 * @openapiSchema PersonDetailInclude
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/people/{personId}
 * @contractShape person.detail-include
 * @contractRole canonical
 */
export declare const PersonDetailIncludeSchema: z.ZodEnum<{
    blogPost: "blogPost";
    graph: "graph";
    investment: "investment";
    investorActivity: "investorActivity";
    similar: "similar";
}>;
export type PersonDetailInclude = z.infer<typeof PersonDetailIncludeSchema>;
//# sourceMappingURL=detail-include.d.ts.map