"use client";

import { useState } from "react";
import { saveHistory } from "@/lib/saveHistory";

export default function SocialPage() {
  const [business, setBusiness] = useState("");
  const [platform, setPlatform] = useState("Instagram");
  const [tone, setTone] = useState("Professional");

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generatePost = async () => {
    if (!business.trim()) {
      alert("Please enter your business name.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/generate-social", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          business,
          platform,
          tone,
        }),
      });

      const data = await res.json();
      setResult(data.result);

      await saveHistory(
  "Social Media",
  `${business} | ${platform} | ${tone}`,
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
      <div className="w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8">

        <h1 className="text-center text-4xl font-bold">
          📱 AI Social Post Generator
        </h1>

        <p className="mt-3 text-center text-gray-400">
          Generate viral social media content in seconds.
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
              Platform
            </label>

            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full rounded-xl bg-slate-900 p-4"
            >
              <option>Instagram</option>
              <option>Facebook</option>
              <option>LinkedIn</option>
              <option>X (Twitter)</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-gray-300">
              Tone
            </label>

            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full rounded-xl bg-slate-900 p-4"
            >
              <option>Professional</option>
              <option>Friendly</option>
              <option>Funny</option>
              <option>Luxury</option>
              <option>Bold</option>
            </select>
          </div>

        </div>

        <button
          onClick={generatePost}
          className="mt-8 w-full rounded-xl bg-cyan-500 p-4 font-semibold hover:bg-cyan-400"
        >
          {loading ? "Generating..." : "Generate Social Post"}
        </button>

        {result && (
          <div className="mt-8 rounded-xl border border-gray-700 bg-slate-900 p-6 whitespace-pre-wrap">
            {result}
          </div>
        )}

      </div>
    </main>
  );
}