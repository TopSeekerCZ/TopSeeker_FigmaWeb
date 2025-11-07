import { Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
const Reviews = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start", dragFree: false }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
  const truncateText = (text: string, maxLength: number = 200) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };
  const reviews = [
    {
      rating: 5,
      text: "Skvělý zážitek plný kreativity a zábavy. Hra, kterou jsme hráli v rámci našeho teambuildingu, nás ohromila svým kreativním konceptem a zábavným provedením. Oceňovali jsme interaktivní prvky.",
      author: "ASBIS CZ",
    },
    {
      rating: 4,
      text: "Byli jsme s partou kamarádů v létě na výpravě do Troskovic a byla to opravdu sranda. Prováděla nás krásnými místy. Škoda jen některých úkolů. Ocenil bych více kódů, ale jinak super, pořadatelé to dělají s láskou ✌🏻",
      author: "Ladislav Červinka",
    },
    {
      rating: 5,
      text: "Skvělá akce. Doporučuji předem ověřit mobilní signál všech operátorů v lese. A poskytnout záchranné obálky tam, kde má některý z operátorů slabší pokrytí.",
      author: "Zuzana Uherková",
    },
    {
      rating: 5,
      text: "Soutěž na KCD Live byla suprové odreagování 🤙 a závod s partou kdo hlavolam vyřeší dřív zatím neomrzel 😁 doporučuji",
      author: "NejakejBeGi",
    },
    {
      rating: 5,
      text: "Po přehrání Kingdom come 2 jsem se vrátil zpět k prvnímu dílu a říkal jsem si, jak vypadají místa ze hry ve skutečnosti. Rataje, kde se děj odehrává, nemám zase tak daleko a když předpověď říkala hezké počasí, naplánoval jsem výlet. Našel jsem dobrodružnou výpravu na motivy KCD za přijatelnou cenu a koupil. Výprava je poutavá, doprovází ji příběh s ilustracemi. Jelikož jsem pomalý čtenář, raději jsem používal zvukové zadání. Úkoly pro mě nebyly problém. Je zajímavé, jak se některá reálná místa podobají hře. Určitě vyzkouším další.",
      author: "Jan Moravec",
    },
  ];
  return (
    <section className="py-20 px-4">
      {" "}
      <div className="container mx-auto">
        {" "}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">
          {" "}
          CO <span className="text-gradient">ŘÍKAJÍ</span> NAŠI HRÁČI?{" "}
        </h2>{" "}
        <div className="overflow-hidden max-w-[1098px] mx-auto" ref={emblaRef}>
          {" "}
          <div className="flex">
            {" "}
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="flex-[0_0_350px] min-w-0 bg-card/50 p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all h-[300px] mr-6"
              >
                {" "}
                <div className="flex gap-1 mb-4">
                  {" "}
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}{" "}
                </div>{" "}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-6">
                  {" "}
                  {truncateText(review.text)}{" "}
                </p>{" "}
                <p className="text-sm font-semibold">{review.author}</p>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default Reviews;
