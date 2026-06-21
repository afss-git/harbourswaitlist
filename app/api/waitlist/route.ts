import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { sendWaitlistConfirmation } from "@/lib/resend";

export const dynamic = "force-dynamic";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, role } = body as Record<string, string>;

  if (!name || name.trim().length < 2) {
    return NextResponse.json({ error: "Please enter your full name." }, { status: 422 });
  }
  if (!email || !emailRe.test(email.trim())) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 422 });
  }
  if (!["buyer", "seller", "both"].includes(role)) {
    return NextResponse.json({ error: "Please select a role." }, { status: 422 });
  }

  const db = supabaseAdmin();
  const { error } = await db.from("waitlist_signups").insert({
    name: name.trim(),
    email: email.trim().toLowerCase(),
    role,
  });

  if (error) {
    if (error.code === "23505") {
      // unique constraint violation, already on list
      return NextResponse.json(
        { error: "duplicate", message: "You are already on the waitlist. We will be in touch ahead of launch." },
        { status: 409 }
      );
    }
    console.error("Waitlist insert error:", error.message);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }

  // fire-and-forget confirmation email (non-blocking)
  sendWaitlistConfirmation({
    name: name.trim(),
    email: email.trim().toLowerCase(),
    role: role as "buyer" | "seller" | "both",
  }).catch((err) => console.error("Resend error:", err));

  return NextResponse.json({ success: true }, { status: 201 });
}
