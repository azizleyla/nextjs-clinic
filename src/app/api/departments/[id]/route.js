import { NextResponse } from "next/server";
import { supabase } from '@/src/lib/supabaseClient';

export async function GET(req, { params }) {
    try {

        const resolvedParams = await params
        const id = Number(resolvedParams.id);
        // id yoxdursa və ya NaN-dırsa, 400 qaytar
        if (!id || isNaN(id)) {
            return NextResponse.json({ error: "Invalid doctor id" }, { status: 400 });
        }
        const { data, error } = await supabase
            .from("departments")
            .select("*")
            .eq("id", Number(id))
            .single();

        if (error) throw error;

        return NextResponse.json(data, { status: 200 });
    } catch (err) {
        console.error("Supabase GET by id error:", err.message);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
