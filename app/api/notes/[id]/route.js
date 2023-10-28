import DB from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request, params) {
  const { getNoteById } = DB(process.env.DB_USER, process.env.DB_PASS)

  try {
    const response = await getNoteById(params?.params?.id)

    return NextResponse.json(response, { status: 200 })
  } catch (e) {
    console.log('error', e)
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}