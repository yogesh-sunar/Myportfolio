import React from 'react'
import css from "../../assets/css.jpg"
import html from "../../assets/html.jpg"
import react from "../../assets/react.jpg"
import js from "../../assets/js.jpg"
import github from "../../assets/github.jpg"
import tailwind from "../../assets/tailwind.jpg"

const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto mt-[100px]">
        <div className="flex flex-col items-center justify-center ">
            <h2 className="font-bold text-[24px] inline border-b-4 border-blue-700 bg-gradient-to-r from-blue-500 via-blue-900 to-blue-500 bg-clip-text text-transparent" >Skills</h2>
            <p className=" mt-4 text-[18px] font-normal">I bring a versatile set of skills rooted in both creativity and technical precision. My core expertise includes HTML, CSS, JavaScript, and React.js for front-end development, alongside experience with Node.js, Express.js, and MongoDB in building full-stack applications. I’m also proficient in using Tailwind CSS for responsive design, Git & GitHub for version control, and tools like VS Code and Figma to streamline development and design. Whether it's crafting user-friendly interfaces or building robust back-end systems, I’m committed to writing clean, maintainable code and continuously learning to stay ahead in the ever-evolving tech world.</p>
            
        </div>
        <div className="grid grid-cols-3 gap-10 mt-10 mb-10">
            <div className="flex flex-col items-center justify-center shadow-md shadow-blue-200 rounded-lg">
                <img className="w-[300px] h-[150px] object-contain p-10" src={html} alt="image html"/>
                <p className="" >HTML</p>
            </div>
            <div className="flex flex-col item-centrer justify-center p-10 shadow-lg shadow-blue-200 rounded-lg">
                <img className="w-[500px] h-[100px] object-contain mt-10" src={react} alt=""/>
                <p className="text-center py-4">REACT</p>
            </div>
            <div className="flex flex-col items-center justify-center shadow-md shadow-blue-200 rounded-lg" >
                <img className="w-auto h-[90px] object-contain " src={js} alt=""/>
                <p className="text-center mt-4" >JS</p>
            </div>


            <div className="flex flex-col w-auto h-[270px] items-center justify-center shadow-md shadow-blue-200 rounded-lg" >
                <img className="w-[400px] h-[150px] object-contain p-10" src={css} alt=""/>
                <p>CSS</p>
            </div>
            <div className="flex flex-col w-auto h-[270px] items-center justify-center shadow-md shadow-blue-200 rounded-lg">
                <img className="w-auto h-[90px] object-contain " src={github} alt=""/>
                <p className="mt-10">GITHUB</p>
            </div>
            <div className="flex flex-col w-auto h-[270px] items-center justify-center shadow-md shadow-blue-200 rounded-lg">
                <img className="w-auto h-[90px] object-contain " src={tailwind} alt=""/>
                <p className="mt-10">TAILWIND</p>
            </div>
            
        </div>

    </div>

   
  )
}

export default Skills