"use client"

import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Content from '@/components/Content'
import { useState } from 'react'

export default function Home() {
  const [activeNoteId, setActiveNoteId] = useState(null)

  return (
    <main className="min-h-screen p-24">
      <Header />
      <div className="flex items-top justify-start p-5 gap-2">
        <Sidebar onNotePress={noteId => setActiveNoteId(noteId)} />
        <Content noteId={activeNoteId} />
      </div>
    </main>
  )
}