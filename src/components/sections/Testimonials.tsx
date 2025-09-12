// import { Button } from "../ui/button";
// import TestimonialsCard from "../ui/home/TestimonialsCard";
import testimonialsCard from "../../data/testimonialsCard.json";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Item {
  name: string;
  image: string;
  text: string[];
  icon: string;
}

const Testimonials = () => {
  return (
    <main className="w-screen grid place-content-center py-14">
      <div className="text-center">
        <h1 className="text-4xl py-8 font-bold">Our Testimonials</h1>
        <p className="pb-14">
          Our satisfied clients share their success stories and experiences on
          their journey to better health and well-being.
        </p>
      </div>
      <Carousel>
        <CarouselContent >
          {testimonialsCard.map((item: Item, index: number) => (
            <CarouselItem  className="md:basis-1/3">
              <div key={index} className="relative bg-background border border-border-light w-fit rounded-xl p-10">
                <img src={item.icon} alt="" />
                <div className="pt-12 pb-24">
                  {item.text.map((t, i) => (
                    <p key={i}>{t}</p>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 bg-accent-var flex gap-3 items-center w-full py-6 px-10 mt-14">
                  <img src={item.image} alt="features icon" />
                  <p className="font-semibold">{item.name}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {/*<TestimonialsCard />*/}
    </main>
  );
};

export default Testimonials;
