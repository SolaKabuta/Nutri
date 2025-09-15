import { Button } from "../../ui/button";

import AchievementsCard from "../../ui/about/AchievementsCard";

const Achievements = () => {
  return (
    <main>
      {/* -- Title and texts -- */}
      <div className="text-center px:-8 lg:px-24">
        <h1 className=" text-3xl md:text-5xl font-semibold py-14">
          Company Achievements
        </h1>
        <p className="text-center px-8">
          At Nutritionist, we take pride in our accomplishments and the positive
          impact we have made on the lives of <br />
          our clients. Here are some of our notable achievements
        </p>
      </div>
      {/* -- Achievements Cards -- */}
      <section>
        <AchievementsCard />
      </section>
      {/* -- Achievements CTA -- */}
      <section className="relative grid place-content-center py-14 px-8 lg:px-24">
        {/* -- Abstract before img -- */}
        <img className="absolute top-14 left-24" src="/assets/images/about/abstract_1.png" alt="" />
        {/* -- Abstract after img -- */}
        <img className="absolute right-24 bottom-14" src="/assets/images/about/abstract_2.png" alt="" />
        {/* -- CTA Layout -- */}
        <div className="flex flex-col lg:flex-row items-center gap-44 bg-accent-var p-4 md:p-14 rounded-lg ">
          <div>
            <h2 className=" text-3xl md:text-4xl font-semibold">
              We Are Proud of Our Achievements
            </h2>
            <p className="py-6">
              But our ultimate satisfaction comes from seeing our clients achieve
              their goals and live healthier, happier lives. Join Nutritionist today
              and <br /> embark on your own transformative journey towards optimal
              health and well-being.
            </p>
          </div>
          <Button className="w-full lg:w-fit">Book a Demo</Button>
        </div>
      </section>
    </main>
  );
};
export default Achievements;
