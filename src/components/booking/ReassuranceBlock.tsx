import { Check } from "lucide-react";

export const CredibilityBlock = () => {
  return (
    <section className="py-8 bg-background-subtle">
      <div className="container-grovero">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground">
          
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary" />
            <span>Developed and assembled in the Netherlands</span>
          </div>

          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary" />
            <span>Setup guidance and support included</span>
          </div>

          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary" />
            <span>Built for professional kitchens</span>
          </div>

        </div>
      </div>
    </section>
  );
};
