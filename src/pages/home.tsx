import * as React from "react";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

// interface HomeProps {
//   propName: type;
// }

const Home = () => {
  return (
    <main className="w-screen h-screen place-content-center">
      <div className="flex gap-10 ">
        {/* -- Hero Banner Container -- */}
        <section>
          <img src="/assets/images/hero_banner.jpg" alt="hero banner" />
        </section>
        <section>
          {/* -- Title -- */}
          <p className="text-primary underline decoration-accent decoration-2 underline-offset-8 font-semibold">
            Transform Your ❤️ Health with
          </p>
          <h1 className="text-4xl text-primary font-bold py-8">
            Personalized Nutrition <br /> Coaching
          </h1>
          <div>
            {/* -- Paragraph -- */}
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
          <div className="flex gap-4 py-8">
            <Button>Get Starter Today</Button>
            <Button variant="secondary">Book a demo</Button>
          </div>
          {/* -- Avatars -- */}
          <div className="flex items-center gap-3">
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
    </main>
  );
};

export default Home;
