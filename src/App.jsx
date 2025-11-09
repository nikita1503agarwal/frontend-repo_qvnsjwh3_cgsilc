import Hero from './components/Hero';
import Guidelines from './components/Guidelines';
import Timeline from './components/Timeline';
import EntriesShowcase from './components/EntriesShowcase';
import SubmissionForm from './components/SubmissionForm';

function App() {
  return (
    <div className="min-h-screen bg-emerald-50 text-gray-900">
      {/* Header / Hero */}
      <Hero />

      {/* Entries */}
      <EntriesShowcase />

      {/* Guidelines */}
      <Guidelines />

      {/* Timeline */}
      <Timeline />

      {/* Submission */}
      <SubmissionForm />

      {/* Footer */}
      <footer className="bg-gray-900 py-10 text-gray-300">
        <div className="mx-auto max-w-6xl px-6 text-sm">
          <p className="mb-2 font-medium text-white">SCP Wiki Christmas Writing Contest</p>
          <p>
            This is a community hub inspired by the SCP Foundation universe. SCP is licensed under
            CC BY-SA 3.0; all works must comply with site licensing. Not affiliated with the SCP Wiki.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
