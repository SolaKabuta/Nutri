// src/components/sections/pricing/Hero.tsx

import { motion } from "motion/react";

// interface HeroProps {
//   propName: type;
// }

const Hero = () => {
  return (
    <main className="max-w-screen scroll-smooth pt-10 md:pt-20  lg:mx-0 lg:px-24">
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
        className="relative bg-accent-var rounded-lg p-14">
        {/* -- Hero Icon/Image -- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
          className="flex justify-center pb-10"
        >
          <img
            className="z-5"
            src="/assets/images/team/hero_icon.png"
            alt="hero icon/image"
          />
        </motion.div>
        <img
          className="absolute top-0 right-1/2 translate-x-1/2"
          src="/assets/images/team/abstract_1.png"
          alt="hero icon/image"
        />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.6 }}
          className="text-3xl md:text-5xl  font-semibold text-center"
        >
          Our Blogs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 1 }}
          className="text-center py-14 "
        >
          Welcome to the Blog section of Nutritionist, your trusted source for insightful articles, tips, and expert advice on nutrition and wellness. Here, we strive to provide you with <br />
          engaging and informative content that will inspire and empower you to make informed decisions about your health. Explore our blog to discover a wealth of resources that 
          cover a wide range of topics related to nutrition, fitness, and overall well-being.
        </motion.p>
      </motion.div>
    </main>
  );
};

export default Hero;
