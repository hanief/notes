import Note from "./Note"
import DB from "@/lib/db"

export default async function ServerNote({ noteId }) {
  const { getNoteById } = DB(process.env.DB_USER, process.env.DB_PASS)
  const note = await getNoteById(noteId)

  return <Note note={note} />
}