"use client";

import { useState } from "react";
import { saveHistory } from "@/lib/saveHistory";

export default function LogoPage() {
  const [business, setBusiness] = useState("");
  const [style, setStyle] = useState("Modern");
  const [color, setColor] = useState("Blue");

  const [logoUrl, setLogoUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const generateLogo = async () => {
    if (!business.trim()) {
      alert("Please enter your business name.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/generate-logo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          business,
          style,
          color,
        }),
      });

      const data = await res.json();

      setLogoUrl(data.result);

await saveHistory(
  "Logo Generator",
  `${business} | ${style} | ${color}`,
  data.result
);
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8">

        <h1 className="text-4xl font-bold text-center">
          🎨 AI Logo Generator
        </h1>

        <p className="mt-3 text-center text-gray-400">
          Generate professional logo ideas for your business.
        </p>

        <input
          type="text"
          placeholder="Business Name"
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
          className="mt-8 w-full rounded-xl border border-gray-700 bg-slate-900 p-4 outline-none focus:border-cyan-400"
        />

        <div className="mt-6 grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block text-gray-300">
              Logo Style
            </label>

            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full rounded-xl bg-slate-900 p-4"
            >
              <option>Modern</option>
              <option>Minimal</option>
              <option>Luxury</option>
              <option>Tech</option>
              <option>Vintage</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-gray-300">
              Primary Color
            </label>

            <select
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full rounded-xl bg-slate-900 p-4"
            >
              <option>Blue</option>
              <option>Black</option>
              <option>Gold</option>
              <option>Green</option>
              <option>Purple</option>
            </select>
          </div>

        </div>

        <button
          onClick={generateLogo}
          className="mt-8 w-full rounded-xl bg-cyan-500 p-4 font-semibold hover:bg-cyan-400"
        >
          {loading ? "Generating..." : "Generate Logo Concept"}
        </button>

        {logoUrl && (
  <div className="mt-8 rounded-xl border border-gray-700 bg-slate-900 p-6">

    <img
      src={logoUrl}
      alt="Generated Logo"
      className="mx-auto w-80 rounded-xl"
    />

    <div className="mt-6 flex justify-center">

      <a
        href={logoUrl}
        download="logo.png"
        target="_blank"
        rel="noreferrer"
        className="rounded-xl bg-green-500 px-6 py-3 font-semibold hover:bg-green-400"
      >
        📥 Download Logo
      </a>

    </div>

  </div>
)}

      </div>
    </main>
  );
}