import { supabase } from "@/lib/supabase";

export async function saveHistory(
  tool: string,
  input: string,
  output: string
) {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) return;

  // Save history
  const { error } = await supabase.from("history").insert({
    user_email: session.user.email,
    tool,
    input,
    output,
  });

  console.log("History Error:", error);

  // Deduct 1 credit
  const { data, error: rpcError } = await supabase.rpc("decrease_credit", {
    user_email_input: session.user.email,
  });

  console.log("RPC Result:", data);
  console.log("RPC Error:", rpcError);
}