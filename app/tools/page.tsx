"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { saveHistory } from "@/lib/saveHistory";
import { saveFavorite } from "@/lib/saveFavorite";

export default function ToolsPage() {
  const [business, setBusiness] = useState("");
  const [industry, setIndustry] = useState("Technology");
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
  prompt: `Generate 5 premium, unique and brandable business names for a ${industry} business.

Business Idea: ${business}

Rules:
- Return only the business names.
- One name per line.
- No numbering.
- No explanation.
- Modern and startup style names.`,
}),
  });

  const data = await response.json();

  if (data.result) {
    const aiNames = data.result
      .split("\n")
      .map((name: string) => name.trim())
      .filter((name: string) => name);

    setNames(aiNames);

    await saveHistory(
  "Business Name",
  `${industry} - ${business}`,
  aiNames.join(", ")
);
    
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

        <select
  value={industry}
  onChange={(e) => setIndustry(e.target.value)}
  className="mt-6 w-full rounded-xl border border-gray-700 bg-slate-900 p-4 outline-none focus:border-cyan-400"
>
  <option>Technology</option>
  <option>Food & Restaurant</option>
  <option>Fashion</option>
  <option>Healthcare</option>
  <option>Education</option>
  <option>Finance</option>
  <option>E-commerce</option>
  <option>Real Estate</option>
  <option>Fitness</option>
  <option>Travel</option>
</select>

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
        className="flex items-center justify-between rounded-xl border border-gray-700 bg-slate-900 p-4"
      >
        <span>🚀 {name}</span>

        <div className="flex gap-2">

          <button
  onClick={async () => {
  await saveFavorite(
    "Business Name",
    business,
    name
  );

  alert("⭐ Added to Favorites!");
}}
  className="rounded-lg bg-yellow-500 px-4 py-2 text-sm font-semibold hover:bg-yellow-400"
>
  ⭐ Favorite
</button>

  <button
    onClick={() => {
      navigator.clipboard.writeText(name);
      alert("Copied!");
    }}
    className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold hover:bg-cyan-400"
  >
    📋 Copy
  </button>

  <button
    onClick={() =>
      window.open(
        `https://www.namecheap.com/domains/registration/results/?domain=${name
          .replace(/\s+/g, "")
          .toLowerCase()}`,
        "_blank"
      )
    }
    className="rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold hover:bg-green-400"
  >
    🌐 Domain
  </button>
</div>
      </div>
    ))}
  </div>
)}

      </div>
    </main>
  );
}