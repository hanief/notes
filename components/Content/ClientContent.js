import { useNote } from "@/models/notes"
import Content from "./Content"

export default function ClientContent({ noteId }) {
  const { note } = useNote(noteId)

  return <Content note={note} />
}