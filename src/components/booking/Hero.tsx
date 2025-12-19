import { useTranslation } from "@/hooks/useTranslation";
import { Check } from "lucide-react";

export const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="pt-16 pb-12 bg-background">
      <div className="container-grovero">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6 animate-fade-in text-balance">
            {t.hero.title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up text-balance" style={{ animationDelay: '0.1s' }}>
            {t.hero.subtitle}
          </p>
          
          {/* Bullet Points */}
          <div className="flex flex-col gap-4 mb-10 max-w-lg mx-auto">
            {t.hero.bullets.map((bullet, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 text-left animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground font-medium">{bullet}</span>
              </div>
            ))}
          </div>
          
          {/* Metadata Line */}
          <div 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-sm text-muted-foreground animate-fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            {t.hero.metadataLine}
          </div>
        </div>
      </div>
    </section>
  );
};
