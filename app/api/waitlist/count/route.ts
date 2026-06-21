import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function GET() {
  const db = supabaseAdmin();
  const { count, error } = await db
    .from("waitlist_signups")
    .select("*", { count: "exact", head: true });

  if (error) {
    return NextResponse.json({ count: 0 }, { status: 200 });
  }

  return NextResponse.json({ count: count ?? 0 });
}
