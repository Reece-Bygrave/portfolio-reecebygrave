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
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mt-4 rounded-2xl border border-white/10
          bg-black/60 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.8)]">

          <div className="flex h-16 items-center justify-between px-4 md:px-6">

            {/* Brand Title */}
            <Link to="/" className="flex flex-col focus:outline-none">
              <span className="font-bold tracking-tight text-base sm:text-lg text-white">
                Reece Bygrave
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
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
                className="rounded-xl p-2 text-slate-300 hover:text-white hover:bg-white/10 transition duration-200"
              >
                <Github size={18} />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 rounded-xl
                  bg-gradient-to-r from-cyan-400 to-blue-500
                  px-4 py-2 text-sm font-semibold text-black
                  hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] transition duration-200"
              >
                <Mail size={15} />
                Contact
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white p-2 rounded-xl hover:bg-white/10 transition"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
            >
              {open ? <XIcon size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4 space-y-4 bg-black/90 rounded-b-2xl">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block text-sm transition ${
                      isActive
                        ? "text-cyan-400 font-semibold"
                        : "text-slate-300 hover:text-cyan-400"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                <a
                  href="https://github.com/Reece-Bygrave"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="rounded-lg p-2 text-slate-300 hover:text-white hover:bg-white/10 transition"
                >
                  <Github size={18} />
                </a>

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-xl bg-gradient-to-r
                    from-cyan-400 to-blue-500 px-4 py-2 text-center
                    text-sm font-semibold text-black shadow-[0_0_15px_rgba(56,189,248,0.3)] transition"
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
