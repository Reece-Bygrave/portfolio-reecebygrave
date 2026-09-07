export default function ScrollIndicator() {
  const handleScroll = () => {
    document.querySelector("#projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleScroll}
      aria-label="Scroll to view projects section"
      className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400 transition group cursor-pointer"
    >
      <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase group-hover:tracking-widest transition-all duration-300">
        Scroll to View Projects
      </span>

      <div className="animate-scroll-bounce p-1.5 rounded-full border border-white/10 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.4)] transition duration-300">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </button>
  );
}
