import useSWR from "swr"
import api from "../services/api"

export function useFetch(url) {

  const { data, error } = useSWR(url, async url => {
    const response = await api.get(url)
    const data = await response.json()

    return data
  })

  return {data, error}
}