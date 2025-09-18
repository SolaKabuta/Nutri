import { Button } from "../button";
// import pricingCard  from "@/data/pricingCard.json";
// import pricingCardYearly from "@/data/pricingCardYearly.json";
import {pricingCardMonthly, pricingCardYearly} from "@/data/pricingCardDetails";
import {useState} from "react";
import { motion } from "motion/react"

interface PricingCardMonthlyProps {
  plan: string;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  feature5: string;
  discount: string;
  price: string;
  monthly: string;
  premium: string;
}

interface PricingCardYearlyProps {
  plan: string;
  discount: string;
  price: string;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  feature5: string;
  discountApplied: string;
  yearly: string;
  premium: string;
}

const PlansCard = () => {

  const [isMonthly, setIsMonthly] = useState(true);

  // function setIsMonthly () {
  //   setIsMonthly(prev => !prev);
  // }

  return (
    <main className="pb-24 lg:mx-24">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="grid place-content-center py-14">
        <div className="border-1 p-2 rounded-lg">
          <Button onClick={() => setIsMonthly(prev => !prev)} variant={isMonthly ? "monthly" : "yearly"}>Montlhy</Button>
          <Button onClick={() => setIsMonthly(prev => !prev)} variant={isMonthly ? "yearly" : "monthly"}>Yearly</Button>
        </div>
        <p className="text-sm text-center pt-4 pb-7">Save 50% on Yearly</p>
      </motion.div>
      {/* Monthly Pricing Cards */}
      {isMonthly && (
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid place-items-baseline  lg:grid-cols-3 gap-8 hover:cursor-pointer">
        {pricingCardMonthly.map((item: PricingCardMonthlyProps, index: number) => (
          <section key={index} className="bg-accent-var border-1 rounded-lg p-8  transition duration-300 ease-in-out hover:bg-primary hover:-translate-y-2 group">
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
            {/* -- Features -- */}
            <section className="text-balance font-medium bg-border-light rounded-lg [&_p]:p-4 [&_p]:border-b-2 transition duration-1000 ease-in-out group-hover:bg-accent group-hover:[&_p]:border-b-primary hover:scale-105 hover:translate-y-2">
            <p>
              <span className="">
                {item.feature1}
              </span>
            </p>
            <p>
              <span>
                {item.feature2}
              </span>
            </p>
            <p>
              <span>
                {item.feature3}
              </span>
            </p>
            <p className={item.feature5 ? "" : "border-none"}>
              <span>
                {item.feature4}
              </span>
            </p>
            {/* If feature5 is empty hide it*/}
            <p className={item.feature5 ? "border-none" : "hidden"}>
              <span>
                {item.feature5}
              </span>
            </p>
            </section>
            {/* -- Ultimate Plan -- */}
            <div>
              <p className={item.premium ? "text-pretty bg-primary rounded-lg p-6 mt-10 " : "hidden"}>
                <span className="text-white transition duration-300 ease-in-out group-hover:text-orange-400 ">
                  {item.premium}
                </span>
              </p>
            </div>
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
          className="grid place-items-baseline lg:grid-cols-3 gap-8 hover:cursor-pointer">
          {pricingCardYearly.map((item: PricingCardYearlyProps, index: number) => (
            <section key={index} className="bg-accent-var border-1 rounded-lg p-8  transition duration-300 ease-in-out hover:bg-primary hover:-translate-y-2 group">
              <p className="font-semibold text-xl">
                <span className="transition duration-300 ease-in-out group-hover:text-white">
                  {item.plan}
                </span>
              </p>
              <p className="pb-7 ">
                <span className="transition text-orange-400 duration-500 ease-in-out group-hover:text-accent">
                  {item.discountApplied}
                </span>
              </p>
              {/* -- Features -- */}
              <section className="text-balance font-medium bg-border-light rounded-lg [&_p]:p-4 [&_p]:border-b-2 transition duration-1000 ease-in-out group-hover:bg-accent group-hover:[&_p]:border-b-primary hover:scale-105 hover:translate-y-2">
              <p>
                <span className="">
                  {item.feature1}
                </span>
              </p>
              <p>
                <span>
                  {item.feature2}
                </span>
              </p>
              <p>
                <span>
                  {item.feature3}
                </span>
              </p>
              <p className={item.feature5 ? "" : "border-none"}>
                <span>
                  {item.feature4}
                </span>
              </p>
              {/* If feature5 is empty hide it*/}
              <p className={item.feature5 ? "border-none" : "hidden"}>
                <span>
                  {item.feature5}
                </span>
              </p>
              </section>
              {/* -- Ultimate Plan -- */}
              <div>
                <p className={item.premium ? "text-pretty bg-primary rounded-lg p-6 mt-10 " : "hidden"}>
                  <span className="text-white transition duration-300 ease-in-out group-hover:text-orange-400">
                    {item.premium}
                  </span>
                </p>
              </div>
              <div className="flex items-center py-7">
                <p className="font-bold text-4xl">
                  <span className="text-price transition duration-500 ease-in-out  group-hover:text-accent">
                    {item.price}
                  </span>
                </p>
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

export default PlansCard;
