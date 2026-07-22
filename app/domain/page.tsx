"use client";

import { useState } from "react";
import { saveHistory } from "@/lib/saveHistory";

export default function DomainPage() {
  const [business, setBusiness] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const checkDomains = async () => {
    if (!business.trim()) {
      alert("Please enter your business name.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/generate-domain", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          business,
        }),
      });

      const data = await res.json();

      setResult(data.result);

      await saveHistory(
  "Domain Finder",
  business,
  data.result
);
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-6 text-white">
      <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8">

        <h1 className="text-center text-4xl font-bold">
          🌐 AI Domain Checker
        </h1>

        <p className="mt-3 text-center text-gray-400">
          Find the best domain names for your business.
        </p>

        <input
          type="text"
          placeholder="Business Name"
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
          className="mt-8 w-full rounded-xl border border-gray-700 bg-slate-900 p-4 outline-none focus:border-cyan-400"
        />

        <button
          onClick={checkDomains}
          className="mt-8 w-full rounded-xl bg-cyan-500 p-4 font-semibold hover:bg-cyan-400"
        >
          {loading ? "Checking..." : "Check Domains"}
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