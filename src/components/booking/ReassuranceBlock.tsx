import { useTranslation } from "@/hooks/useTranslation";
import { Sparkles } from "lucide-react";

export const ReassuranceBlock = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-6 bg-accent/50">
      <div className="container-grovero">
        <div className="flex items-center justify-center gap-3 text-center">
          <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
          <p className="text-foreground font-medium">
            {t.hero.reassurance}
          </p>
          <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
        </div>
      </div>
    </section>
  );
};
