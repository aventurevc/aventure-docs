// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
export const OPENAPI_COMPONENT_MANIFEST = Object.freeze({
    Address: { modulePath: "address/address", schemaName: "AddressSchema" },
    AddressAssociation: {
        modulePath: "address/association",
        schemaName: "AddressAssociationSchema",
    },
    AddressAssociationRole: {
        modulePath: "address/association-role",
        schemaName: "AddressAssociationRoleSchema",
    },
    AddressCity: { modulePath: "address/city", schemaName: "AddressCitySchema" },
    AddressCountry: { modulePath: "address/country", schemaName: "AddressCountrySchema" },
    AddressLink: { modulePath: "address/link", schemaName: "AddressLinkSchema" },
    AddressState: { modulePath: "address/state", schemaName: "AddressStateSchema" },
    AgentHelp: { modulePath: "agent/help", schemaName: "AgentHelpSchema" },
    AgentHelpQuestion: { modulePath: "agent/help-question", schemaName: "AgentHelpQuestionSchema" },
    AgentTaskPreset: { modulePath: "agent/task-preset", schemaName: "AgentTaskPresetSchema" },
    AgentTaskPresetCatalog: {
        modulePath: "agent/task-preset-catalog",
        schemaName: "AgentTaskPresetCatalogSchema",
    },
    AgentTaskPresetExecution: {
        modulePath: "agent/task-preset-execution",
        schemaName: "AgentTaskPresetExecutionSchema",
    },
    AgentTaskPresetPhase: {
        modulePath: "agent/task-preset-phase",
        schemaName: "AgentTaskPresetPhaseSchema",
    },
    ApiKey: { modulePath: "api/key", schemaName: "ApiKeySchema" },
    AuthClient: { modulePath: "auth/client", schemaName: "AuthClientSchema" },
    AuthOperation: { modulePath: "auth/operation", schemaName: "AuthOperationSchema" },
    AuthOperationAccess: {
        modulePath: "auth/operation-access",
        schemaName: "AuthOperationAccessSchema",
    },
    AuthOperationAuthorization: {
        modulePath: "auth/operation-authorization",
        schemaName: "AuthOperationAuthorizationSchema",
    },
    AuthOperationFilter: {
        modulePath: "auth/operation-filter",
        schemaName: "AuthOperationFilterSchema",
    },
    AuthOperationMethod: {
        modulePath: "auth/operation-method",
        schemaName: "AuthOperationMethodSchema",
    },
    AuthPermissionGrant: {
        modulePath: "auth/permission-grant",
        schemaName: "AuthPermissionGrantSchema",
    },
    AuthProviderCatalog: {
        modulePath: "auth/provider-catalog",
        schemaName: "AuthProviderCatalogSchema",
    },
    BillingAccessType: { modulePath: "billing/access-type", schemaName: "BillingAccessTypeSchema" },
    BillingAdditionalUsage: {
        modulePath: "billing/additional-usage",
        schemaName: "BillingAdditionalUsageSchema",
    },
    BillingAdditionalUsageFundingType: {
        modulePath: "billing/additional-usage-funding-type",
        schemaName: "BillingAdditionalUsageFundingTypeSchema",
    },
    BillingAdditionalUsageMeter: {
        modulePath: "billing/additional-usage-meter",
        schemaName: "BillingAdditionalUsageMeterSchema",
    },
    BillingAdditionalUsageMutation: {
        modulePath: "billing/additional-usage-mutation",
        schemaName: "BillingAdditionalUsageMutationSchema",
    },
    BillingAdditionalUsageType: {
        modulePath: "billing/additional-usage-type",
        schemaName: "BillingAdditionalUsageTypeSchema",
    },
    BillingCatalog: { modulePath: "billing/catalog", schemaName: "BillingCatalogSchema" },
    BillingCatalogAdditionalUsage: {
        modulePath: "billing/catalog-additional-usage",
        schemaName: "BillingCatalogAdditionalUsageSchema",
    },
    BillingCatalogAllowance: {
        modulePath: "billing/catalog-allowance",
        schemaName: "BillingCatalogAllowanceSchema",
    },
    BillingCatalogCreditPack: {
        modulePath: "billing/catalog-credit-pack",
        schemaName: "BillingCatalogCreditPackSchema",
    },
    BillingCatalogPlan: {
        modulePath: "billing/catalog-plan",
        schemaName: "BillingCatalogPlanSchema",
    },
    BillingCatalogTier: {
        modulePath: "billing/catalog-tier",
        schemaName: "BillingCatalogTierSchema",
    },
    BillingCheckout: { modulePath: "billing/checkout", schemaName: "BillingCheckoutSchema" },
    BillingCheckoutMutation: {
        modulePath: "billing/checkout-mutation",
        schemaName: "BillingCheckoutMutationSchema",
    },
    BillingCheckoutUiMode: {
        modulePath: "billing/checkout-ui-mode",
        schemaName: "BillingCheckoutUiModeSchema",
    },
    BillingCreditPackType: {
        modulePath: "billing/credit-pack-type",
        schemaName: "BillingCreditPackTypeSchema",
    },
    BillingCreditPurchase: {
        modulePath: "billing/credit-purchase",
        schemaName: "BillingCreditPurchaseSchema",
    },
    BillingCreditPurchaseConfirmation: {
        modulePath: "billing/credit-purchase-confirmation",
        schemaName: "BillingCreditPurchaseConfirmationSchema",
    },
    BillingCreditPurchaseMutation: {
        modulePath: "billing/credit-purchase-mutation",
        schemaName: "BillingCreditPurchaseMutationSchema",
    },
    BillingDiscount: { modulePath: "billing/discount", schemaName: "BillingDiscountSchema" },
    BillingNextCharge: { modulePath: "billing/next-charge", schemaName: "BillingNextChargeSchema" },
    BillingPaymentMethod: {
        modulePath: "billing/payment-method",
        schemaName: "BillingPaymentMethodSchema",
    },
    BillingPaymentProfile: {
        modulePath: "billing/payment-profile",
        schemaName: "BillingPaymentProfileSchema",
    },
    BillingPlanChange: { modulePath: "billing/plan-change", schemaName: "BillingPlanChangeSchema" },
    BillingPlanChangeMutation: {
        modulePath: "billing/plan-change-mutation",
        schemaName: "BillingPlanChangeMutationSchema",
    },
    BillingPlanChangePreview: {
        modulePath: "billing/plan-change-preview",
        schemaName: "BillingPlanChangePreviewSchema",
    },
    BillingPlanType: { modulePath: "billing/plan-type", schemaName: "BillingPlanTypeSchema" },
    BillingPortal: { modulePath: "billing/portal", schemaName: "BillingPortalSchema" },
    BillingPortalMutation: {
        modulePath: "billing/portal-mutation",
        schemaName: "BillingPortalMutationSchema",
    },
    BillingRecurringPrice: {
        modulePath: "billing/recurring-price",
        schemaName: "BillingRecurringPriceSchema",
    },
    BillingSubscription: {
        modulePath: "billing/subscription",
        schemaName: "BillingSubscriptionSchema",
    },
    BillingSubscriptionMutation: {
        modulePath: "billing/subscription-mutation",
        schemaName: "BillingSubscriptionMutationSchema",
    },
    BlogPost: { modulePath: "blog/post", schemaName: "BlogPostSchema" },
    BlogPostType: { modulePath: "blog/post-type", schemaName: "BlogPostTypeSchema" },
    ChartBucket: { modulePath: "chart/bucket", schemaName: "ChartBucketSchema" },
    Classification: {
        modulePath: "classification/classification",
        schemaName: "ClassificationSchema",
    },
    ClassificationCatalog: {
        modulePath: "classification/catalog",
        schemaName: "ClassificationCatalogSchema",
    },
    ClassificationCatalogBucket: {
        modulePath: "classification/catalog-bucket",
        schemaName: "ClassificationCatalogBucketSchema",
    },
    ClassificationCatalogCategory: {
        modulePath: "classification/catalog-category",
        schemaName: "ClassificationCatalogCategorySchema",
    },
    ClassificationInactiveTagDetails: {
        modulePath: "classification/inactive-tag-details",
        schemaName: "ClassificationInactiveTagDetailsSchema",
    },
    ClassificationJoinRegistry: {
        modulePath: "classification/join-registry",
        schemaName: "ClassificationJoinRegistrySchema",
    },
    CliAuthorization: { modulePath: "cli/authorization", schemaName: "CliAuthorizationSchema" },
    CliAuthorizationClientPlatform: {
        modulePath: "cli/authorization-client-platform",
        schemaName: "CliAuthorizationClientPlatformSchema",
    },
    CliAuthorizationDelivery: {
        modulePath: "cli/authorization-delivery",
        schemaName: "CliAuthorizationDeliverySchema",
    },
    CliAuthorizationEncryptionAlgorithm: {
        modulePath: "cli/authorization-encryption-algorithm",
        schemaName: "CliAuthorizationEncryptionAlgorithmSchema",
    },
    CliAuthorizationMutation: {
        modulePath: "cli/authorization-mutation",
        schemaName: "CliAuthorizationMutationSchema",
    },
    CliAuthorizationPoll: {
        modulePath: "cli/authorization-poll",
        schemaName: "CliAuthorizationPollSchema",
    },
    CliAuthorizationStart: {
        modulePath: "cli/authorization-start",
        schemaName: "CliAuthorizationStartSchema",
    },
    CliAuthorizationStatus: {
        modulePath: "cli/authorization-status",
        schemaName: "CliAuthorizationStatusSchema",
    },
    CliAuthorizationTerminalReason: {
        modulePath: "cli/authorization-terminal-reason",
        schemaName: "CliAuthorizationTerminalReasonSchema",
    },
    CompetitorDegree: { modulePath: "competitor/degree", schemaName: "CompetitorDegreeSchema" },
    Confidence: { modulePath: "confidence/confidence", schemaName: "ConfidenceSchema" },
    ContactDetail: { modulePath: "contact/detail", schemaName: "ContactDetailSchema" },
    ContentCompliance: { modulePath: "content/compliance", schemaName: "ContentComplianceSchema" },
    ContentEmbeddingMatch: {
        modulePath: "content/embedding-match",
        schemaName: "ContentEmbeddingMatchSchema",
    },
    ContentSourceType: { modulePath: "content/source-type", schemaName: "ContentSourceTypeSchema" },
    CurrentSlugOwner: {
        modulePath: "redirect/current-slug-owner",
        schemaName: "CurrentSlugOwnerSchema",
    },
    CursorSliceAddressLink: {
        modulePath: "cursor/slice-address-link",
        schemaName: "CursorSliceAddressLinkSchema",
    },
    CursorSliceHarnessRunEvent: {
        modulePath: "cursor/slice-harness-run-event",
        schemaName: "CursorSliceHarnessRunEventSchema",
    },
    CursorSliceSharedDirectoryList: {
        modulePath: "cursor/slice-shared-directory-list",
        schemaName: "CursorSliceSharedDirectoryListSchema",
    },
    CursorSliceSharedSearchList: {
        modulePath: "cursor/slice-shared-search-list",
        schemaName: "CursorSliceSharedSearchListSchema",
    },
    DatasourceDataSourceType: {
        modulePath: "datasource/data-source-type",
        schemaName: "DatasourceDataSourceTypeSchema",
    },
    DatasourceSourceMetadata: {
        modulePath: "datasource/source-metadata",
        schemaName: "DatasourceSourceMetadataSchema",
    },
    DateRange: { modulePath: "date/range", schemaName: "DateRangeSchema" },
    DecimalRange: { modulePath: "decimal/range", schemaName: "DecimalRangeSchema" },
    DirectoryExport: { modulePath: "directory/export", schemaName: "DirectoryExportSchema" },
    DirectoryExportColumnType: {
        modulePath: "directory/export-column-type",
        schemaName: "DirectoryExportColumnTypeSchema",
    },
    DirectoryExportMutation: {
        modulePath: "directory/export-mutation",
        schemaName: "DirectoryExportMutationSchema",
    },
    DomainConflictDetails: {
        modulePath: "domain/conflict-details",
        schemaName: "DomainConflictDetailsSchema",
    },
    DomainConflictType: {
        modulePath: "domain/conflict-type",
        schemaName: "DomainConflictTypeSchema",
    },
    DuplicateCreateReview: {
        modulePath: "duplicate/create-review",
        schemaName: "DuplicateCreateReviewSchema",
    },
    EmployeeCount: { modulePath: "employee/count", schemaName: "EmployeeCountSchema" },
    Enrichment: { modulePath: "enrichment/enrichment", schemaName: "EnrichmentSchema" },
    EnrichmentBatch: { modulePath: "enrichment/batch", schemaName: "EnrichmentBatchSchema" },
    EnrichmentMode: { modulePath: "enrichment/mode", schemaName: "EnrichmentModeSchema" },
    EnrichmentPrompt: { modulePath: "enrichment/prompt", schemaName: "EnrichmentPromptSchema" },
    EnrichmentRefusalType: {
        modulePath: "enrichment/refusal-type",
        schemaName: "EnrichmentRefusalTypeSchema",
    },
    Entity: { modulePath: "entity/entity", schemaName: "EntitySchema" },
    EntityAcceleratorParticipation: {
        modulePath: "entity/accelerator-participation",
        schemaName: "EntityAcceleratorParticipationSchema",
    },
    EntityAcquisition: { modulePath: "entity/acquisition", schemaName: "EntityAcquisitionSchema" },
    EntityAcquisitionEvidence: {
        modulePath: "entity/acquisition-evidence",
        schemaName: "EntityAcquisitionEvidenceSchema",
    },
    EntityAcquisitionRole: {
        modulePath: "entity/acquisition-role",
        schemaName: "EntityAcquisitionRoleSchema",
    },
    EntityAcquisitionStage: {
        modulePath: "entity/acquisition-stage",
        schemaName: "EntityAcquisitionStageSchema",
    },
    EntityAliasType: { modulePath: "entity/alias-type", schemaName: "EntityAliasTypeSchema" },
    EntityAnalysisCitation: {
        modulePath: "entity/analysis-citation",
        schemaName: "EntityAnalysisCitationSchema",
    },
    EntityAnalysisDraft: {
        modulePath: "entity/analysis-draft",
        schemaName: "EntityAnalysisDraftSchema",
    },
    EntityAnalysisFigure: {
        modulePath: "entity/analysis-figure",
        schemaName: "EntityAnalysisFigureSchema",
    },
    EntityAnalysisFigureCell: {
        modulePath: "entity/analysis-figure-cell",
        schemaName: "EntityAnalysisFigureCellSchema",
    },
    EntityAnalysisFigureEntry: {
        modulePath: "entity/analysis-figure-entry",
        schemaName: "EntityAnalysisFigureEntrySchema",
    },
    EntityAnalysisFigureType: {
        modulePath: "entity/analysis-figure-type",
        schemaName: "EntityAnalysisFigureTypeSchema",
    },
    EntityAnalysisInvocation: {
        modulePath: "entity/analysis-invocation",
        schemaName: "EntityAnalysisInvocationSchema",
    },
    EntityAnalysisParagraph: {
        modulePath: "entity/analysis-paragraph",
        schemaName: "EntityAnalysisParagraphSchema",
    },
    EntityAnalysisReplay: {
        modulePath: "entity/analysis-replay",
        schemaName: "EntityAnalysisReplaySchema",
    },
    EntityAnalysisSection: {
        modulePath: "entity/analysis-section",
        schemaName: "EntityAnalysisSectionSchema",
    },
    EntityAnalysisSectionMutation: {
        modulePath: "entity/analysis-section-mutation",
        schemaName: "EntityAnalysisSectionMutationSchema",
    },
    EntityAnalysisSectionOrigin: {
        modulePath: "entity/analysis-section-origin",
        schemaName: "EntityAnalysisSectionOriginSchema",
    },
    EntityAnalysisSectionVerification: {
        modulePath: "entity/analysis-section-verification",
        schemaName: "EntityAnalysisSectionVerificationSchema",
    },
    EntityAnalysisSource: {
        modulePath: "entity/analysis-source",
        schemaName: "EntityAnalysisSourceSchema",
    },
    EntityAnalysisTool: {
        modulePath: "entity/analysis-tool",
        schemaName: "EntityAnalysisToolSchema",
    },
    EntityAnalysisVerification: {
        modulePath: "entity/analysis-verification",
        schemaName: "EntityAnalysisVerificationSchema",
    },
    EntityAnalysisVerificationFailure: {
        modulePath: "entity/analysis-verification-failure",
        schemaName: "EntityAnalysisVerificationFailureSchema",
    },
    EntityBrand: { modulePath: "entity/brand", schemaName: "EntityBrandSchema" },
    EntityClassification: {
        modulePath: "entity/classification",
        schemaName: "EntityClassificationSchema",
    },
    EntityClassificationInactiveTagOverride: {
        modulePath: "entity/classification-inactive-tag-override",
        schemaName: "EntityClassificationInactiveTagOverrideSchema",
    },
    EntityClassificationSuggestion: {
        modulePath: "entity/classification-suggestion",
        schemaName: "EntityClassificationSuggestionSchema",
    },
    EntityComparisonSignals: {
        modulePath: "entity/comparison-signals",
        schemaName: "EntityComparisonSignalsSchema",
    },
    EntityDetail: { modulePath: "entity/detail", schemaName: "EntityDetailSchema" },
    EntityDetailBatch: { modulePath: "entity/detail-batch", schemaName: "EntityDetailBatchSchema" },
    EntityEnrichment: { modulePath: "entity/enrichment", schemaName: "EntityEnrichmentSchema" },
    EntityFilter: { modulePath: "entity/filter", schemaName: "EntityFilterSchema" },
    EntityFilterChoice: {
        modulePath: "entity/filter-choice",
        schemaName: "EntityFilterChoiceSchema",
    },
    EntityFilterControlType: {
        modulePath: "entity/filter-control-type",
        schemaName: "EntityFilterControlTypeSchema",
    },
    EntityFilterEntry: { modulePath: "entity/filter-entry", schemaName: "EntityFilterEntrySchema" },
    EntityFilterHeadquartersCountry: {
        modulePath: "entity/filter-headquarters-country",
        schemaName: "EntityFilterHeadquartersCountrySchema",
    },
    EntityFilterHeadquartersOptionSet: {
        modulePath: "entity/filter-headquarters-option-set",
        schemaName: "EntityFilterHeadquartersOptionSetSchema",
    },
    EntityFilterHeadquartersStateCity: {
        modulePath: "entity/filter-headquarters-state-city",
        schemaName: "EntityFilterHeadquartersStateCitySchema",
    },
    EntityFilterLogoOption: {
        modulePath: "entity/filter-logo-option",
        schemaName: "EntityFilterLogoOptionSchema",
    },
    EntityFilterMeta: { modulePath: "entity/filter-meta", schemaName: "EntityFilterMetaSchema" },
    EntityFilterOptionMode: {
        modulePath: "entity/filter-option-mode",
        schemaName: "EntityFilterOptionModeSchema",
    },
    EntityFilterOptionSet: {
        modulePath: "entity/filter-option-set",
        schemaName: "EntityFilterOptionSetSchema",
    },
    EntityFilterOptionSetMeta: {
        modulePath: "entity/filter-option-set-meta",
        schemaName: "EntityFilterOptionSetMetaSchema",
    },
    EntityFilterRefinedFilters: {
        modulePath: "entity/filter-refined-filters",
        schemaName: "EntityFilterRefinedFiltersSchema",
    },
    EntityFilterScope: { modulePath: "entity/filter-scope", schemaName: "EntityFilterScopeSchema" },
    EntityFilterSearch: {
        modulePath: "entity/filter-search",
        schemaName: "EntityFilterSearchSchema",
    },
    EntityFilterSearchResult: {
        modulePath: "entity/filter-search-result",
        schemaName: "EntityFilterSearchResultSchema",
    },
    EntityFilterSortable: {
        modulePath: "entity/filter-sortable",
        schemaName: "EntityFilterSortableSchema",
    },
    EntityFilterUiMeta: {
        modulePath: "entity/filter-ui-meta",
        schemaName: "EntityFilterUiMetaSchema",
    },
    EntityFundingDetail: {
        modulePath: "entity/funding-detail",
        schemaName: "EntityFundingDetailSchema",
    },
    EntityFundraise: { modulePath: "entity/fundraise", schemaName: "EntityFundraiseSchema" },
    EntityFundraiseFilterCriteria: {
        modulePath: "entity/fundraise-filter-criteria",
        schemaName: "EntityFundraiseFilterCriteriaSchema",
    },
    EntityFundraiseInvestorActivity: {
        modulePath: "entity/fundraise-investor-activity",
        schemaName: "EntityFundraiseInvestorActivitySchema",
    },
    EntityFundraiseInvestorJoin: {
        modulePath: "entity/fundraise-investor-join",
        schemaName: "EntityFundraiseInvestorJoinSchema",
    },
    EntityFundraiseTransaction: {
        modulePath: "entity/fundraise-transaction",
        schemaName: "EntityFundraiseTransactionSchema",
    },
    EntityFundraiseTransactionEntity: {
        modulePath: "entity/fundraise-transaction-entity",
        schemaName: "EntityFundraiseTransactionEntitySchema",
    },
    EntityImage: { modulePath: "entity/image", schemaName: "EntityImageSchema" },
    EntityInvestorParticipation: {
        modulePath: "entity/investor-participation",
        schemaName: "EntityInvestorParticipationSchema",
    },
    EntityList: { modulePath: "entity/list", schemaName: "EntityListSchema" },
    EntityListFilter: { modulePath: "entity/list-filter", schemaName: "EntityListFilterSchema" },
    EntityListQualityGate: {
        modulePath: "entity/list-quality-gate",
        schemaName: "EntityListQualityGateSchema",
    },
    EntityListResearch: {
        modulePath: "entity/list-research",
        schemaName: "EntityListResearchSchema",
    },
    EntityLogoType: { modulePath: "entity/logo-type", schemaName: "EntityLogoTypeSchema" },
    EntityNameAliasEntityAliasType: {
        modulePath: "entity/name-alias-entity-alias-type",
        schemaName: "EntityNameAliasEntityAliasTypeSchema",
    },
    EntityNameAliasPersonAliasType: {
        modulePath: "entity/name-alias-person-alias-type",
        schemaName: "EntityNameAliasPersonAliasTypeSchema",
    },
    EntityNaturalSearch: {
        modulePath: "entity/natural-search",
        schemaName: "EntityNaturalSearchSchema",
    },
    EntityOperatingStatus: {
        modulePath: "entity/operating-status",
        schemaName: "EntityOperatingStatusSchema",
    },
    EntityPersonAssociation: {
        modulePath: "entity/person-association",
        schemaName: "EntityPersonAssociationSchema",
    },
    EntityPersonAssociationFilter: {
        modulePath: "entity/person-association-filter",
        schemaName: "EntityPersonAssociationFilterSchema",
    },
    EntityPersonOwner: { modulePath: "entity/person-owner", schemaName: "EntityPersonOwnerSchema" },
    EntityProfileHeadline: {
        modulePath: "entity/profile-headline",
        schemaName: "EntityProfileHeadlineSchema",
    },
    EntityProfileStatus: {
        modulePath: "entity/profile-status",
        schemaName: "EntityProfileStatusSchema",
    },
    EntityProvider: { modulePath: "entity/provider", schemaName: "EntityProviderSchema" },
    EntityRelationship: {
        modulePath: "entity/relationship",
        schemaName: "EntityRelationshipSchema",
    },
    EntityRelationshipTypeOption: {
        modulePath: "entity/relationship-type-option",
        schemaName: "EntityRelationshipTypeOptionSchema",
    },
    EntityResearch: { modulePath: "entity/research", schemaName: "EntityResearchSchema" },
    EntityResearchDetail: {
        modulePath: "entity/research-detail",
        schemaName: "EntityResearchDetailSchema",
    },
    EntityResearchFactValue: {
        modulePath: "entity/research-fact-value",
        schemaName: "EntityResearchFactValueSchema",
    },
    EntityResearchPublicSource: {
        modulePath: "entity/research-public-source",
        schemaName: "EntityResearchPublicSourceSchema",
    },
    EntityResearchSnippet: {
        modulePath: "entity/research-snippet",
        schemaName: "EntityResearchSnippetSchema",
    },
    EntityResearchValueType: {
        modulePath: "entity/research-value-type",
        schemaName: "EntityResearchValueTypeSchema",
    },
    EntityResolution: { modulePath: "entity/resolution", schemaName: "EntityResolutionSchema" },
    EntitySimilarityContext: {
        modulePath: "entity/similarity-context",
        schemaName: "EntitySimilarityContextSchema",
    },
    EntitySimilarityOrigin: {
        modulePath: "entity/similarity-origin",
        schemaName: "EntitySimilarityOriginSchema",
    },
    EntitySimilarityResult: {
        modulePath: "entity/similarity-result",
        schemaName: "EntitySimilarityResultSchema",
    },
    EntitySimilaritySummary: {
        modulePath: "entity/similarity-summary",
        schemaName: "EntitySimilaritySummarySchema",
    },
    EntitySitemap: { modulePath: "entity/sitemap", schemaName: "EntitySitemapSchema" },
    EntityTag: { modulePath: "entity/tag", schemaName: "EntityTagSchema" },
    EntityText: { modulePath: "entity/text", schemaName: "EntityTextSchema" },
    EntityTextBundle: { modulePath: "entity/text-bundle", schemaName: "EntityTextBundleSchema" },
    EntityType: { modulePath: "entity/type", schemaName: "EntityTypeSchema" },
    EntityTypeAlias: { modulePath: "entity/type-alias", schemaName: "EntityTypeAliasSchema" },
    EntityTypeGroup: { modulePath: "entity/type-group", schemaName: "EntityTypeGroupSchema" },
    EntityTypeGroupMembership: {
        modulePath: "entity/type-group-membership",
        schemaName: "EntityTypeGroupMembershipSchema",
    },
    EntityUrlCrawlCdnProvider: {
        modulePath: "entity/url-crawl-cdn-provider",
        schemaName: "EntityUrlCrawlCdnProviderSchema",
    },
    EntityUrlCrawlRenderMode: {
        modulePath: "entity/url-crawl-render-mode",
        schemaName: "EntityUrlCrawlRenderModeSchema",
    },
    EntityUrlLink: { modulePath: "entity/url-link", schemaName: "EntityUrlLinkSchema" },
    EntityUrlType: { modulePath: "entity/url-type", schemaName: "EntityUrlTypeSchema" },
    EntityValuationDataConfidence: {
        modulePath: "entity/valuation-data-confidence",
        schemaName: "EntityValuationDataConfidenceSchema",
    },
    EntityValuationDerivation: {
        modulePath: "entity/valuation-derivation",
        schemaName: "EntityValuationDerivationSchema",
    },
    EntityValuationSource: {
        modulePath: "entity/valuation-source",
        schemaName: "EntityValuationSourceSchema",
    },
    EntityValuationTimeSeriesPoint: {
        modulePath: "entity/valuation-time-series-point",
        schemaName: "EntityValuationTimeSeriesPointSchema",
    },
    FederatedNaturalSearch: {
        modulePath: "federated/natural-search",
        schemaName: "FederatedNaturalSearchSchema",
    },
    FederatedSearch: { modulePath: "federated/search", schemaName: "FederatedSearchSchema" },
    FederatedSearchProvenance: {
        modulePath: "federated/search-provenance",
        schemaName: "FederatedSearchProvenanceSchema",
    },
    FederatedSearchRejection: {
        modulePath: "federated/search-rejection",
        schemaName: "FederatedSearchRejectionSchema",
    },
    FundingApplicability: {
        modulePath: "funding/applicability",
        schemaName: "FundingApplicabilitySchema",
    },
    FundingStage: { modulePath: "funding/stage", schemaName: "FundingStageSchema" },
    FundraiseDataConfidence: {
        modulePath: "fundraise/data-confidence",
        schemaName: "FundraiseDataConfidenceSchema",
    },
    FundraiseFinancialInstrumentType: {
        modulePath: "fundraise/financial-instrument-type",
        schemaName: "FundraiseFinancialInstrumentTypeSchema",
    },
    FundraiseInvestmentAttribution: {
        modulePath: "fundraise/investment-attribution",
        schemaName: "FundraiseInvestmentAttributionSchema",
    },
    FundraiseInvestmentAttributionType: {
        modulePath: "fundraise/investment-attribution-type",
        schemaName: "FundraiseInvestmentAttributionTypeSchema",
    },
    FundraiseInvestmentEvidence: {
        modulePath: "fundraise/investment-evidence",
        schemaName: "FundraiseInvestmentEvidenceSchema",
    },
    FundraiseRoundField: {
        modulePath: "fundraise/round-field",
        schemaName: "FundraiseRoundFieldSchema",
    },
    FundraiseTransactionStatus: {
        modulePath: "fundraise/transaction-status",
        schemaName: "FundraiseTransactionStatusSchema",
    },
    GithubRepo: { modulePath: "github/repo", schemaName: "GithubRepoSchema" },
    HarnessChassis: { modulePath: "harness/chassis", schemaName: "HarnessChassisSchema" },
    HarnessLlmApi: { modulePath: "harness/llm-api", schemaName: "HarnessLlmApiSchema" },
    HarnessRun: { modulePath: "harness/run", schemaName: "HarnessRunSchema" },
    HarnessRunActivity: {
        modulePath: "harness/run-activity",
        schemaName: "HarnessRunActivitySchema",
    },
    HarnessRunActivityType: {
        modulePath: "harness/run-activity-type",
        schemaName: "HarnessRunActivityTypeSchema",
    },
    HarnessRunCreate: { modulePath: "harness/run-create", schemaName: "HarnessRunCreateSchema" },
    HarnessRunDetail: { modulePath: "harness/run-detail", schemaName: "HarnessRunDetailSchema" },
    HarnessRunEnvironment: {
        modulePath: "harness/run-environment",
        schemaName: "HarnessRunEnvironmentSchema",
    },
    HarnessRunEvent: { modulePath: "harness/run-event", schemaName: "HarnessRunEventSchema" },
    HarnessRunFollowUp: {
        modulePath: "harness/run-follow-up",
        schemaName: "HarnessRunFollowUpSchema",
    },
    HarnessRunFollowUpAdmission: {
        modulePath: "harness/run-follow-up-admission",
        schemaName: "HarnessRunFollowUpAdmissionSchema",
    },
    HarnessRunLane: { modulePath: "harness/run-lane", schemaName: "HarnessRunLaneSchema" },
    HarnessRunProgress: {
        modulePath: "harness/run-progress",
        schemaName: "HarnessRunProgressSchema",
    },
    HarnessRunStatus: { modulePath: "harness/run-status", schemaName: "HarnessRunStatusSchema" },
    HarnessRunTurn: { modulePath: "harness/run-turn", schemaName: "HarnessRunTurnSchema" },
    HarnessRunType: { modulePath: "harness/run-type", schemaName: "HarnessRunTypeSchema" },
    HarnessTaskInput: { modulePath: "harness/task", schemaName: "HarnessTaskSchema" },
    HarnessTaskInputType: {
        modulePath: "harness/task-input-type",
        schemaName: "HarnessTaskInputTypeSchema",
    },
    HarnessTaskPlan: { modulePath: "harness/task-plan", schemaName: "HarnessTaskPlanSchema" },
    HarnessTaskPlanStep: {
        modulePath: "harness/task-plan-step",
        schemaName: "HarnessTaskPlanStepSchema",
    },
    HarnessTaskStep: { modulePath: "harness/task-step", schemaName: "HarnessTaskStepSchema" },
    HarnessTaskWriteGuidance: {
        modulePath: "harness/task-write-guidance",
        schemaName: "HarnessTaskWriteGuidanceSchema",
    },
    HelpCitation: { modulePath: "help/citation", schemaName: "HelpCitationSchema" },
    HelpResolution: { modulePath: "help/resolution", schemaName: "HelpResolutionSchema" },
    HelpResolutionOutcome: {
        modulePath: "help/resolution-outcome",
        schemaName: "HelpResolutionOutcomeSchema",
    },
    HelpScope: { modulePath: "help/scope", schemaName: "HelpScopeSchema" },
    HelpSourceType: { modulePath: "help/source-type", schemaName: "HelpSourceTypeSchema" },
    Identification: {
        modulePath: "identification/identification",
        schemaName: "IdentificationSchema",
    },
    IdentificationCandidate: {
        modulePath: "identification/candidate",
        schemaName: "IdentificationCandidateSchema",
    },
    IdentificationSubject: {
        modulePath: "identification/subject",
        schemaName: "IdentificationSubjectSchema",
    },
    ImageVariant: { modulePath: "image/variant", schemaName: "ImageVariantSchema" },
    IntRange: { modulePath: "int/range", schemaName: "IntRangeSchema" },
    InvestorActivityFilter: {
        modulePath: "investor/activity-filter",
        schemaName: "InvestorActivityFilterSchema",
    },
    InvestorNameMatchMode: {
        modulePath: "investor/name-match-mode",
        schemaName: "InvestorNameMatchModeSchema",
    },
    JobEnqueue: { modulePath: "job/enqueue", schemaName: "JobEnqueueSchema" },
    JobState: { modulePath: "job/state", schemaName: "JobStateSchema" },
    JsonValue: { modulePath: "http/json-value", schemaName: "JsonValueSchema" },
    LinkSearch: { modulePath: "link/search", schemaName: "LinkSearchSchema" },
    LogoAccuracy: { modulePath: "logo/accuracy", schemaName: "LogoAccuracySchema" },
    LogoAccuracyMethod: {
        modulePath: "logo/accuracy-method",
        schemaName: "LogoAccuracyMethodSchema",
    },
    LogoAccuracyReference: {
        modulePath: "logo/accuracy-reference",
        schemaName: "LogoAccuracyReferenceSchema",
    },
    LookupJob: { modulePath: "lookup/job", schemaName: "LookupJobSchema" },
    LookupJobMention: { modulePath: "lookup/job-mention", schemaName: "LookupJobMentionSchema" },
    LookupJobMutation: { modulePath: "lookup/job-mutation", schemaName: "LookupJobMutationSchema" },
    LookupMention: { modulePath: "lookup/mention", schemaName: "LookupMentionSchema" },
    MediaObjectType: { modulePath: "media/object-type", schemaName: "MediaObjectTypeSchema" },
    MediaUpload: { modulePath: "media/upload", schemaName: "MediaUploadSchema" },
    MentionLookup: { modulePath: "mention/lookup", schemaName: "MentionLookupSchema" },
    NaturalSearch: { modulePath: "natural/search", schemaName: "NaturalSearchSchema" },
    NaturalSearchResult: {
        modulePath: "natural/search-result",
        schemaName: "NaturalSearchResultSchema",
    },
    News: { modulePath: "news/news", schemaName: "NewsSchema" },
    NewsAnalysis: { modulePath: "news/analysis", schemaName: "NewsAnalysisSchema" },
    NewsAnalysisSection: {
        modulePath: "news/analysis-section",
        schemaName: "NewsAnalysisSectionSchema",
    },
    NewsAnalysisSourceReference: {
        modulePath: "news/analysis-source-reference",
        schemaName: "NewsAnalysisSourceReferenceSchema",
    },
    NewsCandidateScore: {
        modulePath: "news/candidate-score",
        schemaName: "NewsCandidateScoreSchema",
    },
    NewsDetail: { modulePath: "news/detail", schemaName: "NewsDetailSchema" },
    NewsEntityMention: { modulePath: "news/entity-mention", schemaName: "NewsEntityMentionSchema" },
    NewsFeedback: { modulePath: "news/feedback", schemaName: "NewsFeedbackSchema" },
    NewsFeedbackAcknowledgement: {
        modulePath: "news/feedback-acknowledgement",
        schemaName: "NewsFeedbackAcknowledgementSchema",
    },
    NewsMatchStatus: { modulePath: "news/match-status", schemaName: "NewsMatchStatusSchema" },
    NewsPublishedEvent: {
        modulePath: "news/published-event",
        schemaName: "NewsPublishedEventSchema",
    },
    NewsResolvedEntityLink: {
        modulePath: "news/resolved-entity-link",
        schemaName: "NewsResolvedEntityLinkSchema",
    },
    NewsResolvedPersonLink: {
        modulePath: "news/resolved-person-link",
        schemaName: "NewsResolvedPersonLinkSchema",
    },
    NewsSourceUrlConflict: {
        modulePath: "news/source-url-conflict",
        schemaName: "NewsSourceUrlConflictSchema",
    },
    NewsSubscription: { modulePath: "news/subscription", schemaName: "NewsSubscriptionSchema" },
    NewsSubscriptionArguments: {
        modulePath: "news/subscription-arguments",
        schemaName: "NewsSubscriptionArgumentsSchema",
    },
    NewsSubscriptionDelivery: {
        modulePath: "news/subscription-delivery",
        schemaName: "NewsSubscriptionDeliverySchema",
    },
    NewsSubscriptionDeliveryMode: {
        modulePath: "news/subscription-delivery-mode",
        schemaName: "NewsSubscriptionDeliveryModeSchema",
    },
    NewsSubscriptionDeliveryStatus: {
        modulePath: "news/subscription-delivery-status",
        schemaName: "NewsSubscriptionDeliveryStatusSchema",
    },
    NewsSubscriptionDetail: {
        modulePath: "news/subscription-detail",
        schemaName: "NewsSubscriptionDetailSchema",
    },
    NewsSubscriptionEndpoint: {
        modulePath: "news/subscription-endpoint",
        schemaName: "NewsSubscriptionEndpointSchema",
    },
    NewsSubscriptionEvent: {
        modulePath: "news/subscription-event",
        schemaName: "NewsSubscriptionEventSchema",
    },
    NewsSubscriptionGrant: {
        modulePath: "news/subscription-grant",
        schemaName: "NewsSubscriptionGrantSchema",
    },
    NewsSubscriptionKey: {
        modulePath: "news/subscription-key",
        schemaName: "NewsSubscriptionKeySchema",
    },
    NewsSubscriptionTestEvent: {
        modulePath: "news/subscription-test-event",
        schemaName: "NewsSubscriptionTestEventSchema",
    },
    NewsTitleMention: { modulePath: "news/title-mention", schemaName: "NewsTitleMentionSchema" },
    PageableObject: { modulePath: "pageable/object", schemaName: "PageableObjectSchema" },
    PageBlogPost: { modulePath: "pagination/schemas", schemaName: "PageBlogPostSchema" },
    PageClassification: {
        modulePath: "pagination/schemas",
        schemaName: "PageClassificationSchema",
    },
    PageEmployeeCount: { modulePath: "pagination/schemas", schemaName: "PageEmployeeCountSchema" },
    PageEntity: { modulePath: "pagination/schemas", schemaName: "PageEntitySchema" },
    PageEntityAcquisition: {
        modulePath: "pagination/schemas",
        schemaName: "PageEntityAcquisitionSchema",
    },
    PageEntityDetail: { modulePath: "pagination/schemas", schemaName: "PageEntityDetailSchema" },
    PageEntityFundraiseInvestorJoin: {
        modulePath: "pagination/schemas",
        schemaName: "PageEntityFundraiseInvestorJoinSchema",
    },
    PageEntityFundraiseTransaction: {
        modulePath: "pagination/schemas",
        schemaName: "PageEntityFundraiseTransactionSchema",
    },
    PageEntityInvestorParticipation: {
        modulePath: "pagination/schemas",
        schemaName: "PageEntityInvestorParticipationSchema",
    },
    PageEntityList: { modulePath: "pagination/schemas", schemaName: "PageEntityListSchema" },
    PageEntityPersonAssociation: {
        modulePath: "pagination/schemas",
        schemaName: "PageEntityPersonAssociationSchema",
    },
    PageEntityRelationship: {
        modulePath: "pagination/schemas",
        schemaName: "PageEntityRelationshipSchema",
    },
    PageEntityResearchDetail: {
        modulePath: "pagination/schemas",
        schemaName: "PageEntityResearchDetailSchema",
    },
    PageEntityResearchSnippet: {
        modulePath: "pagination/schemas",
        schemaName: "PageEntityResearchSnippetSchema",
    },
    PageEntitySimilarityResult: {
        modulePath: "pagination/schemas",
        schemaName: "PageEntitySimilarityResultSchema",
    },
    PageEntitySimilaritySummary: {
        modulePath: "pagination/schemas",
        schemaName: "PageEntitySimilaritySummarySchema",
    },
    PageEntityText: { modulePath: "pagination/schemas", schemaName: "PageEntityTextSchema" },
    PageEntityUrlLink: { modulePath: "pagination/schemas", schemaName: "PageEntityUrlLinkSchema" },
    PageEntityValuationTimeSeriesPoint: {
        modulePath: "pagination/schemas",
        schemaName: "PageEntityValuationTimeSeriesPointSchema",
    },
    PageGithubRepo: { modulePath: "pagination/schemas", schemaName: "PageGithubRepoSchema" },
    PageHarnessRun: { modulePath: "pagination/schemas", schemaName: "PageHarnessRunSchema" },
    PageNews: { modulePath: "pagination/schemas", schemaName: "PageNewsSchema" },
    PagePerson: { modulePath: "pagination/schemas", schemaName: "PagePersonSchema" },
    PagePersonDetail: { modulePath: "pagination/schemas", schemaName: "PagePersonDetailSchema" },
    PagePersonInvestment: {
        modulePath: "pagination/schemas",
        schemaName: "PagePersonInvestmentSchema",
    },
    PagePersonInvestorParticipation: {
        modulePath: "pagination/schemas",
        schemaName: "PagePersonInvestorParticipationSchema",
    },
    PagePersonSimilarityResult: {
        modulePath: "pagination/schemas",
        schemaName: "PagePersonSimilarityResultSchema",
    },
    PagePublication: { modulePath: "pagination/schemas", schemaName: "PagePublicationSchema" },
    PageResultEntityList: {
        modulePath: "pagination/schemas",
        schemaName: "PageResultEntityListSchema",
    },
    PageResultNews: { modulePath: "pagination/schemas", schemaName: "PageResultNewsSchema" },
    PageResultPerson: { modulePath: "pagination/schemas", schemaName: "PageResultPersonSchema" },
    PageUniqueId: { modulePath: "pagination/schemas", schemaName: "PageUniqueIdSchema" },
    Person: { modulePath: "person/person", schemaName: "PersonSchema" },
    PersonAliasType: { modulePath: "person/alias-type", schemaName: "PersonAliasTypeSchema" },
    PersonAssociationTenure: {
        modulePath: "person/association-tenure",
        schemaName: "PersonAssociationTenureSchema",
    },
    PersonDetail: { modulePath: "person/detail", schemaName: "PersonDetailSchema" },
    PersonDetailInclude: {
        modulePath: "person/detail-include",
        schemaName: "PersonDetailIncludeSchema",
    },
    PersonEnrichment: { modulePath: "person/enrichment", schemaName: "PersonEnrichmentSchema" },
    PersonEnrichmentPrompt: {
        modulePath: "person/enrichment-prompt",
        schemaName: "PersonEnrichmentPromptSchema",
    },
    PersonFilter: { modulePath: "person/filter", schemaName: "PersonFilterSchema" },
    PersonGraph: { modulePath: "person/graph", schemaName: "PersonGraphSchema" },
    PersonGraphCareerContext: {
        modulePath: "person/graph-career-context",
        schemaName: "PersonGraphCareerContextSchema",
    },
    PersonGraphCoInvestor: {
        modulePath: "person/graph-co-investor",
        schemaName: "PersonGraphCoInvestorSchema",
    },
    PersonGraphMember: { modulePath: "person/graph-member", schemaName: "PersonGraphMemberSchema" },
    PersonGraphSimilarEntity: {
        modulePath: "person/graph-similar-entity",
        schemaName: "PersonGraphSimilarEntitySchema",
    },
    PersonImage: { modulePath: "person/image", schemaName: "PersonImageSchema" },
    PersonInvestedCompany: {
        modulePath: "person/invested-company",
        schemaName: "PersonInvestedCompanySchema",
    },
    PersonInvestment: { modulePath: "person/investment", schemaName: "PersonInvestmentSchema" },
    PersonInvestorParticipation: {
        modulePath: "person/investor-participation",
        schemaName: "PersonInvestorParticipationSchema",
    },
    PersonListArrayFilter: {
        modulePath: "person/list-array-filter",
        schemaName: "PersonListArrayFilterSchema",
    },
    PersonLookupBatch: { modulePath: "person/lookup-batch", schemaName: "PersonLookupBatchSchema" },
    PersonNaturalSearch: {
        modulePath: "person/natural-search",
        schemaName: "PersonNaturalSearchSchema",
    },
    PersonNaturalSearchResult: {
        modulePath: "person/natural-search-result",
        schemaName: "PersonNaturalSearchResultSchema",
    },
    PersonSearchInterpretation: {
        modulePath: "person/search-interpretation",
        schemaName: "PersonSearchInterpretationSchema",
    },
    PersonSimilarityContext: {
        modulePath: "person/similarity-context",
        schemaName: "PersonSimilarityContextSchema",
    },
    PersonSimilarityOrigin: {
        modulePath: "person/similarity-origin",
        schemaName: "PersonSimilarityOriginSchema",
    },
    PersonSimilarityResult: {
        modulePath: "person/similarity-result",
        schemaName: "PersonSimilarityResultSchema",
    },
    ProblemDetail: { modulePath: "http/problem-detail", schemaName: "ProblemDetailSchema" },
    ProblemResolution: { modulePath: "problem/resolution", schemaName: "ProblemResolutionSchema" },
    ProblemType: { modulePath: "problem/type", schemaName: "ProblemTypeSchema" },
    ProseProblem: { modulePath: "prose/problem", schemaName: "ProseProblemSchema" },
    ProseViolation: { modulePath: "prose/violation", schemaName: "ProseViolationSchema" },
    Publication: { modulePath: "publication/publication", schemaName: "PublicationSchema" },
    PublicationFacet: { modulePath: "publication/facet", schemaName: "PublicationFacetSchema" },
    PublicationRelation: {
        modulePath: "publication/relation",
        schemaName: "PublicationRelationSchema",
    },
    PublicationType: { modulePath: "publication/type", schemaName: "PublicationTypeSchema" },
    ReasoningEffort: { modulePath: "reasoning/effort", schemaName: "ReasoningEffortSchema" },
    RedirectSlugPath: {
        modulePath: "redirect/redirect-slug-path",
        schemaName: "RedirectSlugPathSchema",
    },
    RefinementMeta: { modulePath: "refinement/meta", schemaName: "RefinementMetaSchema" },
    RegistryFiling: { modulePath: "registry/filing", schemaName: "RegistryFilingSchema" },
    RegistryFilingAddress: {
        modulePath: "registry/filing-address",
        schemaName: "RegistryFilingAddressSchema",
    },
    RegistryFilingPerson: {
        modulePath: "registry/filing-person",
        schemaName: "RegistryFilingPersonSchema",
    },
    RelationshipDirection: {
        modulePath: "relationship/direction",
        schemaName: "RelationshipDirectionSchema",
    },
    ResearchAccessType: {
        modulePath: "research/access-type",
        schemaName: "ResearchAccessTypeSchema",
    },
    ResearchAllowance: { modulePath: "research/allowance", schemaName: "ResearchAllowanceSchema" },
    ResearchAllowanceType: {
        modulePath: "research/allowance-type",
        schemaName: "ResearchAllowanceTypeSchema",
    },
    ResearchAllowanceUsage: {
        modulePath: "research/allowance-usage",
        schemaName: "ResearchAllowanceUsageSchema",
    },
    ResearchDerivedBucket: {
        modulePath: "research/derived-bucket",
        schemaName: "ResearchDerivedBucketSchema",
    },
    ResearchDerivedRange: {
        modulePath: "research/derived-range",
        schemaName: "ResearchDerivedRangeSchema",
    },
    ResearchDetailType: {
        modulePath: "research/detail-type",
        schemaName: "ResearchDetailTypeSchema",
    },
    ResearchFinding: { modulePath: "research/finding", schemaName: "ResearchFindingSchema" },
    ResearchParagraphShape: {
        modulePath: "research/paragraph-shape",
        schemaName: "ResearchParagraphShapeSchema",
    },
    ResearchRunView: { modulePath: "research/run-view", schemaName: "ResearchRunViewSchema" },
    ResearchSnippetType: {
        modulePath: "research/snippet-type",
        schemaName: "ResearchSnippetTypeSchema",
    },
    ResearchValueRange: {
        modulePath: "research/value-range",
        schemaName: "ResearchValueRangeSchema",
    },
    ResearchValueShapeType: {
        modulePath: "research/value-shape-type",
        schemaName: "ResearchValueShapeTypeSchema",
    },
    ResolvedHandle: { modulePath: "resolved/handle", schemaName: "ResolvedHandleSchema" },
    RoundLabel: { modulePath: "round/label", schemaName: "RoundLabelSchema" },
    Search: { modulePath: "search/search", schemaName: "SearchSchema" },
    SearchAiOverview: { modulePath: "search/ai-overview", schemaName: "SearchAiOverviewSchema" },
    SearchAiOverviewReference: {
        modulePath: "search/ai-overview-reference",
        schemaName: "SearchAiOverviewReferenceSchema",
    },
    SearchAnswer: { modulePath: "search/answer", schemaName: "SearchAnswerSchema" },
    SearchAnswerBox: { modulePath: "search/answer-box", schemaName: "SearchAnswerBoxSchema" },
    SearchAnswerCitation: {
        modulePath: "search/answer-citation",
        schemaName: "SearchAnswerCitationSchema",
    },
    SearchAnswerParagraph: {
        modulePath: "search/answer-paragraph",
        schemaName: "SearchAnswerParagraphSchema",
    },
    SearchAnswerWebSource: {
        modulePath: "search/answer-web-source",
        schemaName: "SearchAnswerWebSourceSchema",
    },
    SearchCacheMode: { modulePath: "search/cache-mode", schemaName: "SearchCacheModeSchema" },
    SearchDiscoveryFiling: {
        modulePath: "search/discovery-filing",
        schemaName: "SearchDiscoveryFilingSchema",
    },
    SearchDuplicateCandidateScore: {
        modulePath: "search/duplicate-candidate-score",
        schemaName: "SearchDuplicateCandidateScoreSchema",
    },
    SearchEvidenceSource: {
        modulePath: "search/evidence-source",
        schemaName: "SearchEvidenceSourceSchema",
    },
    SearchHit: { modulePath: "search/hit", schemaName: "SearchHitSchema" },
    SearchIntent: { modulePath: "search/intent", schemaName: "SearchIntentSchema" },
    SearchInterpretation: {
        modulePath: "search/interpretation",
        schemaName: "SearchInterpretationSchema",
    },
    SearchInvestment: { modulePath: "search/investment", schemaName: "SearchInvestmentSchema" },
    SearchJudgment: { modulePath: "search/judgment", schemaName: "SearchJudgmentSchema" },
    SearchKnowledgeGraph: {
        modulePath: "search/knowledge-graph",
        schemaName: "SearchKnowledgeGraphSchema",
    },
    SearchKnowledgeGraphAttribute: {
        modulePath: "search/knowledge-graph-attribute",
        schemaName: "SearchKnowledgeGraphAttributeSchema",
    },
    SearchKnowledgeGraphFact: {
        modulePath: "search/knowledge-graph-fact",
        schemaName: "SearchKnowledgeGraphFactSchema",
    },
    SearchLayer: { modulePath: "search/layer", schemaName: "SearchLayerSchema" },
    SearchMode: { modulePath: "search/mode", schemaName: "SearchModeSchema" },
    SearchModeExecution: {
        modulePath: "search/mode-execution",
        schemaName: "SearchModeExecutionSchema",
    },
    SearchOrderingEntityFilterSortable: {
        modulePath: "search/ordering-entity-filter-sortable",
        schemaName: "SearchOrderingEntityFilterSortableSchema",
    },
    SearchOrderingPersonSortField: {
        modulePath: "search/ordering-person-sort-field",
        schemaName: "SearchOrderingPersonSortFieldSchema",
    },
    SearchPassage: { modulePath: "search/passage", schemaName: "SearchPassageSchema" },
    SearchPersonProfile: {
        modulePath: "search/person-profile",
        schemaName: "SearchPersonProfileSchema",
    },
    SearchQualifier: { modulePath: "search/qualifier", schemaName: "SearchQualifierSchema" },
    SearchQualifierOption: {
        modulePath: "search/qualifier-option",
        schemaName: "SearchQualifierOptionSchema",
    },
    SearchRelatedQuestion: {
        modulePath: "search/related-question",
        schemaName: "SearchRelatedQuestionSchema",
    },
    SearchRelevance: { modulePath: "search/relevance", schemaName: "SearchRelevanceSchema" },
    SearchSportsResult: {
        modulePath: "search/sports-result",
        schemaName: "SearchSportsResultSchema",
    },
    SearchSportsTeam: { modulePath: "search/sports-team", schemaName: "SearchSportsTeamSchema" },
    SecCompany: { modulePath: "sec/company", schemaName: "SecCompanySchema" },
    SecListingProspectus: {
        modulePath: "sec/listing-prospectus",
        schemaName: "SecListingProspectusSchema",
    },
    SharedDirectory: { modulePath: "shared/directory", schemaName: "SharedDirectorySchema" },
    SharedDirectoryList: {
        modulePath: "shared/directory-list",
        schemaName: "SharedDirectoryListSchema",
    },
    SharedDirectoryMutation: {
        modulePath: "shared/directory-mutation",
        schemaName: "SharedDirectoryMutationSchema",
    },
    SharedDirectoryType: {
        modulePath: "shared/directory-type",
        schemaName: "SharedDirectoryTypeSchema",
    },
    SharedSearch: { modulePath: "shared/search", schemaName: "SharedSearchSchema" },
    SharedSearchList: { modulePath: "shared/search-list", schemaName: "SharedSearchListSchema" },
    SharedSearchMutation: {
        modulePath: "shared/search-mutation",
        schemaName: "SharedSearchMutationSchema",
    },
    SlugLocation: { modulePath: "slug/location", schemaName: "SlugLocationSchema" },
    SlugResource: { modulePath: "redirect/slug-resource", schemaName: "SlugResourceSchema" },
    SortObject: { modulePath: "sort/object", schemaName: "SortObjectSchema" },
    SortOrderEntityFilterSortable: {
        modulePath: "sort/order-entity-filter-sortable",
        schemaName: "SortOrderEntityFilterSortableSchema",
    },
    SortOrderPersonSortField: {
        modulePath: "sort/order-person-sort-field",
        schemaName: "SortOrderPersonSortFieldSchema",
    },
    SourceDocumentList: {
        modulePath: "source/document-list",
        schemaName: "SourceDocumentListSchema",
    },
    StageFrequency: { modulePath: "stage/frequency", schemaName: "StageFrequencySchema" },
    StandardizedClassification: {
        modulePath: "standardized/classification",
        schemaName: "StandardizedClassificationSchema",
    },
    StrictUrlLookupConflict: {
        modulePath: "strict/url-lookup-conflict",
        schemaName: "StrictUrlLookupConflictSchema",
    },
    SuppressionReason: { modulePath: "suppression/reason", schemaName: "SuppressionReasonSchema" },
    SystemBuild: { modulePath: "system/system-build", schemaName: "SystemBuildSchema" },
    SystemBuildDetail: {
        modulePath: "system/system-build-detail",
        schemaName: "SystemBuildDetailSchema",
    },
    SystemGlobalMetrics: {
        modulePath: "system/global-metrics",
        schemaName: "SystemGlobalMetricsSchema",
    },
    TextTypeOption: { modulePath: "text/type-option", schemaName: "TextTypeOptionSchema" },
    UniqueId: { modulePath: "unique/id", schemaName: "UniqueIdSchema" },
    UniqueIdMutation: { modulePath: "unique/id-mutation", schemaName: "UniqueIdMutationSchema" },
    UniqueIdOwnerScope: {
        modulePath: "unique/id-owner-scope",
        schemaName: "UniqueIdOwnerScopeSchema",
    },
    UniqueIdType: { modulePath: "unique/id-type", schemaName: "UniqueIdTypeSchema" },
    UniqueIdTypeAlias: {
        modulePath: "unique/id-type-alias",
        schemaName: "UniqueIdTypeAliasSchema",
    },
    UrlDuplicateConflict: {
        modulePath: "url/duplicate-conflict",
        schemaName: "UrlDuplicateConflictSchema",
    },
    UrlDuplicateJoin: { modulePath: "url/duplicate-join", schemaName: "UrlDuplicateJoinSchema" },
    UrlHostFormResolution: {
        modulePath: "url/host-form-resolution",
        schemaName: "UrlHostFormResolutionSchema",
    },
    UrlMatchMode: { modulePath: "url/match-mode", schemaName: "UrlMatchModeSchema" },
    UrlTypeAlias: { modulePath: "url/type-alias", schemaName: "UrlTypeAliasSchema" },
    ValuationType: { modulePath: "valuation/type", schemaName: "ValuationTypeSchema" },
    WebSearch: { modulePath: "web/search", schemaName: "WebSearchSchema" },
    WebSearchProvider: { modulePath: "web/search-provider", schemaName: "WebSearchProviderSchema" },
    WebSearchRecency: { modulePath: "web/search-recency", schemaName: "WebSearchRecencySchema" },
    WriterAnalysisSection: {
        modulePath: "writer/analysis-section",
        schemaName: "WriterAnalysisSectionSchema",
    },
    WriterBrief: { modulePath: "writer/brief", schemaName: "WriterBriefSchema" },
    WriterChangeSignal: {
        modulePath: "writer/change-signal",
        schemaName: "WriterChangeSignalSchema",
    },
    WriterClaimSurface: {
        modulePath: "writer/claim-surface",
        schemaName: "WriterClaimSurfaceSchema",
    },
    WriterGap: { modulePath: "writer/gap", schemaName: "WriterGapSchema" },
    WriterGapReason: { modulePath: "writer/gap-reason", schemaName: "WriterGapReasonSchema" },
    WriterJudgment: { modulePath: "writer/judgment", schemaName: "WriterJudgmentSchema" },
    WriterMetaAnalysis: {
        modulePath: "writer/meta-analysis",
        schemaName: "WriterMetaAnalysisSchema",
    },
    WriterParagraph: { modulePath: "writer/paragraph", schemaName: "WriterParagraphSchema" },
    WriterParagraphAnalysis: {
        modulePath: "writer/paragraph-analysis",
        schemaName: "WriterParagraphAnalysisSchema",
    },
    WriterPositioning: { modulePath: "writer/positioning", schemaName: "WriterPositioningSchema" },
    WriterPositioningElement: {
        modulePath: "writer/positioning-element",
        schemaName: "WriterPositioningElementSchema",
    },
    WriterScope: { modulePath: "writer/scope", schemaName: "WriterScopeSchema" },
});
//# sourceMappingURL=openapi-component-manifest.js.map