export default function Note({ note }) {
  return note ?
    <div className="p-10 bg-green-200 flex flex-col">
      <label htmlFor='title'>Title</label>
      <input id='title' name='title' type="text" defaultValue={note?.title} className="mb-3"></input>

      <label htmlFor='text'>Text</label>
      <textarea id='text' name='text' defaultValue={note?.text}></textarea>
    </div>
    : <p className="p-10 bg-green-200 flex flex-col">Please select a note from sidebar</p>
}