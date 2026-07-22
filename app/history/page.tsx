"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function HistoryPage() {
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    loadHistory();
  }, []);

  async function loadHistory() {
    const { data, error } = await supabase
      .from("history")
      .select("id, created_at, tool, input, output")
      .order("created_at", { ascending: false });

      console.log("History Data:", data);
      console.log("History Error:", error);

    if (error) {
      console.error(error);
    } else {
      setHistory(data || []);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        📜 History
      </h1>

      <div className="space-y-4">
        {history.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-gray-700 bg-slate-900 p-5"
          >
            <h2 className="font-bold text-cyan-400">
              {item.tool}
            </h2>

            <p className="mt-2">
              <strong>Input:</strong> {item.input}
            </p>

            <p className="mt-2 whitespace-pre-wrap">
              <strong>Output:</strong> {item.output}
            </p>

            <p className="mt-2 text-sm text-gray-400">
              {new Date(item.created_at).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}