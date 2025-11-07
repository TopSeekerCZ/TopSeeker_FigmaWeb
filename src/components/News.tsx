import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";

const News = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">
              připravujeme poznávací a šifrovací <span className="text-gradient">appku</span>
            </h2>
            <p className="text-white font-poppins text-lg mb-12 max-w-2xl mx-auto">
              Naše zbrusu nová aplikace s moderním designem přímo ve tvém mobilu vám přináší šifrování a poznávání jako
              nikdy předtím. Už vám neuteče žádná výprava ani výzva!
            </p>
            <p className="text-white font-poppins text-lg mb-12 max-w-2xl mx-auto">
              Dostupná pro Android i iOS, takže hrajete kdykoliv a hlavně stylově.
            </p>
            <p className="text-white font-poppins text-lg mb-12 max-w-2xl mx-auto">
              Těšte se na intuitivní ovládání, interaktivní mapy, unikátní šifry a napínavé příběhy, které vás nepustí.
            </p>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative mx-auto max-w-sm">
              {/* Phone mockup */}
              <div className="relative z-10 bg-card rounded-3xl p-3 shadow-2xl border-4 border-border">
                <div className="bg-background rounded-2xl overflow-hidden aspect-[9/19]">
                  <div className="h-full bg-gradient-to-b from-background to-card p-6">
                    <div className="flex items-center justify-center h-full">
                      <Smartphone className="w-24 h-24 text-primary animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
