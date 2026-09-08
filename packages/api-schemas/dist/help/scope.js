// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Operation scope a help answer may recommend: read-only, write, or all.
 *
 * @openapiSchema HelpScope
 * @endpoint POST /v1/agents/help
 * @usedBySchema AgentHelpQuestionSchema
 * @contractShape help.scope
 * @contractRole canonical
 */
export const HelpScopeSchema = z.enum(["READ", "WRITE", "ALL"]);
//# sourceMappingURL=scope.js.map