import { FormEvent, useEffect, useState } from "react";
import {
  Aperture,
  ArrowDown,
  ArrowUpRight,
  Award,
  Camera,
  Check,
  Clapperboard,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  Mic2,
  MoveRight,
  NotebookPen,
  Phone,
  Play,
  Send,
  Sparkles,
  Users,
  X,
} from "lucide-react";

 import halima1 from "@/images/rrr.jpg";
import halima2 from "@/images/IMG_7757.jpg";
import halima3 from "@/images/WhatsApp Image 2026-09-22 at 23.08.13.jpeg";
import halima4 from "@/images/IMG_7758.jpg";
const heroImages = [
  halima1,
  halima2,
  halima3,
  halima4,
];
const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Photography", href: "#photography" },
  { label: "Career", href: "#career" },
  { label: "Awards", href: "#awards" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const outlets = [
  "Deutsche Welle Kiswahili",
  "Radio France International",
  "Voice of America",
  "NTV Kenya",
];

const skills = [
  "Documentary producing",
  "Directing",
  "Filming",
  "Scripting",
  "Editing",
  "Voicing",
  "Photography (impact & advocacy)",
  "Videography (impact & advocacy)",
  "Strategic storytelling",
  "Content strategy",
  "Community engagement",
  "Mentorship",
  "Digital & social media strategy",
  "Training & capacity building",
];

const aboutFacts = [
  {
    label: "Currently",
    items: [
      {
        title: "Correspondent journalist",
        detail: "Deutsche Welle Kiswahili and Radio France International",
      },
      {
        title: "Documentary and film producer",
        detail: "Community-based constructive films on her platform, iC-Africa",
      },
      {
        title: "Trainer and mentor",
        detail: "Peace photography and cohesion programmes",
      },
    ],
  },
  {
    label: "Trained in",
    items: [
      {
        title: "Master of Laws, International Relations (Diplomacy)",
        detail: "Jilin University, China, 2024–2025",
      },
      {
        title: "BA, Armed Conflict, Peace Studies & Sociology",
        detail: "University of Nairobi, Kenya, 2014–2017",
      },
      {
        title: "Diploma, Journalism and Mass Communication",
        detail: "Mt. Kenya University, Kenya, 2010–2012",
      },
    ],
  },
  {
    label: "Volunteering",
    items: [
      {
        title: "Board member",
        detail: "G for Girls Initiative, Kwale County",
      },
      {
        title: "Team lead",
        detail: "Kwale Sports Excellence and Save our Sables CBOs, Kwale",
      },
    ],
  },
];

const documentaryProjects = [
  {
    number: "01",
    type: "Documentary",
    title: "Humanitarian and community resilience",
    partner: "With Al Khair Foundation",
    description:
      "A documentary produced with Al Khair Foundation, telling humanitarian and community resilience stories.",
    href: "https://www.youtube.com/watch?v=tVR6Ww4SmR0&t=6s",
    cta: "Watch documentary",
    tone: "placeholder-sand",
    image: "/manus-storage/halima-documentary-community_63509a6a.jpg",
  },
  {
    number: "02",
    type: "Impact documentary",
    title: "Children living with cerebral palsy in Kenya",
    partner: "With Purple Field Productions",
    description:
      "A follow-up impact documentary produced with Purple Field Productions, focusing on children living with cerebral palsy in Kenya.",
    href: "https://www.youtube.com/watch?v=MHHlnvPVLk4",
    cta: "Watch documentary",
    tone: "placeholder-blue",
    image: "/manus-storage/halima-documentary-children_7063e703.jpg",
  },
  {
    number: "03",
    type: "Constructive films",
    title: "Community stories on iC-Africa",
    partner: "Halima’s online platform",
    description:
      "Community-based constructive films produced for iC-Africa, her own online platform.",
    href: "https://www.youtube.com/@iC-AFRICA",
    cta: "Visit channel",
    tone: "placeholder-ink",
    image: undefined as string | undefined,
  },
];

const photoTiles = [
  {
    className: "photo-tile--large",
    label: "Series / 01",
    title: "Women See Many Things",
    meta: "Fotografia Europea 2025 · Italy",
    tone: "placeholder-photo-one",
    image: "/manus-storage/halima-photography-women_b60b8b99.jpg",
  },
  {
    label: "Training / 02",
    title: "Media fieldwork",
    meta: "Event coverage · East Africa",
    tone: "placeholder-photo-two",
    image: "/manus-storage/pasted_file_s1O5K0_5882023983677378511_121_2c9d24e2.jpg",
  },
  {
    label: "Advocacy / 03",
    title: "Stories in motion",
    meta: "Documentary fieldwork · East Africa",
    tone: "placeholder-photo-three",
    image: "/manus-storage/pasted_file_qXfaMm_5882023983677378512_121_f20b92b8.jpg",
  },
  // TODO: tiles 04–06 are still placeholders. Add real photos and captions from Halima.
  {
    label: "Field note / 04",
    title: "The frame holds memory",
    meta: "Sample image placeholder",
    tone: "placeholder-photo-four",
  },
  {
    label: "Field note / 05",
    title: "Light, place, witness",
    meta: "Sample image placeholder",
    tone: "placeholder-photo-five",
  },
  {
    label: "Field note / 06",
    title: "A closer listen",
    meta: "Sample image placeholder",
    tone: "placeholder-photo-six",
  },
];

const photoPrograms = [
  {
    kind: "Exhibition",
    title: "“Women See Many Things”",
    detail: "Photography series exhibited at Fotografia Europea 2025, Italy",
    href: "https://www.fotografiaeuropea.it/fe2025/en/mostra/women-see-many-things/",
    cta: "View exhibition",
  },
  {
    kind: "Training",
    title: "Peace-focused photography",
    detail: "For women journalists and community photographers",
    href: "https://www.youtube.com/watch?v=OGAQre8eRNI",
    cta: "Watch",
  },
  {
    kind: "Training",
    title: "Videography storytelling for advocacy",
    detail: "For teenage girls and boys in Narok County",
    href: "https://www.linkedin.com/posts/weworld-kenya_narok-power4youthdays-activity-7402322801212248065-L5ss",
    cta: "View post",
  },
  {
    kind: "Mentoring",
    title: "Peace, cohesion, and integration",
    detail: "High school students, Mombasa County Education Project",
    href: "https://www.youtube.com/watch?v=OGAQre8eRNI", // TODO: same link as the training above in the CV, confirm
    cta: "Watch",
  },
];

type CareerBullet = { text: string; href?: string; cta?: string };
type CareerLink = { label: string; href: string };
type CareerRole = {
  year: string;
  ongoing?: boolean;
  role: string;
  company: string;
  icon: typeof Aperture;
  bullets: CareerBullet[];
  focus: string[];
  links?: CareerLink[];
};

const career: CareerRole[] = [
  {
    year: "2020 – Present",
    ongoing: true,
    role: "Documentary / Film Producer",
    company: "Al Khair Foundation, Purple Field Productions and iC-Africa",
    icon: Clapperboard,
    bullets: [
      {
        text: "Produced a documentary with Al Khair Foundation highlighting humanitarian and community resilience stories.",
        href: "https://www.youtube.com/watch?v=tVR6Ww4SmR0&t=6s",
        cta: "Watch",
      },
      {
        text: "Produced a follow-up impact documentary with Purple Field Productions focusing on children living with cerebral palsy in Kenya.",
        href: "https://www.youtube.com/watch?v=MHHlnvPVLk4",
        cta: "Watch",
      },
      {
        text: "Produces community-based constructive films for her online platform, iC-Africa.",
        href: "https://www.youtube.com/@iC-AFRICA",
        cta: "Visit channel",
      },
    ],
    focus: ["Humanitarian stories", "Community resilience", "Child health", "Constructive films"],
  },
  {
    year: "2022 – 2025",
    role: "Consultant Media Specialist",
    company: "Economists Society of Kenya",
    icon: NotebookPen,
    bullets: [
      { text: "Designed and implemented media and branding strategies supporting digital economy discussions." },
      { text: "Produced short documentaries and content videos for social media and the website." },
      { text: "Supported policy dialogues, donor engagement, and programme visibility." },
      { text: "Managed the website and social media platforms, and developed videos, press materials, and reports." },
      { text: "Organised press conferences, live TV interviews, and media briefings, raising institutional visibility." },
    ],
    focus: ["Digital economy", "Media & branding", "Policy dialogue", "Donor engagement"],
    links: [
      { label: "Post 1", href: "https://x.com/EconomistsKenya/status/1788173490631090304" },
      { label: "Post 2", href: "https://x.com/EconomistsKenya/status/1786680227399115237" },
      { label: "Post 3", href: "https://x.com/EconomistsKenya/status/1696393057921314954" },
    ],
  },
  {
    year: "2020 – Present",
    ongoing: true,
    role: "Trainer & Mentor",
    company: "Peace Photography & Cohesion Programmes",
    icon: Users,
    bullets: [
      {
        text: "Conducted videography storytelling for advocacy training for teenage girls and boys in Narok County.",
        href: "https://www.linkedin.com/posts/weworld-kenya_narok-power4youthdays-activity-7402322801212248065-L5ss",
        cta: "View post",
      },
      {
        text: "Conducted peace-focused photography training for women journalists and community photographers.",
        href: "https://www.youtube.com/watch?v=OGAQre8eRNI",
        cta: "Watch",
      },
      {
        text: "Photography series “Women See Many Things” exhibited in Italy at Fotografia Europea 2025.",
        href: "https://www.fotografiaeuropea.it/fe2025/en/mostra/women-see-many-things/",
        cta: "View exhibition",
      },
      {
        text: "Mentored and trained high school students on peace, cohesion, and integration under the Mombasa County Education Project.",
        href: "https://www.youtube.com/watch?v=OGAQre8eRNI", // TODO: same link as the bullet above in the CV, confirm
        cta: "Watch",
      },
    ],
    focus: ["Peace", "Cohesion", "Photography", "Videography for advocacy"],
  },
  {
    year: "2020 – Present",
    ongoing: true,
    role: "Correspondent Journalist",
    company: "Deutsche Welle Kiswahili and Radio France International",
    icon: Mic2,
    bullets: [
      { text: "Reported on environment, governance, and gender issues with regional and international reach." },
      { text: "Produced digital and radio features for awareness campaigns in East Africa." },
    ],
    focus: ["Environment", "Governance", "Gender"],
    links: [
      { label: "Watch (DW)", href: "https://www.dw.com/en/raising-climate-change-awareness-with-comics/video-45489735" },
      { label: "Listen (DW Kiswahili)", href: "https://www.dw.com/sw/unaijua-jamii-ya-wadegere-wanaoishi-kenya-na-baadhi-ya-maeneo-ya-tanzania/audio-65181679" },
      { label: "Read (DW Kiswahili)", href: "https://www.dw.com/sw/kongamano-la-serikali-kuhusu-kilimo-nchini-kenya/a-60485319" },
    ],
  },
  {
    year: "2023 – 2025",
    role: "Freelance Journalist",
    company: "Voice of America",
    icon: Globe2,
    bullets: [
      { text: "Produced multimedia stories on peace, governance, and development from Coastal Kenya." },
      { text: "Amplified regional narratives globally through video and photo features." },
      { text: "Led editorial production and communication strategies that enhanced institutional visibility and global reach." },
    ],
    focus: ["Peace", "Governance", "Development", "Coastal Kenya"],
    links: [
      { label: "Watch 1", href: "https://www.youtube.com/watch?v=pyvOgIvsuug" },
      { label: "Watch 2 (VOA Swahili)", href: "https://web.facebook.com/voaswahili/videos/mwanaharakati-na-mshindi-wa-tuzo-ya-amani-jijni-mombasa-anatumia-ushawishi-wake-/934441461225620/" },
      { label: "Watch 3", href: "https://www.youtube.com/watch?v=6s3KyGNm7BQ" },
    ],
  },
  {
    year: "2013 – 2020",
    role: "Multimedia Journalist",
    company: "Nation Media Group (NTV Kenya)",
    icon: Camera,
    bullets: [
      { text: "Reported and produced human-interest, health, peace, and development stories." },
      { text: "Led the Kiswahili TV segment Ulimbwende for eight years, strengthening audience engagement." },
    ],
    focus: ["Human interest", "Health", "Peace", "Development"],
    links: [
      { label: "Watch 1", href: "https://www.youtube.com/watch?v=Q9KVe9rAtCk&t=190s" },
      { label: "Watch 2", href: "https://www.youtube.com/watch?v=KWws0LCahKo" },
      { label: "Watch 3", href: "https://www.youtube.com/watch?v=pYwWNRpTL8c" },
    ],
  },
];

const awards = [
  {
    year: "2023",
    title: "Best Broadcast Women’s Journalist",
    org: "Africapital Women Awards",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7102225740762365953/",
  },
  { year: "2015", title: "First Runner-Up, Arts & Culture Reporting", org: "Media Council of Kenya" },
  { year: "2014", title: "Young Journalist of the Year", org: "Media Council of Kenya" },
  { year: "2014", title: "Recognition for Exemplary Performance", org: "Nation Media Group" },
];




const education = [
  {
    year: "2024—2025",
    degree: "Master of Laws in International Relations (Diplomacy)",
    school: "Jilin University, China",
  },
  {
    year: "2014—2017",
    degree: "Bachelor of Arts in Armed Conflict, Peace Studies & Sociology",
    school: "University of Nairobi, Kenya",
  },
  {
    year: "2010—2012",
    degree: "Diploma in Journalism and Mass Communication",
    school: "Mt. Kenya University, Kenya",
  },
];

function SectionKicker({ number, children, light = false }: { number: string; children: string; light?: boolean }) {
  return (
    <div className={`section-kicker ${light ? "section-kicker--light" : ""}`}>
      <span>{number}</span>
      <span className="section-kicker__line" />
      <span>{children}</span>
    </div>
  );
}

function PlaceholderArt({ label, tone, icon: Icon = Aperture, image }: { label: string; tone: string; icon?: typeof Aperture; image?: string }) {
  return (
    <div className={`placeholder-art ${tone}`} aria-label={`${label} placeholder`}>
      {image && <img className="placeholder-art__image" src={image} alt="" />}
      <span className="placeholder-art__grid" />
      <span className="placeholder-art__label">{label}</span>
      <Icon className="placeholder-art__icon" strokeWidth={1.1} />
      <span className="placeholder-art__caption">{image ? "Generated visual" : "Replace with image"}</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  }, 5000);

  return () => clearInterval(interval);
}, []);
  // Opens the visitor's email app with the message ready to send to Halima.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");
    const subject = `Website enquiry from ${name}`;
    const body = `${message}\n\nFrom: ${name}\nReply to: ${email}`;
    window.location.href = `mailto:gongohalima@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div className="site-shell">
<header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    scrolled
      ? "bg-white/90 backdrop-blur-xl shadow-[0_8px_40px_rgba(15,23,42,0.08)] border-b border-slate-200/70"
      : "bg-transparent"
  }`}
