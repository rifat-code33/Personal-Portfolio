'use client';

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* ================= SUBTLE ROTATING MINI GALAXY WITH BUBBLE BOUNCE ================= */}
      <div className="mini-galaxy-container group" title="Rotating Mini Galaxy (Hover / Click me!)">
        <div className="galaxy-spin-wrapper">
          <div className="galaxy-dust" />
          <div className="galaxy-arm-1" />
          <div className="galaxy-arm-2" />
          <div className="galaxy-core" />
        </div>
      </div>

      {/* ================= REALISTIC SLOWLY SPINNING BLACK HOLE ================= */}
      <div className="black-hole-container">
        {/* Gravitational Lensing Halo */}
        <div className="black-hole-lensing" />
        {/* Swirling Accretion Disk */}
        <div className="black-hole-accretion" />
        {/* Einstein Photon Ring */}
        <div className="black-hole-photon-ring" />
        {/* Event Horizon (Pure Black Void) */}
        <div className="black-hole-event-horizon" />
      </div>

      {/* ================= EXISTING TWINKLING STARS ================= */}
      <div
        className="absolute w-1 h-1 bg-white rounded-full animate-ping top-[12%] left-[15%] opacity-80"
        style={{ animationDuration: '2s' }}
      />
      <div className="absolute w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse top-[22%] left-[82%] opacity-90" />
      <div
        className="absolute w-1 h-1 bg-blue-200 rounded-full animate-ping top-[60%] left-[8%] opacity-70"
        style={{ animationDuration: '3.5s' }}
      />
      <div
        className="absolute w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse top-[75%] left-[90%] opacity-85"
        style={{ animationDuration: '4s' }}
      />
      <div
        className="absolute w-1 h-1 bg-white rounded-full animate-ping top-[35%] left-[50%] opacity-75"
        style={{ animationDuration: '2.5s' }}
      />
      <div className="absolute w-1.5 h-1.5 bg-cyan-200 rounded-full animate-pulse top-[88%] left-[35%] opacity-90" />
      <div
        className="absolute w-1 h-1 bg-pink-300 rounded-full animate-ping top-[18%] left-[88%] opacity-80"
        style={{ animationDuration: '3s' }}
      />
      <div className="absolute w-1.5 h-1.5 bg-indigo-300 rounded-full animate-pulse top-[50%] left-[95%] opacity-70" />
      <div
        className="absolute w-1 h-1 bg-white rounded-full animate-ping top-[42%] left-[25%] opacity-75"
        style={{ animationDuration: '2.8s' }}
      />
      <div className="absolute w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse top-[65%] left-[65%] opacity-85" />
      <div
        className="absolute w-1 h-1 bg-cyan-200 rounded-full animate-ping top-[85%] left-[15%] opacity-80"
        style={{ animationDuration: '3.2s' }}
      />

      {/* ================= EXISTING 230-DEGREE METEOR SHOWER ================= */}
      <div className="meteor meteor-1" />
      <div className="meteor meteor-2" />
      <div className="meteor meteor-3" />
      <div className="meteor meteor-4" />
      <div className="meteor meteor-5" />
      <div className="meteor meteor-6" />
      <div className="meteor meteor-7" />
      <div className="meteor meteor-8" />
      <div className="meteor meteor-9" />
      <div className="meteor meteor-10" />
      <div className="meteor meteor-11" />
      <div className="meteor meteor-12" />
    </div>
  );
}
