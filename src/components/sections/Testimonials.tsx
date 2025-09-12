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
        <CarouselContent>
          <section className="flex gap-8 items-center">
            {testimonialsCard.map((item: Item, index: number) => (
              <CarouselItem className="basis-1/8">
                <div
                  key={index}
                  className="relative bg-background border-1 border-border-light rounded-xl p-6"
                >
                  <img src={item.icon} alt="" />
                  <div className="pt-12 pb-24">
                    {item.text.map((t, i) => (
                      <p key={i}>{t}</p>
                    ))}
                  </div>
                  <div className="absolute bottom-0 bg-accent-var flex gap-3 items-center py-4 pr-50 mt-14">
                    <img src={item.image} alt="features icon" />
                    <p className="font-semibold">{item.name}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </section>
        </CarouselContent>
        {/*<CarouselPrevious />
        <CarouselNext />*/}
      </Carousel>
      {/*<TestimonialsCard />*/}
    </main>
  );
};

export default Testimonials;
