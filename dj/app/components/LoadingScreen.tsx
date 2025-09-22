"use client";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
      <div className="loader-container flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="loader-title">EMANUEL</span>
          <span className="loader-subtitle">LIVE</span>
        </div>

        <div className="loader-symbol-grid">
          <div className="loader-square">+</div>
          <div className="loader-square loader-square--delay">×</div>
        </div>

        <div className="loader-bar">
          <span className="loader-bar-progress" />
        </div>

        <span className="loader-caption">Loading experience</span>
      </div>
    </div>
  );
}
