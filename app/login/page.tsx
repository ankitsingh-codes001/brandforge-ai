"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="w-full max-w-md rounded-3xl bg-slate-900 p-8 border border-slate-700 shadow-2xl">

        <h1 className="text-3xl font-bold text-white text-center">
          BrandForge AI
        </h1>

        <p className="text-gray-400 text-center mt-3">
          Sign in to continue
        </p>

        <input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="mt-8 w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none focus:border-cyan-400"
/>

<input
  type="password"
  placeholder="Enter your password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="mt-4 w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none focus:border-cyan-400"
/>

        <button
  onClick={async () => {
    console.log("Button clicked");

    await signIn("google", {
      callbackUrl: "/dashboard",
      prompt: "select_account",
    });
  }}
  className="mt-8 w-full rounded-xl bg-white text-black p-4 font-semibold hover:bg-gray-200 transition"
>
  Continue with Google
</button>

<button
  onClick={async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      window.location.href = "/dashboard";
    }
  }}
  className="mt-4 w-full rounded-xl bg-cyan-500 p-4 font-semibold hover:bg-cyan-400 transition"
>
  Login
</button>

<button
  onClick={async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Account Created! Check your email.");
    }
  }}
  className="mt-3 w-full rounded-xl bg-green-500 p-4 font-semibold hover:bg-green-400 transition"
>
  Create Account
</button>

      </div>
    </main>
  );
}