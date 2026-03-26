export type Language = "en" | "it" | "fr" | "ar" | "bn";

export const LANGUAGES: { code: Language; label: string; flag: string; rtl: boolean }[] = [
  { code: "en", label: "English", flag: "🇬🇧", rtl: false },
  { code: "it", label: "Italiano", flag: "🇮🇹", rtl: false },
  { code: "fr", label: "Français", flag: "🇫🇷", rtl: false },
  { code: "ar", label: "العربية", flag: "🇸🇦", rtl: true },
  { code: "bn", label: "বাংলা", flag: "🇧🇩", rtl: false },
];

type TranslationKeys = {
  // Header
  appTitle: string;
  appSubtitle: string;
  back: string;
  settings: string;
  // Steps
  stepHousehold: string;
  stepIncome: string;
  stepAssets: string;
  stepRealEstate: string;
  stepResult: string;
  stepOf: string; // "Step X of Y"
  // Household
  householdTitle: string;
  householdDesc: string;
  adults: string;
  minorChildren: string;
  bothParentsWork: string;
  bothParentsWorkHint: string;
  childAdvantage: string;
  childAdvantageDesc: string;
  continue: string;
  // Income
  incomeTitle: string;
  incomeDesc: string;
  totalIncome: string;
  totalIncomeHint: string;
  annualRent: string;
  annualRentHint: string;
  rentInfo: string;
  // Assets
  assetsTitle: string;
  assetsDesc: string;
  bankBalances: string;
  bankBalancesHint: string;
  govBonds: string;
  govBondsHint: string;
  govBondsTitle: string;
  govBondsDesc: string;
  // Real estate
  realEstateTitle: string;
  realEstateDesc: string;
  homeValue: string;
  homeValueHint: string;
  remainingMortgage: string;
  remainingMortgageHint: string;
  metropolitanCity: string;
  firstHomeFranchise: string;
  metroExamples: string;
  calculateBtn: string;
  // Results
  estimatedISEE: string;
  estimateYear: string;
  formulaApplied: string;
  detailBreakdown: string;
  isrLabel: string;
  rentDeduction: string;
  ispMovable: string;
  govBondsExclusion: string;
  movableFranchise: string;
  ispRealEstateLabel: string;
  realEstateFranchise: string;
  ispTotal20: string;
  equivalenceScale: string;
  baseScale: string;
  surcharges: string;
  householdSizeLabel: string;
  people: string;
  disclaimerTitle: string;
  disclaimerText: string;
  recalculate: string;
  // Footer
  footerDisclaimer: string;
  // Settings
  theme: string;
  light: string;
  dark: string;
  system: string;
  language: string;
};

