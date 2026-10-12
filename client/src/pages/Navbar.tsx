import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About Me", href: "/about" },
  { label: "Awards", href: "/#awards" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close the mobile menu when the screen is resized to desktop.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`
        fixed left-0 right-0 top-0 z-50
        transition-all duration-500 ease-out
        ${
          scrolled
            ? "border-b border-[#E9DEDA]/90 bg-[#FAF7F2]/95 shadow-[0_10px_40px_rgba(79,43,54,0.07)] backdrop-blur-2xl"
            : "border-b border-white/20 bg-[#FAF7F2]/75 backdrop-blur-md"
        }
      `}
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
        <div className="flex h-[76px] items-center justify-between">
          {/* BRAND */}
          <a
            href="/#home"
            onClick={closeMenu}
            aria-label="Halima Gongo home"
            className="group flex items-center gap-3.5"
          >
            <div className="relative">
              <span
                className={`
                  relative flex h-11 w-11 items-center justify-center
                  overflow-hidden rounded-xl
                  text-[13px] font-black tracking-[-0.04em]
                  transition-all duration-500
                  group-hover:-rotate-3 group-hover:scale-105
                  ${
                    scrolled
                      ? "bg-[#722F45] text-white shadow-lg shadow-[#722F45]/15"
                      : "bg-[#722F45] text-white shadow-lg shadow-[#722F45]/20"
                  }
                `}
              >
                HG

                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </span>

              <span className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full bg-[#D8A7A7] shadow-sm ring-[3px] ring-[#FAF7F2]" />
            </div>

            <div className="hidden sm:block">
              <div className="flex items-center gap-2">
                <p className="text-[13px] font-black tracking-[0.16em] text-[#33272B] transition-colors duration-300">
                  HALIMA GONGO
                </p>

                <span className="hidden h-1 w-1 rounded-full bg-[#9A526A] sm:block" />
              </div>

              <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.20em] text-[#8D747B]">
                Storyteller · Journalist · Filmmaker
              </p>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  group relative rounded-full px-4 py-2.5
                  text-[12px] font-semibold tracking-wide
                  text-[#66545A]
                  transition-all duration-300
                  hover:bg-[#F0E1E3] hover:text-[#722F45]
                "
              >
                {item.label}

                <span
                  className="
                    absolute bottom-1.5 left-4 right-4 h-[2px]
                    origin-left scale-x-0 rounded-full
                    bg-[#9A526A]
                    transition-transform duration-300
                    group-hover:scale-x-100
                  "
                />
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2.5">
            {/* DESKTOP CALL TO ACTION */}
            <a
              href="/contact"
              className="
                group hidden items-center gap-2 rounded-full
                bg-[#722F45] px-5 py-2.5
                text-[12px] font-bold tracking-wide text-white
                shadow-lg shadow-[#722F45]/15
                transition-all duration-300
                hover:-translate-y-0.5 hover:bg-[#5E2438]
                hover:shadow-xl sm:inline-flex
              "
            >
              Let's talk

              <ArrowUpRight
                size={15}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
              className="
                flex h-11 w-11 items-center justify-center rounded-full
                border border-[#E8DCD8] bg-white/80 text-[#722F45]
                transition-all duration-300
                hover:border-[#D8A7A7] hover:bg-[#F6E9EA]
                lg:hidden
              "
            >
              {menuOpen ? (
                <X size={20} strokeWidth={2} />
              ) : (
                <Menu size={20} strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        id="mobile-navigation"
        className={`
          overflow-hidden transition-all duration-500 ease-out lg:hidden
          ${
            menuOpen
              ? "max-h-[700px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }
        `}
        aria-hidden={!menuOpen}
      >
        <nav
          className="
            mx-3 mb-3 overflow-hidden rounded-[24px]
            border border-[#E9DEDA]
            bg-[#FFFEFC]
            shadow-[0_20px_60px_rgba(79,43,54,0.12)]
          "
          aria-label="Mobile navigation"
        >
          <div className="p-3">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
                className="
                  group flex items-center justify-between
                  rounded-2xl px-5 py-4
                  text-sm font-semibold text-[#66545A]
                  transition-all duration-300
                  hover:bg-[#F8EEEE] hover:text-[#722F45]
                "
              >
                <div className="flex items-center gap-4">
                  <span
                    className="
                      flex h-7 w-7 items-center justify-center
                      rounded-full bg-[#F6E9EA]
                      text-[9px] font-black text-[#8B455D]
                      transition-all duration-300
                      group-hover:bg-[#722F45] group-hover:text-white
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{item.label}</span>
                </div>

                <ArrowUpRight
                  size={17}
                  className="
                    text-[#C4AFB3]
                    transition-all duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-[#722F45]
                  "
                />
              </a>
            ))}

            {/* MOBILE CALL TO ACTION */}
            <div className="mt-2 border-t border-[#F0E7E3] pt-3">
              <a
                href="/contact"
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
                className="
                  group flex items-center justify-center gap-2
                  rounded-2xl bg-[#722F45] px-5 py-4
                  text-sm font-bold text-white
                  transition-all duration-300
                  hover:bg-[#5E2438]
                "
              >
                Let's work together

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            <div className="px-4 pb-2 pt-4 text-center">
              <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#A18C91]">
                Stories · People · Impact
              </p>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
