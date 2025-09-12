import * as React from "react";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Blogs from "../components/sections/Blogs";
import Testimonials from "../components/sections/Testimonials";
import Pricing from "../components/sections/Pricing";

// interface HomeProps {
//   propName: type;
// }

const Home = () => {
  return (
    <>
      <Hero/>
      <Features/>
      <Blogs/>
      <Testimonials/>
      <Pricing/>
    </>
  );
};

export default Home;
