'use client';

import { useState, useRef, useEffect } from 'react';

const SEGMENTS = [
  { text: "I'm", cls: '' },
  { text: 'Md. Rifatul Islam,', cls: 'text-slate-900 dark:text-white font-bold' },
  {
    text: 'currently studying in the 8th Semester of Computer Science & Technology (CST) at Infra Polytechnic Institute, Barishal, while residing in',
    cls: '',
  },
  { text: 'Dhaka, Bangladesh.', cls: 'text-pink-500 font-semibold' },
  { text: 'I combine technical engineering fundamentals with modern frontend artistry.', cls: '' },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [tiltStyle, setTiltStyle] = useState({});
  const [imgSrc, setImgSrc] = useState('/profile.jpg');
  const aboutRef = useRef(null);

  // Scroll reveal observer
  useEffect(() => {
    const el = aboutRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 3D Tilt calculation
  const handleMouseMove = (e) => {
    if (typeof window !== 'undefined' && window.matchMedia && !window.matchMedia('(hover: hover)').matches) {
      return;
    }
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
    });
  };

  let aboutIdx = 0;

  return (
    <section
      ref={aboutRef}
      id="about"
      className={`scroll-reveal relative rounded-3xl p-[1.5px] bg-glowing-gradient bg-[length:300%_300%] animate-gradient-border shadow-glowing transition-all duration-500 ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="bg-lightCard dark:bg-cardBg rounded-[22.5px] p-5 sm:p-10 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 relative overflow-hidden">
        {/* Subtle Ambient Spotlight */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

        {/* Left Side: About Details */}
        <div className="flex-1 space-y-5 sm:space-y-6 z-10 w-full">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-cyan-500 dark:text-cyan-400 uppercase">
              Know About Me
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-[1.2] sm:leading-[1.18] tracking-tight">
            Passionate{' '}
            <span className="glowing-text text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500">
              CST Diploma Engineer
            </span>{' '}
            &amp; Developer
          </h2>

          <p className="text-slate-700 dark:text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed">
            {SEGMENTS.map((seg, sIdx) => {
              const words = seg.text.split(' ');
              return words.map((word, wIdx) => {
                const currentIdx = aboutIdx++;
                return (
                  <span
                    key={`seg-${sIdx}-w-${wIdx}`}
                    style={{ '--about-idx': currentIdx }}
                    className={`about-word mr-1 ${seg.cls}`}
                  >
                    {word}
                  </span>
                );
              });
            })}
          </p>

          {/* Quick Highlight Pills */}
          <div className="grid grid-cols-1 min-[420px]:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
            <div className="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center gap-2.5 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-105 active:scale-95">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center shrink-0">
                <i className="fa-solid fa-code text-xs" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-medium uppercase">Domain</p>
                <p className="text-xs font-bold text-slate-800 dark:text-white">Full-Stack</p>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center gap-2.5 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-105 active:scale-95">
              <div className="w-8 h-8 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center shrink-0">
                <i className="fa-solid fa-graduation-cap text-xs" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-medium uppercase">Education</p>
                <p className="text-xs font-bold text-slate-800 dark:text-white">CST 8th Sem</p>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center gap-2.5 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-105 active:scale-95">
              <div className="w-8 h-8 rounded-xl bg-pink-500/15 text-pink-400 flex items-center justify-center shrink-0">
                <i className="fa-solid fa-location-dot text-xs" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-medium uppercase">Location</p>
                <p className="text-xs font-bold text-slate-800 dark:text-white">Dhaka, BD</p>
              </div>
            </div>
          </div>

          <div className="pt-1">
            <p className="text-slate-800 dark:text-white font-semibold italic text-xs sm:text-sm md:text-base border-l-4 border-pink-500 pl-3.5 py-0.5 drop-shadow-[0_0_12px_rgba(236,72,153,0.3)]">
              &quot;Transforming creative ideas into elegant, responsive digital experiences.&quot;
            </p>
          </div>
        </div>

        {/* Right Side: Profile Card with 3D Tilt */}
        <div className="relative w-full max-w-[270px] sm:max-w-[290px] flex flex-col items-center z-10 mt-2 lg:mt-0">
          <div className="animate-float-slow -mb-3.5 z-20 bg-white/95 dark:bg-[#0d0f17]/95 backdrop-blur-md border border-slate-200 dark:border-white/15 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span className="text-[11px] font-medium text-slate-700 dark:text-gray-200 whitespace-nowrap">
              CST Diploma Engineer
            </span>
          </div>

          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={tiltStyle}
            className="tilt-card [transform-style:preserve-3d] [backface-visibility:hidden] transition-transform duration-200 ease-out w-full rounded-2xl p-[1.5px] bg-glowing-gradient bg-[length:300%_300%] animate-gradient-border shadow-2xl cursor-pointer"
          >
            <div className="bg-slate-100 dark:bg-[#161923] rounded-[14.5px] overflow-hidden relative group">
              <div className="w-full h-80 sm:h-96 overflow-hidden bg-slate-800 relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imgSrc}
                  onError={() =>
                    setImgSrc('https://placehold.co/600x750/161923/38bdf8?text=Md.+Rifatul+Islam')
                  }
                  alt="Md. Rifatul Islam - About Profile"
                  className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#090a0f]/95 via-[#090a0f]/40 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">Md. Rifatul Islam</p>
                    <p className="text-cyan-400 text-[11px] font-medium">Infra Polytechnic</p>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-md text-[10px] text-gray-200 border border-white/10">
                    Barishal / Dhaka
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
