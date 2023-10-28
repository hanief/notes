import Content from "./Content"
import DB from "@/lib/db"

export default async function ServerContent({ noteId }) {
  const { getNoteById } = DB(process.env.DB_USER, process.env.DB_PASS)
  const note = await getNoteById(noteId)

  return <Content note={note} />
}