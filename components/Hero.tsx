import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-24 text-center">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />

      <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
        🚀 AI-Powered Business Toolkit
      </span>

      <h1 className="mt-8 max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
        Build Your Business
        <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Faster With AI
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-400">
        Create logos, websites, invoices, business names and social media
        content from one powerful dashboard.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <button className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold transition hover:bg-cyan-400">
          Start Free
        </button>

        <button className="rounded-xl border border-gray-700 px-8 py-4 font-semibold transition hover:border-cyan-400">
          Live Demo
        </button>
      </div>

      <DashboardPreview />
    </section>
  );
}