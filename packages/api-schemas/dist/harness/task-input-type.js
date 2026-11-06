// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const HarnessTaskInputTypeSchemaKnownMembers = z.enum([
    "ENTITY",
    "NEWS",
    "TEXT",
    "FACT",
    "WRITER_BRIEF",
]);
/**
 * NEWS is a public article, given by its aVenture news id; ENTITY is a target entity, identified and given by its aVenture id; TEXT is a literal value the request states; FACT is one source-bound claim to research; WRITER_BRIEF is the typed research analysis a prose writer composes from (claim ledger, positioning frame, paragraph plan).
 *
 * @openapiSchema HarnessTaskInputType
 * @endpoint POST /v1/help
 * @usedBySchema HarnessTaskSchema
 * @contractShape harness.task-input-type
 * @contractRole canonical
 */
export const HarnessTaskInputTypeSchema = Object.assign(z.union([HarnessTaskInputTypeSchemaKnownMembers, z.string()]), { enum: HarnessTaskInputTypeSchemaKnownMembers.enum });
//# sourceMappingURL=task-input-type.js.map