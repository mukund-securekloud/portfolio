import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
  FaRegFilePdf,
} from "react-icons/fa";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 text-lg font-semibold">
            👋 Hello, I'm
          </p>

          <h1 className="text-6xl md:text-7xl font-black mt-4">
            Mukund
            <span className="text-blue-500"> Chinnam</span>
          </h1>

          <div className="text-2xl md:text-3xl mt-8 text-slate-300 font-semibold h-12">
            <TypeAnimation
              sequence={[
                "Backend Developer",
                2000,
                "Python Developer",
                2000,
                "Flask Developer",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              repeat={Infinity}
            />
          </div>

          <p className="text-slate-400 mt-8 leading-8 max-w-xl">
            Building scalable REST APIs, AI-powered enterprise
            applications, and modern full-stack web solutions.
          </p>

          {/* Buttons */}
          {/* Buttons */}
<div className="flex flex-wrap gap-4 mt-10">

  {/* View Projects */}
  <button
    onClick={scrollToProjects}
    className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/30 flex items-center gap-2"
  >
    View Projects
    <FaArrowRight />
  </button>

  {/* View Resume */}
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-slate-800 border border-slate-700 hover:border-blue-500 hover:bg-slate-700 px-7 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
  >
    <FaRegFilePdf className="text-red-500 text-lg" />
    View Resume
  </a>

  {/* Download Resume */}
  <a
    href="/resume.pdf"
    download="Mukund_Chinnam_Resume.pdf"
    className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-7 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
  >
    <FaDownload />
    Download Resume
  </a>

</div>
          {/* Social Icons */}
          <div className="flex gap-6 mt-10 text-3xl">

            <a
              href="https://github.com/mukund-securekloud"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 hover:scale-110 transition-all duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/mukund-chinnam-9b519a361/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:mukundchinnam18@gmail.com"
              className="hover:text-blue-500 hover:scale-110 transition-all duration-300"
            >
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-30"></div>

            <div className="relative h-80 w-80 rounded-full border-4 border-blue-500 bg-slate-900 flex items-center justify-center text-8xl shadow-2xl hover:scale-105 transition-all duration-500">
              👨‍💻
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}