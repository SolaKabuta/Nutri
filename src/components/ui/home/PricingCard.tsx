import { Button } from "../button";
import pricingCard  from "../../../data/pricingCard";
import pricingCardYearly from "../../../data/pricingCardYearly";
import {useState} from "react";

interface PricingCardProps {
  plan: string;
  discount: string;
  text: string;
  price: string;
  monthly: string;
  discountPrice: string;
  yearly: string;
}

const PricingCard = () => {

  const [isMonthly, setIsMonthly] = useState(true);

  // function setIsMonthly () {
  //   setIsMonthly(prev => !prev);
  // }

  return (
    <main>
      <div className="grid place-content-center">
        <div className="border-1 p-2 rounded-lg">
          <Button onClick={() => setIsMonthly(prev => !prev)} variant={isMonthly ? "monthly" : "yearly"}>Montlhy</Button>
          <Button onClick={() => setIsMonthly(prev => !prev)} variant={isMonthly ? "yearly" : "monthly"}>Yearly</Button>
        </div>
        <p className="text-sm text-center pt-4 pb-7">Save 50% on Yearly</p>
      </div>
      {/* Monthly Pricing Cards */}
      {isMonthly && (
      <div className="grid place-items-center lg:grid-cols-3 gap-8 hover:cursor-pointer">
        {pricingCard.map((item: PricingCardProps, index: number) => (
          <section key={index} className="bg-accent-var border-1 rounded-lg p-8 transition duration-300 ease-in-out hover:bg-primary group">
            <p className="font-semibold text-xl">
              <span className="transition duration-300 ease-in-out group-hover:text-white">
                {item.plan}
              </span>
            </p>
            <p className="pb-7">
              <span className="transition duration-500 ease-in-out group-hover:text-accent">
                {item.discount}
              </span>
            </p>
            <p className="text-balance">
              <span className="transition duration-300 ease-in-out group-hover:text-white">
                {item.text}
              </span>
            </p>
            <div className="flex items-center py-7">
              <p className="font-bold text-4xl">
                <span className="text-price transition duration-500 ease-in-out  group-hover:text-accent">
                  {item.price}
                </span>
              </p>
              <p>
                <span className="transition duration-500 ease-in-out  group-hover:text-white">
                  {item.monthly}
                </span>
              </p>
            </div>
              <Button className="w-full hover:cursor-pointer">Choose Plan</Button>
          </section>
        ))}
      </div>
      )}
      {/* Yearly Pricing Cards */}
      {!isMonthly && (
      <div className="grid place-items-center lg:grid-cols-3 gap-8">
        {pricingCardYearly.map((item: PricingCardProps, index: number) => (
          <section key={index} className="bg-accent-var border-1 rounded-lg p-8">
            <p className="font-semibold text-xl">{item.plan}</p>
            <p className="pb-7">{item.discount}</p>
            <p className="text-balance">{item.text}</p>
            <div className="flex items-center py-7">
              <div className="flex items-center">
                {/*<p className="font-bold ">
                  <span className="text-price">
                  {item.price}
                  </span>
                </p>*/}
                <p className="font-bold text-4xl">
                  <span className="text-price">
                  {item.discountPrice}
                  </span>
                </p>
              </div>
              <p>{item.yearly}</p>
            </div>
              <Button className="w-full">Choose Plan</Button>
          </section>
        ))}
      </div>
      )}
    </main>
  );
};

export default PricingCard;
