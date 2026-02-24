import { supabase } from '@/core/db/supabaseClient'
import { NextResponse } from 'next/server'

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)

    const department_id = searchParams.get('department_id')
    const branch_id = searchParams.get('branch_id')
    const name = searchParams.get('name')

    let query = supabase.from('doctors').select('*')

    if (department_id) {
      query = query.eq('department_id', department_id)
    }

    if (branch_id) {
      query = query.eq('branch_id', branch_id)
    }

    if (name) {
      query = query.ilike('name', `%${name}%`) // search
    }

    const { data, error } = await query

    if (error) throw error

    return NextResponse.json(data)
  } catch (err) {
    console.error('Supabase GET error:', err.message)
    return NextResponse.json(
      { error: 'Məlumatları yükləmək mümkün olmadı' },
      { status: 500 }
    )
  }
}
