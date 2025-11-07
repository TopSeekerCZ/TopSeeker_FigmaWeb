import ServiceCard from "./ServiceCard";
import challengesImg from "@/assets/challenges.jpg";
import expeditionsImg from "@/assets/expeditions.jpg";
import teambuildingImg from "@/assets/teambuilding.jpg";

const Services = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 uppercase">
          Zažijte napětí i radost z <span className="text-gradient">úspěchu ve hře!</span>
        </h2>
        <div className="grid grid-cols-[auto_auto] gap-6 justify-center mx-auto">
          <ServiceCard 
            title="VÝPRAVY" 
            image={expeditionsImg} 
            className="w-[356px] h-[356px]"
            buttonText="Chci poznat nová místa"
          />
          <ServiceCard 
            title="TEAMBUILDING" 
            image={teambuildingImg} 
            className="w-[356px] h-[356px]"
            buttonText="Chci se ztmelit s kolegy"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
