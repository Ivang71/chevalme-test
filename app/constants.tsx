// export const apiUrl = process.env.NEXT_PUBLIC_API_URL
export const apiUrl = 'https://codeandcode.xyz/demo/slim_properties'
export const fetcher = (...args: any) => fetch(args).then((res) => res.json())
// export const gmapsApiKey = process.env.NEXT_PUBLIC_GMAPS_API_KEY as string
export const gmapsApiKey = 'AIzaSyCDa5c5aPsyG7em9u83ZNv2Jehc20saWZk'