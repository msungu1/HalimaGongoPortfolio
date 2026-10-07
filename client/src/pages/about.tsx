import { useEffect, useState } from "react";
import {
  Award,
  Camera,
  Clapperboard,
  GraduationCap,
  HeartHandshake,
  Mail,
  Menu,
  Mic2,
  NotebookPen,
  Phone,
  Users,
  X,
  ArrowUpRight,
  Youtube,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About Me", href: "/about" },
  { label: "Work", href: "#work" },
  { label: "Photography", href: "#photography" },
  { label: "Career", href: "#career" },
  { label: "Awards", href: "#awards" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  {
    value: "13+",
    label: "Years in media",
    note: "Reporting since 2013",
  },
  {
    value: "4",
    label: "Major outlets",
    note: "DW · RFI · VOA · NTV",
  },
  {
    value: "4",
    label: "Awards & recognitions",
    note: "2014 – 2023",
  },
  {
    value: "3",
    label: "Qualifications",
    note: "Diploma · BA · LLM",
  },
];

const skillGroups = [
  {
    title: "Film & documentary",
    icon: Clapperboard,
    items: [
      "Documentary producing",
      "Directing",
      "Filming",
      "Scripting",
      "Editing",
      "Voicing",
    ],
  },
  {
    title: "Photo & video for impact",
    icon: Camera,
    items: [
      "Photography (impact & advocacy)",
      "Videography (impact & advocacy)",
    ],
  },
  {
    title: "Strategy & content",
    icon: NotebookPen,
    items: [
      "Strategic storytelling",
      "Content strategy",
      "Digital & social media strategy",
    ],
  },
  {
    title: "People & capacity",
    icon: Users,
    items: [
      "Community engagement",
      "Mentorship",
      "Training & capacity building",
    ],
  },
];

const approach = [
  {
    icon: Mic2,
    title: "Human-interest first",
    text: "Stories begin with people and place: health, peace, governance, gender and the environment.",
  },
  {
    icon: HeartHandshake,
    title: "Community-driven solutions",
    text: "Constructive narratives that show what communities are already doing, not only what is going wrong.",
  },
  {
    icon: Users,
    title: "Sharing the craft",
    text: "Training and mentoring women journalists, young people and community photographers in peace-focused storytelling.",
  },
];

const professionalBackground = [
  {
    label: "Currently",
    items: [
      {
        title: "Correspondent journalist",
        detail:
          "Deutsche Welle Kiswahili and Radio France International",
      },
      {
        title: "Documentary and film producer",
        detail:
          "Community-based constructive films on iC-Africa",
      },
      {
        title: "Trainer and mentor",
        detail:
          "Peace photography and cohesion programmes",
      },
    ],
  },
  {
    label: "Community",
    items: [
      {
        title: "Board member",
        detail:
          "G for Girls Initiative, Kwale County",
      },
      {
        title: "Team lead",
        detail:
          "Kwale Sports Excellence and Save our Sables CBOs, Kwale",
      },
    ],
  },
];

const education = [
  {
    year: "2024–2025",
    degree:
      "Master of Laws in International Relations (Diplomacy)",
    institution: "Jilin University",
    location: "China",
  },
  {
    year: "2014–2017",
    degree:
      "Bachelor of Arts in Armed Conflict, Peace Studies & Sociology",
    institution: "University of Nairobi",
    location: "Kenya",
  },
  {
    year: "2010–2012",
    degree:
      "Diploma in Journalism and Mass Communication",
    institution: "Mt. Kenya University",
    location: "Kenya",
  },
];

const awards = [
  {
    year: "2023",
    title: "Best Broadcast Women’s Journalist",
    organisation: "Africapital Women Awards",
  },
  {
    year: "2015",
    title: "First Runner-Up, Arts & Culture Reporting",
    organisation: "Media Council of Kenya",
  },
  {
    year: "2014",
    title: "Young Journalist of the Year",
    organisation: "Media Council of Kenya",
  },
  {
    year: "2014",
    title: "Recognition for Exemplary Performance",
    organisation: "Nation Media Group",
  },
];

export default function AboutSection() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* =========================================================
          ABOUT SECTION
      ========================================================= */}

      <section
        id="about"
        className="relative overflow-hidden bg-white py-24 md:py-32"
      >
        {/* =====================================================
            HEADER / NAVIGATION
        ===================================================== */}

       <header
  className={`
    fixed left-0 right-0 top-0 z-50
    transition-all duration-500 ease-out
    ${
      scrolled
        ? "border-b border-slate-200/80 bg-white/95 shadow-[0_10px_40px_rgba(15,23,42,0.07)] backdrop-blur-2xl"
        : "border-b border-white/10 bg-slate-950/10 backdrop-blur-md"
    }
  `}
