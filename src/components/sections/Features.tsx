// import { Button } from "../ui/button";
import FeaturesCard from "../ui/home/FeaturesCard";

// interface HomeProps {
//   propName: type;
// }

const Features = () => {
  return (
    <main className="w-screen  grid place-content-center">
     <h1 className="text-4xl py-8 font-bold text-center">Features</h1> 
     <p className="pb-14">Welcome to the Feature Section of Nutritionist, your ultimate destination for all things nutrition and wellness.</p>
     <FeaturesCard/>
    </main>
  );
};

export default Features;
