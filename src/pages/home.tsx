// import * as React from "react";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Blogs from "../components/sections/Blogs";
import Testimonials from "../components/sections/Testimonials";
import Pricing from "../components/sections/Pricing";
import PageTransition from "@/components/animations/PageTransition";

// interface HomeProps {
//   propName: type;
// }

const Home = () => {
  return (
    <>
      <PageTransition>
        <Hero />
        <Features />
        <Blogs />
        <Testimonials />
        <Pricing />
      </PageTransition>
    </>
  );
};

export default Home;
