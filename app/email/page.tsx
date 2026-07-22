"use client";

import { useState } from "react";
import { jsPDF } from "jspdf";
import { saveHistory } from "@/lib/saveHistory";

export default function EmailPage() {
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [purpose, setPurpose] = useState("");
  const [tone, setTone] = useState("Professional");

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generateEmail = async () => {
    if (!recipient.trim() || !subject.trim()) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/generate-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
  recipient,
  subject,
  purpose,
  tone,
}),
      });

      const data = await res.json();
      setResult(data.result);

      await saveHistory(
  "Email Writer",
  `${recipient} | ${subject} | ${purpose} | ${tone}`,
  data.result
);
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  const copyEmail = async () => {
  await navigator.clipboard.writeText(result);
  alert("Email copied!");
};

const downloadPDF = () => {
  const doc = new jsPDF();

  doc.setFont("helvetica", "normal");
  doc.setFontSize(14);

  const lines = doc.splitTextToSize(result, 180);

  doc.text(lines, 10, 20);

  doc.save("AI_Email.pdf");
};

const openGmail = () => {
  const subjectEncoded = encodeURIComponent(subject);
  const bodyEncoded = encodeURIComponent(result);

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&su=${subjectEncoded}&body=${bodyEncoded}`;

  window.open(gmailUrl, "_blank");
};

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8">

        <h1 className="text-center text-4xl font-bold">
          📧 AI Email Writer
        </h1>

        <p className="mt-3 text-center text-gray-400">
          Generate professional emails with AI.
        </p>

        <input
          type="text"
          placeholder="Recipient Name"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="mt-8 w-full rounded-xl border border-gray-700 bg-slate-900 p-4 outline-none focus:border-cyan-400"
        />

        <input
          type="text"
          placeholder="Email Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="mt-6 w-full rounded-xl border border-gray-700 bg-slate-900 p-4 outline-none focus:border-cyan-400"
        />
        <input
  type="text"
  placeholder="Purpose (Example: Partnership Request)"
  value={purpose}
  onChange={(e) => setPurpose(e.target.value)}
  className="mt-6 w-full rounded-xl border border-gray-700 bg-slate-900 p-4 outline-none focus:border-cyan-400"
/>

        <div className="mt-6">
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
            <option>Formal</option>
            <option>Sales</option>
            <option>Apology</option>
          </select>
        </div>

        <button
          onClick={generateEmail}
          className="mt-8 w-full rounded-xl bg-cyan-500 p-4 font-semibold hover:bg-cyan-400"
        >
          {loading ? "Generating..." : "Generate Email"}
        </button>

        {result && (
          <div className="mt-8 rounded-xl border border-gray-700 bg-slate-900 p-6">
            <pre className="whitespace-pre-wrap text-sm">{result}</pre>

            <div className="mt-6 flex flex-wrap gap-4">

  <button
    onClick={copyEmail}
    className="rounded-xl bg-green-500 px-6 py-3 font-semibold hover:bg-green-400"
  >
    📋 Copy Email
  </button>

  <button
    onClick={downloadPDF}
    className="rounded-xl bg-red-500 px-6 py-3 font-semibold hover:bg-red-400"
  >
    📄 Download PDF
  </button>
  <button
  onClick={openGmail}
  className="rounded-xl bg-blue-500 px-6 py-3 font-semibold hover:bg-blue-400"
>
  📧 Open in Gmail
</button>

</div>
          </div>
        )}

      </div>
    </main>
  );
}