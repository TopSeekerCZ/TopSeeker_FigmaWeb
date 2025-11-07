import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import benefitPlus from "@/assets/PartnersLogos/benefit-plus.png";
import kudyZNudy from "@/assets/PartnersLogos/kudy-z-nudy.png";
import kcdLive from "@/assets/PartnersLogos/kcd-live.png";
import benefity from "@/assets/PartnersLogos/benefity.svg";

const Partners = () => {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      dragFree: true,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const partners = [
    { name: "Kingdom Come Deliverance LIVE", logo: kcdLive },
    { name: "Benefit Plus", logo: benefitPlus },
    { name: "Benefity", logo: benefity },
    { name: "Kudy z nudy", logo: kudyZNudy },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          NAŠI PARTNEŘI
        </h2>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex-[0_0_200px] min-w-0 flex items-center justify-center p-6 h-24 hover:scale-105 transition-transform duration-300 cursor-grab active:cursor-grabbing"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
