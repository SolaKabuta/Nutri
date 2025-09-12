import { Button } from "../button";
import pricingCard from "../../../data/pricingCard";
import {useState} from "react";

interface PricingCardProps {
  plan: string;
  discount: string;
  text: string;
  price: number;
  yearlyPrice: number;
}

const PricingCard = () => {
  
  const [isMonthly, setIsMonthly] = useState(true);
  
  return (
    <main>
      <div className="grid place-content-center">
        <div className="border-1 border-accent p-2 rounded-lg">
          <Button onClick={() => setIsMonthly(prev => !prev)} variant={isMonthly ? "monthly" : "yearly"}>Montlhy</Button>
          <Button onClick={() => setIsMonthly(prev => !prev)} variant={isMonthly ? "yearly" : "monthly"}>Yearly</Button>
        </div>
        <p className="text-sm text-center pt-4 pb-7">Save 50% on Yearly</p>
      </div>
      {/* Monthly Pricing Cards */}
      <div className="grid place-items-center lg:grid-cols-3 gap-8">
        {pricingCard.map((item: PricingCardProps, index: number) => (
          <section key={index} className="bg-accent-var p-8">
            <p className="font-semibold text-xl">{item.plan}</p>
            <p className="pb-7">{item.discount}</p>
            <p className="text-balance">{item.text}</p>
            <div className="flex items-center py-7">
              <p className="text-price font-semibold text-4xl">
                {item.price}
              </p>
              <p>{item.monthly}</p>
            </div>
              <Button className="w-full">Choose Plan</Button>
          </section>
        ))}
      </div>
    </main>
  );
};

export default PricingCard;
