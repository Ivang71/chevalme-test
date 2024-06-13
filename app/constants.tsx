export const apiUrl = process.env.NEXT_PUBLIC_API_URL
export const fetcher = (url: string) => fetch(url).then((res) => res.json())
export const gmapsApiKey = process.env.NEXT_PUBLIC_GMAPS_API_KEY as string