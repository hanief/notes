export default function Header({ text }) {
  return (
    <div className="flex justify-between align-center">
      <h1>{text}</h1>
      {/* <div>
        <input id='dark' name='dark' type='checkbox' checked={false} className="me-2"></input>
        <span>Dark Mode</span>
      </div> */}
    </div>
  )
}