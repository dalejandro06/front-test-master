import FeatherIcon from "feather-icons-react"
import Logo from "../assets/web.png"
import { useState } from "react"

type Props = {
  initialValue: string
  onChange: (val: string) => void
}

function Header({ initialValue, onChange }: Props) {
  const [value, setValue] = useState("")
  return (
    <header className="flex justify-between px-6 md:px-12 py-10 bg-white w-full items-center">
      <img src={Logo} alt="Logo" width={100} />
      <label className="flex items-center bg-gray-100 px-2 rounded-3xl gap-3">
        <FeatherIcon icon="search" size={18} />
        <input 
          type="text"
          name="search"
          id="search"
          value={value || initialValue}
          onChange={(e) => {
            onChange(e.target.value)
            setValue(e.target.value)
          }}
          placeholder="You're looking for something?"
          className="border-0 outline-none bg-transparent w-full"
        />
      </label>
    </header>
  )
}

export default Header