import { useState } from "react"
import { Product } from "../types/interfaces"
import ActionCardButton from "./ActionCardButton"

type Props = {
  product: Product
}

function CardItem({ product }: Props) {
  const [likes, setLikes] = useState(product.likes_count)
  const [liked, setLiked] = useState(false)
  const [image, setImage] = useState(product.main_attachment.big)

  const postLike = async () => {
    const requestData = product.links.find((item) => item.rel === "like")

    if (requestData) {
      const res = await fetch(requestData.uri, {
        method: requestData.methods || "POST",
      })

      if (res.ok) {
        setLikes(prevLikes => liked ? prevLikes - 1 : prevLikes + 1)
        setLiked(!liked)
      } else {
        alert('Error al enviar el like')
      }
    }
  }

  return (
    <article className="grid card--item border border-gray-200 shadow-sm relative overflow-hidden">
      <div className="bg-white absolute pb-6 pt-3 pl-2 w-[110px] h-[80px] triangle-clip-path">
      <p className="text-sm">{new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format(product.price)}</p>
      </div>
      <img src={image} alt={product.title} className="w-full h-full object-cover aspect-square" />
        <div className="bg-white text-center">
          <div className="py-3">
            <p className="font-semibold text-lg uppercase">{product.title}</p>
            <p className="text-sm">By <strong>{product.author}</strong></p>
          </div>
          <div className="grid md:hidden grid-cols-2 justify-between card--item__actions md:absolute w-full md:top-0 md:h-full md:bg-gradient-to-b from-gray-900 via-transparent md:justify-start flex-col items-end">
            <ActionCardButton
              onClick={postLike}
              icon="thumbs-up"
              count={likes}
              liked={liked}
            />
            <ActionCardButton 
              icon="refresh-ccw"
              count={0}
              flexDirection="row-reverse"
            />
          </div>
        </div>
    </article>
  )
}

export default CardItem