>
  <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
    <div className="flex h-[82px] items-center justify-between">

      {/* BRAND */}
      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        aria-label="Halima Gongo home"
        className="group flex items-center gap-3"
      >
        {/* HG Logo */}
        <span
          className="
            relative flex h-11 w-11 items-center justify-center
            rounded-2xl
            bg-slate-950
            text-white
            text-sm font-black tracking-tight
            shadow-lg shadow-slate-950/20
            transition-all duration-300
            group-hover:-rotate-3 group-hover:scale-105
          "
        >
          HG

          {/* Accent dot */}
          <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-orange-500 ring-4 ring-white" />
        </span>

        {/* Name */}
        <div className="hidden sm:block">
          <p
            className={`text-sm font-black tracking-[0.18em] transition-colors ${
              scrolled ? "text-slate-950" : "text-white"
            }`}
          >
            HALIMA GONGO
          </p>

          <p
            className={`mt-0.5 text-[10px] font-medium uppercase tracking-[0.25em] ${
              scrolled ? "text-slate-500" : "text-white/60"
            }`}
          >
            Media • Film • Advocacy
          </p>
        </div>
      </a>

      {/* DESKTOP NAVIGATION */}
      <nav
        className="hidden lg:flex items-center gap-2"
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`
              group relative rounded-full px-4 py-2.5
              text-[13px] font-semibold
              transition-all duration-300
              ${
                scrolled
                  ? "text-slate-600 hover:text-slate-950"
                  : "text-white/80 hover:text-white"
              }
            `}
          >
            {item.label}

            {/* Animated underline */}
            <span
              className={`
                absolute bottom-1.5 left-4 right-4 h-[2px]
                origin-left scale-x-0
                rounded-full
                transition-transform duration-300
                group-hover:scale-x-100
                ${scrolled ? "bg-orange-500" : "bg-white"}
              `}
            />
          </a>
        ))}
      </nav>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3">

        {/* Let's Talk */}
        <a
          href="#contact"
          className="
            group hidden sm:inline-flex items-center gap-2
            rounded-full
            bg-orange-500
            px-5 py-3
            text-[13px] font-bold text-white
            shadow-lg shadow-orange-500/20
            transition-all duration-300
            hover:-translate-y-0.5
            hover:bg-orange-600
            hover:shadow-xl hover:shadow-orange-500/30
          "
        >
          Let's talk

          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>

        {/* Mobile menu button */}
        <button
          className={`
            flex lg:hidden h-11 w-11 items-center justify-center
            rounded-full border
            transition-all duration-300
            ${
              scrolled
                ? "border-slate-200 bg-white text-slate-950 hover:bg-slate-100"
                : "border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
            }
          `}
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </div>
  </div>

  {/* MOBILE NAVIGATION */}
  <div
    className={`
      lg:hidden overflow-hidden transition-all duration-500
      ${
        menuOpen
          ? "max-h-[500px] opacity-100"
          : "max-h-0 opacity-0 pointer-events-none"
      }
    `}
  >
    <nav
      className="
        mx-4 mb-4
        overflow-hidden
        rounded-3xl
        border border-slate-200
        bg-white
        shadow-2xl shadow-slate-950/10
      "
      aria-label="Mobile navigation"
    >
      <div className="p-3">
        {navItems.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="
              group flex items-center justify-between
              rounded-2xl
              px-5 py-4
              text-sm font-semibold text-slate-700
              transition-all duration-300
              hover:bg-slate-50 hover:text-slate-950
            "
          >
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold text-orange-500">
                0{index + 1}
              </span>

              <span>{item.label}</span>
            </div>

            <ArrowUpRight
              size={17}
              className="
                text-slate-400
                transition-all duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:text-orange-500
              "
            />
          </a>
        ))}

        {/* Mobile CTA */}
        <div className="mt-2 border-t border-slate-100 pt-3">
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="
              flex items-center justify-center gap-2
              rounded-2xl
              bg-slate-950
              px-5 py-4
              text-sm font-bold text-white
              transition-all duration-300
              hover:bg-orange-500
            "
          >
            Let's work together
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </nav>
  </div>
