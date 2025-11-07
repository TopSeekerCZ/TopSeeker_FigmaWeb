import { Button } from "@/components/ui/button";
import game1Img from "@/assets/game1.jpg";
import game2Img from "@/assets/game2.jpg";

const Games = () => {
  const games = [
    {
      title: "Výprava s Królom Comic Deliversonem !",
      description:
        "Procházka nejsou jen žert! K této úloze byste si měli vzít šátek na záda, jídlo i pití, neboť doba, co strávíte na místě, je minimálně 3 hodiny. V průběhu vyrazte vstříc skrytým úkolům a pokud se Vám podaří najít Zlaté Delirium, stanete se jeho střežiteli!",
      image: game1Img,
    },
    {
      title: "Výzev Vzpomínání detektiva MAZE",
      description:
        "Jste detektivové, kteří se musí vypořádat s mysteriózním případem. K uspěšnému vyřešení budete potřebovat kombinaci logického myšlení, týmové práce a schopnost vidět věci z různých úhlů. Vydejte se vstříc dobrodružství!",
      image: game2Img,
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">
          MRKNĚTE NA <span className="text-gradient">NOVÉ HRY</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-card to-card/80 rounded-2xl overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all animate-scale-in shadow-lg"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className="h-56 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${game.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-3 uppercase">{game.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {game.description}
                </p>
                <Button variant="hero" className="w-full">
                  Zobrazit hru
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;
