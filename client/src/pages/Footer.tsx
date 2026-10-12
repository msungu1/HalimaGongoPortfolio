import React from "react";
import { Youtube, Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-2 border-[#722F45]/20 bg-[#FAF7F2] text-[#1F181A]">

      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#B85B7A]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 right-0 h-[28rem] w-[28rem] rounded-full bg-[#722F45]/10 blur-3xl" />

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
                  border-2 border-[#722F45]
                  bg-[#722F45]
                  text-base font-black tracking-tight text-white
                  shadow-xl shadow-[#722F45]/20
                  transition-all duration-500
                  group-hover:-rotate-3
                  group-hover:bg-[#B85B7A]
                "
              >
                HG
              </span>

              {/* Name */}
              <span>
                <span className="block text-base font-black tracking-[0.12em] text-[#722F45]">
                  HALIMA GONGO
                </span>

                <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.25em] text-[#B85B7A]">
                  Media · Film · Advocacy
                </span>
              </span>
            </a>

            <p className="mt-7 max-w-lg text-sm font-medium leading-7 text-[#1F181A]/80">
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
                  border-2 border-[#722F45]/30
                  bg-white
                  text-[#722F45]
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#722F45]
                  hover:bg-[#722F45]
                  hover:text-white
                  hover:shadow-md
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
                  border-2 border-[#722F45]/30
                  bg-white
                  text-[#722F45]
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#722F45]
                  hover:bg-[#722F45]
                  hover:text-white
                  hover:shadow-md
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
                  border-2 border-[#722F45]/30
                  bg-white
                  text-[#722F45]
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#722F45]
                  hover:bg-[#722F45]
                  hover:text-white
                  hover:shadow-md
                "
              >
                <Phone size={17} strokeWidth={1.8} />
              </a>

            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <h3 className="mb-6 text-[11px] font-black uppercase tracking-[0.25em] text-[#722F45]">
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
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="
                    group flex w-fit items-center gap-2
                    text-sm font-bold text-[#1F181A]/70
                    transition-all duration-300
                    hover:text-[#722F45]
                  "
                >
                  <span
                    className="
                      h-0.5 w-0
                      bg-[#B85B7A]
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
            <h3 className="mb-6 text-[11px] font-black uppercase tracking-[0.25em] text-[#722F45]">
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
                  className="mt-0.5 shrink-0 text-[#722F45]"
                  strokeWidth={2}
                />
                <span className="text-sm font-bold text-[#1F181A]/80 transition-colors duration-300 group-hover:text-[#B85B7A]">
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
                  className="mt-0.5 shrink-0 text-[#722F45]"
                  strokeWidth={2}
                />
                <span className="text-sm font-bold text-[#1F181A]/80 transition-colors duration-300 group-hover:text-[#B85B7A]">
                  +254 715 490 179
                </span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#722F45] shadow-md shadow-[#722F45]/40" />
                <span className="text-sm font-medium leading-6 text-[#1F181A]/70">
                  Kenya · East Africa
                </span>
              </div>

            </div>

            {/* Back to top */}
            <a
              href="#home"
              className="
                group mt-8 inline-flex items-center gap-3
                text-sm font-black text-[#722F45]
                transition-colors duration-300
                hover:text-[#B85B7A]
              "
            >
              Back to top
              <span
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-full
                  border-2 border-[#722F45]
                  bg-white
                  transition-all duration-300
                  group-hover:-translate-y-1
                  group-hover:bg-[#722F45]
                  group-hover:text-white
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
        <div className="border-y-2 border-[#722F45]/15 py-9">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="text-3xl font-black tracking-tight text-[#722F45] md:text-4xl">
                Stories that{" "}
                <span className="font-serif font-normal italic text-[#B85B7A]">
                  matter.
                </span>
              </p>

              <p className="mt-3 text-[10px] font-black uppercase tracking-[0.25em] text-[#722F45]/60">
                Documentary · Photography · Journalism
              </p>
            </div>

            <div className="hidden h-12 w-0.5 bg-[#722F45]/20 md:block" />

            <p className="max-w-xs text-sm font-medium leading-6 text-[#1F181A]/70 md:text-right">
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
            text-xs font-bold text-[#1F181A]/60
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
            <span className="h-1.5 w-1.5 rounded-full bg-[#722F45]" />
            East Africa
          </span>
        </div>

      </div>
    </footer>
  );
}