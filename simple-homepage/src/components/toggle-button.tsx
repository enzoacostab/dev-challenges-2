import { useContext } from "react"
import { context } from "../context"

export default function ToggleTheme() {
  const {dark, setDark } = useContext(context)

  const handleClick = () => {
    setDark(!dark)
  }

  return (
    <div>
      <button onClick={handleClick}>
      {dark ? 
      <img width={50} src='/assets/dark_mode.png'/>
      : 
      <img width={50} src='/assets/light_mode.png'/>}
      </button>
    </div>
  )
}