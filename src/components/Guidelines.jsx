import { CheckCircle2 } from "lucide-react";

const rules = [
  {
    title: "Theme",
    text:
      "Stories should evoke the holidays and winter, while fitting the SCP universe. Interpret the theme creatively—humor, horror, or heartwarming are all welcome.",
  },
  {
    title: "Eligibility",
    text:
      "Open to all SCP Wiki members. Collaborative entries are allowed with proper attribution.",
  },
  {
    title: "Length",
    text:
      "Recommended 800–3000 words. Longer or shorter pieces are fine if they serve the story.",
  },
  {
    title: "Originality",
    text:
      "Entries must be new, unpublished works created for this contest and abide by site licensing.",
  },
  {
    title: "Content Warnings",
    text:
      "Include relevant warnings at the top of your entry where applicable.",
  },
  {
    title: "Voting",
    text:
      "Community upvotes determine winners. Be respectful and constructive when giving feedback.",
  },
];

export default function Guidelines() {
  return (
    <section id="guidelines" className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contest Guidelines
        </h2>
        <p className="mt-2 max-w-2xl text-gray-600">
          Before you submit, make sure your story follows the rules. Highlights below—see the full
          announcement on the SCP Wiki for details.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rules.map((r) => (
            <div key={r.title} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <div className="mb-3 inline-flex items-center gap-2 text-emerald-600">
                <CheckCircle2 size={20} />
                <span className="font-semibold">{r.title}</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
