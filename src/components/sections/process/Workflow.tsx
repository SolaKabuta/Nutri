import { motion } from "motion/react";
import WorkflowCard from "@/components/ui/process/WorkflowCard";

// interface WorkflowProps {
//   propName: type;
// }

const Workflow = () => {
  return (
    <main className="max-w-screen scroll-smooth pt-10 md:pt-20 mx-4 lg:mx-0 lg:px-24">
      <div className="">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 1 }}
          className="text-3xl md:text-5xl  font-semibold text-center"
        >
          How It Works
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 1.4 }}
          className="text-center py-14 "
        >
          We provide a step-by-step guide on how to get started on your journey
          towards better health and nutrition. We are here to simplify the
          process and make it easy for you to navigate our platform and access
          the resources you need to achieve your goals. Here's how it works
        </motion.p>
      </div>
      <WorkflowCard />
    </main>
  );
};

export default Workflow;
