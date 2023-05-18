export interface Product_Api {
    code:           string;
    product:        Product;
    status:         number;
    status_verbose: string;
}

export interface Product {
    _id:                                             string;
    _keywords:                                       string[];
    abbreviated_product_name:                        string;
    abbreviated_product_name_fr:                     string;
    abbreviated_product_name_fr_imported:            string;
    abbreviated_product_name_imported:               string;
    added_countries_tags:                            any[];
    additives_debug_tags:                            any[];
    additives_n:                                     number;
    additives_old_n:                                 number;
    additives_old_tags:                              any[];
    additives_original_tags:                         any[];
    additives_prev_original_tags:                    any[];
    additives_tags:                                  any[];
    allergens:                                       string;
    allergens_from_ingredients:                      string;
    allergens_from_user:                             string;
    allergens_hierarchy:                             string[];
    allergens_imported:                              string;
    allergens_lc:                                    string;
    allergens_tags:                                  string[];
    amino_acids_prev_tags:                           any[];
    amino_acids_tags:                                any[];
    brands:                                          Brands;
    brands_imported:                                 Brands;
    brands_tags:                                     Owner[];
    categories:                                      string;
    categories_hierarchy:                            string[];
    categories_imported:                             string;
    categories_lc:                                   string;
    categories_old:                                  string;
    categories_properties:                           CategoriesProperties;
    categories_properties_tags:                      string[];
    categories_tags:                                 string[];
    category_properties:                             CategoryProperties;
    checkers_tags:                                   any[];
    ciqual_food_name_tags:                           string[];
    cities_tags:                                     any[];
    code:                                            string;
    codes_tags:                                      string[];
    compared_to_category:                            string;
    complete:                                        number;
    completeness:                                    number;
    conservation_conditions:                         string;
    conservation_conditions_fr:                      string;
    conservation_conditions_fr_imported:             string;
    correctors_tags:                                 string[];
    countries:                                       string;
    countries_beforescanbot:                         string;
    countries_hierarchy:                             string[];
    countries_imported:                              string;
    countries_lc:                                    string;
    countries_tags:                                  string[];
    created_t:                                       number;
    creator:                                         string;
    customer_service:                                string;
    customer_service_fr:                             string;
    customer_service_fr_imported:                    string;
    data_quality_bugs_tags:                          any[];
    data_quality_errors_tags:                        any[];
    data_quality_info_tags:                          string[];
    data_quality_tags:                               string[];
    data_quality_warnings_tags:                      string[];
    data_sources:                                    string;
    data_sources_imported:                           string;
    data_sources_tags:                               string[];
    debug_param_sorted_langs:                        string[];
    debug_tags:                                      string[];
    ecoscore_data:                                   EcoscoreData;
    ecoscore_extended_data:                          EcoscoreExtendedData;
    ecoscore_extended_data_version:                  string;
    ecoscore_grade:                                  EcoscoreGrade;
    ecoscore_score:                                  number;
    ecoscore_tags:                                   EcoscoreGrade[];
    editors:                                         string[];
    editors_tags:                                    string[];
    emb_codes:                                       string;
    emb_codes_20141016:                              string;
    emb_codes_orig:                                  string;
    emb_codes_tags:                                  any[];
    entry_dates_tags:                                string[];
    environment_impact_level:                        string;
    environment_impact_level_tags:                   any[];
    expiration_date:                                 string;
    food_groups:                                     string;
    food_groups_tags:                                string[];
    "fruits-vegetables-nuts_100g_estimate":          number;
    generic_name:                                    string;
    generic_name_bg:                                 string;
    generic_name_de:                                 string;
    generic_name_en:                                 string;
    generic_name_es:                                 string;
    generic_name_fr:                                 string;
    generic_name_fr_imported:                        string;
    generic_name_it:                                 string;
    generic_name_ru:                                 string;
    generic_name_sk:                                 string;
    generic_name_sr:                                 string;
    generic_name_xx:                                 string;
    generic_name_xx_debug_tags:                      any[];
    grades:                                          CategoryProperties;
    id:                                              string;
    image_front_small_url:                           string;
    image_front_thumb_url:                           string;
    image_front_url:                                 string;
    image_ingredients_small_url:                     string;
    image_ingredients_thumb_url:                     string;
    image_ingredients_url:                           string;
    image_nutrition_small_url:                       string;
    image_nutrition_thumb_url:                       string;
    image_nutrition_url:                             string;
    image_packaging_small_url:                       string;
    image_packaging_thumb_url:                       string;
    image_packaging_url:                             string;
    image_small_url:                                 string;
    image_thumb_url:                                 string;
    image_url:                                       string;
    images:                                          Images;
    informers_tags:                                  string[];
    ingredients:                                     Ingredient[];
    ingredients_analysis:                            CategoryProperties;
    ingredients_analysis_tags:                       string[];
    ingredients_debug:                               Array<null | string>;
    ingredients_from_or_that_may_be_from_palm_oil_n: number;
    ingredients_from_palm_oil_n:                     number;
    ingredients_from_palm_oil_tags:                  any[];
    ingredients_hierarchy:                           string[];
    ingredients_ids_debug:                           string[];
    ingredients_n:                                   number;
    ingredients_n_tags:                              string[];
    ingredients_original_tags:                       string[];
    ingredients_percent_analysis:                    number;
    ingredients_tags:                                string[];
    ingredients_text:                                string;
    ingredients_text_bg:                             string;
    ingredients_text_de:                             string;
    ingredients_text_debug:                          string;
    ingredients_text_en:                             string;
    ingredients_text_es:                             string;
    ingredients_text_fr:                             string;
    ingredients_text_fr_imported:                    string;
    ingredients_text_it:                             string;
    ingredients_text_ru:                             string;
    ingredients_text_sk:                             string;
    ingredients_text_sr:                             string;
    ingredients_text_with_allergens:                 string;
    ingredients_text_with_allergens_bg:              string;
    ingredients_text_with_allergens_de:              string;
    ingredients_text_with_allergens_en:              string;
    ingredients_text_with_allergens_es:              string;
    ingredients_text_with_allergens_fr:              string;
    ingredients_text_with_allergens_it:              string;
    ingredients_text_with_allergens_ru:              string;
    ingredients_text_with_allergens_sk:              string;
    ingredients_text_with_allergens_sr:              string;
    ingredients_text_xx:                             string;
    ingredients_text_xx_debug_tags:                  any[];
    ingredients_that_may_be_from_palm_oil_n:         number;
    ingredients_that_may_be_from_palm_oil_tags:      any[];
    ingredients_with_specified_percent_n:            number;
    ingredients_with_specified_percent_sum:          number;
    ingredients_with_unspecified_percent_n:          number;
    ingredients_with_unspecified_percent_sum:        number;
    interface_version_created:                       string;
    interface_version_modified:                      string;
    known_ingredients_n:                             number;
    labels:                                          string;
    labels_hierarchy:                                string[];
    labels_lc:                                       string;
    labels_old:                                      string;
    labels_tags:                                     string[];
    lang:                                            string;
    lang_imported:                                   string;
    languages:                                       { [key: string]: number };
    languages_codes:                                 LanguagesCodes;
    languages_hierarchy:                             string[];
    languages_tags:                                  string[];
    last_edit_dates_tags:                            string[];
    last_editor:                                     string;
    last_image_dates_tags:                           string[];
    last_image_t:                                    number;
    last_modified_by:                                string;
    last_modified_t:                                 number;
    lc:                                              string;
    lc_imported:                                     string;
    link:                                            string;
    main_countries_tags:                             any[];
    manufacturing_places:                            string;
    manufacturing_places_tags:                       string[];
    max_imgid:                                       string;
    minerals_prev_tags:                              any[];
    minerals_tags:                                   any[];
    misc_tags:                                       string[];
    new_additives_n:                                 number;
    no_nutrition_data:                               string;
    no_nutrition_data_imported:                      string;
    nova_group:                                      number;
    nova_group_debug:                                string;
    nova_groups:                                     string;
    nova_groups_markers:                             CategoryProperties;
    nova_groups_tags:                                string[];
    nucleotides_prev_tags:                           any[];
    nucleotides_tags:                                any[];
    nutrient_levels:                                 NutrientLevels;
    nutrient_levels_tags:                            string[];
    nutriments:                                      Nutriments;
    nutriscore_data:                                 NutriscoreData;
    nutriscore_grade:                                EcoscoreGrade;
    nutriscore_score:                                number;
    nutriscore_score_opposite:                       number;
    nutrition_data:                                  string;
    nutrition_data_per:                              string;
    nutrition_data_per_imported:                     string;
    nutrition_data_prepared:                         string;
    nutrition_data_prepared_per:                     string;
    nutrition_data_prepared_per_imported:            string;
    nutrition_grade_fr:                              EcoscoreGrade;
    nutrition_grades:                                EcoscoreGrade;
    nutrition_grades_tags:                           EcoscoreGrade[];
    nutrition_score_beverage:                        number;
    nutrition_score_debug:                           string;
    obsolete:                                        string;
    obsolete_imported:                               string;
    obsolete_since_date:                             string;
    origin_bg:                                       string;
    origin_de:                                       string;
    origin_en:                                       string;
    origin_es:                                       string;
    origin_fr:                                       string;
    origin_it:                                       string;
    origin_ru:                                       string;
    origin_sk:                                       string;
    origin_sr:                                       string;
    origins:                                         string;
    origins_hierarchy:                               string[];
    origins_lc:                                      string;
    origins_old:                                     string;
    origins_tags:                                    string[];
    other_nutritional_substances_prev_tags:          any[];
    other_nutritional_substances_tags:               any[];
    owner:                                           Owner;
    owner_fields:                                    { [key: string]: number };
    owner_imported:                                  Owner;
    owners_tags:                                     Owner;
    packaging:                                       string;
    packaging_hierarchy:                             string[];
    packaging_imported:                              string;
    packaging_lc:                                    string;
    packaging_materials_tags:                        string[];
    packaging_old:                                   string;
    packaging_old_before_taxonomization:             string;
    packaging_recycling_tags:                        string[];
    packaging_shapes_tags:                           string[];
    packaging_tags:                                  string[];
    packaging_text:                                  string;
    packaging_text_bg:                               string;
    packaging_text_de:                               string;
    packaging_text_en:                               string;
    packaging_text_es:                               string;
    packaging_text_fr:                               string;
    packaging_text_it:                               string;
    packaging_text_ru:                               string;
    packaging_text_sk:                               string;
    packaging_text_sr:                               string;
    packagings:                                      PackagingElement[];
    packagings_complete:                             number;
    photographers_tags:                              string[];
    pnns_groups_1:                                   string;
    pnns_groups_1_tags:                              string[];
    pnns_groups_2:                                   string;
    pnns_groups_2_tags:                              string[];
    popularity_key:                                  number;
    popularity_tags:                                 string[];
    preparation:                                     string;
    preparation_fr:                                  string;
    preparation_fr_imported:                         string;
    producer_version_id:                             string;
    producer_version_id_imported:                    string;
    product_name:                                    string;
    product_name_bg:                                 string;
    product_name_de:                                 string;
    product_name_debug_tags:                         any[];
    product_name_en:                                 string;
    product_name_es:                                 string;
    product_name_fr:                                 string;
    product_name_fr_imported:                        string;
    product_name_it:                                 string;
    product_name_ru:                                 string;
    product_name_sk:                                 string;
    product_name_sr:                                 string;
    product_name_xx:                                 string;
    product_name_xx_debug_tags:                      any[];
    product_quantity:                                string;
    purchase_places:                                 string;
    purchase_places_tags:                            string[];
    quantity:                                        string;
    quantity_imported:                               string;
    removed_countries_tags:                          any[];
    rev:                                             number;
    scans_n:                                         number;
    scores:                                          CategoryProperties;
    selected_images:                                 SelectedImages;
    serving_quantity:                                string;
    serving_size:                                    string;
    serving_size_imported:                           string;
    sortkey:                                         number;
    sources:                                         Source[];
    sources_fields:                                  SourcesFields;
    states:                                          string;
    states_hierarchy:                                string[];
    states_tags:                                     string[];
    stores:                                          string;
    stores_tags:                                     string[];
    teams:                                           string;
    teams_tags:                                      string[];
    traces:                                          string;
    traces_from_ingredients:                         string;
    traces_from_user:                                string;
    traces_hierarchy:                                string[];
    traces_imported:                                 string;
    traces_lc:                                       string;
    traces_tags:                                     string[];
    unique_scans_n:                                  number;
    unknown_ingredients_n:                           number;
    unknown_nutrients_tags:                          any[];
    update_key:                                      string;
    vitamins_prev_tags:                              any[];
    vitamins_tags:                                   any[];
    weighers_tags:                                   any[];
    weighters_tags:                                  any[];
}

