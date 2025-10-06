"use client"

import { useEffect, useMemo, useState } from "react"
import useSWR from "swr"
import { SiteHeader } from "@/components/site-header"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getSupabaseBrowser } from "@/lib/supabase/client"
import ChromaGrid from "@/components/chroma/ChromaGrid"
import { Github, Linkedin, Calendar, Award } from "lucide-react"
import "@/components/chroma/ChromaGrid.css"

type DbMember = {
  id: string
  name: string
  role: "Lead" | "Member" | "Alumni" | string
  batch: string | null
  status: "Active" | "Alumni" | string | null
  skills: string[] | null
  avatar_url: string | null
  github_url: string | null
  github_handle: string | null
  linkedin_url: string | null
  bio: string | null
  created_at: string
}

const roleColor: Record<string, string> = {
  Lead: "#06B6D4", // cyan
  Member: "#3B82F6", // blue
  Alumni: "#F59E0B", // amber
}

function toGradient(role: string) {
  switch (role) {
    case "Lead":
      return "linear-gradient(145deg, #06B6D4, #000)"
    case "Alumni":
      return "linear-gradient(165deg, #F59E0B, #000)"
    default:
      return "linear-gradient(210deg, #3B82F6, #000)"
  }
}

export default function MembersPage() {
  let supabase: ReturnType<typeof getSupabaseBrowser> | null = null
  try {
    supabase = getSupabaseBrowser()
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log("[v0] Supabase client unavailable on client; skipping realtime subscription:", (e as Error)?.message)
  }

  const fetcher = async () => {
    const res = await fetch("/api/members", { cache: "no-store" })
    if (!res.ok) {
      const msg = await res.text().catch(() => res.statusText)
      throw new Error(`Failed to load members: ${msg}`)
    }
    const json = (await res.json()) as { members: DbMember[] }
    return json.members
  }

  const { data, mutate } = useSWR("members:list", fetcher, { revalidateOnFocus: false })
  const [q, setQ] = useState("")
  const [role, setRole] = useState<string | undefined>(undefined)
  const [selectedMember, setSelectedMember] = useState<DbMember | null>(null)

  useEffect(() => {
    if (!supabase) return
    const channel = supabase
      .channel("public:members")
      .on("postgres_changes", { event: "*", schema: "public", table: "members" }, () => {
        mutate()
      })
      .subscribe()

    return () => {
      supabase?.removeChannel(channel)
    }
  }, [mutate, supabase])

  const filtered = useMemo(() => {
    const list = data || []
    return list.filter((m) => {
      const hay = [m.name, m.batch || "", m.role || "", ...(m.skills || [])].join(" ").toLowerCase()
      const qok = hay.includes(q.toLowerCase())
      const rok = role ? m.role === role : true
      return qok && rok
    })
  }, [data, q, role])

  const items = useMemo(
    () =>
      filtered.map((m) => ({
        id: m.id,
        image: m.avatar_url || "/member-avatar.jpg",
        title: m.name,
        subtitle: m.role || "",
        handle: m.github_handle || "",
        borderColor: roleColor[m.role || "Member"] || "#3B82F6",
        gradient: toGradient(m.role || "Member"),
        location: m.batch || "",
      })),
    [filtered],
  )

  const handleCardClick = (itemId: string) => {
    const member = filtered.find((m) => m.id === itemId)
    if (member) {
      setSelectedMember(member)
    }
  }

  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-6 grid gap-3 md:grid-cols-3">
          <Input placeholder="Search name, batch, or skill..." value={q} onChange={(e) => setQ(e.target.value)} />
          <Select onValueChange={(v) => setRole(v)} value={role}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Lead">Lead</SelectItem>
              <SelectItem value="Member">Member</SelectItem>
              <SelectItem value="Alumni">Alumni</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="relative min-h-[480px] animate-fade-in">
          <ChromaGrid items={items} columns={4} onCardClick={handleCardClick} />
        </div>
      </section>

      <Dialog open={!!selectedMember} onOpenChange={(open) => !open && setSelectedMember(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              {selectedMember?.avatar_url && (
                <img
                  src={selectedMember.avatar_url || "/placeholder.svg"}
                  alt={selectedMember.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
              )}
              <div>
                <div className="flex items-center gap-2">
                  <span>{selectedMember?.name}</span>
                  <Badge
                    variant="outline"
                    style={{
                      borderColor: roleColor[selectedMember?.role || "Member"],
                      color: roleColor[selectedMember?.role || "Member"],
                    }}
                  >
                    {selectedMember?.role}
                  </Badge>
                </div>
                <p className="text-sm font-normal text-muted-foreground">
                  {selectedMember?.batch} • {selectedMember?.status || "Active"}
                </p>
              </div>
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Bio Section */}
            {selectedMember?.bio && (
              <div>
                <h4 className="mb-2 text-sm font-semibold">About</h4>
                <p className="text-sm text-muted-foreground">{selectedMember.bio}</p>
              </div>
            )}

            {/* Skills Section */}
            {selectedMember?.skills && selectedMember.skills.length > 0 && (
              <div>
                <h4 className="mb-2 text-sm font-semibold">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Member Info */}
            <div className="grid gap-3 rounded-lg border border-border/50 bg-secondary/20 p-4">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Joined:</span>
                <span>{new Date(selectedMember?.created_at || "").toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Award className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Status:</span>
                <Badge variant="outline">{selectedMember?.status || "Active"}</Badge>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {selectedMember?.github_url && (
                <Button variant="outline" size="sm" asChild>
                  <a href={selectedMember.github_url} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              )}
              {selectedMember?.linkedin_url && (
                <Button variant="outline" size="sm" asChild>
                  <a href={selectedMember.linkedin_url} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  )
}
