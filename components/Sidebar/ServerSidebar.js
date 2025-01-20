import Sidebar from "./Sidebar"
import DB from "@/lib/db"
import Loading from "../Loading"

export default async function ServerSidebar({ onNotePress }) {
  const { getNotes } = DB(process.env.DB_USER, process.env.DB_PASS)
  const notes = await getNotes()

  return (
    <Suspense fallback={<Loading />}>
      <Sidebar notes={notes} onNotePress={onNotePress} />
    </Suspense>
  )
}