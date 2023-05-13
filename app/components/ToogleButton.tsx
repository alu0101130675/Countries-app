"use client"

import { useState } from "react"

export const Button = () => {
  const [darkFlag,setDarkFlag] = useState<boolean>(false)
    if (typeof window !== "undefined") {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      } else {
      document.documentElement.classList.remove('dark')
      }
  } 
  return (
    <button onClick={()=> { 
      const newDarkFlag = !darkFlag
      setDarkFlag(newDarkFlag)
      localStorage.theme = newDarkFlag ? 'dark' : 'light'
      }}>
       🌜 Dark Mode
    </button>
  )
}