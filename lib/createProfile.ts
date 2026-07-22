import { supabase } from "@/lib/supabase";

export async function createProfile(user: {
  email?: string | null;
  name?: string | null;
  image?: string | null;
}) {
  if (!user.email) return;

  // Check if profile exists
  const { data: existingProfile, error } = await supabase
    .from("profiles")
    .select("id")
    .eq("email", user.email)
    .maybeSingle();

  if (error) {
    console.error("Profile Check Error:", error);
    return;
  }

  // Already exists
  if (existingProfile) {
    console.log("Profile already exists");
    return;
  }

  // Create profile
  const { error: insertError } = await supabase
    .from("profiles")
    .insert({
      email: user.email,
      name: user.name,
      avatar: user.image,
      plan: "free",
      credits: 100,
    });

  if (insertError) {
    console.error("Create Profile Error:", insertError);
  } else {
    console.log("Profile Created Successfully");
  }
}