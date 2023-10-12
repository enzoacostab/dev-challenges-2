import { useState } from "react"
import Content from "./components/content"
import Navbar from "./components/navbar"
import { context } from "./context"

function App() {
  const [dark, setDark] = useState(false)

  return (
  <context.Provider value={{dark, setDark}}>
    <div className={`bg-[#F2F9FE] h-screen ${dark ? 'dark' : ''}`}>
      <Navbar/>
      <Content/>
    </div>
  </context.Provider>
  )
}

export default App
