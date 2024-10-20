import FeatherIcon from "feather-icons-react"

type Props = {
  count: number
  icon: string
  flexDirection?: "row" | "row-reverse"
  liked?: boolean
  onClick: () => void
}

function ActionCardButton({ count, icon, flexDirection = "row", liked, onClick}: Props) {
  const bgIcon = liked ? "bg-green-400" : "bg-gray-400"
  return (
    <button onClick={onClick} className={`p-2 cursor-pointer border sm:border-gray-200 md:border-0 flex justify-center md:text-white items-center gap-3 md:gap-1 md:flex-col-reverse ${flexDirection}`}>
      <p>{count}</p>
      <div className={`rounded-full p-1 text-white ${bgIcon} grid place-items-center`}>
      <FeatherIcon icon={icon} size={15} />
      </div>
    </button>
  )
}

export default ActionCardButton