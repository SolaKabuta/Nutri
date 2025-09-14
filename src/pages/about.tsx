import PageTransition from "@/components/animations/PageTransition";
import Hero from "@/components/sections/about/Hero";
import Story from "@/components/sections/about/Story";
// import Achievements from "@/components/sections/about/Achievements";

const About = () => {
  return (
    <>
      <PageTransition>
      <main>
        <Hero/>
        <Story/>
        {/*<Achievements/>*/}
      </main>
      </PageTransition>
    </>
  );
}

export default About;