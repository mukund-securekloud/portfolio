import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";

const contacts = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "mukundchinnam18@gmail.com",
    link: "mailto:mukundchinnam18@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+91 9347248729",
    link: "tel:+919347248729",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    value: "github.com/mukund-securekloud",
    link: "https://github.com/mukund-securekloud",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    value: "linkedin.com/in/mukund-chinnam",
    link: "https://www.linkedin.com/in/mukund-chinnam-9b519a361?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Chennai, Tamil Nadu",
    link: "https://maps.google.com/?q=Chennai,Tamil+Nadu",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-slate-900">
      <Container>
        <SectionTitle
          title="Let's Connect"
          subtitle="I'm open to internships, full-time opportunities, and exciting backend or full-stack projects."
        />

        <div className="grid md:grid-cols-2 gap-8">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Get In Touch
            </h3>

            <p className="text-slate-400 leading-8">
              Whether you have a question, a job opportunity,
              or just want to connect, feel free to reach out.
              I'll do my best to get back to you.
            </p>

            <div className="mt-10 space-y-5">
              {contacts.map((item) => (
                <Card key={item.title}>
                  <a
                    href={item.link}
                    target={
                      item.title === "GitHub" ||
                      item.title === "LinkedIn" ||
                      item.title === "Location"
                        ? "_blank"
                        : undefined
                    }
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 text-2xl group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg text-white">
                        {item.title}
                      </h4>

                      <p className="text-slate-400 group-hover:text-blue-400 transition">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <h3 className="text-3xl font-bold mb-6">
                Let's Work Together 🚀
              </h3>

              <p className="text-slate-400 leading-8">
                I'm currently looking for Backend Developer,
                Python Developer, Flask, FastAPI, and Full Stack
                opportunities. If you think I'd be a good fit for
                your team, let's connect!
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mukundchinnam18@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-blue-600 rounded-xl hover:bg-blue-700 transition font-medium"
                >
                  Send Email
                </a>

                <a
                  href="tel:+919347248729"
                  className="px-8 py-4 border border-blue-500 text-blue-400 rounded-xl hover:bg-blue-500 hover:text-white transition font-medium"
                >
                  Call Me
                </a>

              </div>
            </Card>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}