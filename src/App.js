import {useState  } from "react";
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu'
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import './App.css';
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="section">
        <Intro/>
        <Education/>
        <Projects/>
        <Skills/>
        
      </div>
    </div>
   </>
  );
}

export default App;
