import Sidebar from "./Sidebar"
import DB from "@/lib/db"

export default async function ClientSidebar({ onNotePress }) {
  const { getNotes } = DB(process.env.DB_USER, process.env.DB_PASS)
  const notes = await getNotes()

  return <Sidebar notes={notes} onNotePress={onNotePress} />
}