const translations: Record<Language, TranslationKeys> = {
  en: {
    appTitle: "ISEE Calculator",
    appSubtitle: "2026 / 2027",
    back: "Back",
    settings: "Settings",
    stepHousehold: "Household",
    stepIncome: "Income",
    stepAssets: "Assets",
    stepRealEstate: "Property",
    stepResult: "Result",
    stepOf: "Step {current} of {total}",
    householdTitle: "Household Composition",
    householdDesc: "Who lives in your household?",
    adults: "Adults",
    minorChildren: "Minor children",
    bothParentsWork: "Both parents work",
    bothParentsWorkHint: "+0.30 to equivalence scale",
    childAdvantage: "Child advantage:",
    childAdvantageDesc: "Each minor child adds +0.20 to the equivalence scale, reducing the final ISEE.",
    continue: "Continue",
    incomeTitle: "Income (ISR)",
    incomeDesc: "Household income from 2 years ago",
    totalIncome: "Total household income",
    totalIncomeHint: "Sum of all members' income (year 2024)",
    annualRent: "Annual rent paid",
    annualRentHint: "Maximum deduction: €7,000",
    rentInfo: "Rent paid is deducted from income (up to €7,000), reducing the ISR component.",
    assetsTitle: "Movable Assets",
    assetsDesc: "Bank accounts and savings",
    bankBalances: "Total bank/postal account balances",
    bankBalancesHint: "Sum of all household accounts",
    govBonds: "Of which in Government Bonds (BTP/BOT) or Postal Savings",
    govBondsHint: "Maximum exclusion: €50,000",
    govBondsTitle: "2026 Update: Government Bond Exclusion",
    govBondsDesc: "Up to €50,000 in BTP, BOT and Postal Savings bonds are excluded from the ISEE calculation. This is one of the main legal ways to reduce your ISEE.",
    realEstateTitle: "Real Estate Assets",
    realEstateDesc: "Primary residence",
    homeValue: "Cadastral value of primary residence",
    homeValueHint: "Revalued IMU value of the property",
    remainingMortgage: "Remaining mortgage",
    remainingMortgageHint: "Outstanding mortgage debt on the property",
    metropolitanCity: "I live in a Metropolitan City",
    firstHomeFranchise: "First home franchise:",
    metroExamples: "E.g: Rome, Milan, Naples, Turin, Palermo, Genoa…",
    calculateBtn: "Calculate my ISEE →",
    estimatedISEE: "Your estimated ISEE",
    estimateYear: "Estimate for year 2026/2027",
    formulaApplied: "Formula applied",
    detailBreakdown: "Calculation Details",
    isrLabel: "ISR Component (Income)",
    rentDeduction: "Rent deduction",
    ispMovable: "Movable ISP",
    govBondsExclusion: "Government bonds exclusion",
    movableFranchise: "Movable franchise",
    ispRealEstateLabel: "Real estate ISP",
    realEstateFranchise: "First home franchise",
    ispTotal20: "Total ISP × 20%",
    equivalenceScale: "Equivalence scale",
    baseScale: "Base scale",
    surcharges: "Surcharges",
    householdSizeLabel: "Household size",
    people: "people",
    disclaimerTitle: "Warning:",
    disclaimerText: "This is an indicative estimate. For legal purposes, you must file a Dichiarazione Sostitutiva Unica (DSU) through INPS or an authorized CAF.",
    recalculate: "Recalculate",
    footerDisclaimer: "This is an indicative estimate. For legal purposes, you must file a DSU through INPS or an authorized CAF.",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    system: "System",
    language: "Language",
  },
  it: {
    appTitle: "Calcolatore ISEE",
    appSubtitle: "2026 / 2027",
    back: "Indietro",
    settings: "Impostazioni",
    stepHousehold: "Nucleo",
    stepIncome: "Redditi",
    stepAssets: "Patrimonio",
    stepRealEstate: "Immobili",
    stepResult: "Risultato",
    stepOf: "Passo {current} di {total}",
    householdTitle: "Nucleo Familiare",
    householdDesc: "Chi vive nel tuo nucleo?",
    adults: "Adulti",
    minorChildren: "Figli minorenni",
    bothParentsWork: "Entrambi i genitori lavorano",
    bothParentsWorkHint: "+0.30 alla scala di equivalenza",
    childAdvantage: "Vantaggio figli:",
    childAdvantageDesc: "Ogni figlio minore aggiunge +0.20 alla scala di equivalenza, riducendo l'ISEE finale.",
    continue: "Continua",
    incomeTitle: "Redditi (ISR)",
    incomeDesc: "Redditi del nucleo riferiti a 2 anni fa",
    totalIncome: "Reddito complessivo del nucleo",
    totalIncomeHint: "Somma dei redditi di tutti i componenti (anno 2024)",
    annualRent: "Affitto annuo pagato",
    annualRentHint: "Deduzione massima: €7.000",
    rentInfo: "L'affitto pagato viene dedotto dal reddito (fino a un massimo di €7.000), riducendo la componente ISR.",
    assetsTitle: "Patrimonio Mobiliare",
    assetsDesc: "Conti correnti e risparmi",
    bankBalances: "Saldo totale conti bancari/postali",
    bankBalancesHint: "Somma di tutti i conti del nucleo familiare",
    govBonds: "Di cui in Titoli di Stato (BTP/BOT) o Buoni Postali",
    govBondsHint: "Esclusione massima: €50.000",
    govBondsTitle: "Novità 2026: Esclusione Titoli di Stato",
    govBondsDesc: "Fino a €50.000 in BTP, BOT e Buoni Postali fruttiferi vengono esclusi dal calcolo ISEE. Questo è uno dei modi principali per ridurre legalmente il proprio ISEE.",
    realEstateTitle: "Patrimonio Immobiliare",
    realEstateDesc: "Abitazione principale",
    homeValue: "Valore catastale dell'abitazione principale",
    homeValueHint: "Valore IMU rivalutato dell'immobile",
    remainingMortgage: "Mutuo residuo",
    remainingMortgageHint: "Debito residuo del mutuo sull'abitazione",
    metropolitanCity: "Risiedo in una Città Metropolitana",
    firstHomeFranchise: "Franchigia prima casa:",
    metroExamples: "Es: Roma, Milano, Napoli, Torino, Palermo, Genova…",
    calculateBtn: "Calcola il mio ISEE →",
    estimatedISEE: "Il tuo ISEE stimato",
    estimateYear: "Stima per l'anno 2026/2027",
    formulaApplied: "Formula applicata",
    detailBreakdown: "Dettaglio Calcolo",
    isrLabel: "Componente ISR (Reddito)",
    rentDeduction: "Deduzione affitto",
    ispMovable: "ISP Mobiliare",
    govBondsExclusion: "Esclusione Titoli di Stato",
    movableFranchise: "Franchigia mobiliare",
    ispRealEstateLabel: "ISP Immobiliare",
    realEstateFranchise: "Franchigia prima casa",
    ispTotal20: "ISP Totale × 20%",
    equivalenceScale: "Scala di equivalenza",
    baseScale: "Scala base",
    surcharges: "Maggiorazioni",
    householdSizeLabel: "Nucleo familiare",
    people: "persone",
    disclaimerTitle: "Attenzione:",
    disclaimerText: "Questa è una stima indicativa. Per fini legali è necessario presentare la Dichiarazione Sostitutiva Unica (DSU) tramite INPS o un CAF autorizzato.",
    recalculate: "Ricalcola",
    footerDisclaimer: "Questa è una stima indicativa. Per fini legali è necessario presentare la DSU tramite INPS o un CAF autorizzato.",
    theme: "Tema",
    light: "Chiaro",
    dark: "Scuro",
    system: "Sistema",
    language: "Lingua",
  },
  fr: {
    appTitle: "Calculateur ISEE",
    appSubtitle: "2026 / 2027",
    back: "Retour",
    settings: "Paramètres",
    stepHousehold: "Ménage",
    stepIncome: "Revenus",
    stepAssets: "Patrimoine",
    stepRealEstate: "Immobilier",
    stepResult: "Résultat",
    stepOf: "Étape {current} sur {total}",
    householdTitle: "Composition du ménage",
    householdDesc: "Qui vit dans votre foyer ?",
    adults: "Adultes",
    minorChildren: "Enfants mineurs",
    bothParentsWork: "Les deux parents travaillent",
    bothParentsWorkHint: "+0,30 à l'échelle d'équivalence",
    childAdvantage: "Avantage enfants :",
    childAdvantageDesc: "Chaque enfant mineur ajoute +0,20 à l'échelle d'équivalence, réduisant l'ISEE final.",
    continue: "Continuer",
    incomeTitle: "Revenus (ISR)",
    incomeDesc: "Revenus du ménage d'il y a 2 ans",
    totalIncome: "Revenu total du ménage",
    totalIncomeHint: "Somme des revenus de tous les membres (année 2024)",
    annualRent: "Loyer annuel payé",
    annualRentHint: "Déduction maximale : 7 000 €",
    rentInfo: "Le loyer payé est déduit du revenu (jusqu'à 7 000 €), réduisant la composante ISR.",
    assetsTitle: "Patrimoine mobilier",
    assetsDesc: "Comptes bancaires et épargne",
    bankBalances: "Solde total des comptes bancaires/postaux",
    bankBalancesHint: "Somme de tous les comptes du ménage",
    govBonds: "Dont en obligations d'État (BTP/BOT) ou épargne postale",
    govBondsHint: "Exclusion maximale : 50 000 €",
    govBondsTitle: "Nouveauté 2026 : Exclusion des obligations d'État",
    govBondsDesc: "Jusqu'à 50 000 € en BTP, BOT et bons postaux sont exclus du calcul ISEE. C'est l'un des principaux moyens légaux de réduire votre ISEE.",
    realEstateTitle: "Patrimoine immobilier",
    realEstateDesc: "Résidence principale",
    homeValue: "Valeur cadastrale de la résidence principale",
    homeValueHint: "Valeur IMU réévaluée du bien",
    remainingMortgage: "Hypothèque restante",
    remainingMortgageHint: "Dette hypothécaire restante sur le bien",
    metropolitanCity: "Je vis dans une ville métropolitaine",
    firstHomeFranchise: "Franchise résidence principale :",
    metroExamples: "Ex : Rome, Milan, Naples, Turin, Palerme, Gênes…",
    calculateBtn: "Calculer mon ISEE →",
    estimatedISEE: "Votre ISEE estimé",
    estimateYear: "Estimation pour l'année 2026/2027",
    formulaApplied: "Formule appliquée",
    detailBreakdown: "Détail du calcul",
    isrLabel: "Composante ISR (Revenu)",
    rentDeduction: "Déduction loyer",
    ispMovable: "ISP mobilier",
    govBondsExclusion: "Exclusion obligations d'État",
    movableFranchise: "Franchise mobilière",
    ispRealEstateLabel: "ISP immobilier",
    realEstateFranchise: "Franchise résidence principale",
    ispTotal20: "ISP Total × 20%",
    equivalenceScale: "Échelle d'équivalence",
    baseScale: "Échelle de base",
    surcharges: "Majorations",
    householdSizeLabel: "Taille du ménage",
    people: "personnes",
    disclaimerTitle: "Attention :",
    disclaimerText: "Ceci est une estimation indicative. À des fins légales, vous devez déposer une DSU auprès de l'INPS ou d'un CAF autorisé.",
    recalculate: "Recalculer",
    footerDisclaimer: "Ceci est une estimation indicative. À des fins légales, vous devez déposer une DSU auprès de l'INPS ou d'un CAF autorisé.",
    theme: "Thème",
    light: "Clair",
    dark: "Sombre",
    system: "Système",
    language: "Langue",
  },
  ar: {
    appTitle: "حاسبة ISEE",
    appSubtitle: "2026 / 2027",
    back: "رجوع",
    settings: "الإعدادات",
    stepHousehold: "الأسرة",
    stepIncome: "الدخل",
    stepAssets: "الأصول",
    stepRealEstate: "العقارات",
    stepResult: "النتيجة",
    stepOf: "الخطوة {current} من {total}",
    householdTitle: "تكوين الأسرة",
    householdDesc: "من يعيش في أسرتك؟",
    adults: "البالغون",
    minorChildren: "الأطفال القاصرون",
    bothParentsWork: "كلا الوالدين يعملان",
    bothParentsWorkHint: "+0.30 لمقياس التكافؤ",
    childAdvantage: "ميزة الأطفال:",
    childAdvantageDesc: "كل طفل قاصر يضيف +0.20 لمقياس التكافؤ، مما يقلل قيمة ISEE النهائية.",
    continue: "متابعة",
    incomeTitle: "الدخل (ISR)",
    incomeDesc: "دخل الأسرة من قبل سنتين",
    totalIncome: "إجمالي دخل الأسرة",
    totalIncomeHint: "مجموع دخل جميع الأعضاء (سنة 2024)",
    annualRent: "الإيجار السنوي المدفوع",
    annualRentHint: "الحد الأقصى للخصم: 7,000 يورو",
    rentInfo: "يُخصم الإيجار المدفوع من الدخل (حتى 7,000 يورو)، مما يقلل مكون ISR.",
    assetsTitle: "الأصول المنقولة",
    assetsDesc: "الحسابات المصرفية والمدخرات",
    bankBalances: "إجمالي أرصدة الحسابات المصرفية/البريدية",
    bankBalancesHint: "مجموع جميع حسابات الأسرة",
    govBonds: "منها في سندات حكومية (BTP/BOT) أو ادخار بريدي",
    govBondsHint: "الحد الأقصى للاستثناء: 50,000 يورو",
    govBondsTitle: "جديد 2026: استثناء السندات الحكومية",
    govBondsDesc: "يتم استثناء ما يصل إلى 50,000 يورو في BTP وBOT وسندات الادخار البريدي من حساب ISEE.",
    realEstateTitle: "الأصول العقارية",
    realEstateDesc: "السكن الرئيسي",
    homeValue: "القيمة المساحية للسكن الرئيسي",
    homeValueHint: "قيمة IMU المعاد تقييمها للعقار",
    remainingMortgage: "الرهن العقاري المتبقي",
    remainingMortgageHint: "الدين المتبقي على العقار",
    metropolitanCity: "أعيش في مدينة كبرى",
    firstHomeFranchise: "إعفاء السكن الأول:",
    metroExamples: "مثل: روما، ميلان، نابولي، تورين، باليرمو، جنوة…",
    calculateBtn: "← احسب ISEE الخاص بي",
    estimatedISEE: "قيمة ISEE المقدرة",
    estimateYear: "تقدير للعام 2026/2027",
    formulaApplied: "الصيغة المطبقة",
    detailBreakdown: "تفاصيل الحساب",
    isrLabel: "مكون ISR (الدخل)",
    rentDeduction: "خصم الإيجار",
    ispMovable: "ISP المنقول",
    govBondsExclusion: "استثناء السندات الحكومية",
    movableFranchise: "إعفاء الأصول المنقولة",
    ispRealEstateLabel: "ISP العقاري",
    realEstateFranchise: "إعفاء السكن الأول",
    ispTotal20: "إجمالي ISP × 20%",
    equivalenceScale: "مقياس التكافؤ",
    baseScale: "المقياس الأساسي",
    surcharges: "الرسوم الإضافية",
    householdSizeLabel: "حجم الأسرة",
    people: "أشخاص",
    disclaimerTitle: "تنبيه:",
    disclaimerText: "هذا تقدير تقريبي. للأغراض القانونية، يجب تقديم DSU عبر INPS أو CAF معتمد.",
    recalculate: "إعادة الحساب",
    footerDisclaimer: "هذا تقدير تقريبي. للأغراض القانونية، يجب تقديم DSU عبر INPS أو CAF معتمد.",
    theme: "السمة",
    light: "فاتح",
    dark: "داكن",
    system: "النظام",
    language: "اللغة",
  },
  bn: {
    appTitle: "ISEE ক্যালকুলেটর",
    appSubtitle: "২০২৬ / ২০২৭",
    back: "পেছনে",
    settings: "সেটিংস",
    stepHousehold: "পরিবার",
    stepIncome: "আয়",
    stepAssets: "সম্পদ",
    stepRealEstate: "সম্পত্তি",
    stepResult: "ফলাফল",
    stepOf: "ধাপ {current} / {total}",
    householdTitle: "পরিবারের গঠন",
    householdDesc: "আপনার পরিবারে কারা থাকেন?",
    adults: "প্রাপ্তবয়স্ক",
    minorChildren: "নাবালক সন্তান",
    bothParentsWork: "উভয় অভিভাবক কর্মরত",
    bothParentsWorkHint: "সমতুল্য স্কেলে +০.৩০",
    childAdvantage: "সন্তানের সুবিধা:",
    childAdvantageDesc: "প্রতিটি নাবালক সন্তান সমতুল্য স্কেলে +০.২০ যোগ করে, চূড়ান্ত ISEE কমায়।",
    continue: "চালিয়ে যান",
    incomeTitle: "আয় (ISR)",
    incomeDesc: "২ বছর আগের পরিবারের আয়",
    totalIncome: "পরিবারের মোট আয়",
    totalIncomeHint: "সকল সদস্যের আয়ের যোগফল (২০২৪ সাল)",
    annualRent: "বার্ষিক ভাড়া প্রদান",
    annualRentHint: "সর্বোচ্চ ছাড়: €৭,০০০",
    rentInfo: "প্রদত্ত ভাড়া আয় থেকে বাদ দেওয়া হয় (€৭,০০০ পর্যন্ত), ISR উপাদান কমায়।",
    assetsTitle: "চলমান সম্পদ",
    assetsDesc: "ব্যাংক অ্যাকাউন্ট এবং সঞ্চয়",
    bankBalances: "মোট ব্যাংক/পোস্টাল অ্যাকাউন্ট ব্যালেন্স",
    bankBalancesHint: "পরিবারের সকল অ্যাকাউন্টের যোগফল",
    govBonds: "যার মধ্যে সরকারি বন্ড (BTP/BOT) বা পোস্টাল সঞ্চয়",
    govBondsHint: "সর্বোচ্চ বাদ: €৫০,০০০",
    govBondsTitle: "২০২৬ আপডেট: সরকারি বন্ড বাদ",
    govBondsDesc: "BTP, BOT এবং পোস্টাল সঞ্চয় বন্ডে €৫০,০০০ পর্যন্ত ISEE গণনা থেকে বাদ দেওয়া হয়।",
    realEstateTitle: "রিয়েল এস্টেট সম্পদ",
    realEstateDesc: "প্রাথমিক বাসস্থান",
    homeValue: "প্রাথমিক বাসস্থানের ক্যাডাস্ট্রাল মূল্য",
    homeValueHint: "সম্পত্তির পুনর্মূল্যায়িত IMU মূল্য",
    remainingMortgage: "অবশিষ্ট বন্ধকী",
    remainingMortgageHint: "সম্পত্তির উপর অবশিষ্ট বন্ধকী ঋণ",
    metropolitanCity: "আমি একটি মহানগরীতে থাকি",
    firstHomeFranchise: "প্রথম বাড়ির ফ্র্যাঞ্চাইজ:",
    metroExamples: "যেমন: রোম, মিলান, নেপলস, তুরিন, পালের্মো, জেনোয়া…",
    calculateBtn: "← আমার ISEE গণনা করুন",
    estimatedISEE: "আপনার আনুমানিক ISEE",
    estimateYear: "২০২৬/২০২৭ সালের জন্য অনুমান",
    formulaApplied: "প্রয়োগকৃত সূত্র",
    detailBreakdown: "গণনার বিবরণ",
    isrLabel: "ISR উপাদান (আয়)",
    rentDeduction: "ভাড়া ছাড়",
    ispMovable: "চলমান ISP",
    govBondsExclusion: "সরকারি বন্ড বাদ",
    movableFranchise: "চলমান ফ্র্যাঞ্চাইজ",
    ispRealEstateLabel: "রিয়েল এস্টেট ISP",
    realEstateFranchise: "প্রথম বাড়ির ফ্র্যাঞ্চাইজ",
    ispTotal20: "মোট ISP × ২০%",
    equivalenceScale: "সমতুল্য স্কেল",
    baseScale: "বেস স্কেল",
    surcharges: "সারচার্জ",
    householdSizeLabel: "পরিবারের আকার",
    people: "জন",
    disclaimerTitle: "সতর্কতা:",
    disclaimerText: "এটি একটি আনুমানিক অনুমান। আইনি উদ্দেশ্যে, আপনাকে INPS বা অনুমোদিত CAF এর মাধ্যমে DSU দাখিল করতে হবে।",
    recalculate: "পুনরায় গণনা",
    footerDisclaimer: "এটি একটি আনুমানিক অনুমান। আইনি উদ্দেশ্যে, আপনাকে INPS বা অনুমোদিত CAF এর মাধ্যমে DSU দাখিল করতে হবে।",
    theme: "থিম",
    light: "লাইট",
    dark: "ডার্ক",
    system: "সিস্টেম",
    language: "ভাষা",
  },
};

export function getTranslations(lang: Language): TranslationKeys {
  return translations[lang];
}

export function isRTL(lang: Language): boolean {
  return LANGUAGES.find((l) => l.code === lang)?.rtl ?? false;
}
