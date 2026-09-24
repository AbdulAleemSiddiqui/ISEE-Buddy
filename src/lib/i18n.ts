export type Language = "it";

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
  childUnder3: string;
  childUnder3Hint: string;
  usefulGuides: string;
  guideCalc: string;
  guideDocs: string;
  guideSoglie: string;
  guideCorrente: string;
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
    bothParentsWork: "Tu o l'altro genitore avete lavorato almeno 6 mesi in quell'anno",
    bothParentsWorkHint: "Con un figlio sotto i 3 anni la maggiorazione passa da +0,20 a +0,30",
    childUnder3: "In famiglia c'è un figlio con meno di 3 anni",
    childUnder3Hint: "Serve per ottenere la maggiorazione più alta",
    usefulGuides: "Guide utili",
    guideCalc: "Calcolo ISEE",
    guideDocs: "Documenti ISEE",
    guideSoglie: "Soglie ISEE",
    guideCorrente: "ISEE corrente",
    childAdvantage: "Buono a sapersi:",
    childAdvantageDesc: "I figli minorenni abbassano l'ISEE: aggiungono +0,20 alla scala di equivalenza, oppure +0,30 se un figlio ha meno di 3 anni e i genitori hanno lavorato almeno 6 mesi in quell'anno.",
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
    disclaimerText: "Questa è una stima indicativa. Per fini legali è necessario presentare la Dichiarazione Sostitutiva Unica (DSU) tramite INPS o un CAF autorizzato. La stima applica i parametri 2026 dell'ISEE per le prestazioni familiari e di inclusione (franchigia casa di 91.500 €, oppure 120.000 € nei capoluoghi di città metropolitana).",
    recalculate: "Ricalcola",
    footerDisclaimer: "Questa è una stima indicativa. Per fini legali è necessario presentare la DSU tramite INPS o un CAF autorizzato.",
    theme: "Tema",
    light: "Chiaro",
    dark: "Scuro",
    system: "Sistema",
    language: "Lingua",
  },
};

export function getTranslations(_lang: Language = "it"): TranslationKeys {
  return translations[_lang] ?? translations.it;
}
