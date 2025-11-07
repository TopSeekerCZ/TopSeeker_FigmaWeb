import { Button } from "@/components/ui/button";
import IconMaps from "@/assets/icons/IconMaps.svg";

const LocationMap = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text and CTA */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 uppercase">
              KDE <span className="text-gradient">HRAJEME?</span>
            </h2>
            <p className="text-center text-white font-poppins text-lg mb-12 max-w-2xl mx-auto">
              Hry probíhají ve <span className="font-semibold">vybraných městech.</span>
            </p>
            <div className="flex justify-center">
              <Button
                variant="hero"
                size="lg"
                className="relative group w-[242px] h-[55px] flex items-center justify-center font-poppins text-[18px]"
              >
                <a href="https://shop.topseeker.cz/" target="_blank" rel="noopener noreferrer">
                  Začít hrát
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Map */}
          <div className="relative">
            <img src={IconMaps} alt="Mapa České republiky" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
