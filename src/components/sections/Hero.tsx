// import * as React from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

// interface HomeProps {
//   propName: type;
// }

const Hero = () => {
  return (
    <main className="w-screen h-screen scroll-smooth">
      {/* -- Hero Section Container Start -- */}
      <div className="flex flex-col justify-center lg:justify-start baseline items-center lg:flex-row gap-10 ">
        {/* -- Hero Banner Container -- */}
        <section className="md:w-full lg:w-1/2">
          <img src="/assets/images/hero_banner.jpg" alt="hero banner" width={800} height={1200}/>
        </section>
        <section className="text-center lg:text-left px-4 lg:px-0 lg:pt-24">
          {/* -- Title -- */}
          <p className="text-primary underline decoration-accent decoration-2 underline-offset-8 font-semibold">
            Transform Your ❤️ Health with
          </p>
          <h1 className="text-4xl md:text-5xl text-primary font-bold py-6">
            Personalized <br className="block md:hidden" /> Nutrition <br className="hidden md:block"/> Coaching
          </h1>
            {/* -- Paragraph -- */}
          <div className="text-sm md:text-base text-balance">
            <p>
              Welcome to Nutritionist, your partner in achieving optimal health
              through personalized nutrition
            </p>
            <p>
              coaching. Our certified nutritionists are here to guide you on
              your weight loss journey, providing{" "}
            </p>
            <p>
              customized plans and ongoing support. Start your transformation
              today and experience the{" "}
            </p>
            <p>power of personalized nutrition coaching.</p>
          </div>
          {/* -- CTAs -- */}
          <div className="flex justify-center items-center lg:justify-start gap-4 py-8">
            <a href="#pricing" className="text-sm  px-4 py-3 has-[>svg]:px-3 rounded-sm bg-accent text-primary font-semibold shadow-xs transition duration-500 ease-in-out hover:bg-primary/90 hover:text-white">Get Starter Today</a>
            <Button variant="secondary">Book a demo</Button>
          </div>
          {/* -- Avatars -- */}
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <section className="flex -space-x-3 p-2 border-1 border-accent rounded-full ">
              <Avatar>
                <AvatarImage src="/assets/images/avatar_1.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/assets/images/avatar_2.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/assets/images/avatar_3.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </section>
            <p className="font-semibold"><span className="text-avatars">430+</span> Happy Customers</p>
          </div>
        </section>
      </div>
      {/* -- Hero Section Container Start -- */}
      <div>
        
      </div>
    </main>
  );
};

export default Hero;
