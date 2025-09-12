// import { Button } from "../ui/button";
import PricingCard from "../ui/home/PricingCard";

// interface HomeProps {
//   propName: type;
// }

const Pricing = () => {
  return (
    <main className="w-screen grid place-content-center lg:p-24">
      <div className="text-center">
        <h1 className="text-4xl py-8 font-bold">Our Pricing</h1>
        <p id="pricing" className="pb-14 text-sm md:text-base px-8 md:px-0">
          We outline our flexible and affordable options to support you on your journey to optimal health and nutrition. <br className="hidden md:block" /> We believe that <br className="md:hidden" />
          everyone deserves access to personalized nutrition guidance and resources
        </p>
      </div>
      <PricingCard />
    </main>
  );
};

export default Pricing;