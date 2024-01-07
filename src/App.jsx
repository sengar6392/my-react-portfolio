import Intro from "./components/intro/Intro"
import NavBar from "./components/navbar/NavBar"
import Portfolio from "./components/portfolio/Portfolio"
import Skills from "./components/skills/Skills"
import "./app.scss"

function App() {


  return (
    <div className="app">
      <NavBar/>
      <div className="sections">
        <Intro/>
        <Skills/>
        <Portfolio/>
      </div>
    </div>
  )
}

export default App
