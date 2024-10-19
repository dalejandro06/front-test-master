import ActionCardButton from "./ActionCardButton"

function CardItem() {
  return (
    <article className="card--item max-w-[300px] border border-gray-200 shadow-sm relative">
      <div className="bg-white absolute pb-6 pt-3 pl-2 w-[110px] h-[80px] triangle-clip-path">
      <p className="text-sm">35.00 E</p>
      </div>
      <div className="card--item__actions absolute w-full h-full bg-gradient-to-b from-gray-900 via-transparent hidden justify-start flex-col items-end">
        <ActionCardButton 
        icon="thumbs-up"
         count={"001"}
          primary />
        <ActionCardButton icon="refresh-ccw" count={"000"} flexDirection="row-reverse" />
      </div>
      <img src="https://picsum.photos/250/250" alt="" className="w-full object-cover" />
        <div className="bg-white text-center">
          <div className="py-3">
            <p className="font-semibold text-xl">COOL HAT</p>
            <p className="text-sm">By <strong>underground</strong></p>
          </div>
          <div className="grid grid-cols-2 justify-between lg:hidden">
            <ActionCardButton icon="thumbs-up" count={"001"} primary />
            <ActionCardButton icon="refresh-ccw" count={"000"} flexDirection="row-reverse" />
          </div>
        </div>
    </article>
  )
}

export default CardItem