import * as React from "react";
import { Button } from "../components/ui/button";

// interface HomeProps {
//   propName: type;
// }

const Home = () => {
  return (
    <main className="w-screen h-screen place-content-center bg-accent-var">
      <div className="flex gap-10 bg-title-background">
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
        </section>
      </div>
    </main>
  );
};

export default Home;
