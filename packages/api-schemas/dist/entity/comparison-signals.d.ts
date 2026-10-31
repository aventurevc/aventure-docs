import { z } from "zod/v4";
/**
 * Competitive comparison signals for a provider entity — sells-to customers, pricing model, ownership, funding stage, total raised, and website. Projected from entity enrichment for side-by-side comparison; founded year rides the entity core.
 *
 * @openapiSchema EntityComparisonSignals
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @endpoint GET /v1/entities/relationships/{relationshipId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityRelationshipSchema
 * @contractShape entity.comparison-signals
 * @contractRole canonical
 */
export declare const EntityComparisonSignalsSchema: z.ZodObject<{
    fundingStage: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodEnum<{
        Acquired: "Acquired";
        "Acquired Subsidiary": "Acquired Subsidiary";
        Angel: "Angel";
        Bankrupt: "Bankrupt";
        Fund: "Fund";
        Government: "Government";
        "Investment Firm": "Investment Firm";
        "Late Stage Private": "Late Stage Private";
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
    }>, z.ZodString]> & {
        enum: {
            Acquired: "Acquired";
            "Acquired Subsidiary": "Acquired Subsidiary";
            Angel: "Angel";
            Bankrupt: "Bankrupt";
            Fund: "Fund";
            Government: "Government";
            "Investment Firm": "Investment Firm";
            "Late Stage Private": "Late Stage Private";
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
        };
    }>>;
    ownership: z.ZodArray<z.ZodString>;
    pricingModel: z.ZodArray<z.ZodString>;
    profileStatus: z.ZodOptional<z.ZodObject<{
        headline: z.ZodUnion<readonly [z.ZodEnum<{
            Acquired: "Acquired";
            "Acquired Subsidiary": "Acquired Subsidiary";
            "Business Line": "Business Line";
            Closed: "Closed";
            "Closed (Acquihire)": "Closed (Acquihire)";
            Company: "Company";
            Fund: "Fund";
            Government: "Government";
            Inactive: "Inactive";
            "Investment Firm": "Investment Firm";
            Nonprofit: "Nonprofit";
            "Private company": "Private company";
            Product: "Product";
            Public: "Public";
            "Public company": "Public company";
            Service: "Service";
        }>, z.ZodString]> & {
            enum: {
                Acquired: "Acquired";
                "Acquired Subsidiary": "Acquired Subsidiary";
                "Business Line": "Business Line";
                Closed: "Closed";
                "Closed (Acquihire)": "Closed (Acquihire)";
                Company: "Company";
                Fund: "Fund";
                Government: "Government";
                Inactive: "Inactive";
                "Investment Firm": "Investment Firm";
                Nonprofit: "Nonprofit";
                "Private company": "Private company";
                Product: "Product";
                Public: "Public";
                "Public company": "Public company";
                Service: "Service";
            };
        };
        isAcquired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isClosed: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isTerminal: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, z.core.$strip>>;
    sellsTo: z.ZodArray<z.ZodString>;
    totalRaised: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    website: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type EntityComparisonSignals = z.infer<typeof EntityComparisonSignalsSchema>;
//# sourceMappingURL=comparison-signals.d.ts.map