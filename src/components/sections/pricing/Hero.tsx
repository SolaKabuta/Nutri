// src/components/sections/pricing/Hero.tsx

import { motion } from "motion/react";

// interface HeroProps {
//   propName: type;
// }

const Hero = () => {
  return (
    <main className="max-w-screen scroll-smooth pt-10 md:pt-20 mx-4 lg:mx-0 lg:px-24">
      <div className="relative bg-accent-var rounded-lg p-14">
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
          Our Pricings
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 1 }}
          className="text-center py-14 "
        >
          At Nutritionist, we offer flexible pricing options to accommodate your
          unique requirements and budget. Our goal is to provide you with
          exceptional personalized nutrition coaching that is accessible and
          tailored to your needs. Choose from our three plans below and take the
          first step towards a healthier lifestyle
        </motion.p>
      </div>
    </main>
  );
};

export default Hero;
