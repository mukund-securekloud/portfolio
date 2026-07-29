import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    college: "CMR College of Engineering & Technology",
    duration: " 2020 –  2024",
    location: "Hyderabad, Telangana",
    courses: [
      "Data Structures",
      "Algorithms",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Web Development",
    ],
  },
  {
    degree: "Diploma in Computer Engineering",
    college: "Government Polytechnic, Warangal",
    duration: "2017 – 2020",
    location: "Warangal, Telangana",
    courses: [
      "C Programming",
      "C++",
      "Java",
      "Database Systems",
      "Computer Fundamentals",
      "Web Technologies",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-950">
      <Container>
        <SectionTitle
          title="Education"
          subtitle="My academic background and the core subjects that built my software engineering foundation."
        />

        <div className="space-y-8 mt-14">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="hover:border-blue-500 transition-all duration-300">
                <div className="flex flex-col lg:flex-row justify-between gap-10">
                  <div className="flex-1">

                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center">
                        <FaGraduationCap className="text-blue-500 text-2xl" />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {item.degree}
                        </h3>

                        <p className="text-blue-400 mt-1">
                          {item.college}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-6 text-slate-400 mb-8">

                      <div className="flex items-center gap-2">
                        <FaCalendarAlt />
                        <span>{item.duration}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt />
                        <span>{item.location}</span>
                      </div>

                    </div>

                    <h4 className="text-lg font-semibold text-white mb-4">
                      Relevant Coursework
                    </h4>

                    <div className="flex flex-wrap gap-3">
                      {item.courses.map((course) => (
                        <span
                          key={course}
                          className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm hover:bg-blue-500 hover:text-white transition"
                        >
                          {course}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}