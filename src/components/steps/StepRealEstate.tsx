import { ISEEInput } from "@/lib/isee-calculator";
import { getTranslations } from "@/lib/i18n";
import { useSettings } from "@/contexts/SettingsContext";
import { Building2, MapPin } from "lucide-react";

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

export function StepRealEstate({ input, onChange, onNext }: Props) {
  const { language } = useSettings();
  const t = getTranslations(language);

  return (
    <div className="step-card step-card-active space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary">
          <Building2 className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h2 className="font-display text-xl text-foreground">{t.realEstateTitle}</h2>
          <p className="text-sm text-muted-foreground">{t.realEstateDesc}</p>
        </div>
      </div>

      <div className="space-y-5">
        <CurrencyInput label={t.homeValue} value={input.homeValue} onChange={(v) => onChange({ homeValue: v })} hint={t.homeValueHint} />
        <CurrencyInput label={t.remainingMortgage} value={input.remainingMortgage} onChange={(v) => onChange({ remainingMortgage: v })} hint={t.remainingMortgageHint} />
      </div>

      <div className="rounded-xl bg-secondary/60 p-4">
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" checked={input.isMetropolitanCity} onChange={(e) => onChange({ isMetropolitanCity: e.target.checked })} className="h-5 w-5 rounded border-border accent-accent" />
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">{t.metropolitanCity}</span>
          </div>
        </label>
        <p className="mt-2 ml-8 text-xs text-muted-foreground">
          <strong className="text-foreground">{t.firstHomeFranchise}</strong> €{input.isMetropolitanCity ? "120.000" : "91.500"}
        </p>
        <p className="mt-1 ml-8 text-xs text-muted-foreground">{t.metroExamples}</p>
      </div>

      <button onClick={onNext} className="btn-accent w-full text-base">{t.calculateBtn}</button>
    </div>
  );
}
