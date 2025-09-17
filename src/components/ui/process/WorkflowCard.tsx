import workflowCard from "../../../data/workflowCard.json";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

interface Feature {
  number: string;
  label: string;
  icon: string;
  text: string[];
}

const WorkflowCard = () => {
  return (
    <div className="py-24">
      <section className="relative z-50 grid lg:grid-cols-2 gap-8 items-center">
      {workflowCard.map((feature: Feature, index:number) => (
        <div key={index} className="relative bg-accent-var border-1 border-border-light rounded-xl p-6 md:p-4 mb-14 transition duration-300 linear hover:bg-primary group">
            <p className="absolute -z-40 -top-22 left-0 text-9xl font-bold"><span className="text-avatars">{feature.number}</span></p>
          <div className="flex gap-3 items-center py-4">
            <img src={feature.icon} alt="features icon" width={66} height={66}/>
            <p className="font-semibold">
              <span className="transition duration-500 ease-in-out group-hover:text-white">
              {feature.label}
              </span>
            </p>
          </div>
          {feature.text.map((t, i) => <p key={i}>
            <span className="transition duration-500 ease-in-out group-hover:text-white">
              {t}
            </span>
          </p>)}
        </div>
      ))}
      </section>
      {/* -- Workflow CTA -- */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 1.2, ease: "linear", delay: 2.4 }}
        className="relative grid place-content-center py-14"
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

export default WorkflowCard;
