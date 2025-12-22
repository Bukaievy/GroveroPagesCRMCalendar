import { useTranslation } from "@/hooks/useTranslation";
import { Mail } from "lucide-react";

export const CalendarEmbed = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-muted/40">
      <div className="container-grovero">
        <div className="max-w-4xl mx-auto">
          {/* Calendar Container */}
          <div className="rounded-2xl bg-card border border-border shadow-grovero-lg overflow-hidden">
            <iframe
              src="https://app.cal.eu/grovero/checkin?theme=light"
              width="100%"
              height="650"
              frameBorder="0"
              scrolling="no"
              className="w-full"
              title="MiniGro 15-minute check-in"
            />
          </div>

          {/* Fallback Contact */}
          <div className="mt-4 text-center">
            <p className="inline-flex items-center gap-2 text-muted-foreground text-sm">
              <Mail className="w-4 h-4" />
              <span>{t.calendar.fallback}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
