import { ISEEResult } from "@/lib/isee-calculator";
import { getTranslations } from "@/lib/i18n";
import { useSettings } from "@/contexts/SettingsContext";
import { motion } from "framer-motion";
import { RotateCcw, Info, TrendingDown, Scale, Building2, Landmark } from "lucide-react";

interface Props {
  result: ISEEResult;
  onRestart: () => void;
}

function fmt(n: number) {
  return new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
}

function DetailRow({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-border last:border-0">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-sm text-muted-foreground">{label}</span>
      </div>
      <span className="text-sm font-semibold text-foreground">{value}</span>
    </div>
  );
}

export function ISEEResults({ result, onRestart }: Props) {
  const { language } = useSettings();
  const t = getTranslations(language);

  return (
    <div className="space-y-6">
      <motion.div className="result-highlight text-center" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, ease: "easeOut" }}>
        <p className="text-sm opacity-80 font-medium">{t.estimatedISEE}</p>
        <motion.p className="font-display text-4xl md:text-5xl mt-2" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
          {fmt(result.isee)}
        </motion.p>
        <p className="text-xs mt-3 opacity-60">{t.estimateYear}</p>
      </motion.div>

      <motion.div className="step-card text-center" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
        <p className="text-xs text-muted-foreground mb-2">{t.formulaApplied}</p>
        <p className="font-display text-base text-foreground">ISEE = (ISR + ISP × 0,20) ÷ Scala</p>
        <p className="text-xs text-muted-foreground mt-2">({fmt(result.isr)} + {fmt(result.isp)} × 0,20) ÷ {result.equivalenceScale}</p>
      </motion.div>

      <motion.div className="step-card space-y-1" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
        <h3 className="font-display text-lg text-foreground mb-3">{t.detailBreakdown}</h3>
        <DetailRow label={t.isrLabel} value={fmt(result.isr)} icon={<TrendingDown className="h-4 w-4 text-muted-foreground" />} />
        <DetailRow label={t.rentDeduction} value={`- ${fmt(result.rentDeduction)}`} />
        <DetailRow label={t.ispMovable} value={fmt(result.ispMovable)} icon={<Landmark className="h-4 w-4 text-muted-foreground" />} />
        <DetailRow label={t.govBondsExclusion} value={`- ${fmt(result.govBondsExclusion)}`} />
        <DetailRow label={t.movableFranchise} value={`- ${fmt(result.movableFranchise)}`} />
        <DetailRow label={t.ispRealEstateLabel} value={fmt(result.ispRealEstate)} icon={<Building2 className="h-4 w-4 text-muted-foreground" />} />
        <DetailRow label={t.realEstateFranchise} value={`- ${fmt(result.realEstateFranchise)}`} />
        <DetailRow label={t.ispTotal20} value={fmt(result.isp * 0.20)} />
        <DetailRow label={t.equivalenceScale} value={`${result.equivalenceScale}`} icon={<Scale className="h-4 w-4 text-muted-foreground" />} />
        <DetailRow label={t.baseScale} value={`${result.baseScale}`} />
        <DetailRow label={t.surcharges} value={`+ ${result.surcharges}`} />
        <DetailRow label={t.householdSizeLabel} value={`${result.householdSize} ${t.people}`} />
      </motion.div>

      <motion.div className="rounded-xl bg-accent/10 border border-accent/20 p-4 flex items-start gap-3" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
        <Info className="h-5 w-5 text-accent mt-0.5 shrink-0" />
        <p className="text-xs text-muted-foreground">
          <strong className="text-accent-foreground">{t.disclaimerTitle}</strong> {t.disclaimerText}
        </p>
      </motion.div>

      <button onClick={onRestart} className="btn-outline w-full flex items-center justify-center gap-2">
        <RotateCcw className="h-4 w-4" />
        {t.recalculate}
      </button>
    </div>
  );
}
