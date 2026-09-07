import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Github, Mail, Menu, XIcon, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Writing", path: "/writing" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mt-4 rounded-2xl border border-slate-200/80 dark:border-white/10
          bg-white/75 dark:bg-black/60 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.8)] transition-colors duration-300">

          <div className="flex h-16 items-center justify-between px-4 md:px-6">

            {/* Brand Title */}
            <Link to="/" className="flex flex-col focus:outline-none">
              <span className="font-bold tracking-tight text-base sm:text-lg text-slate-900 dark:text-white transition-colors duration-300">
                Reece Bygrave
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 dark:text-slate-400 transition-colors duration-300">
                Portfolio
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 text-sm">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative transition-colors duration-300 ${
                      isActive
                        ? "text-slate-900 dark:text-white font-semibold after:w-full"
                        : "text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium after:w-0"
                    } after:absolute after:-bottom-1 after:left-0 after:h-[2px]
                    after:bg-slate-900 dark:after:bg-white after:shadow-[0_0_6px_rgba(0,0,0,0.25)] dark:after:shadow-[0_0_10px_rgba(255,255,255,0.9)]
                    after:transition-all after:duration-500 after:ease-out hover:after:w-full`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label="Toggle color theme"
                title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
                className="rounded-xl p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition duration-200"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <a
                href="https://github.com/Reece-Bygrave"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                title="GitHub Profile"
                className="rounded-xl p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition duration-200"
              >
                <Github size={18} />
              </a>

              <a
                href="/#contact"
                aria-label="Contact"
                title="Contact"
                className="rounded-xl p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition duration-200"
              >
                <Mail size={18} />
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-slate-900 dark:text-white p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 transition"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
            >
              {open ? <XIcon size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden border-t border-slate-200 dark:border-white/10 px-6 py-4 space-y-4 bg-white/95 dark:bg-black/90 rounded-b-2xl transition-colors duration-300">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block text-sm transition-colors duration-300 ${
                      isActive
                        ? "text-slate-900 dark:text-white font-semibold"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <div className="flex items-center gap-3 pt-3 border-t border-slate-200 dark:border-white/10">
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle color theme"
                  title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
                  className="rounded-lg p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition"
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button>

                <a
                  href="https://github.com/Reece-Bygrave"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                  className="rounded-lg p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition"
                >
                  <Github size={18} />
                </a>

                <a
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  aria-label="Contact"
                  title="Contact"
                  className="rounded-lg p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
