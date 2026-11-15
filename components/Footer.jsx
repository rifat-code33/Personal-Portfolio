'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full max-w-5xl px-4 sm:px-6 mt-12 sm:mt-16 pb-8 sm:pb-10 pt-6 sm:pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-slate-500 dark:text-gray-400 z-10 text-center sm:text-left">
      <p>
        © {currentYear}{' '}
        <span className="font-semibold text-slate-800 dark:text-white">Md. Rifatul Islam</span>. All
        rights reserved.
      </p>
      <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-4">
        <a
          href="https://github.com/rifat-code33"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/rifatul-islam-4422r"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://www.facebook.com/rifatul.islam.44"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/rifat_x10_?xtok=NTExazQ4bHV2M3l6"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          Instagram
        </a>
        <a href="mailto:rifatulislam4422@gmail.com" className="hover:text-pink-400 transition">
          Email
        </a>
      </div>
    </footer>
  );
}
