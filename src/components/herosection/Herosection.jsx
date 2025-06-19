import React from 'react'
import logo1 from "../../assets/yogesh.jpg"
import vector from "../../assets/vector.png"
import coding from "../../assets/coding.png"

const Herosection = () => {
  return (
   <div className=" max-w-7xl mx-auto space-x-11 mt-[50px] flex">
        <div className="flex flex-col mt-40 ">
            <h1 className="text-[18px] font-medium">
            Hello There, I am
            </h1>
            <h1 className="text-[40px] font-bold mt-1 bg-gradient-to-r from-blue-500 via-blue-900 to-blue-100 bg-clip-text text-transparent">
                Yogesh Sunar
            </h1>
            <p className="text-[18px] font-normal" >"I’m a B.Sc. CSIT student driven by a deep passion for both design and development. I love crafting visually engaging, user-centric digital experiences while continuously exploring new technologies to bring creative ideas to life."</p>
            <div className="flex mt-10 items-center justify-around divide-x-2 divide-gray-400 " >
                <div className=" px-8 items-center ">
                    <h1 className="text-[40px] font-bold mt-2 bg-gradient-to-r from-blue-500 via-blue-900 to-purple-500 bg-clip-text text-transparent" >500+</h1>
                    <p>LEARNING HOUR</p>
                </div>
                <div className=" px-8 items-center " >
                    <h1 className="text-[40px] font-bold mt-2 bg-gradient-to-r from-blue-500 via-blue-900 to-purple-500 bg-clip-text text-transparent" >5+</h1>
                    <p>SKILLS</p>
                </div>
                <div className="px-8  items-center " >
                    <h1 className="text-[40px] font-bold mt-2 bg-gradient-to-r from-blue-500 via-blue-900 to-purple-500 bg-clip-text text-transparent" >100%</h1>
                    <p  >DEDICATION</p>
                </div>
            </div>

        </div>
        <div className="h-[500px] w-[1000px] bg-blue-300 rounded-lg  place-items-center justify-between mt-[100px] shadow-xl shadow-purple-50 ">
            <div className="h-[300px] w-[300px] mt-[50px] mb-[50px] ">
               
                <img src={logo1} alt="yogesh image" className=" rounded-full border-white border-[10px] "  />
            </div>
            <div className="flex gap-4">
                <img src={vector} alt="" className="h-10 w-10 rounded-sm  bg-white border-[5px] border-white"/>
                <img src={coding} alt="" className="h-10 w-10 rounded-sm bg-white border-[5px] border-white" />
            </div>
        </div>
   </div>
  )
}

export default Herosection