export enum Brands {
    Barilla = "Barilla",
    BarillaFranceSa = "barilla-france-sa",
    BrandsBarilla = "barilla",
    FoodRepo = "FoodRepo",
}

export enum Owner {
    Barilla = "barilla",
    OpenfoodCh = "openfood-ch",
    OrgBarilla = "org-barilla",
    OrgBarillaFranceSa = "org-barilla-france-sa",
}

export interface CategoriesProperties {
    "agribalyse_food_code:en": string;
    "ciqual_food_code:en":     string;
}

export interface CategoryProperties {
}

export interface EcoscoreData {
    adjustments:          Adjustments;
    agribalyse:           Agribalyse;
    grade:                EcoscoreGrade;
    grades:               { [key: string]: EcoscoreGrade };
    missing:              Missing;
    missing_data_warning: number;
    previous_data:        PreviousData;
    score:                number;
    scores:               { [key: string]: number };
    status:               string;
}

export interface Adjustments {
    origins_of_ingredients: OriginsOfIngredients;
    packaging:              AdjustmentsPackaging;
    production_system:      ProductionSystem;
    threatened_species:     CategoryProperties;
}

export interface OriginsOfIngredients {
    aggregated_origins:         AggregatedOrigin[];
    epi_score:                  number;
    epi_value:                  number;
    origins_from_origins_field: string[];
    transportation_score:       number;
    transportation_scores:      { [key: string]: number };
    transportation_value:       number;
    transportation_values:      { [key: string]: number };
    value:                      number;
    values:                     { [key: string]: number };
}

