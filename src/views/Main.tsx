import CardItem from "../components/CardItem"
import Header from "../components/Header"

function Main() {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="cards-container p-10">
        <CardItem />
      </div>
    </div>
  )
}

export default Main