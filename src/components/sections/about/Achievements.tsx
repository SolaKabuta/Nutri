import AchievementsCard from "../../ui/about/AchievementsCard";

const Achievements = () => {
  return (
    <main>
      {/* -- Title and texts -- */}
      <div className="text-center px:-8 lg:px-24">
        <h1 className=" text-3xl md:text-5xl font-semibold py-14">Company Achievements</h1>
        <p className="text-center px-8">
          At Nutritionist, we take pride in our accomplishments and the positive impact we have made on the lives of <br />
          our   clients. Here are some of our notable achievements
        </p>
      </div>
      {/* -- Story Cards -- */}
      <section>
        <AchievementsCard />
      </section>
    </main>
  );
};
export default Achievements;