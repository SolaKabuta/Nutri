// src/components/ui/PageTransition.tsx

import { motion } from "motion/react";
import type { ReactNode } from "react";  // ⬅️ type-only import obligatoire

// import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0.8, x: 800 }}   // au départ, caché et en bas
      animate={{ opacity: 1, x: 0 }}     // à l’arrivée, visible et à sa place
      exit={{ opacity: 0, x: -800 }}     // à la sortie, caché et en haut
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="h-full w-full bg-background"
    >
      {children}
    </motion.div>
  );
}
