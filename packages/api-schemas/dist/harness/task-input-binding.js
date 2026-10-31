// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { HarnessTaskFactSchema } from "./task-fact.js";
import { WriterBriefSchema } from "../writer/brief.js";
const HarnessTaskInputBindingSchemaDefinition = z.object({
    /** Canonical entity UUID; exclusive with newsId, text, writerBrief and fact. */
    entityId: z.uuid().nullish(),
    /** One source-bound fact for a FACT input; exclusive with entityId, newsId, text and writerBrief. */
    fact: HarnessTaskFactSchema.nullish(),
    /** Catalog input key; omit it to bind the task's only declared input of the value's type. */
    key: z.string().nullish(),
    /** Canonical news id; exclusive with entityId, text, writerBrief and fact. */
    newsId: z.int().nullish(),
    /** Literal requester text; exclusive with entityId, newsId, writerBrief and fact. */
    text: z.string().nullish(),
    /** Typed writer brief for a WRITER_BRIEF input; exclusive with entityId, newsId, text and fact. */
    writerBrief: WriterBriefSchema.nullish(),
});
/**
 * One task input value bound before the run starts; the server validates its key and type.
 *
 * @openapiSchema HarnessTaskInputBinding
 * @endpoint POST /v1/research-runs
 * @endpoint POST /v1/research/runs
 * @usedBySchema HarnessRunCreateSchema
 * @contractShape harness.task-input-binding
 * @contractRole canonical
 */
export const HarnessTaskInputBindingSchema = HarnessTaskInputBindingSchemaDefinition;
//# sourceMappingURL=task-input-binding.js.map