export interface AggregatedOrigin {
    epi_score:            string;
    origin:               string;
    percent:              number;
    transportation_score: null;
}

export interface AdjustmentsPackaging {
    non_recyclable_and_non_biodegradable_materials: number;
    packagings:                                     PackagingElement[];
    score:                                          number;
    value:                                          number;
    warning:                                        string;
}

export interface PackagingElement {
    ecoscore_material_score?: number;
    ecoscore_shape_ratio?:    number;
    material:                 string;
    number_of_units?:         number;
    quantity_per_unit?:       string;
    quantity_per_unit_unit?:  string;
    quantity_per_unit_value?: number;
    recycling?:               string;
    shape?:                   string;
}

export interface ProductionSystem {
    labels:  any[];
    value:   number;
    warning: string;
}

export interface Agribalyse {
    agribalyse_food_code: string;
    co2_agriculture:      number;
    co2_consumption:      number;
    co2_distribution:     number;
    co2_packaging:        number;
    co2_processing:       number;
    co2_total:            number;
    co2_transportation:   number;
    code:                 string;
    dqr:                  string;
    ef_agriculture:       number;
    ef_consumption:       number;
    ef_distribution:      number;
    ef_packaging:         number;
    ef_processing:        number;
    ef_total:             number;
    ef_transportation:    number;
    is_beverage:          number;
    name_en:              string;
    name_fr:              string;
    score:                number;
    version?:             string;
}

