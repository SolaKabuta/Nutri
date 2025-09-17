import { useState } from "react";
import { managementTeam, nutritionTeam, supportTeam, marketingTeam, techTeam } from "@/data/teamsCard";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";

interface TeamsCardProps {
  image: string;
  label: string;
  role: string;
}

// Button categories
const teamCategories = [
  { id: "management", label: "Management Team" },
  { id: "nutritionist", label: "Nutritionists and Dietitians" },
  { id: "support", label: "Customer Support" },
  { id: "marketing", label: "Marketing and Communications" },
  { id: "tech", label: "Technology and Development" },
];

// Category buttons to filter team members by their roles
const TeamsCard = () => {
  const [isManagement, setIsManagement] = useState(true);
  const [isNutritionist, setIsNutritionist] = useState(false);
  const [isSupport, setIsSupport] = useState(false);
  const [isMarketing, setIsMarketing] = useState(false);
  const [isTech, setIsTech] = useState(false);
  
  // Handle category button click
  function handleCategoryClick(categoryId: string) {
    setIsManagement(categoryId === "management");
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
                className=" text-white transition duration-500 hover:bg-navbar hover:text-accent">
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
      {/* -- Management Team -- */}
      <AnimatePresence>
        {isManagement && (
          <motion.section
            initial={{ x:2000, opacity: 0 }}
            animate={{ x: 0, opacity: 1}}
            exit={{ x:-2000, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.7 }}
            className="grid md:grid-cols-2 lg:flex gap-6 mb-24 pb-14 px-4 lg:px-24"
          >
            {managementTeam.map((item: TeamsCardProps, index: number) => (
              <div
                key={index}
                className="relative group"
              >
                <img
                  className="z-10 w-fit transition duration-700 ease-in-out group-hover:scale-110 group-hover:-translate-y-4"
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
            {nutritionTeam.map((item: TeamsCardProps, index: number) => (
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
      {/* -- Achievements CTA -- */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 1.2, ease: "linear", delay: 2.4 }}
        className="relative grid place-content-center py-14 px-8 lg:px-24"
      >
        {/* -- Abstract before img -- */}
        <img
          className="absolute top-14 left-8 lg:left-24"
          src="/assets/images/about/abstract_1.png"
          alt=""
        />
        {/* -- Abstract after img -- */}
        <img
          className="absolute bottom-14 right-8 lg:right-24 "
          src="/assets/images/about/abstract_2.png"
          alt=""
        />
        {/* -- CTA Layout -- */}
        <div className="flex flex-col lg:flex-row items-center gap-44 bg-accent-var p-4 md:p-14 rounded-lg">
          <div>
            <h2 className=" text-3xl md:text-4xl font-semibold">
              Join Our Team
            </h2>
            <p className="py-6">
              We are always on the lookout for talented individuals who are
              enthusiastic about making a difference. Explore our career
              opportunities and join us in our mission to help people achieve
              their health and wellness goals.
            </p>
          </div>
          <Button className="z-50 w-full lg:w-fit">Book a Demo</Button>
        </div>
      </motion.section>
    </div>
  );
};

export default TeamsCard;
