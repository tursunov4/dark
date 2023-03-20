import { createContext, useState } from "react";

const Context = createContext();

const ContextProvider =({children})=>{
    const [lan , setLan] = useState(false)
    const [mod , setMod] = useState(false)
    return(
        <Context.Provider value={{mod, setMod, lan,setLan}}>
            {children}
        </Context.Provider>
    )
}
export {Context, ContextProvider}