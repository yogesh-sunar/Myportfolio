import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Herosection from './components/herosection/Herosection'
import About from './components/aboutme/about'
import Skills from './components/skills/Skills.jsx'
import Parent from './components/parent/parent.jsx'
import ParentUserDetails from './components/props/ParentUserDetails.jsx'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    console.log("Render")
  })

  return (
    <>
      <Navbar/>
      <Herosection/>
      <About/>
      <Skills/>
      <Footer/>
      {/* props */}
      {/* <Parent/> */}
      {/* <ParentUserDetails/> */}
    </>
  )
}

export default App
