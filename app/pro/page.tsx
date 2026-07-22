"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProPage() {
  
  const [yearly, setYearly] = useState(false);

const price = yearly ? 4999 : 499;
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="mb-10 text-center text-5xl font-extrabold">
        💎 Upgrade to BrandForge Pro
      </h1>

      <p className="mb-12 text-center text-gray-400 text-lg">
        Unlock premium AI tools and unlimited generations.
      </p>
      <h1 className="mb-10 text-center text-5xl font-extrabold">
  💎 Upgrade to BrandForge Pro
</h1>

<p className="mb-12 text-center text-gray-400 text-lg">
  Unlock premium AI tools and unlimited generations.
</p>

<div className="mb-10 flex justify-center">
  <div className="flex rounded-full bg-slate-900 p-1">

    <button
      onClick={() => setYearly(false)}
      className={`rounded-full px-6 py-2 transition ${
        !yearly
          ? "bg-cyan-500 text-white"
          : "text-gray-400"
      }`}
    >
      Monthly
    </button>

    <button
      onClick={() => setYearly(true)}
      className={`rounded-full px-6 py-2 transition ${
        yearly
          ? "bg-cyan-500 text-white"
          : "text-gray-400"
      }`}
    >
      Yearly
    </button>

  </div>
</div>

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">

        {/* FREE PLAN */}

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h2 className="text-3xl font-bold">
            🚀 Free
          </h2>

          <p className="mt-4 text-5xl font-extrabold">
            ₹0
          </p>

          <p className="mt-1 text-gray-400">
            Forever
          </p>

          <ul className="mt-8 space-y-4">

            <li>✅ Business Name Generator</li>
            <li>✅ Slogan Generator</li>
            <li>✅ Website Builder</li>
            <li>✅ Social Posts</li>
            <li>✅ History</li>
            <li>❌ Unlimited AI</li>
            <li>❌ Premium Logos</li>

          </ul>

          <button className="mt-10 w-full rounded-xl bg-slate-700 py-4 font-bold">
            Current Plan
          </button>

        </div>

        {/* PRO PLAN */}

        <div className="rounded-3xl border-2 border-cyan-500 bg-cyan-500/10 p-8">

          <div className="mb-4 inline-block rounded-full bg-cyan-500 px-4 py-2 font-bold">
            MOST POPULAR
          </div>

          <h2 className="text-3xl font-bold">
            💎 Pro
          </h2>

          <p className="mt-4 text-5xl font-extrabold">
            ₹{price}
          </p>

          <p className="mt-1 text-gray-400">
            {yearly ? "Per Year • Save 20%" : "Per Month"}
          </p>

          <ul className="mt-8 space-y-4">

            <li>✅ Unlimited AI Generations</li>
            <li>✅ Premium Logo Generator</li>
            <li>✅ High Quality Images</li>
            <li>✅ AI Website Builder Pro</li>
            <li>✅ Unlimited History</li>
            <li>✅ Unlimited Favorites</li>
            <li>✅ Priority Support</li>

          </ul>

          <div className="mt-10 space-y-3">

  <button
    className="w-full rounded-xl bg-cyan-500 py-4 text-lg font-bold transition hover:bg-cyan-400"
  >
    💳 Pay with Razorpay
  </button>

  <button
    className="w-full rounded-xl border border-white/20 bg-slate-900 py-4 text-lg font-bold transition hover:bg-white/10"
  >
    🌍 Pay with PayPal
  </button>

</div>

        </div>

      </div> 

      <div className="mt-20">

  <h2 className="text-center text-4xl font-bold">
    Why Upgrade?
  </h2>

  <div className="mt-12 grid gap-6 md:grid-cols-3">

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-5xl">⚡</div>
      <h3 className="mt-4 text-2xl font-bold">
        Unlimited AI
      </h3>
      <p className="mt-3 text-gray-400">
        Generate unlimited business names, slogans,
        logos, emails and much more.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-5xl">🚀</div>
      <h3 className="mt-4 text-2xl font-bold">
        Faster Generation
      </h3>
      <p className="mt-3 text-gray-400">
        Priority AI processing with premium performance.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-5xl">🛡️</div>
      <h3 className="mt-4 text-2xl font-bold">
        Premium Support
      </h3>
      <p className="mt-3 text-gray-400">
        Get priority support and early access to new tools.
      </p>
    </div>

  </div>

