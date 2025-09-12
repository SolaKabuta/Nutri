// import { Button } from "../ui/button";
import TestimonialsCard from "../ui/home/TestimonialsCard";

// interface TestimonialsProps {
//   propName: type;
// }

const Testimonials = () => {
  return (
    <main className="w-screen grid place-content-center py-14">
      <div className="text-center">
        <h1 className="text-4xl py-8 font-bold">Our Testimonials</h1>
        <p className="pb-14">
          Our satisfied clients share their success stories and experiences on their journey to better health and well-being.
        </p>
      </div>
      <TestimonialsCard />
    </main>
  );
};

export default Testimonials;