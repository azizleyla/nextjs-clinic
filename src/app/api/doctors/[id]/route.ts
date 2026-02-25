import { supabase } from "@/core/db/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_req: Request, { params }: RouteContext) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const { data, error } = await supabase
    .from("doctors")
    .select(`
      *,
      branch:branches(*),
      department:departments(title)
    `)
    .eq("id", Number(id))
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}

export async function PUT(req: NextRequest, { params }: RouteContext) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const body = await req.json();

  const { data, error } = await supabase
    .from("doctors")
    .update(body)
    .eq("id", Number(id))
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}

export async function DELETE(_req: Request, { params }: RouteContext) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const { data, error } = await supabase
    .from("doctors")
    .delete()
    .eq("id", Number(id));

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ message: "Deleted successfully", data });
}
