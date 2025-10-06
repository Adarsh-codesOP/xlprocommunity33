import { createClient } from "@supabase/supabase-js"

let _admin: ReturnType<typeof createClient> | null = null

export function getAdminSupabase() {
  if (_admin) return _admin

  const url = process.env.SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !serviceRoleKey) {
    // In development/local only, fall back to public env so forms don't crash.
    if (process.env.NODE_ENV !== "production") {
      const devUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
      const devKey =
        process.env.SUPABASE_SERVICE_ROLE_KEY ||
        process.env.SUPABASE_ANON_KEY ||
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

      if (!devUrl || !devKey) {
        throw new Error(
          "Missing Supabase admin environment variables. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY, or provide NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY for local development.",
        )
      }

      if (process.env.SUPABASE_SERVICE_ROLE_KEY == null) {
        // eslint-disable-next-line no-console
        console.warn(
          "[v0] getAdminSupabase: using ANON key fallback in development. Some privileged operations may be restricted by RLS/storage policies.",
        )
      }

      _admin = createClient(devUrl, devKey, { auth: { persistSession: false } })
      return _admin
    }

    // Production: keep strict failure for security.
    throw new Error(
      "Missing Supabase admin environment variables. Please ensure SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set in your environment.",
    )
  }

  _admin = createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  })
  return _admin
}
