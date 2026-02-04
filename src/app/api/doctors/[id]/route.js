import { supabase } from '@/src/lib/supabaseClient';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
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


    if (error)
        return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json(data);
}


// PUT → update doctor
export async function PUT(req, { params }) {
    const { id } = params;
    const body = await req.json();

    const { data, error } = await supabase
        .from('doctors')
        .update(body)
        .eq('id', Number(id))
        .select()
        .single()

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data);
}

// DELETE → silmək
export async function DELETE(req, { params }) {
    const { id } = params;
    const { data, error } = await supabase.from('doctors').delete().eq('id', Number(id));
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ message: 'Deleted successfully', data });
}
