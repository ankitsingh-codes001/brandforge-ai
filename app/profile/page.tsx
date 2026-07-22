"use client";

import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { supabase } from "@/lib/supabase"; 
import { createProfile } from "@/lib/createProfile";

export default function ProfilePage() {
  const { data: session } = useSession();
  const [historyCount, setHistoryCount] = useState(0);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [plan, setPlan] = useState("free");
  const [credits, setCredits] = useState(100);

  useEffect(() => {
  if (session?.user?.email) {
    createProfile(session.user);
    loadProfileData();
  }
}, [session]);

async function loadProfileData() {
  setLoading(true);

  // History Count
  const { count: history } = await supabase
    .from("history")
    .select("*", { count: "exact", head: true })
    .eq("user_email", session?.user?.email);

  // Favorite Count
  const { count: favorites } = await supabase
    .from("favorites")
    .select("*", { count: "exact", head: true })
    .eq("user_email", session?.user?.email);

  setHistoryCount(history || 0);
  setFavoriteCount(favorites || 0);

  // Profile Data
const { data: profile } = await supabase
  .from("profiles")
  .select("plan, credits")
  .eq("email", session?.user?.email)
  .single();

if (profile) {
  setPlan(profile.plan);
  setCredits(profile.credits);
}

  setLoading(false);
}

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="mb-8 text-4xl font-bold">
        👤 My Profile
      </h1>

      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-8">

        <div className="flex items-center gap-6">

          <img
            src={session?.user?.image || "https://ui-avatars.com/api/?name=User"}
            alt="Profile"
            className="h-28 w-28 rounded-full border-4 border-cyan-500"
          />

          <div>

            <h2 className="text-3xl font-bold">
              {session?.user?.name || "User"}
            </h2>

            <p className="mt-2 text-gray-400">
              {session?.user?.email}
            </p>

            <div className="mt-4 inline-block rounded-full bg-cyan-500 px-4 py-2 font-semibold">
  🚀 {loading ? "Loading..." : `${plan.toUpperCase()} PLAN`}
</div>

          </div>

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-4">

          <div className="rounded-2xl bg-slate-900 p-6 text-center">
  <p className="text-4xl">💰</p>

  <h3 className="mt-3 text-3xl font-bold">
    {loading ? "..." : credits}
  </h3>

  <p className="text-gray-400">
    Credits
  </p>
</div>

          <div className="rounded-2xl bg-slate-900 p-6 text-center">
  <p className="text-4xl">⭐</p>
  <h3 className="mt-3 text-3xl font-bold">
    {loading ? "..." : favoriteCount}
  </h3>
            <p className="text-gray-400">
              Favorites
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6 text-center">
  <p className="text-4xl">📜</p>
  <h3 className="mt-3 text-3xl font-bold">
    {loading ? "..." : historyCount}
  </h3>
            <p className="text-gray-400">
              History
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6 text-center">
            <p className="text-4xl">💎</p>
            <h3 className="mt-3 text-xl font-bold uppercase">
  {loading ? "..." : plan}
</h3>
            <p className="text-gray-400">
              Current Plan
            </p>
          </div>

        </div>

        <div className="mt-10 flex gap-4">

          <button className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold hover:bg-cyan-400">
            ✏️ Edit Profile
          </button>

          <button
            onClick={() => signOut()}
            className="rounded-xl bg-red-500 px-6 py-3 font-semibold hover:bg-red-400"
          >
            🚪 Logout
          </button>

        </div>

      </div>

    </main>
  );
}