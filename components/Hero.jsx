'use client';

import { useEffect, useRef, useState } from 'react';

const ROLES = [
  'Full-Stack Web Developer',
  'Frontend React & Next.js Specialist',
  'UI/UX & Tailwind CSS Enthusiast',
  'CST Diploma Engineer',
];

const DESC_NORMAL =
  'Crafting high-performance web applications, responsive user interfaces, and modern digital experiences with';
const DESC_HIGHLIGHT = ['React.js,', 'Next.js,', 'and', 'Tailwind', 'CSS.'];

export default function Hero() {
  const [currentText, setCurrentText] = useState(ROLES[0]);
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(ROLES[0].length);
  const [isAnimate, setIsAnimate] = useState(true);
  const homeRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timer;

    if (!isDeleting && charIndex < currentRole.length) {
      timer = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
        setCurrentText(currentRole.substring(0, charIndex + 1));
      }, 85);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setCharIndex((prev) => prev - 1);
        setCurrentText(currentRole.substring(0, charIndex - 1));
      }, 45);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
      timer = setTimeout(() => {}, 400);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  // Observer to re-trigger staggered hero animation when entering view
  useEffect(() => {
    const el = homeRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimate(false);
            requestAnimationFrame(() => {
              setIsAnimate(true);
            });
          } else {
            setIsAnimate(false);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const normalWords = DESC_NORMAL.split(' ');
  let wordIdx = 9;

  return (
    <section
      ref={homeRef}
      id="home"
      className={`w-full relative min-h-[85vh] pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20 px-4 sm:px-8 md:px-16 flex flex-col items-center justify-center text-center z-10 ${
        isAnimate ? 'home-animate' : ''
      }`}
    >
      {/* Subtle Ambient Spotlight */}
      <div className="absolute -top-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl space-y-5 sm:space-y-6 z-10 mx-auto w-full">
        {/* Badge: Appears 1st */}
        <div
          style={{ '--seq-delay': '80ms' }}
          className="hero-seq-item inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-cyan-500/15 dark:bg-cyan-500/20 border border-cyan-600/30 dark:border-cyan-500/40 mx-auto shadow-[0_0_20px_rgba(6,182,212,0.2)] dark:shadow-[0_0_20px_rgba(6,182,212,0.35)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400 animate-ping" />
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-cyan-700 dark:text-cyan-300 uppercase">
            Welcome To My Portfolio
          </span>
        </div>

        {/* Heading: Word-by-word sequential animation */}
        <h1 className="text-2xl min-[400px]:text-3xl sm:text-5xl md:text-6xl font-extrabold leading-[1.2] sm:leading-[1.18] tracking-tight text-slate-900 dark:text-white">
          <span style={{ '--word-idx': 1 }} className="hero-word mr-1.5 sm:mr-2">
            Hi,
          </span>
          <span style={{ '--word-idx': 2 }} className="hero-word mr-1.5 sm:mr-2">
            I&apos;m
          </span>
          <span
            style={{ '--word-idx': 3 }}
            className="hero-word glowing-text text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 dark:from-cyan-400 dark:via-blue-400 dark:to-pink-400 mr-1.5 sm:mr-2"
          >
            Md.
          </span>
          <span
            style={{ '--word-idx': 4 }}
            className="hero-word glowing-text text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 dark:from-cyan-400 dark:via-blue-400 dark:to-pink-400 mr-1.5 sm:mr-2"
          >
            Rifatul
          </span>
          <span
            style={{ '--word-idx': 5 }}
            className="hero-word glowing-text text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 dark:from-cyan-400 dark:via-blue-400 dark:to-pink-400"
          >
            Islam
          </span>
        </h1>

        {/* Dynamic Typewriter Role Bar */}
        <div
          style={{ '--seq-delay': '750ms' }}
          className="hero-seq-item flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-mono font-semibold text-cyan-700 dark:text-cyan-300 px-2"
        >
          <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-cyan-500/15 dark:bg-cyan-500/20 border border-cyan-600/30 dark:border-cyan-500/40 shadow-sm shrink-0">
            I am a
          </span>
          <span className="break-words">{currentText}</span>
          <span className="inline-block w-[2px] h-[1.1em] bg-sky-400 ml-0.5 align-middle animate-blink-cursor" />
        </div>

        {/* Description: Word-by-word smooth cascade */}
        <p className="text-slate-800 dark:text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto px-1 sm:px-2">
          {normalWords.map((word, i) => {
            const currentIdx = wordIdx++;
            return (
              <span
                key={`nw-${i}`}
                style={{ '--word-idx': currentIdx }}
                className="hero-word mr-1"
              >
                {word}
              </span>
            );
          })}
          {DESC_HIGHLIGHT.map((word, i) => {
            const currentIdx = wordIdx++;
            return (
              <span
                key={`hw-${i}`}
                style={{ '--word-idx': currentIdx }}
                className="hero-word text-cyan-600 dark:text-cyan-400 font-medium mr-1"
              >
                {word}
              </span>
            );
          })}
        </p>

        {/* Quick Action Buttons */}
        <div
          style={{ '--seq-delay': '2350ms' }}
          className="hero-seq-item pt-2 flex flex-col min-[480px]:flex-row items-center justify-center gap-3 w-full max-w-xs min-[480px]:max-w-none mx-auto"
        >
          <a
            href="#projects"
            className="w-full min-[480px]:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white text-xs sm:text-sm font-semibold shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-105 active:scale-95"
          >
            <i className="fa-solid fa-rocket" /> Explore Projects
          </a>
          <a
            href="#about"
            className="w-full min-[480px]:w-auto px-6 py-3 rounded-full bg-slate-900/5 dark:bg-white/10 border border-slate-300 dark:border-white/20 text-slate-800 dark:text-gray-200 text-xs sm:text-sm font-semibold hover:bg-slate-900/10 dark:hover:bg-white/20 flex items-center justify-center gap-2 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-105 active:scale-95"
          >
            <i className="fa-solid fa-user-astronaut" /> Know About Me
          </a>
        </div>
      </div>
    </section>
  );
}
