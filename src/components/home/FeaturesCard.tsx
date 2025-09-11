import * as React from "react";
import featuresCard from "../../data/featuresCard.json";
// import { Button } from "../ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

// interface HomeProps {
//   propName: type;
// }

const FeaturesCard = () => {
  return (
    <div className="bg-accent-var p-6">
      {featuresCard.map((feature, index) => (
        <React.Fragment key={index}>
          <div className="flex gap-3 items-center py-4">
            <img src="/assets/icons/flower.svg" alt="flower icon" />
            <p className="font-semibold">{feature.label}</p>
          </div>
          <p>
            Receive a tailored nutrition plan designed specifically for your
            body and goals. Our certified nutritionists will consider your
            unique needs, dietary preferences, and health conditions to create a
            plan that suits you best.
          </p>
        </React.Fragment>
      ))}
    </div>
  );
};

export default FeaturesCard;
