import { useState } from "react";
import { Upload, Loader2, Check } from "lucide-react";

export default function SubmissionForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);

    // In a full app this would call a backend to store the entry.
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
    setTitle("");
    setAuthor("");
    setUrl("");
  };

  return (
    <section id="submit" className="bg-white py-14">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Submit Your Entry
        </h2>
        <p className="mt-2 text-gray-600">
          Post your story on the SCP Wiki and paste the link below. We'll list it on the hub.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Story Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              placeholder="e.g., SCP-🎄 The Evergreen Anomaly"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Author</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                placeholder="Your wiki username"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Entry URL</label>
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                placeholder="https://scp-wiki.wikidot.com/..."
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-5 py-2.5 font-medium text-white shadow hover:bg-emerald-500 disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={18} /> Submitting...
              </>
            ) : (
              <>
                <Upload size={18} /> Submit Entry
              </>
            )}
          </button>

          {submitted && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-md bg-emerald-50 px-3 py-2 text-emerald-700">
              <Check size={18} /> Entry received! This demo stores locally; in production it would update the hub list.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
