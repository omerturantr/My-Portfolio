import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [page, setPage] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    darkMode ? root.classList.add("dark") : root.classList.remove("dark");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const projects = [
  {
    title: "Python Basics",
    description: "A collection of beginner Python programs covering logic, functions, loops and conditionals.",
    github: "https://github.com/omerturantr/python-basics",
    demo: "#",
    image: "https://via.placeholder.com/400x200.png?text=Python+Basics",
    tags: ["Python", "CLI"]
  },
  {
    title: "Image Filter Tool",
    description: "Interactive desktop app using OpenCV to apply filters and manipulate images in real-time.",
    github: "https://github.com/omerturantr/image-filter-tool",
    demo: "#",
    image: "https://via.placeholder.com/400x200.png?text=Image+Filter+Tool",
    tags: ["Python", "OpenCV", "Tkinter"]
  },
  {
    title: "Product Manager App",
    description: "Flutter + Firebase CRUD app for product management with authentication and category filtering.",
    github: "https://github.com/omerturantr/product-manager",
    demo: "#",
    image: "https://via.placeholder.com/400x200.png?text=Product+Manager+App",
    tags: ["Flutter", "Firebase", "Mobile"]
  }
];


  const renderPage = () => {
    switch (page) {
      case "about":
        return (
          <section className="fade-in bg-white dark:bg-zinc-900 shadow rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              I’m Ömer, a Frontend Developer passionate about crafting fast and accessible websites using React and modern technologies.
            </p>
          </section>
        );
      case "skills":
        return (
          <section className="fade-in bg-white dark:bg-zinc-900 shadow rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6 text-center">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <span className="text-4xl text-orange-500">🌐</span>
                <p className="text-sm">HTML</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-4xl text-blue-500">🎨</span>
                <p className="text-sm">CSS</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-4xl text-yellow-400">⚡</span>
                <p className="text-sm">JavaScript</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-4xl text-cyan-400">💠</span>
                <p className="text-sm">React</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-4xl text-sky-400">🌊</span>
                <p className="text-sm">Tailwind CSS</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-4xl text-orange-400">🔥</span>
                <p className="text-sm">Firebase</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-4xl text-green-500">🐍</span>
                <p className="text-sm">Python</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-4xl text-blue-800">C</span>
                <p className="text-sm">C / C++</p>
              </div>
            </div>
          </section>
        );
      case "education":
        return (
          <section className="fade-in bg-white dark:bg-zinc-900 shadow rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6 text-center">Education</h2>

            <div className="relative pl-6 border-l-4 border-blue-500 space-y-8">
              <div className="relative">
                <span className="absolute -left-3 top-1 w-5 h-5 bg-blue-600 rounded-full border-2 border-white dark:border-zinc-900"></span>
                <h3 className="text-xl font-bold text-zinc-800 dark:text-white">İstanbul Sabahattin Zaim University</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">BSc. Computer Engineering • 2020 – 2025</p>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  Focused on software engineering, data structures, web and mobile development.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-3 top-1 w-5 h-5 bg-blue-500 rounded-full border-2 border-white dark:border-zinc-900"></span>
                <h4 className="text-lg font-semibold text-zinc-800 dark:text-white">Academic Achievements</h4>
                <ul className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-300 mt-1 space-y-1">
                  <li>Expected GPA: 3.5 / 4.0</li>
                  <li>Dean’s List for 3 semesters</li>
                  <li>Top 10% in Algorithms & Data Structures course</li>
                </ul>
              </div>

              <div className="relative">
                <span className="absolute -left-3 top-1 w-5 h-5 bg-blue-400 rounded-full border-2 border-white dark:border-zinc-900"></span>
                <h4 className="text-lg font-semibold text-zinc-800 dark:text-white">Certificates</h4>
                <ul className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-300 mt-1 space-y-1">
                  <li>Frontend Developer – freeCodeCamp</li>
                  <li>React & Firebase App Building – Udemy</li>
                  <li>Python for Beginners – Coursera</li>
                </ul>
              </div>
            </div>
          </section>
        );
      case "projects":
  return (
    <section className="fade-in bg-white dark:bg-zinc-900 shadow rounded-xl p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <div key={i} className="bg-zinc-100 dark:bg-zinc-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300">
            {p.image && (
              <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
            )}
            <div className="p-4 space-y-2">
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">{p.description}</p>

              {p.tags && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {p.tags.map((tag, t) => (
                    <span key={t} className="text-xs bg-blue-100 dark:bg-blue-600 text-blue-800 dark:text-white px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-4 flex gap-3">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-sm px-3 py-1 bg-zinc-300 dark:bg-zinc-700 rounded hover:bg-zinc-400 dark:hover:bg-zinc-600 transition">
                  GitHub
                </a>
                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-sm px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

      case "contact":
        return (
          <section id="contact" className="fade-in bg-white dark:bg-zinc-900 shadow rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-2">Contact</h2>
            <form action="https://formcarry.com/s/17UUs0Lk3M5" method="POST" className="space-y-4">
              <input type="text" name="name" placeholder="Name" required className="w-full px-4 py-2 rounded bg-zinc-100 dark:bg-zinc-800" />
              <input type="email" name="email" placeholder="Email" required className="w-full px-4 py-2 rounded bg-zinc-100 dark:bg-zinc-800" />
              <textarea name="message" rows="4" placeholder="Message" required className="w-full px-4 py-2 rounded bg-zinc-100 dark:bg-zinc-800"></textarea>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Send Message</button>
            </form>
            <div className="mt-6 flex gap-4 text-2xl">
              <a href="https://github.com/omerturantr" className="hover:text-blue-500" aria-label="GitHub"><FaGithub /></a>
              <a href="https://linkedin.com/in/omerturan" className="hover:text-blue-500" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="mailto:omerturan@example.com" className="hover:text-blue-500" aria-label="Email"><FaEnvelope /></a>
            </div>
          </section>
        );
      default:
        return (
          <section className="fade-in text-center py-20 px-4 bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-zinc-800 dark:to-zinc-900 rounded-xl shadow">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white mb-4">Ömer Turan</h1>
            <h2 className="text-xl sm:text-2xl text-blue-500 dark:text-blue-400 mb-4">Frontend Developer 💻</h2>
            <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
              I build responsive, accessible web apps using React, Tailwind CSS, and modern tools.
            </p>
            <div className="mt-6 flex justify-center gap-4 flex-wrap">
              <a href="/resume.pdf" download className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium transition">📄 Download CV</a>
              <a href="#contact" className="bg-white dark:bg-zinc-700 text-blue-600 dark:text-white px-6 py-2 rounded border border-blue-500 hover:bg-blue-50 dark:hover:bg-zinc-600 transition">💬 Contact Me</a>
            </div>
            <div className="mt-10 flex justify-center gap-6 text-2xl text-zinc-600 dark:text-zinc-300">
              <a href="https://github.com/omerturantr" className="hover:text-blue-500" aria-label="GitHub"><FaGithub /></a>
              <a href="https://linkedin.com/in/omerturan" className="hover:text-blue-500" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="mailto:omerturan@example.com" className="hover:text-blue-500" aria-label="Email"><FaEnvelope /></a>
            </div>
          </section>
        );
    }
  };

  const pages = ["home", "about", "skills", "education", "projects", "contact"];

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white font-sans">
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-zinc-800/90 backdrop-blur p-4 shadow flex justify-between items-center">
        <h1 className="text-xl font-bold">Ömer Turan</h1>
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-xl">
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className="hidden md:flex gap-6 text-lg font-medium">
          {pages.map(p => (
            <button key={p} onClick={() => setPage(p)} className={`hover:underline ${page === p ? "text-blue-500" : "text-zinc-600 dark:text-zinc-300"}`}>
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>
        <button onClick={() => setDarkMode(!darkMode)} className="ml-4 bg-zinc-200 dark:bg-zinc-700 px-3 py-1 rounded text-sm">
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-800 shadow px-6 py-4 flex flex-col gap-4">
          {pages.map(p => (
            <button key={p} onClick={() => { setPage(p); setMobileMenuOpen(false); }} className={`hover:underline text-left ${page === p ? "text-blue-500" : "text-zinc-600 dark:text-zinc-300"}`}>
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>
      )}

      <main className="max-w-4xl mx-auto px-6 pb-24 scroll-smooth">
        {renderPage()}
      </main>

      {showScrollTop && (
        <button onClick={scrollToTop} className="fixed bottom-6 right-6 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg">
          <FaArrowUp />
        </button>
      )}

      <footer className="text-center text-sm py-6 border-t border-zinc-200 dark:border-zinc-700">
        © {new Date().getFullYear()} Ömer Turan. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
