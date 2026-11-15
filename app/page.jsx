'use client';

import { useEffect } from 'react';
import BackgroundEffects from '@/components/BackgroundEffects';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  // Global 3D tilt effect on all .tilt-card elements
  useEffect(() => {
    const tiltCards = document.querySelectorAll('.tilt-card');

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
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = (e) => {
      const card = e.currentTarget;
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

    tiltCards.forEach((card) => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      tiltCards.forEach((card) => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Background meteor shower and twinkling stars */}
      <BackgroundEffects />

      {/* Floating glassmorphic navbar */}
      <Navbar />

      {/* Full-screen Hero section */}
      <Hero />

      {/* Main Content Sections */}
      <main className="w-full max-w-5xl px-3 sm:px-6 space-y-16 sm:space-y-24 z-10 mt-10 sm:mt-16 md:mt-24">
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
