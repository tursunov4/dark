import React, { useContext } from "react";
import { Context } from "../../Context/Context";
function Header() {
  
  const {mod , setMod , lan , setLan} = useContext(Context)
  return(
    <header className={`${mod ? "bg-black" : ' bg-blue-400'}   `}>
      <div className={`max-w-[1200px] mx-auto py-3 flex items-center justify-between`}>
       <h1 className={`text-[20px] text-yellow-400 font-bold`}>Logo</h1>
       <div className={`flex items-center space-x-12`}>
        <nav className={`text-white text-[18px] flex items-center space-x-5`}>
          <strong className={`font-semibold`}>{lan ? 'Asosiy': 'Home'}</strong>
          <strong className={`font-semibold`}>{lan ? 'Hizmatlar haqida': 'About'}</strong>
          <strong className={`font-semibold`}>{lan ? 'Hizmatlar': 'Service'}</strong>
          <strong className={`font-semibold`}>{lan ? 'Aloqa': 'Contact'}</strong>
        </nav>
        <div className={`flex items-center space-x-3`}>
          <button  onClick={()=>setMod(!mod)} className="text-[18px]  rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bg-yellow-400 rounded-full p-[3px] " viewBox="0 0 16 16">
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
          <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
          </svg>
          </button>
        </div>
        <ul className={`flex items-center space-x-3`}>
          <li onClick={()=>setLan(true)} className={`text-white cursor-pointer text-[18px]`}>UZ</li>
          <li className={`text-white text-[18px]`}>|</li>
          <li onClick={()=>setLan(false)} className={`text-white cursor-pointer text-[18px]`}>ENG</li>
        </ul>
       </div>
      </div>
    </header>
  )
}

export default Header;
