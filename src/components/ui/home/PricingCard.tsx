import { Button } from "../button";
import pricingCard  from "../../../data/pricingCard.json";
import pricingCardYearly from "../../../data/pricingCardYearly.json";
import {useState} from "react";
import { motion } from "motion/react"

interface PricingCardProps {
  plan: string;
  discount: string;
  text: string;
  price: string;
  monthly: string;
}

interface PricingCardYearlyProps {
  plan: string;
  discount: string;
  text: string;
  price: string;
  discountPrice: string;
  discountApplied: string;
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
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="grid place-items-center lg:grid-cols-3 gap-8 hover:cursor-pointer">
        {pricingCard.map((item: PricingCardProps, index: number) => (
          <section key={index} className="bg-accent-var border-1 rounded-lg p-8  transition duration-300 ease-in-out hover:bg-primary group">
            <p className="font-semibold text-xl">
              <span className="transition duration-300 ease-in-out group-hover:text-white">
                {item.plan}
              </span>
            </p>
            <p className="pb-7 ">
              <span className="transition duration-500 ease-in-out group-hover:text-accent">
                {item.discount}
              </span>
            </p>
            <p className="text-balance ">
              <span className="transition duration-500 ease-in-out group-hover:text-white">
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
                <span className=" transition duration-500 ease-in-out  group-hover:text-white">
                  {item.monthly}
                </span>
              </p>
            </div>
              <Button variant="price" className="w-full hover:cursor-pointer">Choose Plan</Button>
          </section>
        ))}
      </motion.div>
      )}
      {/* Yearly Pricing Cards */}
      {!isMonthly && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid place-items-center lg:grid-cols-3 gap-8 hover:cursor-pointer">
          {pricingCardYearly.map((item: PricingCardYearlyProps, index: number) => (
            <section key={index} className="bg-accent-var border-1 rounded-lg p-8 transition duration-300 ease-in-out hover:bg-primary group">
              <p className="font-semibold text-xl">
                <span className="transition duration-300 ease-in-out group-hover:text-white">
                  {item.plan}
                </span>
              </p>
              <motion.p 
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="pb-7 ">
                <span className="text-orange-500 transition duration-500 ease-in-out group-hover:text-accent">
                  {item.discountApplied}
                </span>
              </motion.p>
              <p className="text-balance ">
                <span className="transition duration-500 ease-in-out group-hover:text-white">
                  {item.text}
                </span>
              </p>
              <div className="flex items-center py-7">
                <motion.p 
                  initial={{ opacity: 0, scale: 1.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="font-bold text-4xl">
                  <span className="text-price transition duration-500 ease-in-out  group-hover:text-accent">
                    {item.discountPrice}
                  </span>
                </motion.p>
                <p>
                  <span className=" transition duration-500 ease-in-out  group-hover:text-white">
                    {item.yearly}
                  </span>
                </p>
              </div>
                <Button variant="price" className="w-full hover:cursor-pointer">Choose Plan</Button>
            </section>
          ))}
        </motion.div>
      )}
    </main>
  );
};

export default PricingCard;
