'use client';

import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Theme Toggle Effect
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      setIsDarkMode(false);
    } else {
      html.classList.add('dark');
      setIsDarkMode(true);
    }
  };

  // Close mobile menu on outside tap
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleOutsideClick = (e) => {
      const panel = document.getElementById('mobile-nav-panel');
      const toggle = document.getElementById('mobile-menu-toggle');
      if (panel && !panel.contains(e.target) && toggle && !toggle.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [mobileMenuOpen]);

  // Active section tracking on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection('contact');
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-2.5 sm:px-4 flex justify-center pointer-events-none">
      <div className="animate-nav-float origin-top hover:[animation-play-state:paused] hover:-translate-y-1 hover:scale-[1.012] pointer-events-auto rounded-2xl p-[1.5px] bg-glowing-gradient bg-[length:300%_300%] animate-gradient-border shadow-glowing transition-all duration-300 w-full max-w-4xl hover:shadow-[0_0_50px_rgba(6,182,212,0.35),0_0_70px_rgba(236,72,153,0.25)]">
        <nav className="bg-white/90 dark:bg-[#0d0f17]/90 backdrop-blur-xl rounded-[14.5px] px-2.5 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between gap-1.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),_inset_0_-1px_1px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_inset_0_-1px_1px_rgba(0,0,0,0.4)]">
          {/* Brand Name + Green Active Status */}
          <a
            href="#home"
            className="group flex flex-col justify-center shrink-0 px-1.5 sm:px-2 py-0.5 rounded-xl hover:bg-slate-100/70 dark:hover:bg-white/5 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-105 active:translate-y-0.5 active:scale-95"
          >
            <span className="text-xs sm:text-sm font-extrabold tracking-tight leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent group-hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.5)] transition-all">
              Rifatul Islam
            </span>
            <span className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold text-emerald-500 dark:text-emerald-400 leading-none mt-0.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
              </span>
              Active
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-0.5 lg:gap-1 text-xs font-semibold">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:rounded-full after:bg-gradient-to-r after:from-cyan-400 after:via-blue-500 after:to-pink-500 after:transition-[width] after:duration-300 hover:after:w-full transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-105 active:translate-y-0.5 active:scale-95 px-2.5 py-1.5 rounded-lg ${
                    isActive
                      ? 'after:w-full text-cyan-500 dark:text-cyan-400 font-bold bg-cyan-500/10 shadow-[0_0_14px_rgba(6,182,212,0.25)]'
                      : 'after:w-0 text-slate-600 dark:text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right Controls: Dark Mode -> Colorful Social Icons -> Hire Me -> Mobile Toggle */}
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              type="button"
              aria-label="Toggle Theme"
              className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-500 dark:text-yellow-300 hover:bg-amber-500/20 hover:shadow-[0_0_18px_rgba(251,191,36,0.55)] hover:rotate-12 cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-105 active:translate-y-0.5 active:scale-95 shrink-0"
            >
              <i className={`fa-solid ${isDarkMode ? 'fa-moon' : 'fa-sun'} text-xs`} />
            </button>

            {/* Colorful Social Media Icons */}
            <div className="hidden lg:flex items-center gap-1.5 px-2 border-x border-slate-200 dark:border-white/10">
              <a
                href="https://github.com/rifat-code33"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group w-8 h-8 rounded-xl bg-slate-100 dark:bg-white/10 border border-slate-300 dark:border-white/15 flex items-center justify-center text-slate-800 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 hover:shadow-[0_0_18px_rgba(255,255,255,0.45)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-105 active:translate-y-0.5 active:scale-95"
              >
                <i className="fa-brands fa-github text-xs group-hover:scale-125 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/rifatul-islam-4422r"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group w-8 h-8 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-500 dark:text-sky-400 hover:bg-gradient-to-r hover:from-sky-400 hover:to-blue-600 hover:text-white hover:shadow-[0_0_18px_rgba(56,189,248,0.65)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-105 active:translate-y-0.5 active:scale-95"
              >
                <i className="fa-brands fa-linkedin-in text-xs group-hover:scale-125 transition-transform" />
              </a>
              <a
                href="https://www.facebook.com/rifatul.islam.44"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group w-8 h-8 rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 hover:text-white hover:shadow-[0_0_18px_rgba(59,130,246,0.65)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-105 active:translate-y-0.5 active:scale-95"
              >
                <i className="fa-brands fa-facebook-f text-xs group-hover:scale-125 transition-transform" />
              </a>
              <a
                href="https://www.instagram.com/rifat_x10_?xtok=NTExazQ4bHV2M3l6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group w-8 h-8 rounded-xl bg-pink-500/15 border border-pink-400/30 flex items-center justify-center text-pink-600 dark:text-pink-400 hover:bg-gradient-to-r hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 hover:text-white hover:shadow-[0_0_18px_rgba(236,72,153,0.65)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-105 active:translate-y-0.5 active:scale-95"
              >
                <i className="fa-brands fa-instagram text-xs group-hover:scale-125 transition-transform" />
              </a>
            </div>

            {/* Animated Bubble "Hire Me" Button */}
            <a
              href="#contact"
              className="hidden min-[440px]:flex px-2.5 sm:px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white text-[11px] sm:text-xs font-bold shadow-md hover:shadow-[0_0_24px_rgba(56,189,248,0.7)] items-center gap-1.5 shrink-0 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-105 active:translate-y-0.5 active:scale-95"
            >
              <i className="fa-solid fa-paper-plane text-[10px] sm:text-[11px] animate-bounce" />
              <span>Hire Me</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle Mobile Menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden w-8 h-8 rounded-xl bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-white cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-105 active:translate-y-0.5 active:scale-95 shrink-0"
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xs`} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Dropdown Navigation Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="pointer-events-auto md:hidden absolute top-14 sm:top-16 left-3 right-3 sm:left-4 sm:right-4 rounded-2xl p-[1.5px] bg-glowing-gradient bg-[length:300%_300%] animate-gradient-border shadow-glowing transition-all duration-300 max-h-[calc(100vh-4.5rem)] overflow-y-auto"
        >
          <div className="bg-white/95 dark:bg-[#0d0f17]/95 backdrop-blur-xl rounded-[14.5px] p-3.5 sm:p-4 flex flex-col gap-1.5 sm:gap-2 text-xs font-semibold">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3.5 py-2.5 rounded-xl transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-105 active:translate-y-0.5 active:scale-95 ${
                    isActive
                      ? 'bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 font-bold'
                      : 'text-slate-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-1 px-3 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold flex items-center justify-center gap-2 shadow-md transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-105 active:translate-y-0.5 active:scale-95"
            >
              <i className="fa-solid fa-paper-plane text-xs" /> Hire Me
            </a>
            <div className="mt-1 pt-2.5 border-t border-slate-200 dark:border-white/10 flex items-center justify-center gap-3">
              <a
                href="https://github.com/rifat-code33"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/10 border border-slate-300 dark:border-white/15 flex items-center justify-center text-slate-800 dark:text-white hover:bg-slate-900 hover:text-white transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-105 active:translate-y-0.5 active:scale-95"
              >
                <i className="fa-brands fa-github text-sm" />
              </a>
              <a
                href="https://www.linkedin.com/in/rifatul-islam-4422r"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-500 dark:text-sky-400 hover:bg-gradient-to-r hover:from-sky-400 hover:to-blue-600 hover:text-white transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-105 active:translate-y-0.5 active:scale-95"
              >
                <i className="fa-brands fa-linkedin-in text-sm" />
              </a>
              <a
                href="https://www.facebook.com/rifatul.islam.44"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 hover:text-white transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-105 active:translate-y-0.5 active:scale-95"
              >
                <i className="fa-brands fa-facebook-f text-sm" />
              </a>
              <a
                href="https://www.instagram.com/rifat_x10_?xtok=NTExazQ4bHV2M3l6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-pink-500/15 border border-pink-400/30 flex items-center justify-center text-pink-600 dark:text-pink-400 hover:bg-gradient-to-r hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 hover:text-white transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-105 active:translate-y-0.5 active:scale-95"
              >
                <i className="fa-brands fa-instagram text-sm" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