export enum EcoscoreGrade {
    A = "a",
    B = "b",
}

export interface Missing {
    labels:     number;
    packagings: number;
}

export interface PreviousData {
    agribalyse: Agribalyse;
    grade:      EcoscoreGrade;
    score:      number;
}

export interface EcoscoreExtendedData {
    impact: Impact;
}

export interface Impact {
    average_total_used_mass:                     number;
    calculation_time:                            number;
    confidence_score_distribution:               number[];
    const_relax_coef:                            number;
    data_sources:                                DataSources;
    ignored_unknown_ingredients:                 any[];
    impact_distributions:                        ImpactDistributions;
    impacts_geom_means:                          Impacts;
    impacts_geom_stdevs:                         Impacts;
    impacts_quantiles:                           ImpactsQuantiles;
    impacts_relative_interquartile:              Impacts;
    impacts_units:                               ImpactsUnits;
    ingredients_impacts_share:                   IngredientsImpactsShare;
    ingredients_mass_share:                      IngredientsMassShare;
    mean_confidence_interval_distribution:       MeanConfidenceIntervalDistribution;
    number_of_ingredients:                       number;
    number_of_runs:                              number;
    product_quantity:                            number;
    recipes:                                     IngredientsMassShare[];
    reliability:                                 number;
    total_used_mass_distribution:                number[];
    uncharacterized_ingredients:                 UncharacterizedIngredients;
    uncharacterized_ingredients_mass_proportion: UncharacterizedIngredientsMassProportionClass;
    uncharacterized_ingredients_ratio:           UncharacterizedIngredientsMassProportionClass;
    warnings:                                    any[];
}

