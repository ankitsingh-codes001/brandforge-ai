import { supabase } from "@/lib/supabase";

export async function saveFavorite(
  tool: string,
  input: string,
  output: string
) {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) return;

  const { error } = await supabase.from("favorites").insert({
    user_email: session.user.email,
    tool,
    input,
    output,
  });

  if (error) {
    console.error("Favorite Save Error:", error);
  }
}