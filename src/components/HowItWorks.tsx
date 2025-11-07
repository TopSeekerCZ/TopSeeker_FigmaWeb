import Icon1 from "@/assets/icons/Icon1.svg";
import Icon2 from "@/assets/icons/Icon2.svg";
import Icon3 from "@/assets/icons/Icon3.svg";
import Icon4 from "@/assets/icons/Icon4.svg";

const HowItWorks = () => {
  const steps = [
    {
      icon: Icon1,
      title: "Vyberete si hru",
    },
    {
      icon: Icon2,
      title: "Koupíte vstupenku online",
    },
    {
      icon: Icon3,
      title: "Dostanete přístupové instrukce",
    },
    {
      icon: Icon4,
      title: "Vyrazíte do města a začnete hrát",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 uppercase">
          JAK TO <span className="text-gradient">FUNGUJE?</span>
        </h2>
        <p className="text-center text-white font-poppins text-lg mb-12 max-w-2xl mx-auto">
          Ať už jste parta přátel, rodina nebo kolegové z práce, u nás si každý najde to své. Nemusíte se s nikým
          potkávat – <strong>všechno zvládnete s telefonem.</strong>
        </p>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div className=" flex items-center justify-center">
                  <img src={step.icon} alt={step.title} className="w-20 h-20" />
                </div>
              </div>
              <h4 className="font-poppins font-extrabold text-[17.57px] mb-2">{step.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
