'use client';

import { useState, useRef, useEffect } from 'react';

const SKILL_CATEGORIES = [
  { id: 'all', label: 'All Stacks' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend & UI' },
  { id: 'tools', label: 'Database & Tools' },
  { id: 'office', label: 'Productivity' },
];

const SKILL_CARDS = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Interactive & Modern Web Interfaces',
    percentage: '92%',
    percentValue: 92,
    gradient: 'from-cyan-400 via-blue-500 to-purple-500',
    shadowGlow: 'hover:shadow-cyan-500/35',
    accentBg: 'bg-cyan-500/15',
    icon: 'fa-solid fa-code',
    iconColor: 'text-cyan-400',
    skills: [
      { name: 'HTML5', icon: 'fa-brands fa-html5 text-orange-500' },
      { name: 'CSS3', icon: 'fa-brands fa-css3-alt text-blue-500' },
      { name: 'JavaScript (ES6+)', icon: 'fa-brands fa-js text-yellow-400' },
      { name: 'TypeScript', badge: 'TS', badgeColor: 'bg-blue-600' },
      { name: 'React.js', icon: 'fa-brands fa-react text-cyan-400' },
      { name: 'Next.js', badge: 'N', badgeColor: 'bg-black dark:bg-white/20' },
      { name: 'Tailwind CSS', icon: 'fa-solid fa-wind text-teal-400' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Architecture',
    subtitle: 'Scalable Logic & Component Systems',
    percentage: '82%',
    percentValue: 82,
    gradient: 'from-pink-500 via-purple-500 to-indigo-500',
    shadowGlow: 'hover:shadow-pink-500/35',
    accentBg: 'bg-pink-500/15',
    icon: 'fa-solid fa-server',
    iconColor: 'text-pink-400',
    skills: [
      { name: 'Node.js', icon: 'fa-brands fa-node-js text-emerald-500' },
      { name: 'Component-based UI', icon: 'fa-solid fa-cubes text-purple-400' },
      { name: 'Responsive Web Design', icon: 'fa-solid fa-mobile-screen-button text-pink-400' },
    ],
  },
  {
    id: 'tools',
    title: 'Database & Dev Tools',
    subtitle: 'Version Control, Cloud & NoSQL',
    percentage: '88%',
    percentValue: 88,
    gradient: 'from-emerald-400 via-cyan-500 to-blue-500',
    shadowGlow: 'hover:shadow-emerald-500/35',
    accentBg: 'bg-emerald-500/15',
    icon: 'fa-solid fa-database',
    iconColor: 'text-emerald-400',
    skills: [
      { name: 'MongoDB', icon: 'fa-solid fa-leaf text-emerald-500' },
      { name: 'Git', icon: 'fa-brands fa-git-alt text-orange-500' },
      { name: 'GitHub', icon: 'fa-brands fa-github text-slate-800 dark:text-white' },
      { name: 'Vite', icon: 'fa-solid fa-bolt text-purple-400' },
      { name: 'Vercel', icon: 'fa-solid fa-triangle-exclamation text-cyan-400' },
    ],
  },
  {
    id: 'office',
    title: 'Office & Productivity',
    subtitle: 'Documentation & Data Management',
    percentage: '90%',
    percentValue: 90,
    gradient: 'from-amber-400 via-orange-500 to-pink-500',
    shadowGlow: 'hover:shadow-amber-500/35',
    accentBg: 'bg-amber-500/15',
    icon: 'fa-solid fa-briefcase',
    iconColor: 'text-amber-400',
    skills: [
      { name: 'MS Word', icon: 'fa-solid fa-file-word text-blue-500' },
      { name: 'MS Excel', icon: 'fa-solid fa-file-excel text-emerald-500' },
      { name: 'MS Office Suite', icon: 'fa-brands fa-microsoft text-amber-500' },
    ],
  },
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');
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

  const filteredCards = SKILL_CARDS.filter(
    (card) => activeFilter === 'all' || card.id === activeFilter
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`scroll-reveal space-y-10 ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
          <span className="text-[11px] font-bold tracking-[0.2em] text-purple-500 dark:text-purple-400 uppercase">
            Technical Arsenal
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold">
          Skills &amp;{' '}
          <span className="glowing-text text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500">
            Technologies
          </span>
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm max-w-xl mx-auto px-2">
          Interactive overview of the languages, frameworks, and modern developer tools I use to
          build responsive web applications.
        </p>

        {/* Interactive Category Filter Tabs */}
        <div
          className="pt-2 sm:pt-3 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2"
          role="tablist"
          aria-label="Skill Categories"
        >
          {SKILL_CATEGORIES.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-105 active:scale-95 ${
                  isActive
                    ? 'active-filter bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div id="skillsGrid" className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            data-category={card.id}
            className={`group relative rounded-3xl p-[1.5px] bg-glowing-gradient bg-[length:300%_300%] animate-gradient-border animate-skill-float transition-all duration-300 hover:[animation-play-state:paused] hover:-translate-y-2 hover:scale-[1.02] shadow-xl ${card.shadowGlow}`}
          >
            <div className="bg-lightCard dark:bg-cardBg h-full rounded-[22.5px] p-5 sm:p-7 md:p-8 flex flex-col justify-between space-y-5 sm:space-y-6 relative overflow-hidden">
              <div
                className={`absolute -right-10 -top-10 w-32 h-32 ${card.accentBg} rounded-full blur-3xl group-hover:opacity-100 transition duration-500`}
              />

              <div className="space-y-4 sm:space-y-5 z-10">
                <div className="flex flex-wrap items-center justify-between gap-2.5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 sm:w-12 h-10 sm:h-12 rounded-2xl bg-gradient-to-br from-cyan-500/25 via-blue-500/20 to-purple-500/10 border border-cyan-400/40 flex items-center justify-center ${card.iconColor} text-lg sm:text-xl group-hover:scale-110 group-hover:rotate-6 transition duration-300 shadow-sm shrink-0`}
                    >
                      <i className={card.icon} />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold tracking-wide">{card.title}</h3>
                      <p className="text-[11px] sm:text-xs text-slate-400 font-medium">{card.subtitle}</p>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-extrabold ${card.iconColor} ${card.accentBg} px-2.5 sm:px-3 py-1 rounded-xl border border-white/10 shadow-sm shrink-0`}
                  >
                    {card.percentage}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                    <span>Proficiency Level</span>
                    <span className={card.iconColor}>Advanced / Expert</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden p-[1px] border border-slate-300/50 dark:border-white/10">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${card.gradient} transition-[width] duration-1000 ease-out`}
                      style={{
                        '--target-width': `${card.percentValue}%`,
                        width: `${card.percentValue}%`,
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                  {card.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="skill-pill px-3 py-1.5 sm:px-3.5 sm:py-2 text-[11px] sm:text-xs font-semibold rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-200 hover:border-cyan-400/60 hover:bg-cyan-500/15 hover:text-cyan-400 flex items-center gap-1.5 sm:gap-2 shadow-sm transition-colors"
                    >
                      {skill.icon && <i className={`${skill.icon} text-sm`} />}
                      {skill.badge && (
                        <span
                          className={`text-[9px] sm:text-[10px] font-extrabold text-white ${skill.badgeColor} px-1.5 py-0.5 rounded shadow-sm`}
                        >
                          {skill.badge}
                        </span>
                      )}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
