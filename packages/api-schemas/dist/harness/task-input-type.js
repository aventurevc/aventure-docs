// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const HarnessTaskInputTypeSchemaKnownMembers = z.enum(["ENTITY", "TEXT"]);
/**
 * ENTITY binds a target entity to its canonical id through entity identification; TEXT is a literal value the request states.
 *
 * @openapiSchema HarnessTaskInputType
 * @endpoint POST /v1/agents/help
 * @endpoint POST /v1/help
 * @usedBySchema HarnessTaskSchema
 * @contractShape harness.task-input-type
 * @contractRole canonical
 */
export const HarnessTaskInputTypeSchema = Object.assign(z.union([HarnessTaskInputTypeSchemaKnownMembers, z.string()]), { enum: HarnessTaskInputTypeSchemaKnownMembers.enum });
//# sourceMappingURL=task-input-type.js.map