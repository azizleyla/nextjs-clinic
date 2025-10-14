import { supabase } from '@/lib/supabaseClient';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const { data, error } = await supabase.from('doctors').select('*');
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

        // Supabase insert + returning
        const { data, error } = await supabase
            .from('doctors')
            .insert([body])
            .select(); // ← burada .select() çox önəmlidir!

        if (error) throw error;

        return NextResponse.json(data, { status: 201 });
    } catch (err) {
        console.error('Supabase POST error:', err.message);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}


