import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqs = [
    {
      question: "Jak by probíhalo rezervace výletu do Českého ráje?",
      answer:
        "Rezervaci můžete provést přímo na našem webu nebo nás kontaktovat telefonicky či emailem. Vyberete si termín, počet účastníků a my vám připravíme nezapomenutelný zážitek.",
    },
    {
      question: "Proč by odpovídal třeba kombinovat pobočky?",
      answer:
        "Kombinace poboček vám umožní poznat více míst a získat různorodější zážitky. Každá pobočka nabízí unikátní výzvy a prostředí, což dělá vaše dobrodružství ještě zajímavější.",
    },
    {
      question: "Kolik můžu vytvořit si jako hráčů členů své výpravy?",
      answer:
        "Velikost týmu závisí na typu aktivity. Obvykle podporujeme týmy od 2 do 8 hráčů. Pro větší skupiny můžeme připravit speciální události.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 uppercase">
          ČASTO KLADENÉ <span className="text-gradient">OTÁZKY</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">Máte otázky? Podívejte se na odpovědi!</p>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="text-left hover:text-primary transition-colors py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-6">Nenašli jste odpověď na svou otázku?</p>
          <Button variant="hero" size="lg">
            Napište nám nebo zavolejte na tel: +420 487 51 551 001
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
