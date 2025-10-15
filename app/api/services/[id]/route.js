import { NextResponse } from "next/server";
import { supabase } from '@/lib/supabaseClient';

export async function GET(req, { params }) {
    try {
        const { id } = params;

        const { data, error } = await supabase
            .from("services")
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
