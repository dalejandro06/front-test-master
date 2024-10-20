import { Product } from "../types/interfaces"

export const getImages = async (): Promise<Product[]> => {
  const res = await fetch("http://localhost:3100/images")
  const data: Product[] = await res.json()
  return data
}