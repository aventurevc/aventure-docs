// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityValuationDataConfidenceSchema } from "./valuation-data-confidence.js";
import { EntityValuationDerivationSchema } from "./valuation-derivation.js";
import { EntityValuationSourceSchema } from "./valuation-source.js";
import { ValuationTypeSchema } from "../valuation/type.js";
const EntityValuationTimeSeriesPointSchemaDefinition = z.object({
    /** Amount raised in the same currency, only for fundraise rows. */
    amountRaised: z.number().int().nullish(),
    /** Effective timestamp for this valuation datapoint. */
    asOfDate: z.iso.datetime({ offset: true }),
    /** Confidence tier for this datapoint. */
    confidence: EntityValuationDataConfidenceSchema,
    /** ISO 4217 currency code. */
    currency: z.string(),
    /** Basis declared by the original source. */
    declaredBasis: ValuationTypeSchema,
    /** How pre-money and post-money fields were obtained. */
    derivation: EntityValuationDerivationSchema,
    /** Research detail id for stated valuation rows. Null for fundraise-derived rows, which cannot be updated or deleted on this valuation surface. */
    detailId: z.int().nullish(),
    /** Fundraise round label or legacy detail display text, when present. */
    label: z.string().nullish(),
    /** Canonical store that supplied the point. */
    source: EntityValuationSourceSchema,
    /** `detail-<id>` or `fundraise-<transactionId>` display reference. */
    sourceRef: z.string(),
    /** Post-money valuation in full currency units, when known. */
    valuationPostMoney: z.number().int().nullish(),
    /** Pre-money valuation in full currency units, when known. */
    valuationPreMoney: z.number().int().nullish(),
});
/**
 * A single valuation datapoint. `valuationPostMoney` is the canonical charted value; filled when directly recorded or safely derivable from pre-money + amount raised (same currency only). `derivation` explains whether the value was stored or inferred. Only `researchDetail` points have a `detailId` and can be changed here; `fundraiseRound` points are changed through fundraise-round commands.
 *
 * @openapiSchema EntityValuationTimeSeriesPoint
 * @endpoint GET /v1/entities/{entityId}/valuations
 * @usedBySchema PageEntityValuationTimeSeriesPointSchema
 * @contractShape entity.valuation-time-series-point
 * @contractRole canonical
 */
export const EntityValuationTimeSeriesPointSchema = EntityValuationTimeSeriesPointSchemaDefinition;
//# sourceMappingURL=valuation-time-series-point.js.map