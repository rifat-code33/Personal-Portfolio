'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only activate custom cursor on desktop devices with a fine pointer (mouse)
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    setEnabled(true);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let isVisible = false;
    let isClicking = false;
    let rafId = null;

    const interactiveSelector =
      'a, button, input, textarea, select, [role="button"], .bubble-item, .tilt-card, .cursor-pointer, .mini-galaxy-container';

    const checkInteractive = (target) => {
      if (!target || !(target instanceof Element)) return false;
      if (target.closest(interactiveSelector)) return true;
      try {
        const computed = window.getComputedStyle(target);
        if (computed && (computed.cursor === 'pointer' || computed.cursor === 'text')) {
          return true;
        }
      } catch (e) {
        // Fallback for detached or cross-origin elements
      }
      return false;
    };

    const updateCursorVisuals = () => {
      if (!dotRef.current || !ringRef.current) return;

      if (!isVisible) {
        dotRef.current.style.opacity = '0';
        ringRef.current.style.opacity = '0';
        return;
      }

      if (isHovering) {
        // Smoothly fade out and shrink custom cursor on clickable/interactive items
        dotRef.current.style.opacity = '0';
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(0.2)`;
        ringRef.current.style.opacity = '0';
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(0.35)`;
      } else {
        // Reappear smoothly in normal state
        dotRef.current.style.opacity = '1';
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(1)`;
        ringRef.current.style.opacity = '1';
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${
          isClicking ? 0.82 : 1
        })`;
      }
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        ringX = mouseX;
        ringY = mouseY;
        updateCursorVisuals();
      }

      const hoverState = checkInteractive(e.target);
      if (hoverState !== isHovering) {
        isHovering = hoverState;
        updateCursorVisuals();
      }

      if (dotRef.current && !isHovering) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(1)`;
      }
    };

    const handleScroll = () => {
      if (mouseX >= 0 && mouseY >= 0) {
        const el = document.elementFromPoint(mouseX, mouseY);
        const hoverState = checkInteractive(el);
        if (hoverState !== isHovering) {
          isHovering = hoverState;
          updateCursorVisuals();
        }
      }
    };

    const handleMouseDown = () => {
      isClicking = true;
      if (!isHovering && ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(0.82)`;
      }
    };

    const handleMouseUp = () => {
      isClicking = false;
      if (!isHovering && ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(1)`;
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      updateCursorVisuals();
    };

    const handleMouseEnter = () => {
      isVisible = true;
      updateCursorVisuals();
    };

    // Smooth 60-120fps physics loop for the trailing ring
    const render = () => {
      // Linear interpolation (lerp) for smooth trailing
      const lerpSpeed = 0.18;
      ringX += (mouseX - ringX) * lerpSpeed;
      ringY += (mouseY - ringY) * lerpSpeed;

      if (ringRef.current && isVisible && !isHovering) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${
          isClicking ? 0.82 : 1
        })`;
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="hidden [@media(pointer:fine)]:block">
      {/* Neon Cyan/Purple Glowing Dot */}
      <div
        ref={dotRef}
        className="custom-cursor-dot fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[99999] opacity-0 will-change-transform"
        style={{
          background: 'radial-gradient(circle, #ffffff 15%, #38bdf8 45%, #06b6d4 75%, #a855f7 100%)',
          boxShadow:
            '0 0 10px 2px rgba(56, 189, 248, 0.95), 0 0 20px 4px rgba(168, 85, 247, 0.6), inset 0 0 3px rgba(255, 255, 255, 0.95)',
          transition: 'opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.18s ease-out',
        }}
        aria-hidden="true"
      />

      {/* Smooth Trailing Ring with Cyan/Purple Glow */}
      <div
        ref={ringRef}
        className="custom-cursor-ring fixed top-0 left-0 w-9 h-9 rounded-full pointer-events-none z-[99998] opacity-0 will-change-transform"
        style={{
          border: '1.5px solid rgba(56, 189, 248, 0.7)',
          background:
            'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, rgba(168, 85, 247, 0.05) 55%, transparent 80%)',
          boxShadow:
            '0 0 16px rgba(168, 85, 247, 0.4), 0 0 8px rgba(56, 189, 248, 0.3), inset 0 0 8px rgba(56, 189, 248, 0.18)',
          transition: 'opacity 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        aria-hidden="true"
      />
    </div>
  );
}
