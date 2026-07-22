"use client";

import { useState } from "react";
import { jsPDF } from "jspdf";
import { saveHistory } from "@/lib/saveHistory";

export default function WebsitePage() {
  const [business, setBusiness] = useState("");
  const [industry, setIndustry] = useState("Technology");

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generateWebsite = async () => {
  if (!business.trim()) {
    alert("Please enter a business name.");
    return;
  }

  setLoading(true);

  try {
    const response = await fetch("/api/generate-name", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: `Create complete website content.

Business Name: ${business}

Industry: ${industry}

Include:
- Hero Section
- About Section
- Services
- Features
- Call To Action
- Contact Section

Return only the website content.`,
      }),
    });

    const data = await response.json();

    if (data.result) {
      setResult(data.result);

      await saveHistory(
    "Website Builder",
    `${business} | ${industry}`,
    data.result
  );
    } else {
      alert("AI failed.");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  }

  setLoading(false);
};
const copyWebsite = async () => {
  await navigator.clipboard.writeText(result);
  alert("Website content copied!");
};

const downloadPDF = () => {
  const doc = new jsPDF();

  doc.setFont("helvetica", "normal");
  doc.setFontSize(14);

  const lines = doc.splitTextToSize(result, 180);

  doc.text(lines, 10, 20);

  doc.save("AI_Website_Content.pdf");
};

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8">

        <h1 className="text-4xl font-bold text-center">
          🌐 AI Website Builder
        </h1>

        <p className="mt-3 text-center text-gray-400">
          Generate complete website content with AI.
        </p>

        <input
          type="text"
          placeholder="Business Name"
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
          className="mt-8 w-full rounded-xl border border-gray-700 bg-slate-900 p-4 outline-none focus:border-cyan-400"
        />

        <select
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className="mt-6 w-full rounded-xl border border-gray-700 bg-slate-900 p-4"
        >
          <option>Technology</option>
          <option>Restaurant</option>
          <option>Healthcare</option>
          <option>Fitness</option>
          <option>Education</option>
          <option>Real Estate</option>
          <option>E-commerce</option>
          <option>Fashion</option>
          <option>Food & Restaurant</option>
          <option>Finance</option>
          <option>Travel</option>
          <option>Beauty</option>
          <option>Agency</option>
          <option>Construction</option>
          <option>Automobile</option>
          <option>Photography</option> 
          <option>Toy Store</option>
        </select>

        <button
  onClick={generateWebsite}
  className="mt-8 w-full rounded-xl bg-cyan-500 p-4 font-semibold hover:bg-cyan-400"
>
  {loading ? "Generating..." : "🚀 Generate Website"}
</button>
{result && (
  <div className="mt-8 rounded-xl border border-gray-700 bg-slate-900 p-6">
    <pre className="whitespace-pre-wrap text-sm">
      {result}
    </pre>

    <button
  onClick={copyWebsite}
  className="mt-6 mr-3 rounded-xl bg-cyan-500 px-6 py-3 font-semibold hover:bg-cyan-400"
>
  📋 Copy Website
</button>
     
    <button
  onClick={downloadPDF}
  className="mt-6 rounded-xl bg-green-500 px-6 py-3 font-semibold hover:bg-green-400"
>
  📄 Download PDF
</button>

  </div>
)}

      </div>
    </main>
  );
}