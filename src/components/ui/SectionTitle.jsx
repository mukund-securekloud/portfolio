import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: .6 }}
      className="text-center mb-20"
    >
      <h2 className="text-5xl font-black">
        {title}
      </h2>

      {subtitle && (
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}