</div>

<div className="mt-24">

  <h2 className="mb-10 text-center text-4xl font-bold">
    Compare Plans
  </h2>

  <div className="overflow-hidden rounded-3xl border border-white/10">

    <table className="w-full">

      <thead className="bg-cyan-500 text-black">

        <tr>
          <th className="p-5 text-left">Feature</th>
          <th className="p-5">Free</th>
          <th className="p-5">Pro</th>
        </tr>

      </thead>

      <tbody className="bg-slate-900">

        <tr className="border-t border-white/10">
          <td className="p-5">AI Generations</td>
          <td className="text-center">100 / Month</td>
          <td className="text-center text-green-400">Unlimited</td>
        </tr>

        <tr className="border-t border-white/10">
          <td className="p-5">Logo Generator</td>
          <td className="text-center">Basic</td>
          <td className="text-center text-green-400">Premium</td>
        </tr>

        <tr className="border-t border-white/10">
          <td className="p-5">Website Builder</td>
          <td className="text-center">Basic</td>
          <td className="text-center text-green-400">Pro Templates</td>
        </tr>

        <tr className="border-t border-white/10">
          <td className="p-5">History</td>
          <td className="text-center">100</td>
          <td className="text-center text-green-400">Unlimited</td>
        </tr>

        <tr className="border-t border-white/10">
          <td className="p-5">Favorites</td>
          <td className="text-center">50</td>
          <td className="text-center text-green-400">Unlimited</td>
        </tr>

        <tr className="border-t border-white/10">
          <td className="p-5">Priority Support</td>
          <td className="text-center">❌</td>
          <td className="text-center text-green-400">✅</td>
        </tr>

      </tbody>

    </table>

  </div>

</div>

<div className="mt-24">

  <h2 className="text-center text-4xl font-bold">
    Loved by Thousands
  </h2>

  <p className="mt-3 text-center text-gray-400">
    Join thousands of entrepreneurs using BrandForge AI.
  </p>

  <div className="mt-12 grid gap-6 md:grid-cols-3">

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-yellow-400 text-2xl">
        ⭐⭐⭐⭐⭐
      </div>

      <p className="mt-4 text-gray-300">
        "This AI saved me hours every week. Worth every rupee."
      </p>

      <h3 className="mt-5 font-bold">
        Sarah Williams
      </h3>

      <p className="text-gray-500">
        Startup Founder
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-yellow-400 text-2xl">
        ⭐⭐⭐⭐⭐
      </div>

      <p className="mt-4 text-gray-300">
        "The logo generator and website builder are amazing."
      </p>

      <h3 className="mt-5 font-bold">
        Alex Carter
      </h3>

      <p className="text-gray-500">
        Designer
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-yellow-400 text-2xl">
        ⭐⭐⭐⭐⭐
      </div>

      <p className="mt-4 text-gray-300">
        "Perfect for freelancers and small businesses."
      </p>

      <h3 className="mt-5 font-bold">
        Rahul Sharma
      </h3>

      <p className="text-gray-500">
        Freelancer
      </p>
    </div>

  </div>

</div>

<div className="mt-24">

  <h2 className="text-center text-4xl font-bold">
    Frequently Asked Questions
  </h2>

  <div className="mx-auto mt-10 max-w-4xl space-y-4">

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold">
        ❓ Can I cancel anytime?
      </h3>

      <p className="mt-3 text-gray-400">
        Yes. You can cancel your subscription anytime from your account settings.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold">
        💳 Which payment methods are supported?
      </h3>

      <p className="mt-3 text-gray-400">
        We support Razorpay (UPI, Cards, Net Banking) and PayPal for international payments.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold">
        🔄 Is there a refund policy?
      </h3>

      <p className="mt-3 text-gray-400">
        Yes, we offer a 7-day money-back guarantee if you're not satisfied.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold">
        🚀 What do I get with Pro?
      </h3>

      <p className="mt-3 text-gray-400">
        Unlimited AI generations, premium tools, faster processing, and priority support.
      </p>
    </div>

  </div>

</div>

      <div className="mt-14 text-center">

        <Link
          href="/dashboard"
          className="rounded-xl bg-white/10 px-6 py-3 hover:bg-white/20"
        >
          ← Back to Dashboard
        </Link>

      </div>

    </main>
  );
}