import { z } from "zod/v4";
/**
 * Competitive comparison signals for a provider entity — sells-to customers, pricing model, ownership, funding stage, total raised, and website. Projected from entity enrichment for side-by-side comparison; founded year rides the entity core.
 *
 * @openapiSchema EntityComparisonSignals
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @endpoint GET /v1/entities/relationships/{relationshipId}
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @usedBySchema EntityRelationshipSchema
 * @contractShape entity.comparison-signals
 * @contractRole canonical
 */
export declare const EntityComparisonSignalsSchema: z.ZodObject<{
    fundingStage: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        Acquired: "Acquired";
        "Acquired Subsidiary": "Acquired Subsidiary";
        Angel: "Angel";
        Fund: "Fund";
        Government: "Government";
        "Investment Firm": "Investment Firm";
        Nonprofit: "Nonprofit";
        "Pre-Seed": "Pre-Seed";
        Public: "Public";
        Seed: "Seed";
        "Series A": "Series A";
        "Series B": "Series B";
        "Series C": "Series C";
        "Series D": "Series D";
        "Series E": "Series E";
        "Series F": "Series F";
        "Series G": "Series G";
        "Series H": "Series H";
        "Series I": "Series I";
        "Series J": "Series J";
        "Series K": "Series K";
        "Series L": "Series L";
        "Series M": "Series M";
        "Series N": "Series N";
        "Series O": "Series O";
        "Series P": "Series P";
        "Series Q": "Series Q";
        "Series R": "Series R";
        "Series S": "Series S";
        "Series T": "Series T";
        "Series U": "Series U";
        "Series V": "Series V";
        "Series W": "Series W";
        "Series X": "Series X";
        "Series Y": "Series Y";
        "Series Z": "Series Z";
    }>>>;
    ownership: z.ZodArray<z.ZodString>;
    pricingModel: z.ZodArray<z.ZodString>;
    sellsTo: z.ZodArray<z.ZodString>;
    totalRaised: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    website: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type EntityComparisonSignals = z.infer<typeof EntityComparisonSignalsSchema>;
//# sourceMappingURL=comparison-signals.d.ts.map