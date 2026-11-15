'use client';

import { useEffect, useRef, useState } from 'react';

const TOPICS = [
  {
    icon: '💼',
    label: 'Job / Internship',
    text: "Hi Rifatul, I'd love to discuss a Frontend / Full-Stack job or internship opportunity with you.",
    color: 'hover:border-cyan-400/50 hover:text-cyan-400',
    activeClass: 'bg-cyan-500/15 border-cyan-400 text-cyan-400',
  },
  {
    icon: '🚀',
    label: 'Freelance Project',
    text: 'Hi Rifatul, I have a freelance web development project and would like to work together.',
    color: 'hover:border-purple-400/50 hover:text-purple-400',
    activeClass: 'bg-purple-500/15 border-purple-400 text-purple-400',
  },
  {
    icon: '🤝',
    label: 'Collaboration',
    text: "Hi Rifatul, let's collaborate on an open-source or React/Next.js web application!",
    color: 'hover:border-pink-400/50 hover:text-pink-400',
    activeClass: 'bg-pink-500/15 border-pink-400 text-pink-400',
  },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [copyToast, setCopyToast] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyToast(`Copied ${label}: ${text}`);
      setTimeout(() => {
        setCopyToast('');
      }, 2500);
    });
  };

  const handleTopicClick = (topicText) => {
    setSelectedTopic(topicText);
    setMessage(topicText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    setTimeout(() => {
      window.location.href = `mailto:rifatulislam4422@gmail.com?subject=${subject}&body=${body}`;
      setName('');
      setEmail('');
      setMessage('');
      setSelectedTopic('');
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`scroll-reveal space-y-10 ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[11px] font-bold tracking-[0.2em] text-emerald-500 uppercase">
            Get In Touch
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold">
          Let&apos;s Work{' '}
          <span className="glowing-text text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500">
            Together
          </span>
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm max-w-lg mx-auto px-2">
          Have a project in mind, an internship opportunity, or want to collaborate? Feel free to reach out directly.
        </p>
      </div>

      <div className="rounded-3xl p-[1.5px] bg-glowing-gradient bg-[length:300%_300%] animate-gradient-border shadow-glowing">
        <div className="bg-lightCard dark:bg-cardBg rounded-[22.5px] p-4 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 relative overflow-hidden">
          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-5 flex flex-col justify-between z-10">
            <div className="space-y-3.5 sm:space-y-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg sm:text-xl font-bold">Contact Information</h3>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-bold text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Fast Reply
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Available for frontend &amp; full-stack web development roles, freelance projects, and collaborative opportunities.
              </p>

              <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2">
                {/* Email Item */}
                <div className="group flex items-center justify-between gap-2 p-2.5 sm:p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-cyan-400/50 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95 min-w-0">
                  <a
                    href="mailto:rifatulislam4422@gmail.com"
                    className="flex items-center gap-2.5 sm:gap-3 overflow-hidden flex-1 min-w-0"
                  >
                    <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-lg bg-cyan-500/15 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition">
                      <i className="fa-regular fa-envelope text-xs sm:text-sm" />
                    </div>
                    <div className="overflow-hidden min-w-0 flex-1">
                      <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400">Email</p>
                      <p className="text-[11px] sm:text-xs font-semibold truncate group-hover:text-cyan-400 transition">
                        rifatulislam4422@gmail.com
                      </p>
                    </div>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('rifatulislam4422@gmail.com', 'Email')}
                    aria-label="Copy Email"
                    className="px-2 sm:px-2.5 py-1.5 rounded-lg bg-white/80 dark:bg-white/5 hover:bg-cyan-500/20 border border-slate-200 dark:border-white/10 text-[10px] font-semibold text-slate-600 dark:text-gray-300 hover:text-cyan-400 transition cursor-pointer shrink-0"
                  >
                    <i className="fa-regular fa-copy" />
                  </button>
                </div>

                {/* Phone Item */}
                <div className="group flex items-center justify-between gap-2 p-2.5 sm:p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-blue-400/50 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95 min-w-0">
                  <a href="tel:01611692933" className="flex items-center gap-2.5 sm:gap-3 flex-1 min-w-0">
                    <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-lg bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition">
                      <i className="fa-solid fa-phone text-xs sm:text-sm" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400">Phone</p>
                      <p className="text-[11px] sm:text-xs font-semibold truncate group-hover:text-blue-400 transition">
                        +880 1611-692933
                      </p>
                    </div>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('+8801611692933', 'Phone')}
                    aria-label="Copy Phone Number"
                    className="px-2 sm:px-2.5 py-1.5 rounded-lg bg-white/80 dark:bg-white/5 hover:bg-blue-500/20 border border-slate-200 dark:border-white/10 text-[10px] font-semibold text-slate-600 dark:text-gray-300 hover:text-blue-400 transition cursor-pointer shrink-0"
                  >
                    <i className="fa-regular fa-copy" />
                  </button>
                </div>

                {/* Location Item */}
                <div className="group flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-pink-400/50 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95 min-w-0">
                  <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-lg bg-pink-500/15 text-pink-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition">
                    <i className="fa-solid fa-location-dot text-xs sm:text-sm" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400">Location</p>
                    <p className="text-[11px] sm:text-xs font-semibold truncate group-hover:text-pink-400 transition">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              {/* Copy Toast */}
              {copyToast && (
                <p className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-3 py-1.5 rounded-lg flex items-center gap-1.5 animate-fadeIn">
                  <i className="fa-solid fa-check-circle" /> {copyToast}
                </p>
              )}
            </div>

            {/* Social Bar */}
            <div className="pt-3 sm:pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3">
              <span className="text-xs text-slate-500 dark:text-gray-400 font-semibold tracking-wide">
                Connect:
              </span>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <a
                  href="https://github.com/rifat-code33"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="group flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-200 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 hover:shadow-[0_0_18px_rgba(255,255,255,0.45)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-105 active:scale-95"
                >
                  <i className="fa-brands fa-github text-xs sm:text-sm group-hover:scale-125 transition-transform" />
                  <span className="text-xs font-bold">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/rifatul-islam-4422r"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-sky-500/10 border border-sky-400/25 text-sky-500 dark:text-sky-400 hover:bg-gradient-to-r hover:from-sky-400 hover:to-blue-600 hover:text-white hover:shadow-[0_0_18px_rgba(56,189,248,0.55)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-105 active:scale-95"
                >
                  <i className="fa-brands fa-linkedin-in text-xs sm:text-sm group-hover:scale-125 transition-transform" />
                  <span className="text-xs font-bold">LinkedIn</span>
                </a>
                <a
                  href="https://www.facebook.com/rifatul.islam.44"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="group flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-blue-500/10 border border-blue-400/25 text-blue-600 dark:text-blue-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 hover:text-white hover:shadow-[0_0_18px_rgba(59,130,246,0.55)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-105 active:scale-95"
                >
                  <i className="fa-brands fa-facebook-f text-xs sm:text-sm group-hover:scale-125 transition-transform" />
                  <span className="text-xs font-bold">Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/rifat_x10_?xtok=NTExazQ4bHV2M3l6"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="group flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-pink-500/10 border border-pink-400/25 text-pink-600 dark:text-pink-400 hover:bg-gradient-to-r hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 hover:text-white hover:shadow-[0_0_18px_rgba(236,72,153,0.55)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-105 active:scale-95"
                >
                  <i className="fa-brands fa-instagram text-xs sm:text-sm group-hover:scale-125 transition-transform" />
                  <span className="text-xs font-bold">Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-4 z-10">
            <div className="space-y-1.5">
              <span className="block text-[11px] font-semibold text-slate-500 dark:text-gray-400">
                Quick Select Topic:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {TOPICS.map((topic, idx) => {
                  const isSelected = selectedTopic === topic.text;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleTopicClick(topic.text)}
                      className={`px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-medium border cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-0.5 hover:scale-105 active:scale-95 ${
                        isSelected
                          ? topic.activeClass
                          : `bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 ${topic.color}`
                      }`}
                    >
                      {topic.icon} {topic.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              <div>
                <label
                  htmlFor="senderName"
                  className="block text-xs font-semibold mb-1.5 text-slate-700 dark:text-gray-300"
                >
                  Your Name
                </label>
                <input
                  id="senderName"
                  type="text"
                  required
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-base sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="senderEmail"
                  className="block text-xs font-semibold mb-1.5 text-slate-700 dark:text-gray-300"
                >
                  Your Email
                </label>
                <input
                  id="senderEmail"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-base sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition text-slate-900 dark:text-white"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="senderMessage"
                  className="block text-xs font-semibold text-slate-700 dark:text-gray-300"
                >
                  Message
                </label>
                <span className="text-[10px] font-mono text-slate-400">
                  {message.length} / 500
                </span>
              </div>
              <textarea
                id="senderMessage"
                rows={4}
                maxLength={500}
                required
                placeholder="Write your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-base sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition resize-none text-slate-900 dark:text-white"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white text-xs sm:text-sm font-bold shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-105 active:scale-95"
              >
                <i className="fa-solid fa-paper-plane" /> Send Message
              </button>
              {isSubmitting && (
                <p className="text-xs font-medium text-emerald-400 flex items-center gap-1.5">
                  <i className="fa-solid fa-circle-check" /> Opening your email client to send the
                  message...
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
