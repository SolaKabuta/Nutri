import { useState } from "react";
import { weightLossTips, healthyEating } from "@/data/blogsCard";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";

interface Feature {
  image: string;
  label: string;
  title: string;
  text: string;
}

// Button categories
const teamCategories = [
  { id: "all", label: "All" },
  { id: "weight", label: "Weight Loss Tips" },
  { id: "healthy", label: "Healthy Eating" },
  { id: "fitness", label: "Fitness and Exercise" },
  { id: "mindset", label: "Mindset and Motivation" },
  { id: "planning", label: "Recipes and Meal Planning" },
];

// Category buttons to filter team members by their roles
const BlogsCard = () => {
  const [isAll, setIsAll] = useState(true);
  const [isNutritionist, setIsNutritionist] = useState(false);

  // Handle category button click
  function handleCategoryClick(categoryId: string) {
    setIsAll(categoryId === "all");
    setIsNutritionist(categoryId === "nutritionist");
  }

  return (
    <div>
      {/* -- Team Select CTA -- */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 1.4 }}
        className="bg-primary grid md:grid-cols-2 lg:flex gap-3 justify-center items-center text-center rounded-b-lg p-8 lg:h-24 mb-14 mx-4 lg:mx-24"
      >
        {teamCategories.map((category) => (
          <ul>
            <li>
              <Button
                onClick={() => handleCategoryClick(category.id)}
                variant="yearly"
                className=" active:bg-accent text-white transition duration-500 hover:bg-navbar hover:text-accent"
              >
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
              initial={{ x: 2000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -2000, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.7 }}
              className="grid grid-cols-2 gap-6 mb-24 pb-14 px-4 lg:px-24"
            >
              {weightLossTips.map((item: Feature, index: number) => (
                <div key={index} className="relative group">
                  <p className="underline underline-offset-10 decoration-accent font-semibold pb-8">
                    {item.label}
                  </p>
                  <img src={item.image} alt="" width={1000} height={800} />
                  <p className="py-8 font-semibold">{item.title}</p>
                  <div className="flex items-center">
                    <p>{item.text}</p>
                    <Button>Read More</Button>
                  </div>
                </div>
              ))}
            </motion.section>
          )}
        </AnimatePresence>
        {/* -- Nutrition Team -- */}
        <AnimatePresence>
          {isNutritionist && (
            <motion.section
              initial={{ x: 2000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -2000, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 1.2 }}
              className="grid md:grid-cols-2 lg:flex gap-6 mb-24 pb-14 px-4 lg:px-24"
            >
              {healthyEating.map((item: Feature, index: number) => (
                <div key={index} className="relative group">
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
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </motion.section>
          )}
        </AnimatePresence>
        {/* -- Support Team -- */}

        {/* -- Marketing Team -- */}

        {/* -- Tech Team -- */}
      </motion.div>
    </div>
  );
};

export default BlogsCard;
