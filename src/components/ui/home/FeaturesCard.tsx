import featuresCard from "../../../data/featuresCard.json";

interface Feature {
  label: string;
  icon: string;
  text: string[];
}

const FeaturesCard = () => {
  return (
    <div className="">
      <section className="grid grid-cols-2 gap-8 items-center">
      {featuresCard.map((feature: Feature, index:number) => (
        <div key={index} className="bg-accent-var border-1 border-accent rounded-xl p-6">
          <div className="flex gap-3 items-center py-4">
            <img src={feature.icon} alt="features icon" />
            <p className="font-semibold">{feature.label}</p>
          </div>
          {feature.text.map((t, i) => <p key={i}>{t}</p>)}
        </div>
      ))}
      </section>
    </div>
  );
};

export default FeaturesCard;
