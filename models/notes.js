import useSWR from "swr";

const fetcher = url => fetch(url).then(r => r.json())

export function useNotes() {
  const { data, ...rest } = useSWR('/api/notes', fetcher)

  return {
    notes: data || [],
    ...rest
  }
}

export function useNote(id) {
  const { data, ...rest } = useSWR(id && `/api/notes/${id}`, fetcher)

  return {
    note: data,
    ...rest
  }
}