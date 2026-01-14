import { useState } from "react";
import { Github, Mail, Menu, XIcon } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const avatar = "/images/reece-ai.png";

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 rounded-2xl border border-black/10 dark:border-white/10
          bg-white/70 dark:bg-black/40 backdrop-blur-xl shadow-lg">

          <div className="flex h-16 items-center justify-between px-4 md:px-6">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src={avatar}
                alt="Reece Bygrave"
                className="h-12 w-12 rounded-full object-cover
                  ring-2 ring-cyan-400/60 hover:ring-cyan-300 transition"
              />
              <span className="font-semibold tracking-tight text-slate-900 dark:text-white">
                Reece Bygrave
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 text-sm">
              {["Home", "Projects", "About", "Writing"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-slate-600 dark:text-slate-300 transition
                    hover:text-slate-900 dark:hover:text-white
                    after:absolute after:-bottom-1 after:left-0 after:h-[2px]
                    after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500
                    after:transition-all hover:after:w-full"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
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
            >
              {open ? <XIcon size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden border-t border-black/10 dark:border-white/10
              px-6 py-4 space-y-4">

              <div className="flex items-center gap-3 pb-2">
                <img
                  src={avatar}
                  alt="Reece Bygrave"
                  className="h-10 w-10 rounded-full object-cover
                    ring-2 ring-cyan-400/50"
                />
                <span className="font-medium text-slate-900 dark:text-white">
                  Reece Bygrave
                </span>
              </div>

              {["Home", "Projects", "About", "Writing"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-slate-600 dark:text-slate-300
                    hover:text-cyan-400 transition"
                >
                  {item}
                </a>
              ))}

              <div className="flex gap-3 pt-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg p-2 text-slate-700 dark:text-white
                    hover:bg-black/5 dark:hover:bg-white/10 transition"
                >
                  <Github size={18} />
                </a>

                <a
                  href="#contact"
                  className="flex-1 rounded-xl bg-gradient-to-r
                    from-cyan-400 to-blue-500 px-4 py-2 text-center
                    text-sm font-medium text-white"
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