export interface DataSources {
    "en:durum_wheat_semolina_pasta": En;
    "en:water":                      En;
}

export interface En {
    environmental_impact: EnvironmentalImpact[];
    nutrition:            EnvironmentalImpact[];
}

export interface EnvironmentalImpact {
    database: string;
    entry:    string;
}

export interface ImpactDistributions {
    Climate_change:  number[];
    EF_single_score: number[];
}

export interface Impacts {
    Climate_change:  number;
    EF_single_score: number;
}

export interface ImpactsQuantiles {
    Climate_change:  { [key: string]: number };
    EF_single_score: { [key: string]: number };
}

export interface ImpactsUnits {
    Climate_change:  string;
    EF_single_score: string;
}

export interface IngredientsImpactsShare {
    Climate_change:  IngredientsMassShare;
    EF_single_score: IngredientsMassShare;
}

export interface IngredientsMassShare {
    "en:durum_wheat_semolina_pasta": number;
    "en:water":                      number;
}

export interface MeanConfidenceIntervalDistribution {
    Climate_change:  Array<number[]>;
    EF_single_score: Array<number[]>;
}

export interface UncharacterizedIngredients {
    impact:    any[];
    nutrition: any[];
}

export interface UncharacterizedIngredientsMassProportionClass {
    impact:    number;
    nutrition: number;
}

export interface Images {
    "1":            The1;
    "10":           The1;
    "11":           The11;
    "12":           The11;
    "13":           The11;
    "14":           The11;
    "15":           The11;
    "16":           The11;
    "17":           The11;
    "18":           The11;
    "19":           The11;
    "2":            The1;
    "20":           The11;
    "21":           The11;
    "24":           The1;
    "25":           The1;
    "26":           The1;
    "27":           The1;
    "28":           The1;
    "29":           The1;
    "3":            The1;
    "30":           The1;
    "31":           The1;
    "32":           The1;
    "33":           The1;
    "34":           The1;
    "35":           The1;
    "36":           The1;
    "38":           The1;
    "39":           The1;
    "4":            The1;
    "40":           The1;
    "41":           The1;
    "42":           The1;
    "43":           The1;
    "44":           The1;
    "45":           The1;
    "46":           The1;
    "47":           The1;
    "48":           The1;
    "5":            The11;
    "51":           The1;
    "52":           The1;
    "54":           The1;
    "55":           The1;
    "56":           The1;
    "57":           The1;
    "58":           The1;
    "6":            The1;
    "61":           The1;
    "62":           The1;
    "63":           The1;
    "64":           The1;
    "65":           The1;
    "66":           The1;
    "67":           The1;
    "68":           The1;
    "69":           The1;
    "7":            The1;
    "70":           The1;
    "71":           The1;
    "72":           The1;
    "73":           The1;
    "74":           The1;
    "75":           The1;
    "76":           The1;
    "8":            The1;
    "9":            The1;
    front_bg:       FrontBg;
    front_de:       FrontBg;
    front_en:       FrontBg;
    front_es:       FrontBg;
    front_fr:       FrontFr;
    front_it:       FrontBg;
    front_ru:       FrontBg;
    front_sr:       FrontBg;
    ingredients_de: FrontFr;
    ingredients_en: FrontBg;
    ingredients_fr: FrontFr;
    ingredients_it: FrontBg;
    ingredients_ru: FrontBg;
    ingredients_sr: FrontBg;
    nutrition_de:   FrontFr;
    nutrition_en:   FrontBg;
    nutrition_fr:   FrontBg;
    nutrition_it:   FrontBg;
    nutrition_ru:   FrontBg;
    nutrition_sr:   FrontBg;
    packaging_en:   FrontBg;
    packaging_it:   FrontBg;
}

