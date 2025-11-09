import { Calendar, Bell } from "lucide-react";

const phases = [
  { title: "Kickoff", date: "Dec 1", details: "Theme announced and sign-ups open." },
  { title: "Writing Window", date: "Dec 1–24", details: "Draft, collaborate, and polish your entry." },
  { title: "Submission Deadline", date: "Dec 24", details: "Submit before midnight UTC." },
  { title: "Voting", date: "Dec 25–31", details: "Community reads and upvotes." },
  { title: "Winners Announced", date: "Jan 1", details: "Celebrate the top stories of the season." },
];

export default function Timeline() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Event Timeline</h2>
          <a
            href="#reminders"
            className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-500"
          >
            <Bell size={16} /> Get reminders
          </a>
        </div>

        <ol className="relative border-l border-gray-200 pl-6">
          {phases.map((p, i) => (
            <li key={p.title} className="mb-8">
              <div className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-600 shadow" />
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <Calendar className="text-emerald-600" size={18} />
                  <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                    {p.date}
                  </span>
                </div>
                <p className="text-sm text-gray-700">{p.details}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