</header>

      <main>
                {/* ───────────── HOME───────────── */}


        <section
  id="home"
  className="relative isolate min-h-screen overflow-hidden bg-slate-950 text-white"
>
  {/* Background atmosphere */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(249,115,22,0.18),transparent_28%),radial-gradient(circle_at_15%_80%,rgba(14,165,233,0.12),transparent_30%)]" />

    <div className="absolute left-[-10%] top-[15%] h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[120px]" />

    <div className="absolute bottom-[-15%] right-[-5%] h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[120px]" />

    <div
      className="absolute inset-0 opacity-[0.035]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
        backgroundSize: "70px 70px",
      }}
    />
  </div>

  {/* Decorative orbit */}
  <div className="pointer-events-none absolute right-[-180px] top-[8%] h-[650px] w-[650px] rounded-full border border-white/10" />

  <div className="pointer-events-none absolute right-[-100px] top-[15%] h-[500px] w-[500px] rounded-full border border-orange-400/10" />

  <div className="pointer-events-none absolute left-[8%] top-[25%] h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_25px_rgba(249,115,22,.9)]" />

  <div className="pointer-events-none absolute left-[42%] top-[18%] h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_20px_rgba(14,165,233,.9)]" />

  {/* Main container */}
  <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-24 pt-32 sm:px-8 lg:px-10 lg:pt-28">
    <div className="grid w-full items-center gap-16 lg:grid-cols-[1.02fr_.98fr] lg:gap-12">

      {/* =====================================================
          LEFT — HERO CONTENT
      ====================================================== */}
      <div className="relative z-10 max-w-3xl">

        {/* Eyebrow */}
        <div
          className="
            mb-7 inline-flex items-center gap-3
            rounded-full
            border border-white/10
            bg-white/[0.06]
            px-4 py-2
            backdrop-blur-md
          "
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-400" />
          </span>

          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/70">
            Portfolio / East Africa
          </span>
        </div>

        {/* Heading */}
        <h1
          className="
            max-w-4xl
            text-[clamp(4rem,9vw,8.5rem)]
            font-black
            leading-[0.84]
            tracking-[-0.065em]
          "
        >
          Halima
          <span className="block bg-gradient-to-r from-orange-400 via-orange-300 to-sky-300 bg-clip-text text-transparent">
            Gongo.
          </span>
        </h1>

        {/* Main descriptor */}
        <p
          className="
            mt-8 max-w-2xl
            text-lg font-medium leading-relaxed
            text-white/80
            sm:text-xl
          "
        >
          Documentary Storyteller, Photographer
          <span className="mx-2 text-orange-400">•</span>
          Journalist
          <span className="mx-2 text-orange-400">•</span>
          East Africa
        </p>

        {/* Introduction */}
        <p
          className="
            mt-5 max-w-xl
            text-sm leading-7
            text-white/50
            sm:text-base
          "
        >
          Human-interest stories, constructive narratives, and visual
          journalism that amplify marginalised voices and community-driven
          solutions, from the local to the world.
        </p>

        {/* Actions */}
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">

          <a
            href="#work"
            className="
              group inline-flex items-center justify-center gap-3
              rounded-full
              bg-orange-500
              px-7 py-4
              text-sm font-bold text-white
              shadow-[0_15px_50px_rgba(249,115,22,.2)]
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-orange-400
              hover:shadow-[0_20px_60px_rgba(249,115,22,.3)]
            "
          >
            Explore the work

            <span
              className="
                flex h-7 w-7 items-center justify-center
                rounded-full bg-white/15
                transition-transform duration-300
                group-hover:translate-x-1
              "
            >
              <ArrowUpRight size={16} />
            </span>
          </a>

          <a
            href="#about"
            className="
              group inline-flex items-center justify-center gap-2
              rounded-full
              border border-white/10
              bg-white/[0.04]
              px-6 py-4
              text-sm font-semibold text-white/80
              backdrop-blur-md
              transition-all duration-300
              hover:border-white/20
              hover:bg-white/[0.08]
              hover:text-white
            "
          >
            More about Halima

            <MoveRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Reported for */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.3em] text-white/35">
            Has reported for
          </p>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
            {outlets.map((outlet) => (
              <span
                key={outlet}
                className="
                  text-xs font-semibold
                  tracking-wide
                  text-white/50
                  transition-colors duration-300
                  hover:text-white
                "
              >
                {outlet}
              </span>
            ))}
          </div>
        </div>

        {/* Metadata */}
        <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3 text-[10px] font-medium uppercase tracking-[0.16em] text-white/35">

          <span className="inline-flex items-center gap-2">
            <MapPin size={14} className="text-orange-400" />
            Kenya
          </span>

          <span className="hidden h-3 w-px bg-white/15 sm:block" />

          <span>Working across East Africa</span>

          <span className="hidden h-3 w-px bg-white/15 sm:block" />

          <span>Reporting since 2013</span>
        </div>
      </div>

      {/* =====================================================
          RIGHT — PORTRAIT / VISUAL
      ====================================================== */}
  

