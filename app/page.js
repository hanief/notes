// "use client";
// import { useState } from 'react'
import Content from '@/components/Content'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Note from '@/components/Note'

export default function Home() {
  // const [activeNoteId, setActiveNoteId] = useState(null)

  return (
    <main className="min-h-screen p-24 bg-white">
      <Header />
      <Content />
      {/* <div className="flex items-top justify-start p-5 gap-2">
        <Sidebar onNotePress={noteId => setActiveNoteId(noteId)} />
        <Note noteId={activeNoteId} />
      </div> */}
    </main>
  )
}