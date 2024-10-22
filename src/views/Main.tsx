import { useEffect, useState } from "react"
import CardItem from "../components/CardItem"
import Header from "../components/Header"
import { getImages } from "../services/getImages"
import { FetchStatus, Product } from "../types/interfaces"
import { useSearchParams } from "react-router-dom"
import EmptyState from "../components/EmptyState"

function Main() {
  const [products, setProducts] = useState<Product[]>([])
  const [status, setStatus] = useState<FetchStatus>("idle")
  const [searchParams, setSearchParams] = useSearchParams();
  const [filtered, setFiltered] = useState<Product[]>([])
  const query = searchParams.get('query')

  // Get products once, to save initialState of products
  useEffect(() => {
    setStatus("loading")
    getImages()
    .then((data) => {
      setProducts(data)
      setStatus("success")
    })
    .catch(() => setStatus("error"))
  }, [])

  // filter products when user types
  useEffect(() => {
    if (query) {
      const newData = products.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))
      setFiltered(newData)
    } else {
      setFiltered(products)
    }
  }, [query, products])

  return (
    <div className="bg-gray-100">
      <Header 
        onChange={(value) => setSearchParams({ query: value })} 
        initialValue={query || ""}
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
                filtered.length ? filtered.map((item) => (
                    <CardItem 
                      key={item.id}
                      product={item}
                    />)
                  )
                : <EmptyState />
              }
            </div>
          )
        }

    </div>
  )
}

export default Main