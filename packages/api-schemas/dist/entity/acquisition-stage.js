// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Acquisition stage/status values used by acquisition APIs and fundraise rollups. Acquisition is neutral before operating-status change; Acquired Subsidiary is completed and still operating; Acquired is terminal or folded, including Closed (Acquihire).
 *
 * @openapiSchema EntityAcquisitionStage
 * @endpoint GET /v1/entities/{entityId}/acquisitions
 * @endpoint GET /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @usedBySchema EntityAcquisitionSchema
 * @contractShape entity.acquisition-stage
 * @contractRole canonical
 */
export const EntityAcquisitionStageSchema = z.enum([
    "Acquisition",
    "Acquired",
    "Acquired Subsidiary",
]);
//# sourceMappingURL=acquisition-stage.js.map