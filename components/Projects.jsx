'use client';

import { useEffect, useRef, useState } from 'react';

const PROJECT_CATEGORIES = [
  { id: 'all', label: 'All Projects (3)' },
  { id: 'portfolio', label: 'Portfolios' },
  { id: 'ui', label: 'Modern UI/UX' },
];

const PROJECTS = [
  {
    id: 1,
    category: 'portfolio',
    number: '01',
    badgeText: 'Vercel Live',
    badgeClass: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/30',
    hoverGlow: 'hover:shadow-cyan-500/25',
    title: 'Animated React Tailwind Portfolio',
    description:
      'An interactive, animated personal portfolio website engineered with smooth transitions, modern dark aesthetics, and responsive layouts.',
    fullDesc:
      'An interactive, animated personal portfolio website engineered with smooth transitions, modern dark aesthetics, and responsive layouts across all screen sizes.',
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    tags: ['React.js', 'Tailwind CSS'],
    modalTags: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    highlights: [
      'Fluid scroll-reveal animations and dynamic theme switching',
      'Modular React.js architecture styled with Tailwind CSS',
      'Optimized Lighthouse performance and Vercel deployment',
    ],
    liveUrl: 'https://github.com/rifat-code33',
    sourceUrl: 'https://github.com/rifat-code33',
  },
  {
    id: 2,
    category: 'portfolio',
    number: '02',
    badgeText: 'Responsive UI',
    badgeClass: 'bg-pink-500/20 text-pink-300 border-pink-400/30',
    hoverGlow: 'hover:shadow-pink-500/25',
    title: 'Beautiful React Tailwind Portfolio',
    description:
      'A clean, component-based responsive developer portfolio crafted for speed, accessibility, and seamless cross-device viewing.',
    fullDesc:
      'A clean, component-based responsive developer portfolio crafted for speed, accessibility, and seamless cross-device viewing.',
    image:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    tags: ['React.js', 'Tailwind CSS'],
    modalTags: ['React.js', 'Tailwind CSS', 'Vite', 'Responsive UI'],
    highlights: [
      'Reusable UI cards with interactive hover micro-interactions',
      'Accessible semantic markup and responsive mobile navigation',
      'Fast build pipeline powered by Vite',
    ],
    liveUrl: 'https://github.com/rifat-code33',
    sourceUrl: 'https://github.com/rifat-code33',
  },
  {
    id: 3,
    category: 'ui',
    number: '03',
    badgeText: 'Modern AI UI',
    badgeClass: 'bg-purple-500/20 text-purple-300 border-purple-400/30',
    hoverGlow: 'hover:shadow-purple-500/25',
    title: 'Brainwave Modern UI',
    description:
      'A futuristic, responsive user-interface showcase featuring bento-grid layouts, sleek gradients, and interactive modern web components.',
    fullDesc:
      'A futuristic, responsive user-interface showcase featuring bento-grid layouts, sleek gradients, and interactive modern web components.',
    image:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80',
    tags: ['JavaScript', 'React.js'],
    modalTags: ['JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'Modern UI'],
    highlights: [
      'Custom glowing gradient borders and glassmorphic surfaces',
      'Bento-box feature showcase inspired by modern AI platforms',
      'Smooth interactive state transitions in JavaScript & React',
    ],
    liveUrl: 'https://github.com/rifat-code33',
    sourceUrl: 'https://github.com/rifat-code33',
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalProject, setModalProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const filteredProjects = PROJECTS.filter(
    (p) => activeFilter === 'all' || p.category === activeFilter
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`scroll-reveal space-y-10 ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-ping" />
          <span className="text-[11px] font-bold tracking-[0.2em] text-pink-500 uppercase">
            Portfolio Showcase
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold">
          Featured{' '}
          <span className="glowing-text text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Projects
          </span>
        </h2>
        <p className="text-slate-500 dark:text-gray-400 text-xs sm:text-sm max-w-xl mx-auto px-2">
          Deployed on Vercel with open-source repositories available on GitHub (
          <a
            href="https://github.com/rifat-code33"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            @rifat-code33
          </a>
          ).
        </p>

        {/* Category Filters */}
        <div
          className="pt-2 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2"
          role="tablist"
          aria-label="Project Categories"
        >
          {PROJECT_CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-105 active:scale-95 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div id="projectsGrid" className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-7">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`project-card tilt-card [transform-style:preserve-3d] [backface-visibility:hidden] group relative rounded-3xl p-[1.5px] bg-glowing-gradient bg-[length:300%_300%] animate-gradient-border shadow-xl ${project.hoverGlow} transition-all duration-300`}
          >
            <div className="bg-lightCard dark:bg-cardBg rounded-[22.5px] overflow-hidden flex flex-col h-full relative">
              <div
                className="h-40 sm:h-44 overflow-hidden relative bg-slate-900 cursor-pointer"
                onClick={() => setModalProject(project)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-70 group-hover:opacity-85 transition" />
                <span
                  className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-0.5 rounded-full backdrop-blur-md border ${project.badgeClass}`}
                >
                  {project.number}
                </span>
                <span className="absolute top-3 right-3 bg-black/75 backdrop-blur-md text-cyan-400 text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {project.badgeText}
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalProject(project);
                  }}
                  className="absolute inset-0 m-auto w-28 h-9 rounded-full bg-white/20 sm:bg-white/15 hover:bg-cyan-500 backdrop-blur-md border border-white/25 text-white text-xs font-semibold opacity-90 sm:opacity-0 sm:group-hover:opacity-100 sm:translate-y-2 sm:group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer shadow-lg"
                >
                  <i className="fa-solid fa-eye text-[11px]" /> Quick View
                </button>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 sm:space-y-5">
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold group-hover:text-cyan-400 transition">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded-md bg-blue-500/10 text-blue-500 dark:text-blue-400 border border-blue-500/20 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-slate-800 dark:text-white hover:text-cyan-400 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-0.5 hover:scale-105 active:scale-95 flex items-center gap-1.5"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square text-[11px] text-cyan-400" />{' '}
                      Live Demo
                    </a>
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-0.5 hover:scale-105 active:scale-95 flex items-center gap-1.5"
                    >
                      <i className="fa-brands fa-github" /> Source
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick View Modal */}
      {modalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-4 animate-fadeIn overflow-y-auto"
          onClick={() => setModalProject(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl sm:rounded-3xl p-[1.5px] bg-glowing-gradient bg-[length:300%_300%] animate-gradient-border shadow-2xl my-auto max-h-[88vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-lightCard dark:bg-cardBg rounded-[14.5px] sm:rounded-[22.5px] p-5 sm:p-8 space-y-4 sm:space-y-5 relative">
              <button
                type="button"
                onClick={() => setModalProject(null)}
                aria-label="Close modal"
                className="absolute top-3.5 sm:top-4 right-3.5 sm:right-4 w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-600 dark:text-gray-300 hover:text-pink-500 cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-0.5 hover:scale-105 active:scale-95"
              >
                <i className="fa-solid fa-xmark text-sm" />
              </button>
              <div className="space-y-1.5 sm:space-y-2 pr-8">
                <span className="inline-block text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-2.5 sm:px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {modalProject.category === 'portfolio' ? 'Portfolio Showcase' : 'Modern UI/UX'}{' '}
                  {modalProject.number}
                </span>
                <h3 className="text-lg sm:text-2xl font-extrabold">{modalProject.title}</h3>
              </div>
              <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                {modalProject.fullDesc}
              </p>
              <div className="space-y-2">
                <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Highlights
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-gray-300">
                  {modalProject.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <i className="fa-solid fa-circle-check text-cyan-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {modalProject.modalTags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-3 sm:pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-end gap-3">
                <a
                  href={modalProject.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-0.5 hover:scale-105 active:scale-95"
                >
                  <i className="fa-brands fa-github" /> View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
