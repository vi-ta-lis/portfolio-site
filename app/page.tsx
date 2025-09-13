"use client";

import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseIcon,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MessageSquare,
  Twitter,
  Users,
} from "lucide-react";
import HeadShot from "../public/Img/the-head-ss.jpg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FitFam from "../public/Img/fitfam.png";
import Lend from "../public/Img/Lend.png";
import Sub from "../public/Img/SubTrack.png";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 font-sans text-gray-800">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ProjectsSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Services",
    "Skills",
    "Projects",
    "Testimonials",
    "Contact",
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold hover:text-violet-500 transition-colors"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
              Vitalis Kalu
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-violet-500 transition-colors text-sm font-medium"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Hamburger button */}
          <button
            className="md:hidden text-gray-800 z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              // Close icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav with animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-4 bg-white p-4 rounded-lg shadow-lg">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-600 hover:text-violet-500 transition-colors text-sm font-medium"
                onClick={() => setIsOpen(false)} // close menu when clicked
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="pt-24 pb-16 md:pt-40 md:pb-28 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* ==== Left Content ==== */}
          <div className="w-full md:w-1/2 z-10 text-center md:text-left">
            <div className="relative">
              {/* Decorative blurs */}
              <div className="absolute -top-10 -left-10 w-32 h-32 md:w-40 md:h-40 bg-violet-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 md:w-40 md:h-40 bg-fuchsia-500/20 rounded-full blur-3xl"></div>

              <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-snug md:leading-tight animate-fade-in text-gray-800">
                Hi, I'm{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
                  Vitalis Kalu
                </span>
                <br />
                <span className="text-2xl md:text-5xl block mt-2">
                  a Highly Skilled Front-end Developer
                </span>
              </h1>

              <p className="text-base md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0 animate-fade-in-delay">
                I build responsive and visually compelling digital experiences
                with a strong focus on clean design, performance, and intuitive
                user interfaces. My goal is to help businesses deliver seamless
                interactions that elevate their brand in the digital space.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Link
                  href="#projects"
                  className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-medium text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-fade-in-delay-2"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-medium text-gray-700 bg-white border border-gray-200 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300 animate-fade-in-delay-2"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>

          {/* ==== Right Content (Image) ==== */}
          <div className="w-full md:w-1/2 relative flex justify-center">
            {/* Background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 md:w-80 md:h-80 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full blur-3xl opacity-20"></div>

            {/* Headshot */}
            <div className="relative z-10 w-64 h-80 md:w-full md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden border-4 border-white shadow-2xl transform md:rotate-3 md:hover:rotate-0 transition-all duration-500">
              <Image
                src={HeadShot}
                alt="Vitalis Kalu"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Extra blur accent */}
            <div className="absolute -bottom-6 -left-6 w-28 h-28 md:w-40 md:h-40 bg-teal-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: "4+", label: "Years Experience" },
    { value: "20+", label: "Projects Completed" },
    { value: "20+", label: "Happy Clients" },
    { value: "5", label: "Awards Received" },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-8 text-center ${
                  index < stats.length - 1 ? "border-r border-gray-100" : ""
                }`}
              >
                <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src={HeadShot}
                  alt="John Doe"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="inline-block mb-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-1 text-gray-800">
                  About Me
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"></div>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                I am a Software engineer building modern, accessible Front-end
                applications with React, Next.js, and creating beautiful user
                interfaces with Tailwind CSS & Daisy UI.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                I combine technical expertise with a design-driven mindset to
                deliver solutions that are practical, user-friendly, and
                visually appealing. I’m dedicated to growing my skill set and
                staying ahead in the ever-evolving world of web development.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="https://docs.google.com/document/d/1LXhUabNGB8dDX2soh55yKMjUMvBJmzB5/edit?usp=sharing&ouid=102308897836981882441&rtpof=true&sd=true">
                  <button className="inline-flex items-center px-6 py-3 text-gray-700 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300 font-medium">
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </button>
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 font-medium"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Hire Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: "⚛️",
      title: "Web Development",
      description:
        "Building responsive, high-performance websites and web applications using the latest technologies.",
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description:
        "Developing cross-platform mobile applications for iOS and Android devices.",
    },
    {
      icon: "🔍",
      title: "SEO Optimization",
      description:
        "Improving website visibility and search engine rankings through proven SEO strategies.",
    },
    {
      icon: "🛒",
      title: "E-commerce Solutions",
      description:
        "Building online stores with secure payment processing and inventory management.",
    },
    {
      icon: "🛠️",
      title: "Maintenance & Support",
      description:
        "Providing ongoing maintenance, updates, and technical support for web applications.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              My Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I offer a comprehensive range of services to help businesses
              establish a strong online presence and achieve their digital
              goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-violet-100 flex items-center justify-center text-3xl mb-6 group-hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-violet-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "ReactNative", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "Tailwind CSS", icon: "🎨" },
  ];

  const otherSkills = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "Redux",
    "GraphQL",
    "REST API",
    "Git",
    "GitHub",
    "Responsive Design",
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              My Skills
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I've built strong expertise in modern frontend technologies and
              tools, combining technical know-how with design sensitivity to
              craft seamless digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Main Skills */}
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center p-4 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition"
                >
                  <span className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-lg mr-3 text-xl">
                    {skill.icon}
                  </span>
                  <span className="font-medium text-gray-800">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Other Skills */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-gray-800">
                Other Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {otherSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "FitfamPay",
      description:
        "Many people struggle to find affordable gyms nearby or deal with inconvenient payment options. FitfamPay solves this by offering a location-based platform where users can discover gyms, compare plans, and make seamless payments, all in one place.",
      image: FitFam,
      tags: ["React", "Tailwind CSS", "MapBox API"],
      demoLink: "https://fitfam-pay.vercel.app/",
      githubLink: "https://github.com/vi-ta-lis/Fitfam-Pay",
    },
    {
      title: "Loan Management Dashboard ",
      description:
        "Lenders often face difficulties keeping track of loans, repayments, and outstanding balances. This dashboard provides a real-time solution, enabling lenders to efficiently manage accounts, monitor activity, and stay on top of finances",
      image: Lend,
      tags: [
        "React",
        "Framer Motion",
        "Tailwind CSS",
        "TypeScript",
        "API Integration",
      ],
      demoLink: "https://vitalis-kalu-lendsqr-fe-test.vercel.app/",
      githubLink: "https://github.com/vi-ta-lis/lendsqr-fe-test",
    },
    {
      title: "Subscription Management App",
      description:
        "Managing multiple subscriptions can be confusing and costly, with missed renewals and hidden charges. Subtrack simplifies this by centralizing all subscriptions, tracking renewal dates, and giving users a clear view of their expenses",
      image: Sub,
      tags: ["React", "JavaScript", "Tailwind CSS", "Redux"],
      demoLink: "https://subtrak-jade.vercel.app/",
      githubLink: "https://github.com/vi-ta-lis/Subtrak",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 relative">
      <div className="absolute top-0 left-0 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              My Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects. Each one was carefully
              crafted with attention to detail, performance, and user
              experience.
            </p>
          </div>
          {/* <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-full bg-white shadow-md p-1">
              {["All", "Web", "Mobile", "Design", "E-commerce"].map(
                (filter, index) => (
                  <button
                    key={index}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                      index === 0
                        ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white"
                        : "text-gray-600 hover:text-violet-500"
                    }`}
                  >
                    {filter}
                  </button>
                )
              )}
            </div>
          </div> */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-60 transition-opacity z-10"></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <Link
                      href={project.demoLink}
                      className="text-violet-500 hover:text-fuchsia-500 font-medium text-sm flex items-center transition-colors"
                    >
                      Live Demo
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </Link>
                    <Link
                      href={project.githubLink}
                      className="text-gray-600 hover:text-violet-500 font-medium text-sm flex items-center transition-colors"
                    >
                      <Github className="mr-1 h-4 w-4" />
                      Code
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            {/* <Link
              href="#"
              className="inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 font-medium"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}

// function TestimonialsSection() {
//   const testimonials = [
//     {
//       content:
//         "John delivered our project on time and exceeded our expectations. His attention to detail and creative problem-solving made all the difference.",
//       name: "Sarah Johnson",
//       position: "Marketing Director, TechCorp",
//       avatar: "/placeholder.svg?height=64&width=64",
//     },
//     {
//       content:
//         "Working with John was a pleasure. He understood our vision and created a website that perfectly represents our brand. Highly recommended!",
//       name: "Michael Chen",
//       position: "CEO, InnovateLabs",
//       avatar: "/placeholder.svg?height=64&width=64",
//     },
//     {
//       content:
//         "John's expertise in web development is unmatched. He created a user-friendly interface that has significantly improved our conversion rates.",
//       name: "Emily Rodriguez",
//       position: "Product Manager, GrowthSoft",
//       avatar: "/placeholder.svg?height=64&width=64",
//     },
//   ];

//   return (
//     <section id="testimonials" className="py-20 relative">
//       <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
//       <div className="container mx-auto px-6 relative z-10">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
//               Client Testimonials
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Don't just take my word for it. Here's what my clients have to say
//               about working with me.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 relative"
//               >
//                 <div className="absolute top-6 right-8 text-violet-200 transform scale-150">
//                   <MessageSquare size={40} />
//                 </div>
//                 <p className="text-gray-600 mb-8 relative z-10">
//                   {testimonial.content}
//                 </p>
//                 <div className="flex items-center">
//                   <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
//                     <Image
//                       src={testimonial.avatar || "/placeholder.svg"}
//                       alt={testimonial.name}
//                       width={48}
//                       height={48}
//                     />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-800">
//                       {testimonial.name}
//                     </h4>
//                     <p className="text-gray-500 text-sm">
//                       {testimonial.position}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

function ProcessSection() {
  const process = [
    {
      icon: <Users size={24} />,
      title: "Discovery",
      description:
        "Understanding your business needs, target audience, and project goals through in-depth consultation.",
    },
    {
      icon: <BookOpen size={24} />,
      title: "Planning",
      description:
        "Creating a detailed project roadmap, wireframes, and technical specifications.",
    },
    {
      icon: <BriefcaseIcon size={24} />,
      title: "Development",
      description:
        "Building your project using modern technologies and best practices for optimal performance.",
    },
    {
      icon: <Award size={24} />,
      title: "Delivery",
      description:
        "Rigorous testing, refinement, and launching your project with ongoing support and maintenance.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              My Work Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I follow a structured approach to ensure every project is
              delivered successfully and meets your expectations.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 transform -translate-y-1/2 z-0"></div>

            {process.map((step, index) => (
              <div key={index} className="md:w-1/4 relative z-10 mb-10 md:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center mb-6 text-violet-500">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-center text-gray-600 px-4">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Get In Touch
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach
              out and I'll get back to you as soon as possible.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Contact Information
                </h3>
                <p className="mb-8 text-gray-600">
                  I'd love to hear from you. Fill out the form or reach out
                  directly through the following channels:
                </p>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 mr-4 text-violet-500" />
                    <span className="text-gray-700">
                      vitaliskalu7@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-6 w-6 mr-4 flex items-center justify-center text-violet-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">+2348118619514</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-6 w-6 mr-4 flex items-center justify-center text-violet-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">Lagos, Nigeria</span>
                  </div>
                </div>
                <div className="mt-12 flex space-x-4">
                  <Link
                    href="https://x.com/VitalisKalu?s=09"
                    className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors text-violet-500 shadow-sm"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://linkedin.com/in/vitalis-kalu

"
                    className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors text-violet-500 shadow-sm"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://github.com/vi-ta-lis"
                    className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors text-violet-500 shadow-sm"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="p-8 md:p-12">
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all"
                      placeholder="Project inquiry"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "I offer web development, UI/UX design, mobile app development, e-commerce solutions, SEO optimization, and ongoing maintenance and support services.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months. I'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "What is your design process?",
      answer:
        "My design process involves discovery (understanding your needs), planning (wireframes and mockups), design implementation, feedback and revisions, and final delivery. I keep you involved throughout the process.",
    },
    {
      question: "Do you provide maintenance after project completion?",
      answer:
        "Yes, I offer ongoing maintenance packages to ensure your website remains secure, up-to-date, and performing optimally. This includes regular updates, security patches, and technical support.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Answers to common questions about my services, process, and
              workflow.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer">
                    <h3 className="text-lg font-bold text-gray-800">
                      {faq.question}
                    </h3>
                    <span className="transition-transform duration-300 group-open:rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-violet-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Have more questions? Feel free to reach out directly.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 font-medium"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
              Vitalis Kalu
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              I create beautiful, functional websites and applications that help
              businesses grow and succeed in the digital world.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors text-violet-500"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors text-violet-500"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors text-violet-500"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Projects", "Blog", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-600 hover:text-violet-500 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-violet-500 mt-1" />
                <span className="text-gray-600">vitaliskalu7@gmail.com</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 mr-3 flex items-center justify-center text-violet-500 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span className="text-gray-600">+2348118619514</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 mr-3 flex items-center justify-center text-violet-500 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span className="text-gray-600">Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Vitalis Kalu. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0"></div>
        </div>
      </div>
    </footer>
  );
}
