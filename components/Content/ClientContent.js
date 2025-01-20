"use client"
import { useState } from 'react'
import Note from '@/components/Note'
import Sidebar from '@/components/Sidebar'

export default function ClientContent({ noteId }) {
  const [activeNoteId, setActiveNoteId] = useState(null)

  return (
    <div className="flex items-top justify-start p-5 gap-2">
      <Sidebar onNotePress={noteId => setActiveNoteId(noteId)} />
      <Note noteId={activeNoteId} />
    </div>
  )
}