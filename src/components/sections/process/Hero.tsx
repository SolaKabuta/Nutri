import { motion } from "motion/react";
// interface Hero {
//   propName: type;
// }

const Hero = () => {
  return (
    <main className="max-w-screen scroll-smooth pt-10 md:pt-20 mx-4 lg:mx-0 lg:px-24">
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
          Your Journey to Health and Wellness
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 1 }}
          className="text-center py-14 "
        >
          At Nutritionist, we believe in providing a personalized and
          comprehensive approach to help you achieve your health and wellness
          goals. Our "How it Works" process is designed to guide you through
          each step of your journey, ensuring that you receive the support,
          knowledge, and tools you need to succeed. Here's a detailed breakdown
          of our process:
        </motion.p>
      </motion.div>
    </main>
  );
};

export default Hero;
