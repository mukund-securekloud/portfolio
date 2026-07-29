import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaRobot,
  FaCloud,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaCode size={30} />,
    title: "12+",
    subtitle: "REST APIs Built",
  },
  {
    icon: <FaRobot size={30} />,
    title: "GenAI",
    subtitle: "Enterprise Applications",
  },
  {
    icon: <FaServer size={30} />,
    title: "Full Stack",
    subtitle: "MERN + Flask",
  },
  {
    icon: <FaCloud size={30} />,
    title: "AWS",
    subtitle: "EC2 • S3",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-5xl font-bold text-center mb-6"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          className="text-center text-slate-300 max-w-4xl mx-auto leading-8 text-lg"
        >
          I'm a Backend Developer specializing in Python, Flask,
          FastAPI, and modern full-stack development. I enjoy building
          scalable REST APIs, AI-powered document automation systems,
          and enterprise applications that solve real-world business
          problems.
        </motion.p>

        <div className="grid md:grid-cols-4 gap-8 mt-20">

          {stats.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              className="bg-slate-800 rounded-2xl p-8 text-center shadow-lg"
            >
              <div className="text-blue-500 flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-3xl font-bold">
                {item.title}
              </h3>

              <p className="text-slate-400 mt-3">
                {item.subtitle}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}