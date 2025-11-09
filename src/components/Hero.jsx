import { Gift, Snowflake, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-800 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.12),transparent_40%)]" />

      {/* Soft snow dots */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        {[...Array(36)].map((_, i) => (
          <Snowflake
            key={i}
            className="absolute text-white/60"
            style={{
              left: `${(i * 91) % 100}%`,
              top: `${(i * 43) % 100}%`,
              transform: `scale(${0.5 + ((i * 11) % 40) / 100}) rotate(${(i * 37) % 360}deg)`,
            }}
            size={14}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 text-center">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur">
          <Gift size={18} />
          <span>Holiday Special • SCP Wiki Community Event</span>
        </div>
        <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          Christmas Writing Contest Hub
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
          Celebrate the season with anomalous cheer. Join the SCP Wiki community for a
          festive writing challenge—create, share, and vote on your favorite wintery weirdness.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#guidelines"
            className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 font-medium text-emerald-700 shadow hover:shadow-lg transition"
          >
            Read the Rules
          </a>
          <a
            href="#submit"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 px-5 py-3 font-medium text-white shadow hover:bg-emerald-400 transition"
          >
            Submit Your Entry <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
