// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ResearchParagraphShapeSchema } from "./paragraph-shape.js";
const ResearchSnippetTypeSchemaDefinition = z.object({
    /** Whether curated rows of this snippet type can make the public company Analysis page eligible. */
    analysisRenderable: z.boolean(),
    /** Whether the type is curated; with analysisRenderable this gates public Analysis-page eligibility. It does not gate snippet display — every type listed here is recognized and defaults to visible, and the row-level visible flag controls display. */
    curated: z.boolean(),
    /** Default visible flag when a write omits visible; true for recognized snippet types even when curated=false. */
    defaultVisible: z.boolean(),
    /** Human-readable label. */
    label: z.string(),
    /** Minimum total text length in characters; null = no minimum. */
    minLength: z.int().nullish(),
    /** Per-paragraph shape rule that write requests must satisfy; null = no paragraph rule. */
    paragraphShape: ResearchParagraphShapeSchema.nullish(),
    /** Whether this textType is recognized by the research contract catalog; true for every row returned by this endpoint. */
    recognized: z.boolean(),
    /** Dotted research section path the snippet attaches to. */
    targetPath: z.string(),
    /** Canonical snippet type token used on the wire. */
    typeValue: z.string(),
});
/**
 * Canonical research snippet type with the governance rules write callers must satisfy.
 *
 * @openapiSchema ResearchSnippetType
 * @endpoint GET /v1/entities/research/snippets/types
 * @contractShape research.snippet-type
 * @contractRole canonical
 */
export const ResearchSnippetTypeSchema = ResearchSnippetTypeSchemaDefinition;
//# sourceMappingURL=snippet-type.js.map