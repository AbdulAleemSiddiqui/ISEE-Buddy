import { ISEEInput } from "@/lib/isee-calculator";
import { getTranslations } from "@/lib/i18n";
import { useSettings } from "@/contexts/SettingsContext";
import { Users, Baby, Briefcase } from "lucide-react";

interface Props {
  input: ISEEInput;
  onChange: (partial: Partial<ISEEInput>) => void;
  onNext: () => void;
}

function Counter({ value, onChange, min = 0, max = 10, label }: { value: number; onChange: (v: number) => void; min?: number; max?: number; label: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onChange(Math.max(value - 1, min))}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground hover:bg-secondary transition-colors text-lg font-bold"
          disabled={value <= min}
        >−</button>
        <span className="w-8 text-center text-lg font-semibold text-foreground">{value}</span>
        <button
          onClick={() => onChange(Math.min(value + 1, max))}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground hover:bg-secondary transition-colors text-lg font-bold"
          disabled={value >= max}
        >+</button>
      </div>
    </div>
  );
}

export function StepHousehold({ input, onChange, onNext }: Props) {
  const { language } = useSettings();
  const t = getTranslations(language);

  return (
    <div className="step-card step-card-active space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary">
          <Users className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h2 className="font-display text-xl text-foreground">{t.householdTitle}</h2>
          <p className="text-sm text-muted-foreground">{t.householdDesc}</p>
        </div>
      </div>

      <div className="space-y-5">
        <Counter label={t.adults} value={input.adults} onChange={(v) => onChange({ adults: v })} min={1} />
        <Counter label={t.minorChildren} value={input.minorChildren} onChange={(v) => onChange({ minorChildren: v })} />
      </div>

      {input.adults >= 2 && (
        <div className="rounded-xl bg-secondary/60 p-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" checked={input.bothParentsWork} onChange={(e) => onChange({ bothParentsWork: e.target.checked })} className="h-5 w-5 rounded border-border accent-accent" />
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">{t.bothParentsWork}</span>
            </div>
          </label>
          <p className="mt-1 ml-8 text-xs text-muted-foreground">{t.bothParentsWorkHint}</p>
        </div>
      )}

      <div className="rounded-xl bg-accent/10 border border-accent/20 p-4">
        <p className="text-xs text-accent-foreground">
          <Baby className="inline h-3.5 w-3.5 mr-1 -mt-0.5" />
          <strong>{t.childAdvantage}</strong> {t.childAdvantageDesc}
        </p>
      </div>

      <button onClick={onNext} disabled={input.adults < 1} className="btn-primary w-full disabled:opacity-40">
        {t.continue}
      </button>
    </div>
  );
}
