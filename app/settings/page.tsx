"use client";
import { useTheme } from "next-themes";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        ⚙️ Settings
      </h1>

      <div className="max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8">

        <div className="mb-8">
          <h2 className="text-xl font-semibold">👤 Account</h2>
          <p className="mt-2 text-gray-400">
            Manage your BrandForge AI account.
          </p>
        </div>

        <div className="space-y-6">

          <div className="rounded-xl bg-slate-900 p-5">
            <p className="font-semibold">Current Plan</p>
            <p className="text-gray-400 mt-1">Free Plan</p>
          </div>

          <div className="rounded-xl bg-slate-900 p-5">
  <p className="font-semibold mb-4">Theme</p>

  <div className="flex gap-3">

    <button
      onClick={() => setTheme("light")}
      className={`rounded-xl px-4 py-2 ${
        theme === "light"
          ? "bg-cyan-500 text-white"
          : "bg-slate-800"
      }`}
    >
      ☀️ Light
    </button>

    <button
      onClick={() => setTheme("dark")}
      className={`rounded-xl px-4 py-2 ${
        theme === "dark"
          ? "bg-cyan-500 text-white"
          : "bg-slate-800"
      }`}
    >
      🌙 Dark
    </button>

    <button
      onClick={() => setTheme("system")}
      className={`rounded-xl px-4 py-2 ${
        theme === "system"
          ? "bg-cyan-500 text-white"
          : "bg-slate-800"
      }`}
    >
      💻 System
    </button>

  </div>
</div>

          <div className="rounded-xl bg-slate-900 p-5">
            <p className="font-semibold">Language</p>
            <p className="text-gray-400 mt-1">
              English
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}