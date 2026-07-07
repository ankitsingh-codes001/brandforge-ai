"use client";

import { useState } from "react";

export default function ToolsPage() {
  const [business, setBusiness] = useState("");
  const [names, setNames] = useState<string[]>([]);

 const generateNames = async () => {
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
      prompt: `Generate 5 creative business names for: ${business}. Return only the names, one per line.`,
    }),
  });

  const data = await response.json();

  if (data.result) {
    const aiNames = data.result
      .split("\n")
      .map((name: string) => name.trim())
      .filter((name: string) => name);

    setNames(aiNames);
  } else {
    alert("AI failed to generate names.");
  }
};

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8">

        <h1 className="text-4xl font-bold text-center">
          AI Business Name Generator
        </h1>

        <p className="mt-3 text-center text-gray-400">
          Enter your business type and generate brand name ideas.
        </p>

        <input
          type="text"
          placeholder="Example: Coffee Shop"
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
          className="mt-8 w-full rounded-xl border border-gray-700 bg-slate-900 p-4 outline-none focus:border-cyan-400"
        />

        <button
          onClick={generateNames}
          className="mt-5 w-full rounded-xl bg-cyan-500 p-4 font-semibold hover:bg-cyan-400"
        >
          Generate Names
        </button>

        {names.length > 0 && (
          <div className="mt-8 space-y-3">
            {names.map((name, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-700 bg-slate-900 p-4"
              >
                🚀 {name}
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}