<div className="relative mx-auto w-full max-w-[570px] lg:ml-auto">

  {/* Image stage */}
  <div className="relative aspect-[4/5] w-full overflow-visible">

    {/* Image glow */}
    <div
      className="
        pointer-events-none
        absolute left-1/2 top-1/2
        h-[75%] w-[75%]
        -translate-x-1/2 -translate-y-1/2
        rounded-full
        bg-orange-500/20
        blur-[100px]
      "
    />

    {/* Decorative frame */}
    <div
      className="
        absolute
        inset-0
        rounded-[2.5rem]
        border border-white/10
        bg-white/[0.03]
      "
    />

    {/* Image slideshow */}
    <div
      className="
        absolute inset-3
        overflow-hidden
        rounded-[2rem]
        border border-white/10
        bg-slate-900
        shadow-2xl
        shadow-black/40
      "
    >

      {heroImages.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`Halima Gongo — portfolio photograph ${index + 1}`}
          className={`
            absolute inset-0
            h-full w-full
            object-cover object-center
            transition-all duration-[1500ms] ease-in-out
            ${
              currentImage === index
                ? "scale-100 opacity-100"
                : "scale-105 opacity-0"
            }
          `}
        />
      ))}

      {/* Image overlay */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-gradient-to-t
          from-slate-950/70
          via-transparent
          to-slate-950/10
        "
      />

      {/* Image number */}
      <div
        className="
          absolute left-5 top-5
          rounded-full
          border border-white/15
          bg-black/30
          px-3 py-2
          text-[9px]
          font-bold
          uppercase
          tracking-[0.2em]
          text-white/70
          backdrop-blur-md
        "
      >
        Portrait / {String(currentImage + 1).padStart(2, "0")}
      </div>

      {/* Slideshow indicators */}
      <div
        className="
          absolute bottom-5 left-1/2
          flex -translate-x-1/2
          items-center gap-2
          rounded-full
          border border-white/10
          bg-black/30
          px-3 py-2
          backdrop-blur-md
        "
      >
        {heroImages.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Show portrait ${index + 1}`}
            onClick={() => setCurrentImage(index)}
            className={`
              h-1.5
              rounded-full
              transition-all
              duration-500
              ${
                currentImage === index
                  ? "w-7 bg-orange-400"
                  : "w-1.5 bg-white/40 hover:bg-white/70"
              }
            `}
          />
        ))}
      </div>

    </div>

    {/* Top label */}
    <div
      className="
        absolute
        -top-7 left-0
        z-20
        flex items-center gap-3
        text-[9px]
        font-bold
        uppercase
        tracking-[0.28em]
        text-white/40
      "
    >
      <span className="h-px w-8 bg-orange-400" />
      Portrait / 00
    </div>

    {/* Side note */}
    <div
      className="
        absolute
        -bottom-7 -left-4
        z-20
        hidden max-w-[220px]
        rounded-2xl
        border border-white/10
        bg-slate-950/90
        px-5 py-4
        text-[10px]
        leading-5
        text-white/50
        shadow-xl
        backdrop-blur-xl
        sm:block
      "
    >
      <span className="mb-2 block h-1 w-6 rounded-full bg-orange-400" />

      A practice rooted in listening, context, and care.
    </div>

    {/* Award card */}
    <div
      className="
        absolute
        -bottom-8 -right-4
        z-20
        flex max-w-[260px]
        items-start gap-3
        rounded-2xl
        border border-white/10
        bg-white
        px-5 py-4
        text-slate-950
        shadow-2xl
        shadow-black/30
        sm:-right-8
      "
    >
      <div
        className="
          flex h-9 w-9 shrink-0
          items-center justify-center
          rounded-xl
          bg-orange-100
          text-orange-600
        "
      >
        <Award size={17} />
      </div>

      <span className="text-[10px] font-bold leading-4">
        Best Broadcast Women’s Journalist

        <small
          className="
            mt-1 block
            text-[9px]
            font-medium
            leading-4
            text-slate-500
          "
        >
          Africapital Women Awards, 2023
        </small>
      </span>
    </div>

    {/* Floating number */}
    <div
      className="
        absolute
        -right-3 top-16
        hidden
        h-14 w-14
        items-center justify-center
        rounded-full
        border border-orange-400/20
        bg-orange-500/10
        text-[10px]
        font-black
        tracking-widest
        text-orange-300
        backdrop-blur-md
        lg:flex
      "
    >
      01
    </div>

  </div>
</div>


    </div>
  </div>

  {/* Bottom scroll cue */}
  <a
    href="#about"
    aria-label="Scroll to about section"
    className="
      group absolute bottom-7 left-1/2
      hidden -translate-x-1/2
      items-center gap-3
      text-[9px] font-bold
      uppercase tracking-[0.3em]
      text-white/35
      transition-colors duration-300
      hover:text-white/80
      sm:flex
    "
  >
    <span>Scroll to explore</span>

    <span
      className="
        flex h-8 w-8
        items-center justify-center
        rounded-full
        border border-white/10
        transition-all duration-300
        group-hover:border-orange-400/40
        group-hover:text-orange-400
      "
    >
      <ArrowDown
        size={14}
        className="animate-bounce"
      />
    </span>
  </a>
</section>

        {/* ───────────── ABOUT ───────────── */}


        {/* ───────────── PHOTOGRAPHY ───────────── */}
<section
  id="photography"
  className="relative overflow-hidden bg-white py-24 md:py-32"
>
  <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-orange-100/60 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    {/* Section header */}
    <div className="mb-10 flex items-center gap-4">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white">
        03
      </span>

      <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
        Photography
      </span>

      <div className="h-px flex-1 bg-slate-200" />
    </div>

    <div className="grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
      <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
        Looking closely is
        <span className="block font-serif font-normal italic text-orange-500">
          an act of care.
        </span>
      </h2>

      <div>
        <p className="text-lg leading-8 text-slate-500">
          Photography and videography used for impact, advocacy, peacebuilding,
          and the quiet work of making a person visible.
        </p>

        <a
          href="#contact"
          className="group mt-6 inline-flex items-center gap-3 text-sm font-bold text-slate-950"
        >
          Commission a visual story
          <MoveRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-2"
          />
        </a>
      </div>
    </div>

    {/* Gallery */}
    <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
      {photoTiles.map((tile, index) => (
        <article
          key={tile.label}
          className={`group relative overflow-hidden rounded-[2rem] ${
            index === 0
              ? "min-h-[520px] md:col-span-2 lg:col-span-7"
              : index === 1
                ? "min-h-[360px] lg:col-span-5"
                : "min-h-[360px] lg:col-span-5"
          }`}
        >
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
            <PlaceholderArt
              label={tile.label}
              tone={tile.tone}
              image={tile.image}
              icon={
                tile.label.startsWith("Series")
                  ? Camera
                  : Aperture
              }
            />
          </div>

          {/* Dark cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />

          {/* Index */}
          <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/20 text-xs font-bold text-white backdrop-blur-md">
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Icon */}
          <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-orange-500">
            {tile.label.startsWith("Series") ? (
              <Camera size={18} />
            ) : (
              <Aperture size={18} />
            )}
          </div>

          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-orange-300">
              {tile.label}
            </span>

            <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
              {tile.title}
            </h3>

            <p className="mt-2 text-sm text-white/60">
              {tile.meta}
            </p>
          </div>
        </article>
      ))}
    </div>

    {/* Photography statement */}
    <div className="mt-8 grid gap-5 lg:grid-cols-[auto_1fr] lg:items-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/20">
        <Camera size={27} strokeWidth={1.3} />
      </div>

      <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 md:p-7">
        <p className="max-w-4xl text-base leading-7 text-slate-600 md:text-lg">
          Alongside her own photography, Halima trains and mentors others in
          peace-focused photography and video storytelling.
        </p>
      </div>
    </div>

    {/* Programmes */}
    <div className="mt-10 space-y-4">
      {photoPrograms.map((item, index) => (
        <div
          key={item.title}
          className="group grid gap-5 rounded-[1.5rem] border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl md:grid-cols-[120px_1fr_auto] md:items-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
            {item.kind}
          </span>

          <div>
            <h3 className="text-xl font-bold text-slate-950">
              {item.title}
            </h3>

            <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
              {item.detail}
            </p>
          </div>

          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-950 transition-colors hover:text-orange-500"
          >
            {item.cta}
            <ArrowUpRight size={15} />
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* ───────────── CAREER ───────────── */}
<section
  id="career"
  className="relative overflow-hidden bg-slate-950 py-24 text-white md:py-32"
>
  <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    {/* Section header */}
    <div className="mb-10 flex items-center gap-4">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-xs font-bold">
        04
      </span>

      <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/50">
        Career timeline
      </span>

      <div className="h-px flex-1 bg-white/10" />
    </div>

    <div className="grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
      <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
        A career in
        <span className="block font-serif font-normal italic text-orange-400">
          the public interest.
        </span>
      </h2>

      <p className="text-lg leading-8 text-white/50">
        From the newsroom to the field, every role has been an invitation to
        listen better and tell the story more honestly.
      </p>
    </div>

    {/* Timeline */}
    <div className="relative mt-20">
      {/* Vertical line */}
      <div className="absolute bottom-0 left-[25px] top-0 hidden w-px bg-white/10 md:block" />

      <div className="space-y-5">
        {career.map((item, index) => {
          const Icon = item.icon;

          return (
            <article
              key={`${item.role}-${item.company}`}
              className={`group relative grid gap-7 rounded-[2rem] border p-7 transition-all duration-500 md:grid-cols-[80px_150px_1fr] md:p-9 ${
                item.ongoing
                  ? "border-orange-400/30 bg-orange-500/[0.08]"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
              }`}
            >
              {/* Marker */}
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-950 text-orange-400">
                <Icon size={18} strokeWidth={1.4} />
              </div>

              {/* Year */}
              <div>
                <div className="text-xl font-black text-white">
                  {item.year}
                </div>

                {item.ongoing && (
                  <span className="mt-2 inline-flex rounded-full bg-orange-500 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-white">
                    Ongoing
                  </span>
                )}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  {item.role}
                </h3>

                <p className="mt-2 font-semibold text-sky-300">
                  {item.company}
                </p>

                <ul className="mt-6 space-y-3">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet.text}
                      className="flex flex-col gap-2 text-sm leading-7 text-white/50 md:flex-row md:items-start"
                    >
                      <span className="mt-3 hidden h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400 md:block" />

                      <span>
                        {bullet.text}

                        {bullet.href && (
                          <a
                            href={bullet.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 inline-flex items-center gap-1 font-semibold text-white transition-colors hover:text-orange-400"
                          >
                            {bullet.cta}
                            <ArrowUpRight size={12} />
                          </a>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Focus tags */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {item.focus.map((focus) => (
                    <span
                      key={focus}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white/50"
                    >
                      {focus}
                    </span>
                  ))}
                </div>

                {/* Selected work */}
                {item.links && (
                  <div className="mt-8 border-t border-white/10 pt-6">
                    <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                      Selected work
                    </span>

                    <div className="flex flex-wrap gap-3">
                      {item.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-bold text-white/70 transition-all hover:border-orange-400 hover:text-orange-400"
                        >
                          {link.label}
                          <ArrowUpRight size={13} />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </div>
</section>

        {/* ───────────── COMMUNITY ───────────── */}
<section className="relative overflow-hidden bg-white py-24 md:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    <div className="mb-10 flex items-center gap-4">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white">
        05
      </span>

      <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
        Community &amp; volunteer work
      </span>

      <div className="h-px flex-1 bg-slate-200" />
    </div>

    <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
      <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
        Work that reaches
        <span className="block font-serif font-normal italic text-orange-500">
          beyond the byline.
        </span>
      </h2>

      <HeartHandshake
        size={55}
        strokeWidth={1}
        className="hidden text-orange-400 md:block"
      />
    </div>

    <div className="mt-16 grid gap-6 lg:grid-cols-2">

      {/* Card 1 */}
      <article className="group relative overflow-hidden rounded-[2rem] bg-orange-500 p-8 text-white md:p-10">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/20" />

        <div className="relative">
          <span className="text-xs font-bold tracking-[0.2em] text-white/50">
            01
          </span>

          <h3 className="mt-8 text-3xl font-black md:text-4xl">
            G for Girls Initiative
          </h3>

          <p className="mt-3 font-semibold text-white/80">
            Board Member · Kwale County, Kenya
          </p>

          <p className="mt-7 max-w-xl text-base leading-8 text-white/75">
            Coordinated campaigns on gender-based violence, peace, education,
            and environmental awareness in rural villages.
          </p>

          <a
            href="https://www.linkedin.com/company/gforgirls-initiative/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-orange-600 transition-all hover:-translate-y-1"
          >
            View updates
            <ArrowUpRight size={14} />
          </a>

          <div className="mt-10 h-px bg-white/20" />

          <span className="mt-5 block text-xs font-bold uppercase tracking-[0.15em] text-white/60">
            Gender · Peace · Education
          </span>
        </div>
      </article>

      {/* Card 2 */}
      <article className="group relative overflow-hidden rounded-[2rem] bg-sky-600 p-8 text-white md:p-10">
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full border border-white/15" />

        <div className="relative">
          <span className="text-xs font-bold tracking-[0.2em] text-white/50">
            02
          </span>

          <h3 className="mt-8 text-3xl font-black md:text-4xl">
            Kwale Sports Excellence &amp; Save Our Sables CBOs
          </h3>

          <p className="mt-3 font-semibold text-white/80">
            Team Lead · Kwale, Kenya
          </p>

          <p className="mt-7 max-w-xl text-base leading-8 text-white/75">
            Led community conservation efforts for sable antelopes and
            promoted biodiversity awareness campaigns.
          </p>

          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7188160202993516544/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-sky-600 transition-all hover:-translate-y-1"
          >
            View post
            <ArrowUpRight size={14} />
          </a>

          <div className="mt-10 h-px bg-white/20" />

          <span className="mt-5 block text-xs font-bold uppercase tracking-[0.15em] text-white/60">
            Conservation · Biodiversity
          </span>
        </div>
      </article>
    </div>
  </div>
</section>

        {/* ───────────── AWARDS & EDUCATION ───────────── */}
<section className="relative overflow-hidden bg-slate-100 py-24 md:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    <div className="grid gap-16 lg:grid-cols-2">

      {/* Awards */}
      <div id="awards">

        <div className="mb-8 flex items-center gap-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
            06
          </span>

          <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
            Awards &amp; recognition
          </span>

          <div className="h-px flex-1 bg-slate-300" />
        </div>

        <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.04em] text-slate-950 sm:text-6xl">
          Good work
          <span className="block font-serif font-normal italic text-orange-500">
            gets noticed.
          </span>
        </h2>

        <div className="mt-12 space-y-4">
          {awards.map((award) => (
            <article
              key={`${award.year}-${award.title}`}
              className="group grid grid-cols-[65px_1fr_auto] items-start gap-5 rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
            >
              <span className="text-sm font-black text-orange-500">
                {award.year}
              </span>

              <div>
                <h3 className="text-lg font-bold text-slate-950">
                  {award.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {award.org}
                </p>

                {award.href && (
                  <a
                    href={award.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-slate-950 hover:text-orange-500"
                  >
                    View post
                    <ArrowUpRight size={13} />
                  </a>
                )}
              </div>

              <Award
                size={22}
                strokeWidth={1.2}
                className="text-orange-400 transition-transform duration-300 group-hover:rotate-12"
              />
            </article>
          ))}
        </div>
      </div>

      {/* Education */}
      <div id="education">

        <div className="mb-8 flex items-center gap-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white">
            07
          </span>

          <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
            Education
          </span>

          <div className="h-px flex-1 bg-slate-300" />
        </div>

        <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.04em] text-slate-950 sm:text-6xl">
          Curiosity is
          <span className="block font-serif font-normal italic text-sky-600">
            part of the toolkit.
          </span>
        </h2>

        <div className="mt-12 space-y-4">
          {education.map((item) => (
            <article
              key={`${item.year}-${item.degree}`}
              className="group grid gap-5 rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl md:grid-cols-[70px_auto_1fr] md:items-center"
            >
              <span className="text-sm font-black text-sky-600">
                {item.year}
              </span>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                <GraduationCap size={23} strokeWidth={1.25} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-950">
                  {item.degree}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {item.school}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

        {/* ───────────── CONTACT ───────────── */}
  
<section
  id="contact"
  className="relative overflow-hidden bg-slate-950 py-24 text-white md:py-32"
>
  {/* Decorative background */}
  <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-3xl" />

  <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full border border-white/5" />
  <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[380px] w-[380px] rounded-full border border-orange-400/10" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    {/* Section heading */}
    <div className="mb-12 flex items-center gap-4">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
        08
      </span>

      <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/50">
        Contact
      </span>

      <div className="h-px flex-1 bg-white/10" />
    </div>

    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">

      {/* LEFT — Contact information */}
      <div className="lg:sticky lg:top-32">

        <div className="max-w-xl">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
            Let's make something meaningful
          </p>

          <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Have a story
            <span className="block font-serif font-normal italic text-orange-400">
              to bring to life?
            </span>
          </h2>

          <p className="mt-8 max-w-lg text-base leading-8 text-white/50 md:text-lg">
            For commissions, collaborations, speaking, training, or media
            enquiries, get in touch. Let's create work that gives people,
            places, and ideas the attention they deserve.
          </p>
        </div>

        {/* Contact details */}
        <div className="mt-12 space-y-3">

          {/* Email */}
          <a
            href="mailto:gongohalima@gmail.com"
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-orange-400/30 hover:bg-white/[0.06]"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
              <Mail size={17} />
            </span>

            <span className="flex-1">
              <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">
                Email
              </span>

              <span className="mt-1 block text-sm font-semibold text-white/80">
                gongohalima@gmail.com
              </span>
            </span>

            <ArrowUpRight
              size={17}
              className="text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-400"
            />
          </a>

          {/* Phone */}
          <a
            href="tel:+254715490179"
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-sky-400/30 hover:bg-white/[0.06]"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
              <Phone size={17} />
            </span>

            <span className="flex-1">
              <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">
                Phone
              </span>

              <span className="mt-1 block text-sm font-semibold text-white/80">
                +254 715 490 179
              </span>
            </span>

            <ArrowUpRight
              size={17}
              className="text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-400"
            />
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@iC-AFRICA"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-red-400/30 hover:bg-white/[0.06]"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
              <Play size={17} />
            </span>

            <span className="flex-1">
              <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">
                Watch
              </span>

              <span className="mt-1 block text-sm font-semibold text-white/80">
                iC-Africa on YouTube
              </span>
            </span>

            <ArrowUpRight
              size={17}
              className="text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-400"
            />
          </a>

          {/* Location */}
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-white/50">
              <MapPin size={17} />
            </span>

            <span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">
                Based in
              </span>

              <span className="mt-1 block text-sm font-semibold text-white/80">
                Kenya · East Africa
              </span>
            </span>
          </div>
        </div>

        {/* References */}
        <div className="mt-7 flex items-center gap-3 text-xs text-white/35">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-green-400">
            <Check size={14} />
          </span>

          Professional references available on request
        </div>
      </div>

      {/* RIGHT — Contact form */}
      <div className="relative">

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-xl">

          {/* Form header */}
          <div className="flex items-center justify-between border-b border-white/10 px-7 py-6 md:px-9">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-orange-400">
                Start a conversation
              </span>

              <span className="mt-1 block text-sm text-white/35">
                Tell me about your idea.
              </span>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-white">
              <Send size={18} />
            </div>
          </div>

          {/* Success message */}
          {submitted ? (
            <div className="px-7 py-16 text-center md:px-12">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                <Check size={26} />
              </div>

              <h3 className="mt-7 text-3xl font-bold text-white">
                Almost there.
              </h3>

              <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/50">
                Your email app should open with your message ready to send.
                If it doesn't, please write directly to Halima at{" "}
                <span className="text-white/80">
                  gongohalima@gmail.com
                </span>
                .
              </p>

              <button
                className="mt-8 inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition-all hover:border-orange-400 hover:text-orange-400"
                type="button"
                onClick={() => setSubmitted(false)}
              >
                Write another note
              </button>
            </div>
          ) : (

            /* Form */
            <form
              onSubmit={handleSubmit}
              className="space-y-7 p-7 md:p-9"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-white/50"
                >
                  Your name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name / organisation"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-orange-400/60 focus:bg-white/[0.08] focus:ring-2 focus:ring-orange-400/10"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-white/50"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-orange-400/60 focus:bg-white/[0.08] focus:ring-2 focus:ring-orange-400/10"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-white/50"
                >
                  How can we work together?
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me a little about the story, project, or idea..."
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-orange-400/60 focus:bg-white/[0.08] focus:ring-2 focus:ring-orange-400/10"
                />
              </div>

              {/* Submit */}
              <button
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-orange-500/30"
                type="submit"
              >
                Send enquiry

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>

              <p className="text-center text-[11px] leading-5 text-white/25">
                Your message will open in your email application for review
                before sending.
              </p>

            </form>
          )}
        </div>
      </div>
    </div>
  </div>
</section>

      </main>
   
<footer className="border-t border-white/10 bg-slate-950 text-white">

  {/* Main footer row */}
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">

      {/* Logo */}
      <a
        href="#home"
        className="group flex items-center gap-4"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-sm font-black text-slate-950 transition-all duration-300 group-hover:rotate-3 group-hover:bg-orange-500 group-hover:text-white">
          HG
        </span>

        <span>
          <span className="block text-sm font-bold tracking-wide">
            HALIMA GONGO
          </span>

          <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-white/30">
            Media · Film · Advocacy
          </span>
        </span>
      </a>

      {/* Description */}
      <p className="max-w-md text-sm leading-6 text-white/35 md:text-center">
        Documentary storyteller, photographer &amp; journalist — East Africa.
      </p>

      {/* Back to top */}
      <a
        href="#home"
        className="group inline-flex items-center gap-2 text-sm font-bold text-white/60 transition-colors duration-300 hover:text-orange-400"
      >
        Back to top

        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-orange-400">
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </a>

    </div>

    {/* Bottom footer */}
    <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-[11px] text-white/25 sm:flex-row sm:items-center sm:justify-between">

      <span>
        © {new Date().getFullYear()} Halima Gongo
      </span>

      <span>
        Made for stories that matter.
      </span>

    </div>
  </div>

</footer>


    </div>
  );
}