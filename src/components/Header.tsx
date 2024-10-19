import FeatherIcon from "feather-icons-react"
import Logo from "../assets/web.png"

function Header() {
  return (
    <header className="flex justify-between px-12 py-10 bg-white w-full items-center">
      <img src={Logo} alt="Logo" />
      <label className="flex items-center bg-gray-100 px-2 rounded-3xl gap-3">
        <FeatherIcon icon="search" size={18} />
        <input 
          type="text"
          name="search"
          id="search"
          placeholder="You're looking for something?"
          className="border-0 outline-none bg-transparent w-full"
        />
      </label>
    </header>
  )
}

export default Header