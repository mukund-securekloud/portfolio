import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaUserTie,
  FaCheckCircle,
} from "react-icons/fa";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="max-w-[1700px] mx-auto px-4 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-4 max-w-4xl mx-auto text-base leading-7">
            During my internship at SecureKloud Technologies, I contributed to
            enterprise-grade products used for intelligent document automation
            and employee management.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-xl hover:border-blue-500 transition-all duration-300 h-full"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-5">

                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-blue-100 text-sm mt-1">
                  {project.subtitle}
                </p>

                {project.website ? (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition"
                  >
                    Visit Product
                    <FaExternalLinkAlt size={12} />
                  </a>
                ) : (
                  <span className="inline-block mt-4 bg-white/20 text-white px-4 py-2 rounded-full text-sm">
                    Internal Enterprise Application
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="p-5">

                {/* About + Role */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      About
                    </h4>

                    <p className="text-gray-300 text-sm leading-6">
                      {project.about}
                    </p>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-2">
                      <FaUserTie className="text-blue-400" />
                      My Role
                    </h4>

                    <p className="text-blue-400 font-medium text-sm">
                      {project.role}
                    </p>
                  </div>

                </div>

                {/* Contributions + Technologies */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div>

                    <h4 className="text-lg font-semibold text-white mb-3">
                      Contributions
                    </h4>

                    <div className="space-y-2">

                      {project.contributions.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2"
                        >
                          <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />

                          <p className="text-gray-300 text-sm leading-6">
                            {item}
                          </p>

                        </div>
                      ))}

                    </div>

                  </div>

                  <div>

                    <h4 className="text-lg font-semibold text-white mb-3">
                      Technologies
                    </h4>

                    <div className="flex flex-wrap gap-2">

                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-slate-800 border border-blue-500 text-blue-300 text-xs"
                        >
                          {tech}
                        </span>
                      ))}

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}