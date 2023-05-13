'use client'
import { ChevronIcon } from "@/public/svgs/ChevronIcon"
import React from "react"

interface CustomSelectInterface {
  options:string[]
  placeholder:string
  setRegion:(region:string)=>void
  region:string
}
export const CustomSelect:React.FC<CustomSelectInterface> = ({options, placeholder,setRegion,region}) => {
  const handleClick = (event:React.MouseEvent<HTMLSpanElement>) => {
    const region = event.currentTarget.textContent as string
    setRegion(region)  
    }
  return (
    <div className='w-1/2 md:w-full dark:bg-slate-800'>
        <label className="dark:bg-slate-700 relative rounded flex flex-col bg-white cursor-pointer">
          <div className="flex justify-between items-center pl-5 pr-2">
          <span className="flex-1">{region || placeholder}</span>
          <span className=""><ChevronIcon/></span>
          </div>
          <input className="peer" type="checkbox" hidden/>
          <div className="dark:bg-slate-700 bg-white absolute rounded top-[115%] w-full cursor-pointer py-3 hidden peer-checked:flex flex-col flex-1">
            {options.map(option => 
            <span 
              className="hover:bg-slate-100 px-5 py-1" 
              key={option}
              onClick={handleClick}
            >
              {option}
            </span>)}
          </div>
        </label>
    </div>
  )
}