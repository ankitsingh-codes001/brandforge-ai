"use client";

import Link from "next/link";

const menuItems = [
  { icon: "🏠", name: "Dashboard", href: "/dashboard" },

  { icon: "🤖", name: "Business Name", href: "/tools" },
  { icon: "✨", name: "Slogan Generator", href: "/slogan" },
  { icon: "🎨", name: "Logo Generator", href: "#" },
  { icon: "🌐", name: "Website Builder", href: "#" },
  { icon: "📄", name: "Invoice", href: "#" },
  { icon: "📧", name: "Email Writer", href: "#" },

  { icon: "⚙️", name: "Settings", href: "#" },
];

export default function Sidebar() {
  return (
    <aside className="flex min-h-screen w-72 flex-col border-r border-white/10 bg-slate-900/80 p-6 backdrop-blur-xl">

      <div>
        <h1 className="text-3xl font-extrabold text-cyan-400">
          BrandForge AI
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          AI Business Suite
        </p>
      </div>

      <div className="mt-10">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
          AI TOOLS
        </p>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-300 transition hover:bg-cyan-500 hover:text-white"
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-auto rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">
        <p className="font-semibold text-cyan-300">
          🚀 Upgrade to Pro
        </p>

        <p className="mt-2 text-sm text-gray-400">
          Unlock unlimited AI generations and premium tools.
        </p>

        <button className="mt-4 w-full rounded-xl bg-cyan-500 py-3 font-semibold transition hover:bg-cyan-400">
          Upgrade
        </button>
      </div>

    </aside>
  );
}