export interface The1 {
    sizes:      Sizes;
    uploaded_t: number;
    uploader:   string;
}

export interface Sizes {
    "100":  The100;
    "400":  The100;
    full:   The100;
    "200"?: The100;
}

export interface The100 {
    h: number;
    w: number;
}

export interface The11 {
    sizes:      Sizes;
    uploaded_t: string;
    uploader:   string;
}

export interface FrontBg {
    angle:                   null | string;
    coordinates_image_size?: string;
    geometry:                string;
    imgid:                   string;
    normalize:               null | string;
    rev:                     string;
    sizes:                   Sizes;
    white_magic:             null | string;
    x1:                      null | string;
    x2:                      null | string;
    y1:                      null | string;
    y2:                      null | string;
    ocr?:                    number;
    orientation?:            null | string;
}

export interface FrontFr {
    angle:                  number;
    coordinates_image_size: string;
    geometry:               string;
    imgid:                  string;
    normalize:              null | string;
    rev:                    string;
    sizes:                  Sizes;
    white_magic:            null | string;
    x1:                     string;
    x2:                     string;
    y1:                     string;
    y2:                     string;
}

export interface Ingredient {
    id:               string;
    percent_estimate: number;
    percent_max:      number;
    percent_min:      number;
    rank:             number;
    text:             string;
    vegan:            string;
    vegetarian:       string;
}

export interface LanguagesCodes {
    bg: number;
    de: number;
    en: number;
    es: number;
    fr: number;
    it: number;
    ru: number;
    sk: number;
    sr: number;
}

export interface NutrientLevels {
    fat:             string;
    salt:            string;
    "saturated-fat": string;
    sugars:          string;
}

