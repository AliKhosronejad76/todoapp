"use client";
import { useState , createContext , useContext } from "react";


const InputContext = createContext();

export default function InputContextProvider({ children }){
    const [ todoValue ,setTodoValue ] = useState("");

    return(
        <InputContext.Provider value={{todoValue,setTodoValue}}>
            {children}
        </InputContext.Provider>
    );
}

export const useInputValue = ()=> useContext(InputContext);