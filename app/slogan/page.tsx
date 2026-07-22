"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { saveHistory } from "@/lib/saveHistory";

export default function SloganPage() {
  const [business, setBusiness] = useState("");
  const [slogans, setSlogans] = useState<string[]>([]);

  const generateSlogans = async () => {
    if (!business.trim()) {
      alert("Please enter a business type.");
      return;
    }

    const response = await fetch("/api/generate-name", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: `Generate 5 short, catchy marketing slogans for a ${business}. Return only the slogans, one per line.`,
      }),
    });

    const data = await response.json();

    if (data.result) {
      const aiSlogans = data.result
        .split("\n")
        .map((line: string) => line.trim())
        .filter((line: string) => line);

      setSlogans(aiSlogans);

      await saveHistory(
  "Slogan Generator",
  business,
  aiSlogans.join("\n")
);
    }
  };


  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-4xl font-bold text-center">
          AI Slogan Generator
        </h1>

        <p className="mt-3 text-center text-gray-400">
          Enter your business type and generate catchy slogans.
        </p>

        <input
          type="text"
          placeholder="Example: Coffee Shop"
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
          className="mt-8 w-full rounded-xl border border-gray-700 bg-slate-900 p-4 outline-none focus:border-cyan-400"
        />

        <button
          onClick={generateSlogans}
          className="mt-5 w-full rounded-xl bg-cyan-500 p-4 font-semibold hover:bg-cyan-400"
        >
          Generate Slogans
        </button>

        {slogans.length > 0 && (
          <div className="mt-8 space-y-3">
            {slogans.map((slogan, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-700 bg-slate-900 p-4"
              >
                ✨ {slogan}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}