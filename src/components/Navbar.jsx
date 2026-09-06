import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Github, Mail, Menu, XIcon } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Writing", path: "/writing" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 rounded-2xl border border-black/10 dark:border-white/10
          bg-white/70 dark:bg-black/40 backdrop-blur-xl shadow-lg">

          <div className="flex h-16 items-center justify-between px-4 md:px-6">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <span className="font-bold tracking-tight text-lg text-slate-900 dark:text-white group-hover:text-cyan-400 transition">
                Reece Bygrave
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 text-sm">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative transition ${
                      isActive
                        ? "text-cyan-400 font-medium after:w-full"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white after:w-0"
                    } after:absolute after:-bottom-1 after:left-0 after:h-[2px]
                    after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500
                    after:transition-all hover:after:w-full`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://github.com/Reece-Bygrave"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="rounded-lg p-2 text-slate-700 dark:text-white
                  hover:bg-black/5 dark:hover:bg-white/10 transition"
              >
                <Github size={18} />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 rounded-xl
                  bg-gradient-to-r from-cyan-400 to-blue-500
                  px-4 py-2 text-sm font-medium text-white
                  hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] transition"
              >
                <Mail size={16} />
                Contact
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-slate-900 dark:text-white"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
            >
              {open ? <XIcon size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden border-t border-black/10 dark:border-white/10
              px-6 py-4 space-y-4">

              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block text-sm transition ${
                      isActive
                        ? "text-cyan-400 font-semibold"
                        : "text-slate-600 dark:text-slate-300 hover:text-cyan-400"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <div className="flex items-center gap-3 pt-2 border-t border-black/5 dark:border-white/5">
                <a
                  href="https://github.com/Reece-Bygrave"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="rounded-lg p-2 text-slate-700 dark:text-white
                    hover:bg-black/5 dark:hover:bg-white/10 transition"
                >
                  <Github size={18} />
                </a>

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-xl bg-gradient-to-r
                    from-cyan-400 to-blue-500 px-4 py-2 text-center
                    text-sm font-medium text-white shadow-[0_0_15px_rgba(56,189,248,0.3)] transition"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
