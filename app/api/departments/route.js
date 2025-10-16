import { supabase } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const { data, error } = await supabase.from('departments').select('*');
        if (error) throw error;
        return NextResponse.json(data);
    } catch (err) {
        console.error('Supabase GET error:', err.message);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const body = await req.json();

        const { data, error } = await supabase
            .from('departments')
            .insert([body])
            .select();

        if (error) throw error;

        return NextResponse.json(data, { status: 201 });
    } catch (err) {
        console.error('Supabase POST error:', err.message);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}