// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Corpus partition a help citation is drawn from.
 *
 * @openapiSchema HelpSourceType
 * @endpoint POST /v1/agents/help
 * @usedBySchema HelpCitationSchema
 * @contractShape help.source-type
 * @contractRole canonical
 */
export const HelpSourceTypeSchema = z.enum(["OPERATION", "SKILL", "PROMPT", "COMPLETION_GATE"]);
//# sourceMappingURL=source-type.js.map