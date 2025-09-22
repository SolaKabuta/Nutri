// src/components/sections/pricing/Hero.tsx

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

// interface HeroProps {
//   propName: type;
// }

const Hero = () => {
  return (
    <main className="max-w-screen scroll-smooth pt-10 md:pt-20 lg:mx-0 lg:px-24">
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
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 1 }}
          className="text-center py-14 "
        >
          We value your feedback, questions, and concerns at Nutritionist. Our dedicated team is here to assist you and provide the support you need on your nutritional journey. Please don't hesitate to reach out to us using any of the following contact methods
        </motion.p>
      </motion.div>
      {/* -- Team Select CTA -- */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 1.4 }}
              className="bg-primary grid md:grid-cols-3 lg:flex gap-8 justify-center items-center text-center rounded-b-lg p-8 lg:h-34 mb-14">
                    <Button
                      variant="yearly"
                      className="bg-navbar grid place-items-center active:bg-accent text-white w-64 h-24 transition duration-500 hover:bg-navbar hover:text-accent">
                        {/* -- Mail Icon -- */}
                        <svg
                          className="size-8 fill-accent"
                          width={44}
                          height={44}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            className="stroke-navbar"
                            d="M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        support@nutritionist.com
                    </Button>
                    <Button
                      variant="yearly"
                      className="bg-navbar grid place-items-center active:bg-accent text-white w-64 h-24 transition duration-500 hover:bg-navbar hover:text-accent">
                        {/* -- Phone Icon -- */}
                        <svg
                          className="size-8 fill-accent"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            className="stroke-accent stroke-0"
                            d="M8.38028 8.85335C9.07627 10.303 10.0251 11.6616 11.2266 12.8632C12.4282 14.0648 13.7869 15.0136 15.2365 15.7096C15.3612 15.7694 15.4235 15.7994 15.5024 15.8224C15.7828 15.9041 16.127 15.8454 16.3644 15.6754C16.4313 15.6275 16.4884 15.5704 16.6027 15.4561C16.9523 15.1064 17.1271 14.9316 17.3029 14.8174C17.9658 14.3864 18.8204 14.3864 19.4833 14.8174C19.6591 14.9316 19.8339 15.1064 20.1835 15.4561L20.3783 15.6509C20.9098 16.1824 21.1755 16.4481 21.3198 16.7335C21.6069 17.301 21.6069 17.9713 21.3198 18.5389C21.1755 18.8242 20.9098 19.09 20.3783 19.6214L20.2207 19.779C19.6911 20.3087 19.4263 20.5735 19.0662 20.7757C18.6667 21.0001 18.0462 21.1615 17.588 21.1601C17.1751 21.1589 16.8928 21.0788 16.3284 20.9186C13.295 20.0576 10.4326 18.4332 8.04466 16.0452C5.65668 13.6572 4.03221 10.7948 3.17124 7.76144C3.01103 7.19699 2.93092 6.91477 2.9297 6.50182C2.92833 6.0436 3.08969 5.42311 3.31411 5.0236C3.51636 4.66357 3.78117 4.39876 4.3108 3.86913L4.46843 3.7115C4.99987 3.18006 5.2656 2.91433 5.55098 2.76999C6.11854 2.48292 6.7888 2.48292 7.35636 2.76999C7.64174 2.91433 7.90747 3.18006 8.43891 3.7115L8.63378 3.90637C8.98338 4.25597 9.15819 4.43078 9.27247 4.60655C9.70347 5.26945 9.70347 6.12403 9.27247 6.78692C9.15819 6.96269 8.98338 7.1375 8.63378 7.4871C8.51947 7.60142 8.46231 7.65857 8.41447 7.72538C8.24446 7.96281 8.18576 8.30707 8.26748 8.58743C8.29048 8.66632 8.32041 8.72866 8.38028 8.85335Z"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        +91 00000 00000
                    </Button>
                    <Button
                      variant="yearly"
                      className="bg-navbar grid place-items-center active:bg-accent text-white w-64 h-24 transition duration-500 hover:bg-navbar hover:text-accent">
                        {/* -- Pin Icon -- */}
                        <svg
                          className="size-8 "
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            className=" stroke-accent"
                            d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Some Where in the World
                    </Button>
            </motion.section>
    </main>
  );
};

export default Hero;
