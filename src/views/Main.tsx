import { useEffect, useState } from "react"
import CardItem from "../components/CardItem"
import Header from "../components/Header"
import { getImages } from "../services/getImages"
import { FetchStatus, Product } from "../types/interfaces"

function Main() {
  const [products, setProducts] = useState<Product[]>([])
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState<FetchStatus>("idle")

  useEffect(() => {
    setStatus("loading")
    getImages()
    .then((data) => {
      setProducts(data)
      setStatus("success")
    })
    .catch((e) => setStatus("error"))
  }, [])

  const filteredProducts = search
   ? products.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
   : products

  return (
    <div className="bg-gray-100">
      <Header
        searchValue={search}
        onChange={setSearch}
      />
        {
          status === "loading" && <h1>Cargando...</h1>
        }
        {
          status === "error" && (
            <div className="flex flex-col items-center gap-6 py-10">
              <p className="text-red-500">Error al obtener los productos</p>
              <button className="border bg-red-600 px-4 py-2 rounded-lg text-white" onClick={() => window.location.reload()}>Reintentar</button>
            </div>
          )
        }
        {
          status === "success" && (
            <div className="cards-container p-10">
              {
                filteredProducts.map((item) => (
                  <CardItem key={item.id} product={item} />
                ))
              }
            </div>
          )
        }

    </div>
  )
}

export default Main