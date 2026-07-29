import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaRocket,
  FaPython,
  FaReact,
  FaNodeJs,
  FaAws,
  FaCheckCircle,
} from "react-icons/fa";
import { SiFlask, SiMongodb } from "react-icons/si";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-white">
            Experience
          </h2>

          <p className="text-slate-400 mt-4 max-w-3xl mx-auto">
            Professional experience building enterprise applications at
            SecureKloud Technologies.
          </p>
        </motion.div>

        {/* Company Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-800 border border-slate-700 rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-5">

            <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center text-3xl text-white">
              <FaBriefcase />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                SecureKloud Technologies
              </h3>

              <p className="text-blue-400 font-medium">
                Backend & Full Stack Developer Intern
              </p>

              <p className="text-slate-400">
                May 2025 – Present
              </p>
            </div>

          </div>

          <p className="text-slate-300 mt-6 leading-7">
            Contributed to enterprise AI document automation and internal HR
            management applications by developing backend APIs, frontend
            modules, database integrations, and cloud-based solutions.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* DocuGenie */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <FaRocket className="text-blue-500 text-xl" />
              <h4 className="text-2xl font-bold text-white">
                DocuGenie AI
              </h4>
            </div>

            <div className="space-y-3">

              <div className="flex gap-3">
                <FaCheckCircle className="text-green-400 mt-1" />
                <p className="text-slate-300">
                  Developed 12+ REST APIs using Flask.
                </p>
              </div>

              <div className="flex gap-3">
                <FaCheckCircle className="text-green-400 mt-1" />
                <p className="text-slate-300">
                  Built AI-powered document automation workflows.
                </p>
              </div>

              <div className="flex gap-3">
                <FaCheckCircle className="text-green-400 mt-1" />
                <p className="text-slate-300">
                  Integrated SQL, AWS and GenAI services.
                </p>
              </div>

              <div className="flex gap-3">
                <FaCheckCircle className="text-green-400 mt-1" />
                <p className="text-slate-300">
                  Collaborated with frontend developers.
                </p>
              </div>

            </div>
          </motion.div>

          {/* Intranet */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <FaRocket className="text-cyan-400 text-xl" />
              <h4 className="text-2xl font-bold text-white">
                SecureKloud Intranet Portal
              </h4>
            </div>

            <div className="space-y-3">

              <div className="flex gap-3">
                <FaCheckCircle className="text-green-400 mt-1" />
                <p className="text-slate-300">
                  Developed HR modules using React.js.
                </p>
              </div>

              <div className="flex gap-3">
                <FaCheckCircle className="text-green-400 mt-1" />
                <p className="text-slate-300">
                  Built backend services using Node.js & Express.js.
                </p>
              </div>

              <div className="flex gap-3">
                <FaCheckCircle className="text-green-400 mt-1" />
                <p className="text-slate-300">
                  Worked with MongoDB database.
                </p>
              </div>

              <div className="flex gap-3">
                <FaCheckCircle className="text-green-400 mt-1" />
                <p className="text-slate-300">
                  Implemented employee request and HR workflows.
                </p>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >

          <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700">
            <FaPython className="text-yellow-400" />
            Python
          </span>

          <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700">
            <SiFlask />
            Flask
          </span>

          <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700">
            <FaReact className="text-cyan-400" />
            React.js
          </span>

          <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700">
            <FaNodeJs className="text-green-500" />
            Node.js
          </span>

          <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700">
            <SiMongodb className="text-green-500" />
            MongoDB
          </span>

          <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700">
            <FaAws className="text-orange-400" />
            AWS
          </span>

        </motion.div>

      </div>
    </section>
  );
}