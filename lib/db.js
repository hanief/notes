export default function DB({ username, password }) {
  const notes = [
    {
      id: 1,
      title: 'React',
      text: 'React is nice'
    },
    {
      id: 2,
      title: 'Next.js',
      text: 'Next.js is cool'
    },
    {
      id: 3,
      title: 'Tailwind',
      text: 'Tailwind is brilliant'
    },
  ]

  async function delay(duration = 10000) {
    await setTimeout(() => console.log('timer'), delay)
  }

  async function getNotes() {
    await delay()

    const data = await new Promise((resolve) => {
      resolve(notes)
    })

    return data
  }

  async function getNoteById(id) {
    await delay()

    const data = await new Promise((resolve, reject) => {
      const note = notes.find(note => `${note.id}` === `${id}`)

      if (note) {
        resolve(note)
      } else {
        reject('Can not find note')
      }
    })

    return data
  }

  return {
    getNotes,
    getNoteById
  }
}