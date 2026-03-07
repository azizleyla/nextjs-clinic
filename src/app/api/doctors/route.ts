import { supabase } from "@/core/db/supabaseClient";
import { reportError } from "@/core/errors";
import { NextRequest, NextResponse } from "next/server";

const DEFAULT_PER_PAGE = 6;
const MAX_PER_PAGE = 20;

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const department_id = searchParams.get("department_id");
    const branch_id = searchParams.get("branch_id");
    const name = searchParams.get("name");
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10) || 1);
    const perPage = Math.min(
      MAX_PER_PAGE,
      Math.max(1, parseInt(searchParams.get("per_page") || String(DEFAULT_PER_PAGE), 10) || DEFAULT_PER_PAGE)
    );

    let query = supabase
      .from("doctors")
      .select("*", { count: "exact" });

    if (department_id) {
      query = query.eq("department_id", department_id);
    }
    if (branch_id) {
      query = query.eq("branch_id", branch_id);
    }
    if (name) {
      query = query.ilike("name", `%${name}%`);
    }

    const from = (page - 1) * perPage;
    const to = from + perPage - 1;
    const { data, count, error } = await query.range(from, to);
    if (error) throw error;

    const total = count ?? 0;
    const total_pages = Math.ceil(total / perPage) || 1;
    const current_page = Math.min(page, total_pages);

    return NextResponse.json({
      data: data ?? [],
      total,
      total_pages,
      current_page,
      per_page: perPage,
    });
  } catch (err) {
    reportError(err, { context: "api/doctors GET" });
    return NextResponse.json(
      { error: "Məlumatları yükləmək mümkün olmadı" },
      { status: 500 }
    );
  }
}
