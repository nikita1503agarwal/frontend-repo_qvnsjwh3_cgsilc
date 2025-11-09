import { useEffect, useState } from "react";
import { ArrowUpRight, Heart } from "lucide-react";

const demoEntries = [
  {
    title: "SCP-5724: The Tannenbaum Protocol",
    author: "Dr. North",
    url: "https://scp-wiki.wikidot.com/",
    votes: 128,
  },
  {
    title: "Addendum: Bells in the Dark",
    author: "Agent Noelle",
    url: "https://scp-wiki.wikidot.com/",
    votes: 94,
  },
  {
    title: "Incident Report: Operation Snowglobe",
    author: "Researcher Frost",
    url: "https://scp-wiki.wikidot.com/",
    votes: 76,
  },
];

export default function EntriesShowcase() {
  const [entries, setEntries] = useState(demoEntries);

  useEffect(() => {
    // In a full-stack version, we'd fetch entries and live vote counts from the backend.
  }, []);

  return (
    <section className="bg-gray-50 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Entries</h2>
            <p className="mt-2 text-gray-600">A rotating selection of seasonal anomalies from the community.</p>
          </div>
          <a href="#submit" className="text-emerald-700 hover:text-emerald-600 font-medium">Submit yours</a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map((e) => (
            <a
              key={e.title}
              className="group block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
              href={e.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-700">{e.title}</h3>
                <ArrowUpRight size={18} className="text-gray-400 group-hover:text-emerald-600" />
              </div>
              <p className="mt-1 text-sm text-gray-600">by {e.author}</p>
              <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-rose-50 px-2 py-1 text-rose-600">
                <Heart size={14} />
                <span className="text-xs font-medium">{e.votes} upvotes</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
