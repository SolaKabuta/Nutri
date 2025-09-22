import { useState } from "react";
import { weightLossTips, healthyEating, supportTeam, marketingTeam, techTeam } from "@/data/blogsCard";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";

interface TeamsCardProps {
  image: string;
  label: string;
  title: string;
  text: string;
}

// Button categories
const teamCategories = [
  { id: "all", label: "All" },
  { id: "nutritionist", label: "Nutritionists and Dietitians" },
  { id: "support", label: "Customer Support" },
  { id: "marketing", label: "Marketing and Communications" },
  { id: "tech", label: "Technology and Development" },
];

// Category buttons to filter team members by their roles
const BlogsCard = () => {
  const [isAll, setIsAll] = useState(true);
  const [isNutritionist, setIsNutritionist] = useState(false);
  const [isSupport, setIsSupport] = useState(false);
  const [isMarketing, setIsMarketing] = useState(false);
  const [isTech, setIsTech] = useState(false);
  
  // Handle category button click
  function handleCategoryClick(categoryId: string) {
    setIsAll(categoryId === "all");
    setIsNutritionist(categoryId === "nutritionist");
    setIsSupport(categoryId === "support");
    setIsMarketing(categoryId === "marketing");
    setIsTech(categoryId === "tech");
  }

  return (
    <div>
      {/* -- Team Select CTA -- */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 1.4 }}
        className="bg-primary grid md:grid-cols-2 lg:flex gap-3 justify-center items-center text-center rounded-b-lg p-8 lg:h-24 mb-14 mx-4 lg:mx-24">
        {teamCategories.map((category) => (
          <ul>
            <li>
              <Button
                onClick={() => handleCategoryClick(category.id)}
                variant="yearly"
                className=" active:bg-accent text-white transition duration-500 hover:bg-navbar hover:text-accent">
                {category.label}
              </Button>
            </li>
          </ul>
        ))}
      </motion.section>
      {/* -- All Teams Container -- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 2 }}
      >
        {/*TODO: FINE TUNE ANIMATION*/}
      {/* -- All Posts -- */}
      <AnimatePresence>
        {isAll && (
          <motion.section
            initial={{ x:2000, opacity: 0 }}
            animate={{ x: 0, opacity: 1}}
            exit={{ x:-2000, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.7 }}
            className="grid md:grid-cols-2 lg:flex gap-6 mb-24 pb-14 px-4 lg:px-24"
          >
            {weightLossTips.map((item: TeamsCardProps, index: number) => (
              <div
                key={index}
                className="relative group"
              >
                <p className="underline underline-offset-10 decoration-accent font-semibold">{item.label}</p>
                <img src={item.image} alt="" />
              </div>
            ))}
          </motion.section>
        )}
      </AnimatePresence>
      {/* -- Nutrition Team -- */}
      <AnimatePresence>
        {isNutritionist && (
          <motion.section
            initial={{ x:2000, opacity: 0 }}
            animate={{ x: 0, opacity: 1}}
            exit={{ x:-2000, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 1.2 }}
            className="grid md:grid-cols-2 lg:flex gap-6 mb-24 pb-14 px-4 lg:px-24"
          >
            {healthyEating.map((item: TeamsCardProps, index: number) => (
              <div
                key={index}
                className="relative group"
              >
                <img
                  className="z-10 transition duration-700 ease-in-out group-hover:scale-110 group-hover:-translate-y-4"
                  src={item.image}
                  alt="team member portrait"
                />
                <div className="absolute z-30 -bottom-4 bg-accent-var rounded-lg w-64 py-8 px-10 transition duration-700 group-hover:translate-y-2 group-hover:translate-x-8">
                  <p className="text-xl font-semibold transition duration-500 group-hover:scale-115">
                    {item.label}
                  </p>
                  <p className="text-sm transition duration-1000 ease-in-out group-hover:scale-115 group-hover:translate-y-2">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </motion.section>
        )}
      </AnimatePresence>
      {/* -- Support Team -- */}
      <AnimatePresence>
        {isSupport && (
          <motion.section
            initial={{ x:2000, opacity: 0 }}
            animate={{ x: 0, opacity: 1}}
            exit={{ x:0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
            className="grid md:grid-cols-2 lg:flex gap-6 mb-24 pb-14 px-4 lg:px-24"
          >
            {supportTeam.map((item: TeamsCardProps, index: number) => (
              <div
                key={index}
                className="relative group"
              >
                <img
                  className="z-10 transition duration-700 ease-in-out group-hover:scale-110 group-hover:-translate-y-4"
                  src={item.image}
                  alt="team member portrait"
                />
                <div className="absolute z-30 -bottom-4 bg-accent-var rounded-lg w-64 py-8 px-10 transition duration-700 group-hover:translate-y-2 group-hover:translate-x-8">
                  <p className="text-xl font-semibold transition duration-500 group-hover:scale-115">
                    {item.label}
                  </p>
                  <p className="text-sm transition duration-1000 ease-in-out group-hover:scale-115 group-hover:translate-y-2">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </motion.section>
        )}
      </AnimatePresence>
      {/* -- Marketing Team -- */}
      <AnimatePresence>
        {isMarketing && (
          <motion.section
            initial={{ x:2000, opacity: 0 }}
            animate={{ x: 0, opacity: 1}}
            exit={{ x:0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
            className="grid md:grid-cols-2 lg:flex gap-6 mb-24 pb-14 px-4 lg:px-24"
          >
            {marketingTeam.map((item: TeamsCardProps, index: number) => (
              <div
                key={index}
                className="relative group"
              >
                <img
                  className="z-10 transition duration-700 ease-in-out group-hover:scale-110 group-hover:-translate-y-4"
                  src={item.image}
                  alt="team member portrait"
                />
                <div className="absolute z-30 -bottom-4 bg-accent-var rounded-lg w-64 py-8 px-10 transition duration-700 group-hover:translate-y-2 group-hover:translate-x-8">
                  <p className="text-xl font-semibold transition duration-500 group-hover:scale-115">
                    {item.label}
                  </p>
                  <p className="text-sm transition duration-1000 ease-in-out group-hover:scale-115 group-hover:translate-y-2">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </motion.section>
        )}
      </AnimatePresence>
      {/* -- Tech Team -- */}
      <AnimatePresence>
              {isTech && (
                <motion.section
                  initial={{ x:2000, opacity: 0 }}
                  animate={{ x: 0, opacity: 1}}
                  exit={{ x:0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
                  className="grid md:grid-cols-2 lg:flex gap-6 mb-24 pb-14 px-4 lg:px-24"
                >
                  {techTeam.map((item: TeamsCardProps, index: number) => (
                    <div
                      key={index}
                      className="relative group"
                    >
                      <img
                        className="z-10 transition duration-700 ease-in-out group-hover:scale-110 group-hover:-translate-y-4"
                        src={item.image}
                        alt="team member portrait"
                      />
                      <div className="absolute z-30 -bottom-4 bg-accent-var rounded-lg w-64 py-8 px-10 transition duration-700 group-hover:translate-y-2 group-hover:translate-x-8">
                        <p className="text-xl font-semibold transition duration-500 group-hover:scale-115">
                          {item.label}
                        </p>
                        <p className="text-sm transition duration-1000 ease-in-out group-hover:scale-115 group-hover:translate-y-2">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.section>
              )}
            </AnimatePresence>
      </motion.div>
      
    </div>
  );
};

export default BlogsCard;
