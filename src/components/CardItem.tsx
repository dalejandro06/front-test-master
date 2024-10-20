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
  
  const changeImage = async () => {
    const uri = product.links.find((i) => i.rel === "avatar")
    if (uri) {
      setImage(uri.uri)
    }
  }

  return (
    <article className="card--item border border-gray-200 shadow-sm relative overflow-hidden">
      <div className="bg-white absolute pb-6 pt-3 pl-2 w-[110px] h-[80px] triangle-clip-path">
      <p className="text-sm">{new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format(product.price)}</p>
      </div>
      <div className="card--item__actions absolute w-full h-full bg-gradient-to-b from-gray-900 via-transparent hidden justify-start flex-col items-end">
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
          onClick={changeImage}
        />
      </div>
      <img src={image} alt={product.title} className="w-full object-cover aspect-square" />
        <div className="bg-white text-center h-full">
          <div className="py-3">
            <p className="font-semibold text-lg uppercase">{product.title}</p>
            <p className="text-sm">By <strong>{product.author}</strong></p>
          </div>
          <div className="grid grid-cols-2 justify-between md:hidden">
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
              onClick={changeImage}
            />
          </div>
        </div>
    </article>
  )
}

export default CardItem