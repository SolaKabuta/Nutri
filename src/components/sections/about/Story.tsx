import StoryCard from "../../ui/about/StoryCard";


const Story = () => {
  return (
    <>
      <main className="w-screen grid place-content-center py-14 md:py-24 lg:py-24 lg:pt-80">
        {/* -- Title and texts -- */}
        <div className="text-center">
          <h1 className="text-5xl font-semibold py-14">Our story</h1>
          <p>
            Welcome to Nutritionist, your partner in achieving optimal health
            through personalized nutrition coaching. Our certified <br />
            nutritionists are here to guide you on your weight loss journey.
          </p>
        </div>
        {/* -- Story Cards -- */}
        <section>
          <StoryCard />
        </section>
      </main>
    </>
  );
};
export default Story;
