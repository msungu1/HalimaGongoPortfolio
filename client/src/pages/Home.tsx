import { FormEvent, useEffect, useState } from "react";
import {
  Aperture,
  ArrowDown,
  ArrowUpRight,
  Award,
  Film,
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
  Youtube,

} from "lucide-react";
import Footer from "./Footer";
import {
  Linkedin,
} from "lucide-react";
 import halima1 from "@/images/rrr.jpg";
import halima2 from "@/images/IMG_7757.jpg";
import halima3 from "@/images/WhatsApp Image 2026-09-22 at 23.08.13.jpeg";
import halima4 from "@/images/IMG_7758.jpg";
import Navbar from "./navbar";
const heroImages = [
  halima1,
  halima2,
  halima3,
  halima4,
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
    meta: "Purple Field Productions • Cerebral Palsy Documentary Series",
    tone: "placeholder-photo-four",
  },
  {
    label: "Field note / 05",
    title: "Light, place, witness",
    meta: "Fotografia Europea Exhibition • Italy (2025)[cite: 2]",    
    tone: "placeholder-photo-five",
  },
  {
    label: "Field note / 06",
    title: "A closer listen",
    meta: "Narok & Mombasa • Peace & Cohesion Workshops[cite: 2]", 
    tone: "placeholder-photo-six",
  },
];
const stats = [
  { value: "13+", label: "Years in media", note: "Reporting since 2013" },
  { value: "4", label: "Major outlets", note: "DW · RFI · VOA · NTV" },
  { value: "4", label: "Awards & recognitions", note: "2014 – 2023" },
  { value: "3", label: "Qualifications", note: "Diploma · BA · LLM" },
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

<Navbar/>

      <main>
                {/* ───────────── HOME───────────── */}
<section
  id="home"
  className="relative isolate min-h-screen overflow-hidden bg-[#FAF7F2] text-[#1F181A] selection:bg-[#722F45] selection:text-white"
>
  {/* Background atmosphere - deeper ambient glows */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(184,91,122,0.18),transparent_40%),radial-gradient(circle_at_15%_80%,rgba(114,47,69,0.12),transparent_35%)]" />

    <div className="absolute left-[-10%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#B85B7A]/20 blur-[100px]" />

    <div className="absolute bottom-[-15%] right-[-5%] h-[500px] w-[500px] rounded-full bg-[#722F45]/15 blur-[100px]" />

    <div
      className="absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(114,47,69,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(114,47,69,.6) 1px, transparent 1px)",
        backgroundSize: "70px 70px",
      }}
    />
  </div>

  {/* Decorative orbits */}
  <div className="pointer-events-none absolute right-[-180px] top-[8%] h-[650px] w-[650px] rounded-full border border-[#722F45]/30" />

  <div className="pointer-events-none absolute right-[-100px] top-[15%] h-[500px] w-[500px] rounded-full border border-[#B85B7A]/40" />

  <div className="pointer-events-none absolute left-[8%] top-[25%] h-2.5 w-2.5 rounded-full bg-[#722F45] shadow-[0_0_15px_rgba(114,47,69,.8)]" />

  <div className="pointer-events-none absolute left-[42%] top-[18%] h-2 w-2 rounded-full bg-[#B85B7A] shadow-[0_0_15px_rgba(184,91,122,.9)]" />

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
            border-2 border-[#722F45]
            bg-white
            px-4 py-2
            shadow-md
          "
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#722F45] opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#722F45]" />
          </span>

          <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#722F45]">
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
            text-[#722F45]
          "
        >
          Halima
          <span className="block text-[#B85B7A]">
            Gongo.
          </span>
        </h1>

        {/* Main descriptor */}
        <p
          className="
            mt-8 max-w-2xl
            text-lg font-bold leading-relaxed
            text-[#1F181A]
            sm:text-xl
          "
        >
          Documentary Storyteller, Photographer
          <span className="mx-2 text-[#B85B7A]">•</span>
          Journalist
          <span className="mx-2 text-[#B85B7A]">•</span>
          East Africa
        </p>

        {/* Introduction */}
        <p
          className="
            mt-5 max-w-xl
            text-sm font-medium leading-7
            text-[#1F181A]
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
            href="/about"
            className="
              group inline-flex items-center justify-center gap-3
              rounded-full
              bg-[#722F45]
              px-7 py-4
              text-sm font-bold text-white
              shadow-xl shadow-[#722F45]/30
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-[#521E30]
              hover:shadow-2xl hover:shadow-[#722F45]/40
            "
          >
            Explore the work

            <span
              className="
                flex h-7 w-7 items-center justify-center
                rounded-full bg-white/25
                transition-transform duration-300
                group-hover:translate-x-1
              "
            >
              <ArrowUpRight size={16} />
            </span>
          </a>

          <a
            href="/about"
            className="
              group inline-flex items-center justify-center gap-2
              rounded-full
              border-2 border-[#722F45]
              bg-white
              px-6 py-4
              text-sm font-bold text-[#722F45]
              shadow-sm
              transition-all duration-300
              hover:bg-[#722F45]
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
        <div className="mt-12 border-t-2 border-[#1F181A]/10 pt-6">
          <p className="mb-4 text-[9px] font-black uppercase tracking-[0.3em] text-[#722F45]">
            Has reported for
          </p>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
            {outlets.map((outlet) => (
              <span
                key={outlet}
                className="
                  text-xs font-bold
                  tracking-wide
                  text-[#1F181A]
                  transition-colors duration-300
                  hover:text-[#B85B7A]
                "
              >
                {outlet}
              </span>
            ))}
          </div>
        </div>

        {/* Metadata */}
        <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1F181A]">

          <span className="inline-flex items-center gap-2">
            <MapPin size={14} className="text-[#722F45]" />
            Kenya
          </span>

          <span className="hidden h-3 w-0.5 bg-[#722F45]/30 sm:block" />

          <span>Working across East Africa</span>

          <span className="hidden h-3 w-0.5 bg-[#722F45]/30 sm:block" />

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
              bg-[#B85B7A]/25
              blur-[90px]
            "
          />

          {/* Decorative frame */}
          <div
            className="
              absolute
              inset-0
              rounded-[2.5rem]
              border-2 border-[#722F45]/30
              bg-white/60
              shadow-md
            "
          />

          {/* Image slideshow */}
          <div
            className="
              absolute inset-3
              overflow-hidden
              rounded-[2rem]
              border-2 border-[#722F45]
              bg-white
              shadow-2xl
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

            {/* Image overlay gradient */}
            <div
              className="
                pointer-events-none
                absolute inset-0
                bg-gradient-to-t
                from-[#722F45]/50
                via-transparent
                to-transparent
              "
            />

            {/* Image number */}
            

            {/* Slideshow indicators */}
            <div
              className="
                absolute bottom-5 left-1/2
                flex -translate-x-1/2
                items-center gap-2
                rounded-full
                border border-[#722F45]
                bg-white
                px-3 py-2
                shadow-md
              "
            >
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show portrait ${index + 1}`}
                  onClick={() => setCurrentImage(index)}
                  className={`
                    h-2
                    rounded-full
                    transition-all
                    duration-500
                    ${
                      currentImage === index
                        ? "w-7 bg-[#722F45]"
                        : "w-2 bg-[#722F45]/30 hover:bg-[#722F45]"
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
              font-black
              uppercase
              tracking-[0.28em]
              text-[#722F45]
            "
          >
          </div>

          {/* Side note */}
          <div
            className="
              absolute
              -bottom-7 -left-4
              z-20
              hidden max-w-[220px]
              rounded-2xl
              border-2 border-[#722F45]
              bg-white
              px-5 py-4
              text-[10px]
              font-bold
              leading-5
              text-[#1F181A]
              shadow-2xl
              sm:block
            "
          >
            <span className="mb-2 block h-1.5 w-7 rounded-full bg-[#722F45]" />

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
              border-2 border-[#722F45]
              bg-white
              px-5 py-4
              text-[#1F181A]
              shadow-2xl
              sm:-right-8
            "
          >
            <div
              className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-xl
                bg-[#722F45]
                text-white
                shadow-md
              "
            >
              <Award size={18} />
            </div>

            <span className="text-[10px] font-black leading-4 text-[#722F45]">
              Best Broadcast Women’s Journalist

              <small
                className="
                  mt-1 block
                  text-[9px]
                  font-bold
                  leading-4
                  text-[#1F181A]
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
              border-2 border-[#722F45]
              bg-white
              text-[10px]
              font-black
              tracking-widest
              text-[#722F45]
              shadow-md
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
      text-[9px] font-black
      uppercase tracking-[0.3em]
      text-[#722F45]
      transition-colors duration-300
      hover:text-[#B85B7A]
      sm:flex
    "
  >
    <span>Scroll to explore</span>

    <span
      className="
        flex h-8 w-8
        items-center justify-center
        rounded-full
        border-2 border-[#722F45]
        bg-white
        transition-all duration-300
        group-hover:bg-[#722F45]
        group-hover:text-white
      "
    >
      <ArrowDown
        size={14}
        className="animate-bounce"
      />
    </span>
  </a>
</section>

        {/* ───────────── PHOTOGRAPHY ───────────── */}
<section
  id="photography"
  className="relative isolate overflow-hidden bg-[#F8F1EB] py-20 text-[#241419] selection:bg-[#722F45] selection:text-white md:py-28"
>
  {/* Subtle ambient glows */}
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#C05A79]/10 blur-[90px]" />
    <div className="absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-[#722F45]/10 blur-[90px]" />
  </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    {/* Header row */}
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#722F45] text-xs font-black text-white">
            03
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#722F45]">
            Photography & Visuals
          </span>
        </div>

        <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-[#722F45] sm:text-5xl lg:text-6xl">
          Looking closely is
          <span className="ml-3 font-serif font-normal italic text-[#C04E73]">
            an act of care.
          </span>
        </h2>
      </div>

      <p className="max-w-md text-sm font-medium leading-7 text-[#49333A]">
        Photography and videography used for impact, advocacy, peacebuilding,
        and the quiet work of making a person visible.
      </p>
    </div>

    {/* Simple, sleek stories grid */}
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {photoTiles.map((tile, index) => (
        <article
          key={tile.label}
          className="group relative flex flex-col justify-between rounded-2xl border border-[#722F45]/15 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#722F45]/40 hover:shadow-md"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-[#F0A9BF]/20 px-3 py-1 text-[9px] font-black uppercase tracking-[0.18em] text-[#A83E61]">
                {tile.label}
              </span>
              <span className="font-serif text-lg italic text-[#722F45]/40">
                0{index + 1}
              </span>
            </div>

            <h3 className="mt-5 text-xl font-black text-[#542032] transition-colors group-hover:text-[#A83E61]">
              {tile.title}
            </h3>

            <p className="mt-2 text-xs font-medium leading-6 text-[#59434A]">
              {tile.meta}
            </p>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs font-bold text-[#722F45]">
            <span>View story</span>
            <MoveRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </article>
      ))}
    </div>

    {/* Mentorship strip */}
    <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#722F45] p-8 text-white sm:flex-row sm:items-center md:px-10">
      <div>
        <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#FFD5E1]">
          Mentorship & Training
        </span>
        <h3 className="mt-2 font-serif text-2xl italic sm:text-3xl">
          Empowering the next generation of storytellers.
        </h3>
        <p className="mt-2 max-w-2xl text-xs leading-6 text-white/80 sm:text-sm">
          Halima trains emerging talent in peace-focused photography and video, giving local communities tools to tell their own stories.
        </p>
      </div>

      <a
        href="#contact"
        className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-black text-[#722F45] transition-transform hover:scale-105"
      >
        Collaborate
        <ArrowUpRight size={15} />
      </a>
    </div>

    {/* Minimal Collaborations list */}
    <div className="mt-12 border-t border-[#722F45]/15 pt-8">
      <h4 className="text-xs font-black uppercase tracking-[0.22em] text-[#A83E61]">
        Programmes & Initiatives
      </h4>

      <div className="mt-4 divide-y divide-[#722F45]/15">
        {photoPrograms.map((item) => (
          <div
            key={item.title}
            className="group flex flex-col justify-between gap-3 py-4 transition-colors hover:bg-white/40 sm:flex-row sm:items-center sm:px-3"
          >
            <div>
              <span className="text-[9px] font-black uppercase tracking-wider text-[#722F45]">
                {item.kind}
              </span>
              <h5 className="text-base font-bold text-[#542032] group-hover:text-[#A83E61]">
                {item.title}
              </h5>
            </div>

            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#722F45] hover:text-[#C04E73]"
            >
              {item.cta}
              <ArrowUpRight size={14} />
            </a>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>
        {/* ───────────── CAREER ───────────── */}
<section
  id="career"
  className="relative overflow-hidden bg-[#FAF7F2] py-24 text-[#1F181A] selection:bg-[#722F45] selection:text-white md:py-32"
>
  {/* Ambient background glow */}
  <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#B85B7A]/15 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    {/* Section header */}
    <div className="mb-10 flex items-center gap-4">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#722F45] text-xs font-black text-white shadow-md shadow-[#722F45]/20">
        04
      </span>

      <span className="text-xs font-black uppercase tracking-[0.25em] text-[#722F45]">
        Career timeline
      </span>

      <div className="h-px flex-1 bg-[#722F45]/20" />
    </div>

    <div className="grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
      <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.04em] text-[#722F45] sm:text-6xl lg:text-7xl">
        A career in
        <span className="block font-serif font-normal italic text-[#B85B7A]">
          the public interest.
        </span>
      </h2>

      <p className="text-lg font-medium leading-8 text-[#1F181A]">
        From the newsroom to the field, every role has been an invitation to
        listen better and tell the story more honestly.
      </p>
    </div>

    {/* Timeline */}
    <div className="relative mt-20">
      {/* Vertical timeline line */}
      <div className="absolute bottom-0 left-[25px] top-0 hidden w-0.5 bg-[#722F45]/20 md:block" />

      <div className="space-y-6">
        {career.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={`${item.role}-${item.company}`}
              className={`group relative grid gap-7 rounded-[2rem] border-2 p-7 shadow-lg transition-all duration-500 md:grid-cols-[80px_150px_1fr] md:p-9 ${
                item.ongoing
                  ? "border-[#722F45] bg-white ring-2 ring-[#B85B7A]/30 shadow-xl"
                  : "border-[#722F45]/30 bg-white hover:border-[#722F45] hover:shadow-xl"
              }`}
            >
              {/* Marker Icon */}
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#722F45] bg-[#FAF7F2] text-[#722F45] shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#722F45] group-hover:text-white">
                <Icon size={20} strokeWidth={1.8} />
              </div>

              {/* Year */}
              <div>
                <div className="text-2xl font-black text-[#722F45]">
                  {item.year}
                </div>

                {item.ongoing && (
                  <span className="mt-2 inline-flex rounded-full bg-[#722F45] px-3.5 py-1 text-[9px] font-black uppercase tracking-[0.15em] text-white shadow-sm">
                    Ongoing
                  </span>
                )}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-black text-[#722F45] md:text-3xl">
                  {item.role}
                </h3>

                <p className="mt-2 text-base font-bold text-[#B85B7A]">
                  {item.company}
                </p>

                <ul className="mt-6 space-y-3">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet.text}
                      className="flex flex-col gap-2 text-sm font-medium leading-7 text-[#1F181A] md:flex-row md:items-start"
                    >
                      <span className="mt-2.5 hidden h-2 w-2 shrink-0 rounded-full bg-[#722F45] md:block" />

                      <span>
                        {bullet.text}

                        {bullet.href && (
                          <a
                            href={bullet.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 inline-flex items-center gap-1 font-bold text-[#722F45] underline decoration-[#B85B7A] underline-offset-4 transition-colors hover:text-[#B85B7A]"
                          >
                            {bullet.cta}
                            <ArrowUpRight size={13} />
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
                      className="rounded-full border border-[#722F45]/30 bg-[#FAF7F2] px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-[#722F45]"
                    >
                      {focus}
                    </span>
                  ))}
                </div>

                {/* Selected work */}
                {item.links && (
                  <div className="mt-8 border-t-2 border-[#722F45]/10 pt-6">
                    <span className="mb-3 block text-[10px] font-black uppercase tracking-[0.2em] text-[#722F45]">
                      Selected work
                    </span>

                    <div className="flex flex-wrap gap-3">
                      {item.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border-2 border-[#722F45] bg-[#FAF7F2] px-4 py-2 text-xs font-bold text-[#722F45] transition-all hover:bg-[#722F45] hover:text-white"
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

    {/* Section Header */}
    <div className="mb-10 flex items-center gap-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white">
        05
      </span>

      <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
        Community &amp; volunteer work
      </span>

      <div className="h-px flex-1 bg-slate-200" />
    </div>

    {/* Title */}
    <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
      <h2 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
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

    {/* Community Cards */}
    <div className="mt-16 grid gap-6 lg:grid-cols-2">

      {/* =========================
          CARD 01
      ========================== */}
      <article className="group relative overflow-hidden rounded-[2rem] bg-orange-500 p-8 text-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl md:p-10">

        {/* Decorative Circle */}
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/20 transition-transform duration-700 group-hover:scale-110" />

        <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-white/5" />

        <div className="relative">

          {/* Number */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold tracking-[0.2em] text-white/60">
              01
            </span>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10">
              <HeartHandshake size={18} strokeWidth={1.5} />
            </div>
          </div>

          {/* Title */}
          <h3 className="mt-8 max-w-xl text-3xl font-black leading-tight md:text-4xl">
            G for Girls Initiative
          </h3>

          {/* Role */}
          <p className="mt-3 font-semibold text-white/85">
            Board Member · Kwale County, Kenya
          </p>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-8 text-white/80">
            Coordinated campaigns on gender-based violence, peace, education,
            and environmental awareness in rural villages.
          </p>

          {/* Social Link */}
          <a
            href="https://www.linkedin.com/company/gforgirls-initiative/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View G for Girls Initiative LinkedIn updates"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-bold text-orange-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-950 hover:text-white hover:shadow-xl"
          >
            <Linkedin size={17} strokeWidth={2.2} />

            <span>View LinkedIn updates</span>

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          {/* Divider */}
          <div className="mt-10 h-px bg-white/20" />

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white/80">
              Gender
            </span>

            <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white/80">
              Peace
            </span>

            <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white/80">
              Education
            </span>
          </div>

        </div>
      </article>


      {/* =========================
          CARD 02
      ========================== */}
      <article className="group relative overflow-hidden rounded-[2rem] bg-sky-600 p-8 text-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl md:p-10">

        {/* Decorative Circle */}
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full border border-white/15 transition-transform duration-700 group-hover:scale-110" />

        <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-white/5" />

        <div className="relative">

          {/* Number */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold tracking-[0.2em] text-white/60">
              02
            </span>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10">
              <HeartHandshake size={18} strokeWidth={1.5} />
            </div>
          </div>

          {/* Title */}
          <h3 className="mt-8 max-w-xl text-3xl font-black leading-tight md:text-4xl">
            Kwale Sports Excellence &amp; Save Our Sables CBOs
          </h3>

          {/* Role */}
          <p className="mt-3 font-semibold text-white/85">
            Team Lead · Kwale, Kenya
          </p>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-8 text-white/80">
            Led community conservation efforts for sable antelopes and
            promoted biodiversity awareness campaigns.
          </p>

          {/* Social Link */}
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7188160202993516544/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Kwale Sports Excellence and Save Our Sables LinkedIn post"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-bold text-sky-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-950 hover:text-white hover:shadow-xl"
          >
            <Linkedin size={17} strokeWidth={2.2} />

            <span>View LinkedIn post</span>

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          {/* Divider */}
          <div className="mt-10 h-px bg-white/20" />

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white/80">
              Conservation
            </span>

            <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white/80">
              Biodiversity
            </span>

            <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white/80">
              Community
            </span>
          </div>

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

      </main>
<Footer />
    </div>
  );
}