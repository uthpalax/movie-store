export type Movie = {
  id: string
  name: string
  genres: string[]
  status: string
  rating: {
    average: number
  }
  runtime: string 
  summary: string
  image: {
    medium: string
    original: string
  }
}

export type Episode = {
    id: string
    name: string
}
