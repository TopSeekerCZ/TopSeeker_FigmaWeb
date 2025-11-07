import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center px-4 pt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 30, 46, 0.7), rgba(10, 30, 46, 0.85)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto max-w-6xl md:max-w-7xl animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-snug uppercase">
          <span className="inline-block whitespace-nowrap">Únikovky, tajemství, šifry:</span>
          <br />
          <span className="inline-block text-balance normal-case">
            společný zážitek, který prověří spolupráci i logiku
          </span>
        </h1>

        <p className="text-base md:text-lg mb-8 text-foreground/90 max-w-2xl mx-auto">
          Topseeker, to jsou napínavé výzvy a tajemné výpravy pro rodinu, partu, firmu i jednotlivce.
        </p>

        <Button
          variant="hero"
          size="lg"
          className="relative group w-[242px] h-[55px] items-center justify-center font-poppins text-[18px]"
          asChild
        >
          <a href="https://shop.topseeker.cz/" target="_blank" rel="noopener noreferrer">
            Koupit hru
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
