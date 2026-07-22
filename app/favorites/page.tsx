"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  
async function loadFavorites() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) return;

  const { data, error } = await supabase
    .from("favorites")
    .select("*")
    .eq("user_email", session.user.email)
    .order("created_at", { ascending: false });

  if (!error) {
    setFavorites(data || []);
  }
}

async function deleteFavorite(id: number) {
    console.log("Delete Clicked", id);

  const { error } = await supabase
    .from("favorites")
    .delete()
    .eq("id", id);

    console.log(error);

  if (error) {
    alert("Delete failed!");
  } else {
  setFavorites((prev) => prev.filter((item) => item.id !== id));
}
}

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="mb-8 text-4xl font-bold">
        ⭐ Favorites
      </h1>

      <div className="space-y-4">
        {favorites.length === 0 ? (
          <p className="text-gray-400">No favorites found.</p>
        ) : (
          favorites.map((item) => (
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

              <p className="mt-2">
                <strong>Output:</strong> {item.output}
              </p>

              <p className="mt-2 text-sm text-gray-400">
                {new Date(item.created_at).toLocaleString()}
              </p>

              <button
  onClick={() => deleteFavorite(item.id)}
  className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold hover:bg-red-400"
>
  🗑 Delete
</button>
            </div>
          ))
        )}
      </div>
    </main>
  );
}