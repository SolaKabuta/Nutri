// import {useState} from 'react';
import { managementTeam } from '@/data/teamsCard';
import { motion } from 'motion/react';
import {Button} from '@/components/ui/button'


interface TeamsCardProps {
  image: string;
  label: string;
  role: string;
}

const teamCategories = [
  { id: 'management', label: 'Management Team' },
  { id: 'nutritionist', label: 'Nutritionists and Dietitians' },
  { id: 'support', label: 'Customer Support' },
  { id: 'marketing', label: 'Marketing and Communications' },
  { id: 'tech', label: 'Technology and Development' },
];


const TeamsCard= () => {

  //const [isManagement, setIsManagement] = useState(true);
  // const [isNutritionist, setIsNutritionist] = useState(false);
  // const [isSupport, setIsSupport] = useState(false);
  // const [isMarketing, setIsMarketing] = useState(false);
  // const [isTech, setIsTech] = useState(false);
  
  return (
    <div >
      {/* -- Team Select CTA -- */}
      <motion.section 
        initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 1.2, ease: "easeInOut", delay: 1.4}}
        className='bg-primary flex gap-3 justify-center items-center rounded-b-lg h-24 mb-14 mx-24'>
        {teamCategories.map((category) => (
        <ul>
          <li><Button variant='yearly' className=' text-white transition duration-500 hover:bg-navbar'>{category.label}</Button></li>
        </ul>
        ))}
      </motion.section>
      <section 
        className='grid md:flex gap-6 mb-24 pb-14 px-4 lg:px-24'>
      {managementTeam.map((item: TeamsCardProps, index: number) => (
        <div key={index} className="relative transition duration-300 linear hover:bg-primary group">
          <img className='z-10 transition duration-700 ease-in-out group-hover:scale-110 group-hover:-translate-y-4' src={item.image} alt="" />
          <div className='absolute z-30 -bottom-4 bg-accent-var rounded-lg w-64 py-8 px-10 transition duration-700 group-hover:translate-y-2 group-hover:translate-x-8'>
          <p className='text-xl font-semibold transition duration-500 group-hover:scale-115'>{item.label}</p> 
          <p className='text-sm transition duration-1000 ease-in-out group-hover:scale-115 group-hover:translate-y-2'>{item.role}</p> 
          </div>
        </div>
      ))}
      </section>
    </div>
  );
};

export default TeamsCard;