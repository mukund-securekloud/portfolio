import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import { SiFlask, SiMongodb, SiMysql, SiPostgresql } from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython />, level: 95 },
  { name: "Flask", icon: <SiFlask />, level: 90 },
  { name: "React.js", icon: <FaReact />, level: 85 },
  { name: "Node.js", icon: <FaNodeJs />, level: 90 },
  { name: "MongoDB", icon: <SiMongodb />, level: 85 },
  { name: "MySQL", icon: <SiMysql />, level: 90 },

  { name: "AWS", icon: <FaAws />, level: 70 },
  { name: "Git", icon: <FaGitAlt />, level: 90 },
  { name: "REST API", icon: <FaDatabase />, level: 95 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.03 }}
              className="bg-slate-900 rounded-2xl p-6 border border-slate-800"
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3 text-xl">
                  <span className="text-blue-400 text-2xl">
                    {skill.icon}
                  </span>
                  {skill.name}
                </div>

                <span>{skill.level}%</span>
              </div>

              <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className="h-full bg-blue-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}