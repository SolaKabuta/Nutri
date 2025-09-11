import featuresCard from "../../../data/featuresCard.json";

interface Feature {
  label: string;
  text: string[];
}

const FeaturesCard = () => {
  return (
    <div className="bg-accent-var p-6">
      {featuresCard.map((feature: Feature, index:number) => (
        <section key={index}>
          <div className="flex gap-3 items-center py-4">
            <img src="/assets/icons/flower.svg" alt="flower icon" />
            <p className="font-semibold">{feature.label}</p>
          </div>
          {feature.text.map((t, i) => <p key={i}>{t}</p>)}
        </section>
      ))}
    </div>
  );
};

export default FeaturesCard;
