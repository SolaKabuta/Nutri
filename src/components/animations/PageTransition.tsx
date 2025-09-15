// src/components/ui/PageTransition.tsx

import { motion } from "motion/react";
// import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0.8, y: 100 }}   // au départ, caché et en bas
      animate={{ opacity: 1, y: 0 }}     // à l’arrivée, visible et à sa place
      exit={{ opacity: 0, y: -100 }}     // à la sortie, caché et en haut
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="h-full w-full bg-background"
    >
      {children}
    </motion.div>
  );
}
