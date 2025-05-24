import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("dark-mode") === "true");
  const [page, setPage] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("dark-mode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const renderPage = () => {
    switch (page) {
      case "about":
        return (
          <section className="bg-white dark:bg-zinc-900 shadow rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p className="text-zinc-700 dark:text-zinc-300">I’m a Frontend Developer passionate about building fast and accessible websites using React and modern web technologies.</p>
          </section>
        );
      case "projects":
        return (
          <section className="bg-white dark:bg-zinc-900 shadow rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {["Python Basics", "Image Filter Tool", "Product Manager App"].map((title, i) => (
                <div key={i} className="rounded border bg-zinc-50 dark:bg-zinc-800 p-4 hover:shadow-lg transition">
                  <h3 className="text-xl font-bold mb-1">{title}</h3>
                  <p className="text-sm mb-2">Short description about the project goes here.</p>
                  <div className="flex gap-3">
                    <a href="#" className="text-blue-500 hover:underline text-sm">GitHub</a>
                    <a href="#" className="text-blue-500 hover:underline text-sm">Live Demo</a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      case "contact":
        return (
          <section className="bg-white dark:bg-zinc-900 shadow rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-2">Contact</h2>
            <form action="https://formspree.io/f/mnqenozk" method="POST" className="space-y-4">
              <input type="text" name="name" placeholder="Name" required className="w-full px-4 py-2 rounded bg-zinc-100 dark:bg-zinc-800" />
              <input type="email" name="email" placeholder="Email" required className="w-full px-4 py-2 rounded bg-zinc-100 dark:bg-zinc-800" />
              <textarea name="message" rows="4" placeholder="Message" required className="w-full px-4 py-2 rounded bg-zinc-100 dark:bg-zinc-800"></textarea>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Send Message</button>
            </form>
            <div className="mt-6 flex gap-4 text-2xl">
              <a href="#" className="hover:text-blue-500" aria-label="GitHub"><FaGithub /></a>
              <a href="#" className="hover:text-blue-500" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="mailto:omerturan@example.com" className="hover:text-blue-500" aria-label="Email"><FaEnvelope /></a>
            </div>
          </section>
        );
      default:
        return (
          <section className="bg-white dark:bg-zinc-900 shadow rounded-xl p-6">
            <div className="text-center py-10">
              <h1 className="text-4xl font-extrabold mb-2">Ömer Turan</h1>
              <h2 className="text-xl text-blue-500 mb-4">Frontend Developer</h2>
              <p className="text-zinc-600 dark:text-zinc-300 mb-6">I build fast, responsive, and accessible web applications using modern tools like React and Tailwind CSS.</p>
              <a href="/resume.pdf" download className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">Download CV</a>
            </div>
          </section>
        );
    }
  };

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white font-sans">
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-zinc-800/90 backdrop-blur p-4 shadow flex justify-between items-center">
        <h1 className="text-xl font-bold">Ömer Turan</h1>
        <button onClick={() => setDarkMode(!darkMode)} className="bg-zinc-200 dark:bg-zinc-700 px-4 py-2 rounded text-sm">
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      <nav className="max-w-4xl mx-auto px-6 py-4 flex gap-6 justify-center text-lg font-medium">
        {["home", "about", "projects", "contact"].map(p => (
          <button key={p} onClick={() => setPage(p)} className={`hover:underline ${page === p ? "text-blue-500" : "text-zinc-600 dark:text-zinc-300"}`}>{p.charAt(0).toUpperCase() + p.slice(1)}</button>
        ))}
      </nav>

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
