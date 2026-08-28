import { NextResponse } from "next/server";
import { addEntry, getAllEntries } from "@/lib/leads-store";

const ADMIN_KEY = process.env.ADMIN_PASSWORD ?? "";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Record<string, unknown>;
    const entry = await addEntry({
      type: body.type === "activity" ? "activity" : "lead",
      kind: typeof body.kind === "string" ? body.kind : undefined,
      name: typeof body.name === "string" ? body.name : undefined,
      email: typeof body.email === "string" ? body.email : undefined,
      phone: typeof body.phone === "string" ? body.phone : undefined,
      brand: typeof body.brand === "string" ? body.brand : undefined,
      service: typeof body.service === "string" ? body.service : undefined,
      budget: typeof body.budget === "string" ? body.budget : undefined,
      message: typeof body.message === "string" ? body.message : undefined,
      page: typeof body.page === "string" ? body.page : undefined,
      data: body.data && typeof body.data === "object" ? (body.data as Record<string, unknown>) : undefined,
    });
    return NextResponse.json({ ok: true, id: entry.id }, { status: 201 });
  } catch {
    return NextResponse.json({ ok: false, error: "bad request" }, { status: 400 });
  }
}

export async function GET(req: Request) {
  const key = req.headers.get("x-admin-key");
  if (key !== ADMIN_KEY) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }
  const all = await getAllEntries();
  const leads = all.filter((l) => l.type === "lead");
  const activities = all.filter((l) => l.type === "activity");
  return NextResponse.json({ ok: true, leads, activities });
}
