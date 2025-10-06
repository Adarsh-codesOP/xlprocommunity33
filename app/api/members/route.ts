import { NextResponse } from "next/server"
import { getServerSupabase } from "@/lib/supabase/server"

export async function GET() {
  const supabase = getServerSupabase()
  const { data, error } = await supabase
    .from("members")
    .select("id,name,role,batch,status,skills,avatar_url,github_url,github_handle,linkedin_url,bio,created_at")
    .order("created_at", { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ members: data ?? [] })
}
