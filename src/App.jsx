import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Herosection from './components/herosection/Herosection'
import About from './components/aboutme/about'
import Skills from './components/skills/Skills.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Herosection/>
      <About/>
      <Skills/>
      <Footer/>
    </>
  )
}

export default App
