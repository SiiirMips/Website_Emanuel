"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";

const shows = [
  {
    date: "12 OCT 2024",
    city: "Berlin, Germany",
    venue: "Nightpulse Arena",
    link: "https://tickets.example.com/berlin-nightpulse",
  },
  {
    date: "19 OCT 2024",
    city: "Amsterdam, Netherlands",
    venue: "Skyline Warehouse",
    link: "https://tickets.example.com/amsterdam-skyline",
  },
  {
    date: "02 NOV 2024",
    city: "Barcelona, Spain",
    venue: "Aurora Festival",
    link: "https://tickets.example.com/barcelona-aurora",
  },
];

const highlights = [
  {
    label: "Streams",
    value: "120M+",
    description: "across every platform",
  },
  {
    label: "Countries",
    value: "35",
    description: "on the 2024 tour",
  },
  {
    label: "Awards",
    value: "8",
    description: "international accolades",
  },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 2400);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {isLoading && <LoadingScreen />}

      <main
        className={`flex min-h-screen flex-col transition-opacity duration-700 ease-out ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <section className="relative flex min-h-screen flex-col items-center justify-center gap-8 px-6 text-center">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(123,97,255,0.4),_transparent_65%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(123,97,255,0.28),_transparent_65%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0.9),_rgba(0,0,0,0.6)_35%,_rgba(0,0,0,0.9))]" />
          </div>

          <span className="text-xs uppercase tracking-[0.8em] text-white/60">
            DJ / PRODUCER
          </span>
          <h1 className="text-balance text-4xl font-semibold uppercase tracking-[0.12em] sm:text-6xl">
            Feel the energy of Emanuel live
          </h1>
          <p className="max-w-2xl text-balance text-base text-white/70 sm:text-lg">
            Step into a high-voltage audiovisual journey filled with towering synths,
            emotional builds, and euphoric drops. Emanuel delivers a club-ready sound that
            keeps the crowd moving until dawn.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              className="rounded-full bg-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-black transition hover:opacity-80"
              href="#shows"
            >
              Upcoming shows
            </a>
            <a
              className="rounded-full border border-white/40 px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-white/10"
              href="#music"
            >
              Latest release
            </a>
          </div>
        </section>

        <section
          id="music"
          className="relative flex flex-col gap-10 bg-white/5 px-6 py-20 backdrop-blur-sm sm:px-12"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(123,97,255,0.2),_transparent_75%)]" />
          <h2 className="text-center text-3xl font-semibold uppercase tracking-[0.2em]">
            Latest Release
          </h2>
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-[0_0_120px_rgba(123,97,255,0.25)] sm:flex-row sm:text-left">
            <div className="flex-1">
              <p className="text-xs uppercase tracking-[0.45em] text-white/60">OUT NOW</p>
              <h3 className="mt-4 text-4xl font-semibold uppercase tracking-[0.1em]">
                Midnight Pulse
              </h3>
              <p className="mt-4 text-sm text-white/70 sm:text-base">
                A thunderous progressive-house anthem sculpted for festival stages. Layered leads,
                blazing arpeggios, and a triumphant drop capture Emanuel&apos;s signature mix of
                emotion and adrenaline.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="rounded-full bg-white px-6 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-black transition hover:opacity-80"
                  href="https://open.spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stream now
                </a>
                <a
                  className="rounded-full border border-white/40 px-6 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-white transition hover:bg-white/10"
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch visualiser
                </a>
              </div>
            </div>
            <div className="hidden sm:block sm:w-px sm:bg-white/10" />
            <ul className="flex flex-1 flex-col gap-6 text-left text-xs uppercase tracking-[0.45em] text-white/60">
              <li className="flex items-center justify-between">
                <span>Tempo</span>
                <span className="font-semibold text-white">128 BPM</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Key</span>
                <span className="font-semibold text-white">Fm</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Featured Vocalist</span>
                <span className="font-semibold text-white">Lysandra</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Release Date</span>
                <span className="font-semibold text-white">27 SEP 2024</span>
              </li>
            </ul>
          </div>

          <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 text-center sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/5 px-10 py-8 uppercase tracking-[0.35em] text-white/60 transition hover:border-white/40 hover:bg-white/10"
              >
                <p className="text-sm">{item.label}</p>
                <p className="mt-4 text-3xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-[0.6rem]">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="shows" className="px-6 py-20 sm:px-12">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
            <div className="text-center">
              <h2 className="text-3xl font-semibold uppercase tracking-[0.25em]">
                Upcoming Shows
              </h2>
              <p className="mt-4 text-sm uppercase tracking-[0.35em] text-white/60">
                Secure your spot on the dancefloor
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {shows.map((show) => (
                <article
                  key={show.link}
                  className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:border-white/40 hover:bg-white/[0.08]"
                >
                  <div className="space-y-4 uppercase tracking-[0.35em]">
                    <span className="text-xs text-white/60">{show.date}</span>
                    <h3 className="text-lg font-semibold text-white">{show.city}</h3>
                    <p className="text-xs text-white/60">{show.venue}</p>
                  </div>
                  <a
                    className="mt-8 inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-white transition group-hover:text-purple-200"
                    href={show.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tickets
                    <span aria-hidden>→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer className="px-6 pb-12 text-center text-xs uppercase tracking-[0.4em] text-white/40">
          © {new Date().getFullYear()} Emanuel. Crafted for the night.
        </footer>
      </main>
    </div>
  );
}
