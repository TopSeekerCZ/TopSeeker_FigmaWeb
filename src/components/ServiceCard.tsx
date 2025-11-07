import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  image: string;
  description?: string;
  className?: string;
  buttonText?: string;
}

const ServiceCard = ({ title, image, description, className, buttonText = "Rezervovat" }: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl animate-scale-in hover:scale-105 transition-all duration-300 shadow-lg",
        className, // ✅ přenese třídy zvenku
      )}
    >
      <div className="w-full h-full bg-cover bg-center relative" style={{ backgroundImage: `url(${image})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent flex flex-col items-center justify-end p-8">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wide">{title}</h3>
          {description && <p className="text-sm text-muted-foreground mb-4">{description}</p>}
          <Button variant="hero" className="w-full max-w-xs h-[55px] font-['Poppins',sans-serif] text-lg">
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
