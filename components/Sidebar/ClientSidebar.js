import Sidebar from "./Sidebar"
import { useNotes } from "@/models/notes"

export default function ClientSidebar({ onNotePress }) {
  const { notes } = useNotes()

  return <Sidebar notes={notes} onNotePress={onNotePress} />
}