export interface Nutriments {
    carbohydrates:                                              number;
    carbohydrates_100g:                                         number;
    carbohydrates_serving:                                      number;
    carbohydrates_unit:                                         string;
    carbohydrates_value:                                        number;
    energy:                                                     number;
    "energy-kcal":                                              number;
    "energy-kcal_100g":                                         number;
    "energy-kcal_serving":                                      number;
    "energy-kcal_unit":                                         string;
    "energy-kcal_value":                                        number;
    "energy-kcal_value_computed":                               number;
    "energy-kj":                                                number;
    "energy-kj_100g":                                           number;
    "energy-kj_serving":                                        number;
    "energy-kj_unit":                                           string;
    "energy-kj_value":                                          number;
    "energy-kj_value_computed":                                 number;
    energy_100g:                                                number;
    energy_serving:                                             number;
    energy_unit:                                                string;
    energy_value:                                               number;
    fat:                                                        number;
    fat_100g:                                                   number;
    fat_serving:                                                number;
    fat_unit:                                                   string;
    fat_value:                                                  number;
    fiber:                                                      number;
    fiber_100g:                                                 number;
    fiber_serving:                                              number;
    fiber_unit:                                                 string;
    fiber_value:                                                number;
    "fruits-vegetables-nuts":                                   number;
    "fruits-vegetables-nuts-estimate-from-ingredients_100g":    number;
    "fruits-vegetables-nuts-estimate-from-ingredients_serving": number;
    "fruits-vegetables-nuts_100g":                              number;
    "fruits-vegetables-nuts_serving":                           number;
    "fruits-vegetables-nuts_unit":                              string;
    "fruits-vegetables-nuts_value":                             number;
    "nova-group":                                               number;
    "nova-group_100g":                                          number;
    "nova-group_serving":                                       number;
    "nutrition-score-fr":                                       number;
    "nutrition-score-fr_100g":                                  number;
    proteins:                                                   number;
    proteins_100g:                                              number;
    proteins_serving:                                           number;
    proteins_unit:                                              string;
    proteins_value:                                             number;
    salt:                                                       number;
    salt_100g:                                                  number;
    salt_serving:                                               number;
    salt_unit:                                                  string;
    salt_value:                                                 number;
    "saturated-fat":                                            number;
    "saturated-fat_100g":                                       number;
    "saturated-fat_serving":                                    number;
    "saturated-fat_unit":                                       string;
    "saturated-fat_value":                                      number;
    sodium:                                                     number;
    sodium_100g:                                                number;
    sodium_serving:                                             number;
    sodium_unit:                                                string;
    sodium_value:                                               number;
    sugars:                                                     number;
    sugars_100g:                                                number;
    sugars_serving:                                             number;
    sugars_unit:                                                string;
    sugars_value:                                               number;
}

export interface NutriscoreData {
    energy:                                                number;
    energy_points:                                         number;
    energy_value:                                          number;
    fiber:                                                 number;
    fiber_points:                                          number;
    fiber_value:                                           number;
    fruits_vegetables_nuts_colza_walnut_olive_oils:        number;
    fruits_vegetables_nuts_colza_walnut_olive_oils_points: number;
    fruits_vegetables_nuts_colza_walnut_olive_oils_value:  number;
    grade:                                                 EcoscoreGrade;
    is_beverage:                                           number;
    is_cheese:                                             number;
    is_fat:                                                number;
    is_water:                                              number;
    negative_points:                                       number;
    positive_points:                                       number;
    proteins:                                              number;
    proteins_points:                                       number;
    proteins_value:                                        number;
    saturated_fat:                                         number;
    saturated_fat_points:                                  number;
    saturated_fat_ratio:                                   number;
    saturated_fat_ratio_points:                            number;
    saturated_fat_ratio_value:                             number;
    saturated_fat_value:                                   number;
    score:                                                 number;
    sodium:                                                number;
    sodium_points:                                         number;
    sodium_value:                                          number;
    sugars:                                                number;
    sugars_points:                                         number;
    sugars_value:                                          number;
}

export interface SelectedImages {
    front:       Front;
    ingredients: Front;
    nutrition:   Front;
    packaging:   SelectedImagesPackaging;
}

export interface Front {
    display: FrontDisplay;
    small:   FrontDisplay;
    thumb:   FrontDisplay;
}

export interface FrontDisplay {
    bg?: string;
    de:  string;
    en:  string;
    es?: string;
    fr:  string;
    it:  string;
    ru:  string;
    sr:  string;
}

export interface SelectedImagesPackaging {
    display: PackagingDisplay;
    small:   PackagingDisplay;
    thumb:   PackagingDisplay;
}

export interface PackagingDisplay {
    en: string;
    it: string;
}

export interface Source {
    fields:              string[];
    id:                  Owner;
    images:              string[];
    import_t:            number;
    url:                 null | string;
    manufacturer?:       number | string;
    name?:               Brands | null;
    source_licence?:     string;
    source_licence_url?: string;
}

export interface SourcesFields {
    "org-gs1": OrgGs1;
}

export interface OrgGs1 {
    gln:                            string;
    gpcCategoryCode:                string;
    gpcCategoryName:                string;
    isAllergenRelevantDataProvided: string;
    lastChangeDateTime:             Date;
    partyName:                      string;
    productionVariantDescription:   string;
    publicationDateTime:            Date;
}
