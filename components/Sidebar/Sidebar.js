export default function Sidebar({ notes, onNotePress }) {
  function handleEditButtonPress(id) {
    return () => {
      onNotePress(id)
    }
  }
  return <div className="p-10 bg-orange-100">
    <ul>
      {notes.map(note =>
        <li key={note.id} className="flex justify-between align-center gap-5 my-2 border-2 p-2">
          <span>{note.title}</span>
          <button onClick={handleEditButtonPress(note.id)} className="bg-blue-200 p-2 rounded-sm">Edit</button>
        </li>
      )}
    </ul>
  </div>
}