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
const blogPosts = [
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
  const [isWeight, setIsWeight] = useState(false);
  const [isHealthy, setIsHealthy] = useState(false);

  // Handle category button click
  function handleCategoryClick(categoryId: string) {
    setIsAll(categoryId === "all");
    setIsWeight(categoryId === "weight");
    // setIsNutritionist(categoryId === "nutritionist");
    setIsHealthy(categoryId === "healthy");
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
        {blogPosts.map((category) => (
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
              className=" grid md:grid-cols-2 rounded-xl mb-24  lg:mx-24"
            >
              {weightLossTips.map((item: Feature, index: number) => (
                <div key={index} className="relative group bg-accent-var border-1 p-8">
                  <p className=" text-lg underline underline-offset-10 decoration-accent font-semibold pb-8">
                    {item.label}
                  </p>
                  <img src={item.image} alt="" width={1000} height={800} />
                  <p className="py-8 font-semibold">{item.title}</p>
                  {/* -- Text + CTA layout -- */}
                  <div className="grid grid-cols-3 items-center">
                    <p className="col-span-2">{item.text}</p>
                    <Button className="col-start-3">Read More</Button>
                  </div>
                </div>
              ))}
            </motion.section>
            
          )}
        </AnimatePresence>
        {/* -- Weight Loss Tips -- */}
        <AnimatePresence>
          {isWeight && (
            <motion.section
              initial={{ x: 2000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -2000, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.7 }}
              className=" grid md:grid-cols-2 rounded-xl mb-24  lg:mx-24"
            >
              {weightLossTips.map((item: Feature, index: number) => (
                <div key={index} className="relative group bg-accent-var border-1 p-8">
                  <p className=" text-lg underline underline-offset-10 decoration-accent font-semibold pb-8">
                    {item.label}
                  </p>
                  <img src={item.image} alt="" width={1000} height={800} />
                  <p className="py-8 font-semibold">{item.title}</p>
                  {/* -- Text + CTA layout -- */}
                  <div className="grid grid-cols-3 items-center">
                    <p className="col-span-2">{item.text}</p>
                    <Button className="col-start-3">Read More</Button>
                  </div>
                </div>
              ))}
            </motion.section>
          )}
        </AnimatePresence>
        {/* -- Healthy Eating -- */}
        <AnimatePresence>
          {isHealthy && (
            <motion.section
              initial={{ x: 2000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -2000, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.7 }}
              className=" grid md:grid-cols-2 rounded-xl mb-24  lg:mx-24"
            >
              {healthyEating.map((item: Feature, index: number) => (
                <div key={index} className="relative group bg-accent-var border-1 p-8">
                  <p className=" text-lg underline underline-offset-10 decoration-accent font-semibold pb-8">
                    {item.label}
                  </p>
                  <img src={item.image} alt="" width={1000} height={800} />
                  <p className="py-8 font-semibold">{item.title}</p>
                  {/* -- Text + CTA layout -- */}
                  <div className="grid grid-cols-3 items-center">
                    <p className="col-span-2">{item.text}</p>
                    <Button className="col-start-3">Read More</Button>
                  </div>
                </div>
              ))}
            </motion.section>
          )}
        </AnimatePresence>
        {/* -- Marketing Team -- */}

        {/* -- Tech Team -- */}
      </motion.div>
    </div>
  );
};

export default BlogsCard;
