import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
export default function TopBar() {
  const [open, setOpen] = useState(false);

  const router = useRouter();
const [search, setSearch] = useState("");

const { data: session } = useSession();

const [plan, setPlan] = useState("Free");

  async function handleLogout() {
  await supabase.auth.signOut();
  window.location.href = "/login";
}

useEffect(() => {
  async function loadPlan() {
    if (!session?.user?.email) return;

    const { data } = await supabase
      .from("profiles")
      .select("plan")
      .eq("email", session.user.email)
      .single();

    if (data) {
      setPlan(data.plan);
    }
  }

  loadPlan();
}, [session]);

  return (
    <div className="mb-8 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
      <input
  type="text"
  placeholder="🔍 Search AI tools..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      const value = search.toLowerCase();

      if (value.includes("business")) {
        router.push("/tools");
      } else if (value.includes("logo")) {
        router.push("/logo");
      } else if (value.includes("website")) {
        router.push("/website");
      } else if (value.includes("invoice")) {
        router.push("/invoice");
      } else if (value.includes("history")) {
        router.push("/history");
      } else if (value.includes("favorite")) {
        router.push("/favorites");
      } else if (value.includes("profile")) {
        router.push("/profile");
      } else if (value.includes("pro")) {
        router.push("/pro");
      } else {
        alert("❌ Tool not found");
      }
    }
  }}
  className="w-80 rounded-xl bg-slate-900 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
/>

      <div className="flex items-center gap-4">
        <button className="rounded-xl bg-slate-900 px-4 py-3 hover:bg-slate-800">
          🔔
        </button>

        <div className="relative">
  <button
    onClick={() => setOpen(!open)}
    className="flex items-center gap-3 rounded-xl bg-slate-900 px-4 py-2 hover:bg-slate-800"
  >
    <img
  src={
    session?.user?.image ||
    "https://ui-avatars.com/api/?name=User"
  }
  alt="Profile"
  className="h-10 w-10 rounded-full border-2 border-cyan-500"
/>

    <div className="text-left">
      <p className="font-semibold">
  {session?.user?.name || "User"}
</p>
      <p className="text-sm text-gray-400">
  {plan.toUpperCase()} PLAN
</p>
    </div>
  </button>

  {open && (
    <div className="absolute right-0 mt-3 w-56 rounded-xl border border-white/10 bg-slate-900 shadow-xl">
      <a href="/favorites" className="block px-4 py-3 hover:bg-slate-800">
        ⭐ Favorites
      </a>

      <a href="/history" className="block px-4 py-3 hover:bg-slate-800">
        📜 History
      </a>

      <a href="/settings" className="block px-4 py-3 hover:bg-slate-800">
        ⚙️ Settings
      </a>

      <button
  onClick={handleLogout}
  className="w-full px-4 py-3 text-left hover:bg-red-600"
>
  🚪 Logout
</button>
    </div>
  )}
</div>
      </div>
    </div>
  );
}