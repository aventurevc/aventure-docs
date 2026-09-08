// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SystemBuildDetailSchema } from "./system-build-detail.js";
const SystemBuildSchemaDefinition = z.object({
    /** Application build metadata */
    build: SystemBuildDetailSchema,
});
/**
 * Build metadata exposed by the public info alias
 *
 * @openapiSchema SystemBuild
 * @endpoint GET /info
 * @contractShape system.system-build
 * @contractRole canonical
 */
export const SystemBuildSchema = SystemBuildSchemaDefinition;
//# sourceMappingURL=system-build.js.map