>
  <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
    <div className="flex h-[76px] items-center justify-between">

      {/* ================= BRAND ================= */}
      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        aria-label="Halima Gongo home"
        className="group flex items-center gap-3.5"
      >
        {/* HG MARK */}
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
                  ? "bg-slate-950 text-white shadow-lg shadow-slate-950/15"
                  : "bg-white text-slate-950 shadow-lg shadow-black/10"
              }
            `}
          >
            HG

            {/* subtle shine */}
            <span
              className="
                absolute inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent via-white/20 to-transparent
                transition-transform duration-700
                group-hover:translate-x-full
              "
            />
          </span>

          {/* orange accent */}
          <span
            className="
              absolute -right-1 -top-1
              h-3.5 w-3.5
              rounded-full
              bg-orange-500
              ring-[3px] ring-white
              shadow-sm shadow-orange-500/40
            "
          />
        </div>

        {/* BRAND TEXT */}
        <div className="hidden sm:block">
          <div className="flex items-center gap-2">
            <p
              className={`
                text-[13px] font-black
                tracking-[0.16em]
                transition-colors duration-300
                ${
                  scrolled
                    ? "text-slate-950"
                    : "text-white"
                }
              `}
            >
              HALIMA GONGO
            </p>

            <span
              className={`
                hidden h-1 w-1 rounded-full sm:block
                ${
                  scrolled
                    ? "bg-orange-500"
                    : "bg-orange-400"
                }
              `}
            />
          </div>

          <p
            className={`
              mt-0.5 text-[9px]
              font-medium uppercase
              tracking-[0.24em]
              transition-colors duration-300
              ${
                scrolled
                  ? "text-slate-500"
                  : "text-white/60"
              }
            `}
          >
            Storyteller · Journalist · Filmmaker
          </p>
        </div>
      </a>

      {/* ================= DESKTOP NAV ================= */}
      <nav
        className="hidden items-center gap-1 lg:flex"
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`
              group relative
              rounded-full
              px-4 py-2.5
              text-[12px]
              font-semibold
              tracking-wide
              transition-all duration-300
              ${
                scrolled
                  ? "text-slate-600 hover:bg-slate-950/[0.04] hover:text-slate-950"
                  : "text-white/75 hover:bg-white/10 hover:text-white"
              }
            `}
          >
            {item.label}

            {/* animated underline */}
            <span
              className={`
                absolute
                bottom-1.5
                left-4 right-4
                h-[2px]
                origin-left
                scale-x-0
                rounded-full
                transition-transform duration-300
                group-hover:scale-x-100
                ${
                  scrolled
                    ? "bg-orange-500"
                    : "bg-orange-400"
                }
              `}
            />
          </a>
        ))}
      </nav>

      {/* ================= RIGHT SIDE ================= */}
      <div className="flex items-center gap-2.5">

        {/* LET'S TALK */}
        <a
          href="#contact"
          className="
            group hidden
            items-center gap-2
            rounded-full
            bg-orange-500
            px-5 py-2.5
            text-[12px]
            font-bold
            tracking-wide
            text-white
            shadow-lg shadow-orange-500/20
            transition-all duration-300
            hover:-translate-y-0.5
            hover:bg-orange-600
            hover:shadow-xl
            hover:shadow-orange-500/30
            sm:inline-flex
          "
        >
          Let's talk

          <ArrowUpRight
            size={15}
            strokeWidth={2.5}
            className="
              transition-transform duration-300
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
            "
          />
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen((open) => !open)
          }
          className={`
            flex h-11 w-11
            items-center justify-center
            rounded-full
            border
            transition-all duration-300
            ${
              scrolled
                ? "border-slate-200 bg-white text-slate-950 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
                : "border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
            }
          `}
        >
          <span
            className="
              transition-transform duration-300
            "
          >
            {menuOpen ? (
              <X size={20} strokeWidth={2} />
            ) : (
              <Menu size={20} strokeWidth={2} />
            )}
          </span>
        </button>
      </div>
    </div>
  </div>

  {/* ================= MOBILE MENU ================= */}
  <div
    className={`
      overflow-hidden
      transition-all duration-500 ease-out
      lg:hidden
      ${
        menuOpen
          ? "max-h-[700px] opacity-100"
          : "pointer-events-none max-h-0 opacity-0"
      }
    `}
  >
    <nav
      className="
        mx-3 mb-3
        overflow-hidden
        rounded-[28px]
        border border-slate-200/80
        bg-white
        shadow-[0_20px_60px_rgba(15,23,42,0.14)]
      "
      aria-label="Mobile navigation"
    >
      <div className="p-3">

        {/* mobile navigation links */}
        {navItems.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="
              group flex items-center
              justify-between
              rounded-2xl
              px-5 py-4
              text-sm
              font-semibold
              text-slate-700
              transition-all duration-300
              hover:bg-slate-50
              hover:text-slate-950
            "
          >
            <div className="flex items-center gap-4">

              {/* number */}
              <span
                className="
                  flex h-7 w-7
                  items-center justify-center
                  rounded-full
                  bg-orange-50
                  text-[9px]
                  font-black
                  text-orange-500
                  transition-all duration-300
                  group-hover:bg-orange-500
                  group-hover:text-white
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span>{item.label}</span>
            </div>

            <ArrowUpRight
              size={17}
              strokeWidth={2}
              className="
                text-slate-300
                transition-all duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:text-orange-500
              "
            />
          </a>
        ))}

        {/* mobile CTA */}
        <div className="mt-2 border-t border-slate-100 pt-3">
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="
              group flex
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-slate-950
              px-5 py-4
              text-sm
              font-bold
              text-white
              shadow-lg shadow-slate-950/10
              transition-all duration-300
              hover:bg-orange-500
              hover:shadow-orange-500/20
            "
          >
            Let's work together

            <ArrowUpRight
              size={17}
              className="
                transition-transform duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>
        </div>

        {/* small mobile descriptor */}
        <div className="px-4 pb-2 pt-4 text-center">
          <p
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-slate-400
            "
          >
            Stories · People · Impact
          </p>
        </div>
      </div>
    </nav>
  </div>
</header>

        {/* =====================================================
            DECORATIVE BACKGROUND
        ===================================================== */}

        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-100/60 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-sky-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          {/* SECTION LABEL */}
          <div className="mb-10 flex items-center gap-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white">
              01
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
              About Halima
            </span>

            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* HEADING */}
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h2 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
              Stories that

              <span className="block font-serif font-normal italic text-orange-500">
                stay with you.
              </span>
            </h2>

            <p className="max-w-xl text-lg leading-8 text-slate-500 lg:pb-2">
              A documentary and journalism practice built around attention:
              to people, to place, and to the possibility of change.
            </p>
          </div>

          {/* PERSONAL STATEMENT + STATISTICS */}
          <div className="mt-20 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">

            {/* Statement */}
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl md:p-12">

              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10" />

              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-orange-400/20" />

              <div className="relative">
                <div className="mb-8 font-serif text-6xl leading-none text-orange-400">
                  “
                </div>

                <p className="max-w-3xl text-xl font-medium leading-9 text-white/90 md:text-2xl md:leading-10">
                  I specialise in storytelling that highlights
                  community-driven solutions, amplifying marginalised voices
                  and inspiring positive social change. My work spans media
                  reporting, documentary and film production, photography,
                  videography, and strategic multimedia content creation for
                  organisations across East Africa.
                </p>

                <p className="mt-6 max-w-3xl text-base leading-8 text-white/55">
                  I am committed to producing human-interest, constructive
                  narratives that empower communities and elevate their stories
                  to wider audiences.
                </p>

                {/* Languages */}
                <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-white/10 pt-7">
                  <span className="mr-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                    Languages
                  </span>

                  {["English", "Kiswahili"].map((language) => (
                    <span
                      key={language}
                      className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="
                    flex flex-col justify-between
                    rounded-3xl
                    border border-slate-200
                    bg-slate-50
                    p-6
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-orange-200
                    hover:shadow-xl
                  "
                >
                  <div className="text-4xl font-black text-slate-950 md:text-5xl">
                    {stat.value}
                  </div>

                  <div className="mt-6">
                    <div className="text-sm font-bold text-slate-800">
                      {stat.label}
                    </div>

                    <div className="mt-1 text-xs text-slate-400">
                      {stat.note}
                    </div>
                  </div>
                </div>
              ))}

              {/* Featured award */}
              <div className="col-span-2 flex items-center gap-4 rounded-3xl bg-orange-500 p-6 text-white shadow-lg">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <Award size={20} />
                </span>

                <div>
                  <p className="text-sm font-bold leading-5">
                    Best Broadcast Women’s Journalist
                  </p>

                  <p className="mt-1 text-xs text-white/75">
                    Africapital Women Awards, 2023
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* APPROACH */}
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {approach.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    rounded-[1.75rem]
                    border border-slate-200
                    bg-white
                    p-7
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-orange-200
                    hover:shadow-xl
                  "
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                    <Icon size={20} strokeWidth={1.4} />
                  </span>

                  <h3 className="mt-5 text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* SKILLS */}
          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 md:p-10">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                What I bring to the frame
              </span>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                Skills & expertise
              </h3>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {skillGroups.map((group) => {
                const Icon = group.icon;

                return (
                  <div key={group.title}>
                    <div className="flex items-center gap-3">
                      <Icon
                        size={18}
                        className="text-orange-500"
                        strokeWidth={1.5}
                      />

                      <h4 className="text-sm font-bold text-slate-950">
                        {group.title}
                      </h4>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="
                            rounded-full
                            border border-slate-200
                            bg-white
                            px-3 py-2
                            text-xs font-medium text-slate-700
                            shadow-sm
                            transition-all duration-300
                            hover:-translate-y-0.5
                            hover:border-orange-300
                            hover:bg-orange-50
                            hover:text-orange-600
                          "
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* PROFESSIONAL BACKGROUND */}
          <div id="career" className="mt-8 scroll-mt-28">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                Professional profile
              </span>

              <h3 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                Where the work is happening
              </h3>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {professionalBackground.map((group, index) => (
                <div
                  key={group.label}
                  className="
                    rounded-[1.75rem]
                    border border-slate-200
                    bg-white
                    p-7
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-orange-200
                    hover:shadow-xl
                  "
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                      {group.label}
                    </span>

                    <span className="text-xs font-bold text-orange-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <ul className="space-y-5">
                    {group.items.map((item) => (
                      <li
                        key={item.title}
                        className="border-b border-slate-100 pb-5 last:border-0 last:pb-0"
                      >
                        <strong className="block text-base font-bold text-slate-950">
                          {item.title}
                        </strong>

                        <span className="mt-1 block text-sm leading-6 text-slate-500">
                          {item.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* EDUCATION + AWARDS */}
          <div className="mt-8 grid gap-8 lg:grid-cols-2">

            {/* Education */}
            <div
              id="education"
              className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950"
            >
              <div className="p-8 md:p-10">

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                      Academic background
                    </span>

                    <h3 className="mt-3 text-3xl font-black tracking-tight text-white">
                      Education & learning
                    </h3>
                  </div>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-orange-400">
                    <GraduationCap size={21} />
                  </span>
                </div>

                <div className="mt-8 divide-y divide-white/10">
                  {education.map((item) => (
                    <div
                      key={`${item.year}-${item.degree}`}
                      className="group py-6 first:pt-0 last:pb-0"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-orange-400">
                          {item.year}
                        </span>

                        <span className="h-px w-8 bg-white/10" />
                      </div>

                      <h4 className="mt-3 text-base font-bold leading-7 text-white">
                        {item.degree}
                      </h4>

                      <p className="mt-2 text-sm text-white/50">
                        {item.institution} · {item.location}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Awards */}
            <div
              id="awards"
              className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 md:p-10"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                    Recognition
                  </span>

                  <h3 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                    Awards & recognition
                  </h3>
                </div>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  <Award size={21} />
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                Recognition earned through journalism, storytelling, cultural
                reporting and professional excellence.
              </p>

              <div className="mt-8 space-y-3">
                {awards.map((award, index) => (
                  <div
                    key={`${award.year}-${award.title}`}
                    className={`
                      group relative overflow-hidden
                      rounded-2xl border p-5
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:shadow-lg
                      ${
                        index === 0
                          ? "border-orange-400 bg-orange-500 text-white"
                          : "border-slate-200 bg-white"
                      }
                    `}
                  >
                    <div className="flex gap-4">
                      <div
                        className={`
                          flex h-10 w-10 shrink-0 items-center justify-center rounded-full
                          ${
                            index === 0
                              ? "bg-white/15 text-white"
                              : "bg-orange-50 text-orange-500"
                          }
                        `}
                      >
                        <Award size={17} />
                      </div>

                      <div className="min-w-0">
                        <div
                          className={`
                            text-xs font-black
                            ${
                              index === 0
                                ? "text-white/70"
                                : "text-orange-500"
                            }
                          `}
                        >
                          {award.year}
                        </div>

                        <h4
                          className={`
                            mt-1 text-sm font-bold leading-6
                            ${
                              index === 0
                                ? "text-white"
                                : "text-slate-950"
                            }
                          `}
                        >
                          {award.title}
                        </h4>

                        <p
                          className={`
                            mt-1 text-xs
                            ${
                              index === 0
                                ? "text-white/65"
                                : "text-slate-500"
                            }
                          `}
                        >
                          {award.organisation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CLOSING STATEMENT */}
          <div className="mt-8 overflow-hidden rounded-[2rem] border border-orange-100 bg-orange-50 p-8 md:p-10">
            <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-center">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg">
                <HeartHandshake size={24} strokeWidth={1.5} />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                  Beyond the newsroom
                </span>

                <p className="mt-2 max-w-4xl text-lg font-medium leading-8 text-slate-800">
                  Storytelling is not only about documenting what happens.
                  It is also about creating space for communities, ideas and
                  people to be seen, heard and understood.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PREMIUM FOOTER
      ========================================================= */}

      <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 text-white">

        {/* Ambient background glow */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-48 right-0 h-[28rem] w-[28rem] rounded-full bg-sky-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          {/* Main footer */}
          <div className="grid gap-14 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">

            {/* BRAND */}
            <div className="lg:col-span-2">

              <a
                href="#home"
                className="group inline-flex items-center gap-4"
              >
                {/* Logo */}
                <span
                  className="
                    flex h-14 w-14 items-center justify-center
                    rounded-2xl
                    bg-white
                    text-base font-black tracking-tight text-slate-950
                    shadow-xl shadow-black/20
                    transition-all duration-500
                    group-hover:-rotate-3
                    group-hover:bg-orange-500
                    group-hover:text-white
                    group-hover:shadow-orange-500/20
                  "
                >
                  HG
                </span>

                {/* Name */}
                <span>
                  <span className="block text-base font-black tracking-[0.12em]">
                    HALIMA GONGO
                  </span>

                  <span className="mt-1 block text-[10px] uppercase tracking-[0.25em] text-orange-400/70">
                    Media · Film · Advocacy
                  </span>
                </span>
              </a>

              <p className="mt-7 max-w-lg text-sm leading-7 text-white/45">
                Documentary storyteller, photographer and journalist working
                across East Africa — telling human-centred stories that
                amplify voices, inspire conversations and create meaningful
                impact.
              </p>

              {/* Social links */}
              <div className="mt-8 flex items-center gap-3">

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@iC-AFRICA"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-full
                    border border-white/10
                    bg-white/[0.03]
                    text-white/50
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-orange-400/50
                    hover:bg-orange-500
                    hover:text-white
                    hover:shadow-lg
                    hover:shadow-orange-500/20
                  "
                >
                  <Youtube size={17} strokeWidth={1.8} />
                </a>

                {/* Email */}
                <a
                  href="mailto:gongohalima@gmail.com"
                  aria-label="Email Halima Gongo"
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-full
                    border border-white/10
                    bg-white/[0.03]
                    text-white/50
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-orange-400/50
                    hover:bg-orange-500
                    hover:text-white
                    hover:shadow-lg
                    hover:shadow-orange-500/20
                  "
                >
                  <Mail size={17} strokeWidth={1.8} />
                </a>

                {/* Phone */}
                <a
                  href="tel:+254715490179"
                  aria-label="Call Halima Gongo"
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-full
                    border border-white/10
                    bg-white/[0.03]
                    text-white/50
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-orange-400/50
                    hover:bg-orange-500
                    hover:text-white
                    hover:shadow-lg
                    hover:shadow-orange-500/20
                  "
                >
                  <Phone size={17} strokeWidth={1.8} />
                </a>

              </div>
            </div>

            {/* EXPLORE */}
            <div>
              <h3 className="mb-6 text-[11px] font-bold uppercase tracking-[0.25em] text-white/30">
                Explore
              </h3>

              <nav className="flex flex-col gap-3.5">
                {[
                  ["Home", "#home"],
                  ["About Me", "/about"],
                  ["Work", "#work"],
                  ["Photography", "#photography"],
                  ["Awards", "#awards"],
                  ["Education", "#education"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="
                      group flex w-fit items-center gap-2
                      text-sm text-white/50
                      transition-all duration-300
                      hover:text-white
                    "
                  >
                    <span
                      className="
                        h-px w-0
                        bg-orange-400
                        transition-all duration-300
                        group-hover:w-4
                      "
                    />

                    {label}
                  </a>
                ))}
              </nav>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="mb-6 text-[11px] font-bold uppercase tracking-[0.25em] text-white/30">
                Get in touch
              </h3>

              <div className="space-y-5">

                {/* Email */}
                <a
                  href="mailto:gongohalima@gmail.com"
                  className="group flex items-start gap-3"
                >
                  <Mail
                    size={17}
                    className="mt-0.5 shrink-0 text-orange-400"
                    strokeWidth={1.7}
                  />

                  <span className="text-sm text-white/55 transition-colors duration-300 group-hover:text-orange-400">
                    gongohalima@gmail.com
                  </span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+254715490179"
                  className="group flex items-start gap-3"
                >
                  <Phone
                    size={17}
                    className="mt-0.5 shrink-0 text-orange-400"
                    strokeWidth={1.7}
                  />

                  <span className="text-sm text-white/55 transition-colors duration-300 group-hover:text-orange-400">
                    +254 715 490 179
                  </span>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-400 shadow-lg shadow-orange-400/40" />

                  <span className="text-sm leading-6 text-white/35">
                    Kenya · East Africa
                  </span>
                </div>

              </div>

              {/* Back to top */}
              <a
                href="#home"
                className="
                  group mt-8 inline-flex items-center gap-3
                  text-sm font-semibold text-white/55
                  transition-colors duration-300
                  hover:text-orange-400
                "
              >
                Back to top

                <span
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-full
                    border border-white/10
                    transition-all duration-300
                    group-hover:-translate-y-1
                    group-hover:border-orange-400/60
                    group-hover:bg-orange-400
                    group-hover:text-slate-950
                  "
                >
                  <ArrowUpRight
                    size={15}
                    className="
                      transition-transform duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </span>
              </a>
            </div>
          </div>

          {/* SIGNATURE STATEMENT */}
          <div className="border-y border-white/10 py-9">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

              <div>
                <p className="text-3xl font-light tracking-tight text-white/85 md:text-4xl">
                  Stories that{" "}
                  <span className="font-serif italic text-orange-400">
                    matter.
                  </span>
                </p>

                <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.25em] text-white/25">
                  Documentary · Photography · Journalism
                </p>
              </div>

              <div className="hidden h-12 w-px bg-white/10 md:block" />

              <p className="max-w-xs text-sm leading-6 text-white/30 md:text-right">
                Working across East Africa to document people, communities,
                culture and stories that deserve to be heard.
              </p>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div
            className="
              flex flex-col gap-4
              py-6
              text-[11px] text-white/25
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <span>
              © {new Date().getFullYear()} Halima Gongo. All rights reserved.
            </span>

            <span className="flex items-center gap-2">
              Made for stories that matter.

              <span className="h-1 w-1 rounded-full bg-orange-400" />

              East Africa
            </span>
          </div>

        </div>
      </footer>
    </>
  );
}