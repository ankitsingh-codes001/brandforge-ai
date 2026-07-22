"use client";

import { useState } from "react";
import { saveHistory } from "@/lib/saveHistory";

export default function InvoicePage() {
  const [company, setCompany] = useState("");
  const [client, setClient] = useState("");
  const [service, setService] = useState("");
  const [amount, setAmount] = useState("");
  const [invoice, setInvoice] = useState("");
  const [loading, setLoading] = useState(false);
 
const generateInvoice = () => {
  if (!company || !client || !service || !amount) {
    alert("Please fill all fields.");
    return;
  }

  setLoading(true);

  const invoiceText = `
==========================
        INVOICE
==========================

Company : ${company}

Client : ${client}

Service : ${service}

Amount : ₹${amount}

Status : Pending

Thank you for your business.
`;

  setInvoice(invoiceText);

  await saveHistory(
  "Invoice Generator",
  `${company} | ${client} | ${service} | ₹${amount}`,
  invoiceText
);

  setLoading(false);
};
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8">

        <h1 className="text-4xl font-bold text-center">
          🧾 AI Invoice Generator
        </h1>

        <p className="mt-3 text-center text-gray-400">
          Create professional invoices in seconds.
        </p>

        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="mt-8 w-full rounded-xl border border-gray-700 bg-slate-900 p-4"
        />

        <input
          type="text"
          placeholder="Client Name"
          value={client}
          onChange={(e) => setClient(e.target.value)}
          className="mt-4 w-full rounded-xl border border-gray-700 bg-slate-900 p-4"
        />

        <input
          type="text"
          placeholder="Service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="mt-4 w-full rounded-xl border border-gray-700 bg-slate-900 p-4"
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mt-4 w-full rounded-xl border border-gray-700 bg-slate-900 p-4"
        />

        <button
  onClick={generateInvoice}
  className="mt-8 w-full rounded-xl bg-cyan-500 p-4 font-semibold hover:bg-cyan-400"
>
  {loading ? "Generating..." : "🧾 Generate Invoice"}
</button>

{invoice && (
  <div className="mt-8 rounded-xl border border-gray-700 bg-slate-900 p-6">
    <pre className="whitespace-pre-wrap text-sm">
      {invoice}
    </pre>
  </div>
)}

      </div>
    </main>
  );
}