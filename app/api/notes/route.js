import DB from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request) {
  const { getNotes } = DB(process.env.DB_USER, process.env.DB_PASS)
  const response = await getNotes()

  return NextResponse.json(response, { status: 200 })
}