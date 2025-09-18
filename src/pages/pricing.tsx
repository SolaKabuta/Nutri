import Hero from "@/components/sections/pricing/Hero";
import PlansCard from "@/components/ui/pricing/PlansCard";
import PlansFeatures from "@/components/sections/pricing/PlansFeatures";


// interface Pricing {
//   propName: string;
// }


const Pricing = () => {
  return (
    <>
     <Hero/> 
     <PlansCard/>
      <PlansFeatures/>
    </>
  );
};

export default Pricing;