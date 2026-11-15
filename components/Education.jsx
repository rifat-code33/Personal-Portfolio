'use client';

import { useEffect, useRef, useState } from 'react';

const EDU_CATEGORIES = [
  { id: 'all', label: 'All Qualifications (3)' },
  { id: 'engineering', label: 'Engineering (CST)' },
  { id: 'academic', label: 'College & School' },
];

const QUALIFICATIONS = [
  {
    id: 1,
    category: 'engineering',
    badgeText: '8th Sem / Internship',
    badgePulse: true,
    badgeColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    icon: 'fa-solid fa-laptop-code',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/15 border-cyan-400/30',
    hoverGlow: 'hover:shadow-cyan-500/25',
    title: 'Diploma in Engineering (CST)',
    institution: 'Infra Polytechnic Institute, Barishal',
    instIcon: 'fa-solid fa-building-columns',
    instColor: 'text-cyan-500 dark:text-cyan-400',
    description:
      'Department of Computer Science & Technology. Focused on software engineering, web tech, and professional industrial internship.',
    statusLabel: 'Program Status',
    statusValue: '8th / 8 Semesters',
    statusValueColor: 'text-cyan-400',
    barGradient: 'from-emerald-400 via-cyan-400 to-blue-500',
    percentage: 95,
  },
  {
    id: 2,
    category: 'academic',
    badgeText: 'Passing Year: 2022',
    badgePulse: false,
    badgeColor: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    icon: 'fa-solid fa-graduation-cap',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/15 border-blue-400/30',
    hoverGlow: 'hover:shadow-blue-500/25',
    title: 'Higher Secondary Certificate (HSC)',
    institution: 'Agurpur Degree College',
    instIcon: 'fa-solid fa-landmark',
    instColor: 'text-blue-500 dark:text-blue-400',
    description:
      'Group: Business Studies • Built strong analytical and organizational foundation with GPA 4.17.',
    statusLabel: 'Academic Result',
    statusValue: 'GPA 4.17 / 5.00',
    statusValueColor: 'text-blue-400',
    barGradient: 'from-blue-400 via-indigo-500 to-purple-500',
    percentage: 83.4,
  },
  {
    id: 3,
    category: 'academic',
    badgeText: 'Passing Year: 2020',
    badgePulse: false,
    badgeColor: 'bg-pink-500/15 text-pink-400 border-pink-500/30',
    icon: 'fa-solid fa-school',
    iconColor: 'text-pink-400',
    iconBg: 'bg-pink-500/15 border-pink-400/30',
    hoverGlow: 'hover:shadow-pink-500/25',
    title: 'Secondary School Certificate (SSC)',
    institution: 'Safe School & College, Dhaka',
    instIcon: 'fa-solid fa-location-dot',
    instColor: 'text-pink-500 dark:text-pink-400',
    description:
      'Group: Business Studies • Completed secondary education in Dhaka with GPA 3.56.',
    statusLabel: 'Academic Result',
    statusValue: 'GPA 3.56 / 5.00',
    statusValueColor: 'text-pink-400',
    barGradient: 'from-purple-400 via-pink-500 to-rose-500',
    percentage: 71.2,
  },
];

export default function Education() {
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

  const filteredQuals = QUALIFICATIONS.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  return (
    <section
      ref={sectionRef}
      id="education"
      className={`scroll-reveal space-y-10 ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[11px] font-bold tracking-[0.2em] text-cyan-500 uppercase">
            Academic Background
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
          Education &amp;{' '}
          <span className="glowing-text text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500">
            Qualifications
          </span>
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm max-w-xl mx-auto px-2">
          My comprehensive academic journey in Computer Science &amp; Technology and foundational
          business studies.
        </p>

        {/* Filter buttons */}
        <div
          className="pt-2 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2"
          role="tablist"
          aria-label="Academic Categories"
        >
          {EDU_CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-105 active:scale-95 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      <div id="educationGrid" className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {filteredQuals.map((edu) => (
          <div
            key={edu.id}
            className={`edu-card tilt-card [transform-style:preserve-3d] [backface-visibility:hidden] group relative rounded-3xl p-[1.5px] bg-glowing-gradient bg-[length:300%_300%] animate-gradient-border shadow-xl ${edu.hoverGlow} transition-all duration-500`}
          >
            <div className="bg-lightCard dark:bg-cardBg h-full rounded-[22.5px] p-5 sm:p-7 flex flex-col justify-between space-y-5 sm:space-y-6 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-cyan-500/15 rounded-full blur-3xl group-hover:bg-cyan-500/30 transition duration-500" />

              <div className="space-y-3.5 sm:space-y-4 z-10">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`px-2.5 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider border flex items-center gap-1.5 shadow-sm ${edu.badgeColor}`}
                  >
                    {edu.badgePulse && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    )}
                    {edu.badgeText}
                  </span>
                  <div
                    className={`w-9 sm:w-10 h-9 sm:h-10 rounded-2xl ${edu.iconBg} flex items-center justify-center ${edu.iconColor} group-hover:scale-110 group-hover:rotate-6 transition duration-300 shadow-[0_0_12px_rgba(34,211,238,0.25)] shrink-0`}
                  >
                    <i className={`${edu.icon} text-sm`} />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold leading-snug group-hover:text-cyan-400 transition">
                  {edu.title}
                </h3>
                <p className={`text-xs font-semibold ${edu.instColor} flex items-center gap-1.5`}>
                  <i className={`${edu.instIcon} text-[11px]`} /> {edu.institution}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {edu.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-white/10 space-y-2 z-10">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 font-medium">{edu.statusLabel}</span>
                  <span className={`font-bold ${edu.statusValueColor}`}>{edu.statusValue}</span>
                </div>
                <div className="w-full h-2 bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden p-[1px] border border-slate-300/50 dark:border-white/10">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${edu.barGradient} transition-[width] duration-1000 ease-out`}
                    style={{
                      '--target-width': `${edu.percentage}%`,
                      width: `${edu.percentage}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
