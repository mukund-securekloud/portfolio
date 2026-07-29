import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <p className="text-slate-400">
          © 2026 Mukund Chinnam. All Rights Reserved.
        </p>

        <div className="flex gap-6 mt-5 md:mt-0 text-2xl">

          <a
            href="https://github.com/mukund-securekloud"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/mukund-c-4a6634401/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>
    </footer>
  );
}