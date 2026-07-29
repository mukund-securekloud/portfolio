import { motion } from "framer-motion";

export default function Card({ children }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="
      bg-slate-900
      rounded-3xl
      border
      border-slate-800
      shadow-xl
      p-8
      "
    >
      {children}
    </motion.div>
  );
}