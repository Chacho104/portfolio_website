"use client";

import Link from "next/link";

import { IconType } from "react-icons";
import { BiChevronDown } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";

import Projects from "./components/content/projects";
import ContactMe from "./components/content/contact-me";
import CtaButton from "./components/ui-elements/cta-button";

// Define type for social handles

type Socials = { id: string; label: string; icon: IconType; url: string };

export default function Home() {
  const socials: Socials[] = [
    {
      id: "linkedin",
      label: "LinkedIn",
      icon: BsLinkedin,
      url: "https://www.linkedin.com/in/churchilowino/",
    },
    {
      id: "github",
      label: "GitHub",
      icon: BsGithub,
      url: "https://github.com/Chacho104",
    },
    { id: "twitter", label: "Twitter", icon: BsTwitter, url: "/" },
  ];

  return (
    <main className="w-full h-auto bg-background flex">
      <div className="w-full h-full bg-container-bg mx-0 sm:mx-10 my-0 sm:my-2">
        <div className="px-4 sm:px-20">
          {/* Sections with IDs */}
          <section className="w-full h-screen flex items-center justify-between">
            <div className="space-y-10 w-3/4">
              <div
                className="w-20 border-t-2 border-headings"
                aria-label="A div to render a small to border"
              />
              <div className="space-y-2">
                <h1 className="text-6xl text-headings leading-snug font-mono">
                  I&apos;m Churchil,
                  <br /> a Web Developer
                </h1>
                <p className="text-par tracking-wide">
                  Proactive and detail-oriented, passionate about crafting
                  elegant interfaces
                  <br /> that delight users and exceed expectations.
                </p>
              </div>
              {/* Button to scroll to the about me section */}
              <CtaButton
                label="BROWSE PORTFOLIO"
                icon={BiChevronDown}
                onClick={() => {}}
              />
            </div>
            <div className="w-1/4">
              <div className="space-y-2 sm:space-y-4">
                <h2 className="text-headings font-mono">ABOUT ME</h2>
                <p className="text-par text-sm">
                  Looking to start immediately? Need an expert in HTML5, CSS3,
                  JS/TS, React, Next, and Node/Express? Let&apos;s talk!
                  Different tech stack? I learn fast—reach out anyway!
                </p>
                {/* Button to scroll to the contact me form section */}
                <button
                  type="button"
                  className="flex items-center gap-x-2 border-b-[1px] pb-1 hover:animate-pulse transition-transform duration-300 text-links"
                >
                  <span className="text-xs">CONTACT ME</span>
                  <FaArrowRight size={16} />
                </button>
              </div>
              <div
                className="w-full border-t-[1px] border-gray-600 my-10"
                aria-label="A div to render a small to border"
              />
              <div className="space-y-2 sm:space-y-4">
                <h2 className="text-headings font-mono">MY WORK</h2>
                <p className="text-par text-sm">
                  Tripled e-commerce sales in 3 months through mobile-first
                  design & development, page & query speed optimizations,
                  improved navigation, and SEO best practices.
                </p>
                {/* Button to scroll to the about me section */}
                <button
                  type="button"
                  className="flex items-center gap-x-2 border-b-[1px] pb-1 hover:animate-pulse transition-transform duration-300 text-headings"
                >
                  <span className="text-xs">BROWSE PORTFOLIO</span>
                  <FaArrowRight size={16} />
                </button>
              </div>
              <div
                className="w-full border-t-[1px] border-gray-600 my-10"
                aria-label="A div to render a small to border"
              />
              <div className="space-y-2 sm:space-y-4">
                <h2 className="text-headings font-mono">FOLLOW ME</h2>
                <div className="flex items-center gap-x-6">
                  {socials.map((social) => (
                    <Link
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      className="text-btn-bg hover:animate-pulse transition-transform duration-300"
                    >
                      <social.icon size={24} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="w-full h-auto">
            <Projects />
          </section>
          <section className="w-full h-auto">
            <ContactMe />
          </section>
        </div>
      </div>
    </main>
  );
}
