"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Sidebar from "@/components/Sidebar";
import ToolCard from "@/components/ToolCard";
import StatsCard from "@/components/StatsCard";
import TopBar from "@/components/TopBar";

export default function DashboardPage() {
const router = useRouter();

const [history, setHistory] = useState<any[]>([]);

const [totalTools, setTotalTools] = useState(8);
const [totalGenerations, setTotalGenerations] = useState(0);
const [favorites, setFavorites] = useState(0);

useEffect(() => {
  const checkUser = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      router.push("/login");
    }
  };

  checkUser();
}, [router]);

useEffect(() => {
  loadHistory();
}, []);

async function loadHistory() {
  const { data, error } = await supabase
    .from("history")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(5);

  if (!error) {
    setHistory(data || []);
    setTotalGenerations(data?.length || 0);
  }
  const { data: favoriteData } = await supabase
  .from("favorites")
  .select("*");

setFavorites(favoriteData?.length || 0);
}
  return (
    <main className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 p-10">
        <TopBar />
        <h1 className="text-4xl font-bold">
          Welcome to BrandForge AI 🚀
        </h1>

        <p className="mt-3 text-gray-400">
          Your AI-powered business dashboard.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
  <StatsCard
    title="Total Tools"
    value={String(totalTools)}
    emoji="🛠️"
  />

  <StatsCard
    title="AI Generations"
    value={String(totalGenerations)}
    emoji="⚡"
  />

  <StatsCard
    title="Favorites"
    value={String(favorites)}
    emoji="⭐"
  />
</div>

<div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
  <h2 className="text-2xl font-bold">📜 Recent Activity</h2>

 <div className="mt-6 space-y-4">
  {history.length === 0 ? (
    <p className="text-gray-400">No recent activity.</p>
  ) : (
    history.map((item) => (
      <div
        key={item.id}
        className="flex items-center justify-between rounded-xl bg-slate-900 p-4"
      >
        <div>
          <p className="font-semibold">{item.tool}</p>
          <p className="text-sm text-gray-400">{item.input}</p>
        </div>

        <span className="text-sm text-gray-500">
          {new Date(item.created_at).toLocaleDateString()}
        </span>
      </div>
    ))
  )}
</div>
</div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          <ToolCard
            title="Business Name"
            description="Generate unique business names using AI."
            emoji="🤖"
            href="/tools"
          />

          <ToolCard
            title="Slogan Generator"
            description="Create catchy marketing slogans."
            emoji="✨"
            href="/slogan"
          />

          <ToolCard
            title="Logo Generator"
            description="Generate professional AI logo concepts."
            emoji="🎨"
            href="/logo"
          />

          <ToolCard
            title="Website Builder"
            description="Generate website content with AI."
            emoji="🌐"
            href="/website"
          />

          <ToolCard
            title="Invoice Generator"
            description="Create professional invoices."
            emoji="📄"
            href="/invoice"
          />

          <ToolCard
            title="Email Writer"
            description="Write emails with AI."
            emoji="📧"
            href="/email"
          />

          <ToolCard
            title="Domain Finder"
            description="Generate AI-powered domain name ideas."
            emoji="🌍"
            href="/domain"
          />  

          <ToolCard
            title="Social Media"
            description="Generate viral social media posts."
            emoji="📱"
            href="/social"
          />

        </div>
      </div>
    </main>
  );
}