import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ISEEInput, ISEEResult, calculateISEE } from "@/lib/isee-calculator";
import { getTranslations } from "@/lib/i18n";
import { useSettings } from "@/contexts/SettingsContext";
import { StepHousehold } from "./steps/StepHousehold";
import { StepIncome } from "./steps/StepIncome";
import { StepAssets } from "./steps/StepAssets";
import { StepRealEstate } from "./steps/StepRealEstate";
import { ISEEResults } from "./ISEEResults";
import { SettingsPanel } from "./SettingsPanel";
import { ArrowLeft, Calculator, Users, Wallet, Building2, Landmark } from "lucide-react";

const STEP_ICONS = [Users, Wallet, Landmark, Building2, Calculator];

const defaultInput: ISEEInput = {
  adults: 1,
  minorChildren: 0,
  bothParentsWork: false,
  totalIncome: 0,
  annualRent: 0,
  bankBalances: 0,
  govBondsAmount: 0,
  homeValue: 0,
  remainingMortgage: 0,
  isMetropolitanCity: false,
};

export function ISEECalculator() {
  const { language } = useSettings();
  const t = getTranslations(language);
  const [step, setStep] = useState(0);
  const [input, setInput] = useState<ISEEInput>(defaultInput);
  const [result, setResult] = useState<ISEEResult | null>(null);
  const [direction, setDirection] = useState(1);

  const stepLabels = [t.stepHousehold, t.stepIncome, t.stepAssets, t.stepRealEstate, t.stepResult];

  const updateInput = (partial: Partial<ISEEInput>) => {
    setInput((prev) => ({ ...prev, ...partial }));
  };

  const next = () => {
    if (step === 3) setResult(calculateISEE(input));
    setDirection(1);
    setStep((s) => Math.min(s + 1, 4));
  };

  const back = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  };

  const restart = () => {
    setDirection(-1);
    setInput(defaultInput);
    setResult(null);
    setStep(0);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b border-border bg-card/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <Calculator className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-display text-lg md:text-xl text-foreground leading-tight">
                {t.appTitle}
              </h1>
              <p className="text-xs text-muted-foreground">{t.appSubtitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {step > 0 && step < 4 && (
              <button onClick={back} className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-4 w-4" /> {t.back}
              </button>
            )}
            <SettingsPanel />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-8 pt-6">
        <div className="flex items-center justify-center gap-2">
          {stepLabels.map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className={`progress-dot ${
                  i === step ? "progress-dot-active" : i < step ? "progress-dot-done" : "progress-dot-pending"
                }`}
              />
              {i < stepLabels.length - 1 && (
                <div className={`hidden sm:block h-px w-6 transition-colors duration-300 ${i < step ? "bg-primary" : "bg-muted"}`} />
              )}
            </div>
          ))}
        </div>
        <div className="mt-2 text-center">
          <span className="text-xs font-medium text-muted-foreground">
            {stepLabels[step]} — {t.stepOf.replace("{current}", String(step + 1)).replace("{total}", String(stepLabels.length))}
          </span>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-8 py-8 max-w-xl">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {step === 0 && <StepHousehold input={input} onChange={updateInput} onNext={next} />}
            {step === 1 && <StepIncome input={input} onChange={updateInput} onNext={next} />}
            {step === 2 && <StepAssets input={input} onChange={updateInput} onNext={next} />}
            {step === 3 && <StepRealEstate input={input} onChange={updateInput} onNext={next} />}
            {step === 4 && result && <ISEEResults result={result} onRestart={restart} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-border py-6 text-center">
        <p className="text-xs text-muted-foreground max-w-md mx-auto px-4">
          {t.footerDisclaimer}
        </p>
      </footer>
    </div>
  );
}
