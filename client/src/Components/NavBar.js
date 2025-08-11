import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const links = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "academics", label: "Academics" },
  { id: "skills", label: "Skills" },
  {
    id: "resume",
    label: "Resume",
    external: true,
    url: "https://drive.google.com/file/d/1zG9l32fkkBVDJhP4YjFtR4f-W_f7l7_n/view?usp=sharing",
  },
];

export default function NavBar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({
      top: el.offsetTop - 80,
      behavior: "smooth",
    });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all ${
        scrolled
          ? "backdrop-blur-md bg-white/60 dark:bg-gray-900/60 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <a
            onClick={() => scrollTo("home")}
            className="text-2xl font-extrabold cursor-pointer select-none"
          >
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              MP
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-lg font-medium py-2 text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors group"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              ) : (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="relative text-lg font-medium py-2 text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors group"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 transition-all duration-300 group-hover:w-full rounded-full" />
                </button>
              )
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-2xl p-2 rounded focus:outline-none hover:scale-105 transition"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0"
        } bg-white dark:bg-gray-900/95 rounded-b-lg shadow-md`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left px-2 py-2 text-lg font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="block w-full text-left px-2 py-2 text-lg font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
              >
                {link.label}
              </button>
            )
          )}

          {/* Theme Toggle */}
          <button
            onClick={() => {
              toggleTheme();
              setOpen(false);
            }}
            className="mt-4 w-full flex items-center justify-center p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-xl transition-all hover:scale-105 shadow"
          >
            {theme === "dark" ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-800" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}