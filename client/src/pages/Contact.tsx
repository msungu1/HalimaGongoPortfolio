
import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Play,
  MapPin,
  Check,
  ArrowUpRight,
  Send,
  Menu,
  X,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import Footer from "./Footer";
import Navbar from "./navbar";


export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const subject = encodeURIComponent(`Portfolio Enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:gongohalima@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  const navLink =
    "rounded-full px-4 py-2.5 text-sm font-medium text-[#66545A] transition-all duration-300 hover:bg-[#F3E8E7] hover:text-[#722F45]";

  const inputStyle =
    "w-full rounded-xl border border-[#E8DCD8] bg-[#FFFEFC] px-4 py-4 text-sm text-[#33272B] outline-none placeholder:text-[#A99A9B] transition-all duration-300 focus:border-[#9A526A] focus:ring-4 focus:ring-[#722F45]/10";

  const contactCard =
    "group flex items-center gap-4 rounded-2xl border border-[#EDE3DF] bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D8A7A7] hover:shadow-lg hover:shadow-[#722F45]/5";

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FAF7F2] text-[#33272B] selection:bg-[#722F45] selection:text-white">

      {/* HEADER */}
     <Navbar/>

      {/* CONTACT SECTION */}
      <main>
        <section className="relative overflow-hidden pb-20 pt-32 sm:pt-36 md:pb-28">

          {/* SOFT BACKGROUND ACCENTS */}
          <div className="pointer-events-none absolute -left-48 top-40 h-[420px] w-[420px] rounded-full bg-[#E8C8CC]/30 blur-[110px]" />
          <div className="pointer-events-none absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-[#D9C4AD]/25 blur-[110px]" />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

            {/* SECTION LABEL */}
            <div className="mb-12 flex items-center gap-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#722F45] text-xs font-bold text-white">
                08
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#8D626E]">
                Contact
              </span>

              <div className="h-px flex-1 bg-[#E5D8D3]" />
            </div>

            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">

              {/* LEFT COLUMN */}
              <div className="lg:sticky lg:top-32">

                <div className="inline-flex items-center gap-2 rounded-full border border-[#E9D5D5] bg-white/80 px-4 py-2">
                  <Sparkles size={14} className="text-[#9A526A]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#805661]">
                    Let's create something meaningful
                  </span>
                </div>

                <h1 className="mt-7 font-serif text-5xl font-medium leading-[1.06] tracking-tight text-[#33272B] sm:text-6xl lg:text-[68px]">
                  Every story
                  <span className="mt-2 block italic text-[#8B455D]">
                    starts somewhere.
                  </span>
                </h1>

                <p className="mt-7 max-w-lg text-base leading-8 text-[#75666A] md:text-lg">
                  Have a story worth telling, a project in mind, or an idea
                  you'd love to explore? I'd love to hear from you. Let's
                  create work that gives people, places, and ideas the
                  attention they deserve.
                </p>

                {/* CONTACT DETAILS */}
                <div className="mt-10 space-y-3">

                  <a
                    href="mailto:gongohalima@gmail.com"
                    className={contactCard}
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F6E9EA] text-[#8B455D] transition-colors group-hover:bg-[#722F45] group-hover:text-white">
                      <Mail size={19} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-[10px] font-bold uppercase tracking-[0.17em] text-[#A18C91]">
                        Email
                      </span>
                      <span className="mt-1 block break-all text-sm font-semibold text-[#44343A]">
                        gongohalima@gmail.com
                      </span>
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-[#AD9299] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#722F45]"
                    />
                  </a>

                  <a
                    href="tel:+254715490179"
                    className={contactCard}
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F6E9EA] text-[#8B455D] transition-colors group-hover:bg-[#722F45] group-hover:text-white">
                      <Phone size={19} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-[10px] font-bold uppercase tracking-[0.17em] text-[#A18C91]">
                        Phone
                      </span>
                      <span className="mt-1 block text-sm font-semibold text-[#44343A]">
                        +254 715 490 179
                      </span>
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-[#AD9299] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#722F45]"
                    />
                  </a>

                  <a
                    href="https://www.youtube.com/@iC-AFRICA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={contactCard}
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F6E9EA] text-[#8B455D] transition-colors group-hover:bg-[#722F45] group-hover:text-white">
                      <Play size={19} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-[10px] font-bold uppercase tracking-[0.17em] text-[#A18C91]">
                        Watch my work
                      </span>
                      <span className="mt-1 block text-sm font-semibold text-[#44343A]">
                        iC-Africa on YouTube
                      </span>
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-[#AD9299] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#722F45]"
                    />
                  </a>

                  <div className="flex items-center gap-4 rounded-2xl border border-[#EDE3DF] bg-white/70 p-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F1E9E0] text-[#8C6B53]">
                      <MapPin size={19} />
                    </span>

                    <span>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.17em] text-[#A18C91]">
                        Based in
                      </span>
                      <span className="mt-1 block text-sm font-semibold text-[#44343A]">
                        Kenya · Working across East Africa
                      </span>
                    </span>
                  </div>
                </div>

                {/* REASSURANCE */}
                <div className="mt-7 flex items-center gap-3 text-xs text-[#806D72]">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EAD8DA] text-[#722F45]">
                    <Check size={14} />
                  </span>
                  Professional references available on request
                </div>
              </div>

              {/* RIGHT COLUMN — FORM */}
              <div className="relative">

                <div className="overflow-hidden rounded-[28px] border border-[#E9DEDA] bg-white shadow-[0_25px_80px_-30px_rgba(79,43,54,0.18)]">

                  {/* FORM HEADER */}
                  <div className="border-b border-[#F0E7E3] bg-gradient-to-br from-[#FFFDFC] to-[#F9F0EF] px-7 py-7 sm:px-9">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#96586B]">
                          Start a conversation
                        </span>

                        <h2 className="mt-3 font-serif text-3xl text-[#33272B] sm:text-4xl">
                          Tell me your story.
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-[#8A777B]">
                          Share your idea and let's explore what's possible.
                        </p>
                      </div>

                      <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#722F45] text-white shadow-lg shadow-[#722F45]/15 sm:flex">
                        <Send size={22} />
                      </span>
                    </div>
                  </div>

                  {submitted ? (
                    <div className="px-7 py-16 text-center sm:px-12">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F2E4E6] text-[#722F45]">
                        <Check size={28} />
                      </div>

                      <h3 className="mt-7 font-serif text-3xl text-[#33272B]">
                        Your next step starts here.
                      </h3>

                      <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#806D72]">
                        Your email application should open with your message
                        prepared. Please review and send it to complete your
                        enquiry. If it doesn't open, email Halima directly at{" "}
                        <a
                          href="mailto:gongohalima@gmail.com"
                          className="font-semibold text-[#722F45] underline underline-offset-4"
                        >
                          gongohalima@gmail.com
                        </a>.
                      </p>

                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#DCCBC9] px-6 py-3 text-sm font-semibold text-[#722F45] transition-colors hover:bg-[#F8EEEE]"
                      >
                        Write another message
                        <ArrowUpRight size={16} />
                      </button>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-6 p-7 sm:p-9"
                    >
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2.5 block text-xs font-bold tracking-wide text-[#554249]"
                        >
                          Your name
                        </label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          placeholder="Your name or organisation"
                          required
                          className={inputStyle}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2.5 block text-xs font-bold tracking-wide text-[#554249]"
                        >
                          Email address
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="you@example.com"
                          required
                          className={inputStyle}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="mb-2.5 block text-xs font-bold tracking-wide text-[#554249]"
                        >
                          How can we work together?
                        </label>

                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          placeholder="Tell me about your story, project, collaboration or idea..."
                          required
                          className={`${inputStyle} resize-y leading-7`}
                        />
                      </div>

                      <button
                        type="submit"
                        className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#722F45] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#722F45]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5E2438] hover:shadow-xl"
                      >
                        Send an enquiry
                        <ArrowUpRight
                          size={18}
                          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </button>

                      <p className="text-center text-[11px] leading-5 text-[#A18C91]">
                        Your email app will open so you can review your
                        message before sending.
                      </p>
                    </form>
                  )}
                </div>

                <p className="mt-5 text-center font-serif text-sm italic text-[#A18C91]">
                  Every meaningful collaboration begins with a conversation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
