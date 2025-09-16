// src/components/sections/about/Hero.tsx

import { motion } from "motion/react";

const Hero = () => {
  return (
    <>
      <main className="w-screen h-screen scroll-smooth pt-10 md:pt-20 px-4 lg:px-24">
        <motion.img 
          initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 1.2, ease: "easeInOut", delay: 0.2}}
        src="/assets/images/about/hero.png" alt="hero banner image" />
        <motion.div 
          initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 1.2, ease: "easeInOut", delay: 0.6}}
          className="bg-accent-var border-1 my-14 py-14 rounded-lg">
          <h1 className="text-3xl md:text-5xl  font-semibold text-center">Welcome to Nutritionist</h1>
          <div className="text-center py-14 px-4 ">
            <p>Your trusted source for personalized nutrition coaching. Our mission is to help you achieve your weight loss and health goals through tailored nutrition plans and expert guidance. </p>
            <p>We understand that every individual is unique, and that's why we believe in providing personalized solutions that fit your lifestyle and preferences.</p>
            <p>With our team of qualified nutritionists and dietitians, we are dedicated to empowering you with the knowledge and tools you need to make lasting changes. Whether you want </p>
            <p>to shed those extra pounds, improve your overall well-being, or develop a healthier relationship with food, we are here to support you every step of the way.</p>
            <p>At Nutritionist, we believe that healthy eating should be enjoyable and sustainable. We emphasize the importance of balanced nutrition, focusing on whole foods and mindful </p>
            <p>eating practices. Our approach is rooted in scientific research and evidence-based strategies, ensuring that you receive the most up-to-date and accurate information.</p>
            <p>Join our community of individuals committed to transforming their lives through nutrition. Take control of your health, boost your energy levels, and discover the joy of nourishing </p>
            <p>your body with wholesome foods. We are here to guide you towards a healthier, happier you.</p>
          </div>
        </motion.div>
      </main>
    </>
  );
}

export default Hero;