import {useState} from 'react';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'motion/react';
// interface HeroProps {
// }

const teamCategories = [
  { id: 'management', label: 'Management Team' },
  { id: 'nutritionist', label: 'Nutritionists and Dietitians' },
  { id: 'support', label: 'Customer Support' },
  { id: 'marketing', label: 'Marketing and Communications' },
  { id: 'tech', label: 'Technology and Development' },
];

const Hero = () => {
  
  const [isManagement, setIsManagement] = useState(true);
  const [isNutritionist, setIsNutritionist] = useState(false);
  const [isSupport, setIsSupport] = useState(false);
  const [isMarketing, setIsMarketing] = useState(false);
  const [isTech, setIsTech] = useState(false);
  
  return (
    <main className="w-screen h-screen scroll-smooth pt-10 md:pt-20 px-4 lg:px-24">
      <div className="relative bg-accent-var rounded-lg p-14">
          {/* -- Hero Icon/Image -- */}
        <motion.div 
          initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 1.2, ease: "easeInOut", delay: 0.2}}
          className="flex justify-center pb-10">
          <img className="z-5" src="/assets/images/team/hero_icon.png" alt="hero icon/image" />
        </motion.div>
          <img className="absolute top-0 right-1/2 translate-x-1/2" src="/assets/images/team/abstract_1.png" alt="hero icon/image" />
        <motion.h1 
          initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 1.2, ease: "easeInOut", delay: 0.6}}
          className="text-3xl md:text-5xl  font-semibold text-center">
          Our Team of Experts
        </motion.h1>
        <motion.p 
          initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 1.2, ease: "easeInOut", delay: 1.2}}
          className="text-center py-14 px-4 ">
          Our team at Nutritionist is composed of highly skilled professionals
          who are passionate about helping you achieve your health and wellness
          goals. With a diverse range of 
          expertise in nutrition, coaching, and support, our team is dedicated
          to providing you with the guidance and personalized care you need. Get
          to know the experts behind 
          our success and discover how they can make a positive impact on your
          journey to better health.
        </motion.p>
      </div>
      {/* -- Team Select CTA -- */}
      <motion.section 
        initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 1.2, ease: "easeInOut", delay: 1.6}}
        className='bg-primary flex gap-3 justify-center items-center rounded-b-lg h-24'>
        {teamCategories.map((category) => (
        <ul>
          <li><Button variant='yearly' className=' text-white transition duration-500 hover:bg-navbar'>{category.label}</Button></li>
        </ul>
        ))}
      </motion.section>
    </main>
  );
};

export default Hero;
