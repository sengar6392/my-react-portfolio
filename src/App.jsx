import Intro from "./components/intro/Intro"
import NavBar from "./components/navbar/NavBar"
import Portfolio from "./components/portfolio/Portfolio"
import Skills from "./components/skills/Skills"
import "./app.scss"
import { useState } from "react"

function App() {
  const [menuOpen,setMenuOpen]=useState(false)
  return (
    <div className="app">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Skills/>
        <Portfolio/>
      </div>
    </div>
  )
}

export default App
