import Navbar from "@/components/Navbar";
import Link from "next/link";
import DashboardPreview from "@/components/DashboardPreview";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />
      <Navbar />

      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-24 text-center">
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
          <Link
  href="/login"
  className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold transition hover:bg-cyan-400"
>
  Start Free
</Link>

          <Link
  href="/dashboard"
  className="rounded-xl border border-gray-700 px-8 py-4 font-semibold transition hover:border-cyan-400"
>
  Live Demo
</Link>
        </div>
        <DashboardPreview />
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24">
  <h2 className="text-center text-4xl font-bold">
    Everything You Need to Build Your Brand
  </h2>

  <p className="mt-4 text-center text-gray-400">
    Powerful AI tools to help entrepreneurs launch faster.
  </p>

  <div className="mt-14 grid gap-6 md:grid-cols-3">

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:scale-105 hover:border-cyan-400">
      <div className="text-5xl">🤖</div>
      <h3 className="mt-5 text-2xl font-bold">
        Business Name Generator
      </h3>

      <p className="mt-3 text-gray-400">
        Generate unique startup names in seconds using AI.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:scale-105 hover:border-cyan-400">
      <div className="text-5xl">🎨</div>

      <h3 className="mt-5 text-2xl font-bold">
        Logo Generator
      </h3>

      <p className="mt-3 text-gray-400">
        Create modern logo ideas for your business instantly.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:scale-105 hover:border-cyan-400">
      <div className="text-5xl">🌐</div>

      <h3 className="mt-5 text-2xl font-bold">
        Website Builder
      </h3>

      <p className="mt-3 text-gray-400">
        Generate landing page content and launch quickly.
      </p>
    </div>

  </div>
</section>
    </main>
  );
}