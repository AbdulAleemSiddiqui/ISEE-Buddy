import { useState } from "react";
import { useSettings } from "@/contexts/SettingsContext";
import { getTranslations, LANGUAGES, Language } from "@/lib/i18n";
import { Settings, Sun, Moon, Monitor, Check } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type Theme = "light" | "dark" | "system";

const THEME_OPTIONS: { value: Theme; icon: typeof Sun }[] = [
  { value: "light", icon: Sun },
  { value: "dark", icon: Moon },
  { value: "system", icon: Monitor },
];

export function SettingsPanel() {
  const { theme, setTheme, language, setLanguage } = useSettings();
  const [open, setOpen] = useState(false);
  const t = getTranslations(language);

  const themeLabel = (v: Theme) => {
    if (v === "light") return t.light;
    if (v === "dark") return t.dark;
    return t.system;
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          aria-label={t.settings}
        >
          <Settings className="h-4 w-4" />
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="flex h-screen w-full max-w-sm flex-col border-border bg-card p-0 sm:max-w-sm">
        <SheetHeader className="border-b border-border px-5 py-4 text-left">
          <SheetTitle className="font-display text-lg">{t.settings}</SheetTitle>
          <SheetDescription className="sr-only">{t.settings}</SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          <div className="space-y-8">
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground">{t.theme}</label>
              <div className="grid grid-cols-3 gap-2">
                {THEME_OPTIONS.map((opt) => {
                  const Icon = opt.icon;
                  const isActive = theme === opt.value;

                  return (
                    <button
                      key={opt.value}
                      onClick={() => setTheme(opt.value)}
                      className={`flex flex-col items-center gap-2 rounded-xl border-2 p-3 transition-all ${
                        isActive
                          ? "border-accent bg-accent/10"
                          : "border-border hover:border-muted-foreground/30"
                      }`}
                    >
                      <Icon className={`h-5 w-5 ${isActive ? "text-accent" : "text-muted-foreground"}`} />
                      <span className={`text-xs font-medium ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                        {themeLabel(opt.value)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground">{t.language}</label>
              <div className="space-y-1.5">
                {LANGUAGES.map((lang) => {
                  const isActive = language === lang.code;

                  return (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code as Language)}
                      className={`flex w-full items-center justify-between rounded-xl border-2 p-3 transition-all ${
                        isActive
                          ? "border-accent bg-accent/10"
                          : "border-transparent hover:bg-secondary"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{lang.flag}</span>
                        <span className={`text-sm font-medium ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                          {lang.label}
                        </span>
                      </div>
                      {isActive && <Check className="h-4 w-4 text-accent" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}