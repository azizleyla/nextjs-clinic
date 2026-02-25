import { NextResponse } from "next/server";
import { supabase } from "@/core/db/supabaseClient";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(
  _req: Request,
  { params }: RouteContext
) {
  try {
    const resolvedParams = await params;
    const id = Number(resolvedParams.id);
    if (!id || isNaN(id)) {
      return NextResponse.json({ error: "Invalid doctor id" }, { status: 400 });
    }
    const { data, error } = await supabase
      .from("departments")
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw error;
    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Supabase GET by id error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
