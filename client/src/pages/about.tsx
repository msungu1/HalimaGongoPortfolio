// import {
//   Aperture,
//   ArrowDown,
//   ArrowUpRight,
//   Award,
//   Camera,
//   Check,
//   Clapperboard,
//   Globe2,
//   GraduationCap,
//   HeartHandshake,
//   Mail,
//   MapPin,
//   Menu,
//   Mic2,
//   MoveRight,
//   NotebookPen,
//   Phone,
//   Play,
//   Send,
//   Sparkles,
//   Users,
//   X,
// } from "lucide-react";
// const skills = [
//   "Documentary producing",
//   "Directing",
//   "Filming",
//   "Scripting",
//   "Editing",
//   "Voicing",
//   "Photography (impact & advocacy)",
//   "Videography (impact & advocacy)",
//   "Strategic storytelling",
//   "Content strategy",
//   "Community engagement",
//   "Mentorship",
//   "Digital & social media strategy",
//   "Training & capacity building",
// ];
// // Move these data declarations from Home.tsx into this file:
// // skills, aboutFacts, documentaryProjects, career, awards, education

// export default function About() {
//   return (
//     <>
//       {/* ABOUT SECTION */}
//       <section id="about" className="relative overflow-hidden bg-white py-24 md:py-32">
//   {/* Background decoration */}
//   <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-100/60 blur-3xl" />
//   <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-sky-100/70 blur-3xl" />

//   <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

//     {/* Section label */}
//     <div className="mb-10 flex items-center gap-4">
//       <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white">
//         01
//       </span>

//       <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
//         About the practice
//       </span>

//       <div className="h-px flex-1 bg-slate-200" />
//     </div>

//     {/* Heading */}
//     <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
//       <div>
//         <h2 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
//           Stories that
//           <span className="block text-orange-500">stay with you.</span>
//         </h2>
//       </div>

//       <p className="max-w-xl text-lg leading-8 text-slate-500 lg:pb-2">
//         A documentary practice built around attention: to people, to place,
//         and to the possibility of change.
//       </p>
//     </div>

//     {/* Main content */}
//     <div className="mt-20 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">

//       {/* Statement */}
//       <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl md:p-12">
//         {/* Decorative circle */}
//         <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10" />
//         <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-orange-400/20" />

//         <div className="relative">
//           <div className="mb-8 text-6xl font-serif leading-none text-orange-400">
//             “
//           </div>

//           <p className="max-w-3xl text-xl font-medium leading-9 text-white/90 md:text-2xl md:leading-10">
//             I specialise in storytelling that highlights community-driven
//             solutions, amplifying marginalised voices and inspiring positive
//             social change. My work spans media reporting, documentary and film
//             production, photography, videography, and strategic multimedia
//             content creation for organisations across East Africa.
//           </p>

//           <p className="mt-6 max-w-3xl text-base leading-8 text-white/55">
//             I am committed to producing human-interest, constructive narratives
//             that empower communities and elevate their stories to wider
//             audiences.
//           </p>

//           {/* Languages */}
//           <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-white/10 pt-7">
//             <span className="mr-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
//               Languages
//             </span>

//             <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold">
//               English
//             </span>

//             <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold">
//               Kiswahili
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Skills */}
//       <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 md:p-10">
//         <div className="mb-8">
//           <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
//             What I bring to the frame
//           </span>

//           <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
//             Skills &amp; expertise
//           </h3>
//         </div>

//         <div className="flex flex-wrap gap-3">
//           {skills.map((skill) => (
//             <span
//               key={skill}
//               className="group rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
//             >
//               {skill}
//             </span>
//           ))}
//         </div>

//         <div className="mt-12 rounded-2xl bg-orange-500 p-6 text-white shadow-lg">
//           <div className="flex items-start gap-4">
//             <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
//               <Sparkles size={18} />
//             </div>

//             <div>
//               <p className="text-sm font-bold leading-6">
//                 Constructive journalism
//               </p>

//               <p className="mt-1 text-sm leading-6 text-white/75">
//                 Impact-led media · Community at the centre
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* Facts */}
//     <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//       {aboutFacts.map((group, index) => (
//         <div
//           key={group.label}
//           className="group rounded-[1.75rem] border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
//         >
//           <div className="mb-6 flex items-center justify-between">
//             <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
//               {group.label}
//             </span>

//             <span className="text-xs font-bold text-orange-400">
//               0{index + 1}
//             </span>
//           </div>

//           <ul className="space-y-5">
//             {group.items.map((item) => (
//               <li
//                 key={item.title}
//                 className="border-b border-slate-100 pb-5 last:border-0 last:pb-0"
//               >
//                 <strong className="block text-base font-bold text-slate-950">
//                   {item.title}
//                 </strong>

//                 <span className="mt-1 block text-sm leading-6 text-slate-500">
//                   {item.detail}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//       {/* WORK SECTION */}
//       <section id="work">
//         {/* Move your documentary/work section JSX here */}
//       </section>

//       {/* CAREER SECTION */}
//       <section id="career">
//         {/* Move your existing Career timeline JSX here */}
//       </section>

//       {/* AWARDS SECTION */}
//       <section id="awards">
//         {/* Move the Awards JSX here */}
//       </section>

//       {/* EDUCATION SECTION */}
//       <section id="education">
//         {/* Move the Education JSX here */}
//       </section>
//     </>
//   );
// }