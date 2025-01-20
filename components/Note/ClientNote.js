"use client"

import { useNote } from "@/models/notes"
import Content from "./Note"

export default function ClientNote({ noteId }) {
  const { note } = useNote(noteId)

  return <Content note={note} />
}