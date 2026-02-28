import { supabase } from "@/core/db/supabaseClient";
import { reportError } from "@/core/errors";
import { NextResponse } from "next/server";

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
    reportError(err, { context: "api/departments/[id] GET" });
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
