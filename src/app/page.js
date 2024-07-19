'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {


  const [theme,setTheme] = useState('light')

  let handleThemeChange=()=>{
    if(document.documentElement.classList.contains("dark")){
      document.documentElement.classList.remove("dark")
      document.documentElement.classList.add("light")
      setTheme('dark')
    }
    else{
      document.documentElement.classList.remove("light")
      document.documentElement.classList.add("dark")
      setTheme('light')
    }
  }

  return (
   <div className="flex justify-center items-center min-h-screen bg-white dark:bg-black">
    <h1 className="text-black dark:text-white">hello</h1>
    
    <div className=" mx-5 flex justify-center items-center">
      <button className="bg-black px-5 rounded text-white dark:bg-white dark:text-black" onClick={handleThemeChange}>Change theme to {theme}</button>
    </div>

    <div className=" mx-5 flex justify-center items-center">
      <input className="rounded-full" type="radio" id="html" onChange={handleThemeChange}/>
        <label for="html">{theme}</label>
    </div>
   </div>
  );
}
