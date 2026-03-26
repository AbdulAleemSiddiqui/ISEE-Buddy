import { ISEEInput } from "@/lib/isee-calculator";
import { getTranslations } from "@/lib/i18n";
import { useSettings } from "@/contexts/SettingsContext";
import { Wallet, Home } from "lucide-react";

interface Props {
  input: ISEEInput;
  onChange: (partial: Partial<ISEEInput>) => void;
  onNext: () => void;
}

function CurrencyInput({ label, value, onChange, hint }: { label: string; value: number; onChange: (v: number) => void; hint?: string }) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-foreground">{label}</label>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">€</span>
        <input type="number" min={0} value={value || ""} onChange={(e) => onChange(Math.max(0, Number(e.target.value)))} placeholder="0" className="input-field pl-9" />
      </div>
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}

export function StepIncome({ input, onChange, onNext }: Props) {
  const { language } = useSettings();
  const t = getTranslations(language);

  return (
    <div className="step-card step-card-active space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary">
          <Wallet className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h2 className="font-display text-xl text-foreground">{t.incomeTitle}</h2>
          <p className="text-sm text-muted-foreground">{t.incomeDesc}</p>
        </div>
      </div>

      <div className="space-y-5">
        <CurrencyInput label={t.totalIncome} value={input.totalIncome} onChange={(v) => onChange({ totalIncome: v })} hint={t.totalIncomeHint} />
        <CurrencyInput label={t.annualRent} value={input.annualRent} onChange={(v) => onChange({ annualRent: v })} hint={t.annualRentHint} />
      </div>

      <div className="rounded-xl bg-secondary/60 p-4 flex items-start gap-3">
        <Home className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
        <p className="text-xs text-muted-foreground">{t.rentInfo}</p>
      </div>

      <button onClick={onNext} className="btn-primary w-full">{t.continue}</button>
    </div>
  );
}
