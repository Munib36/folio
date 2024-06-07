import About from "./components/about.jsx"
import "./react-comp-css/about.css"

import Projects from "./components/projects.jsx"
import "./react-comp-css/projects.css"

import Skills from "./components/skills.jsx"
import "./react-comp-css/skills.css"

import Who from "./components/who.jsx"
import "./react-comp-css/who.css"




















function App() {



  
  
  return (
    <>
      <div className="page-section-1">
        <About />
      </div>
      <div className="spacer curve1"></div>
      <div className="page-section-2">
        <Projects />
      </div>
      <div className="spacer curve2"></div>
      <div className="page-section-3">
        <Who />
        <Skills />
      </div>
      
      <div className="spacer curve3"></div>
      <div className="page-section-4">
        
      </div>
    </>
  )
}

export default App
