"use client";
import { useState , useContext , createContext } from "react";

const TodosContext = createContext();


export default function TodosContextProvider({children}){
    const [todos , setTodos] = useState([]);
    return(
        <TodosContext.Provider value={{todos , setTodos}}>
            {children}
        </TodosContext.Provider>
    );
}

export const useTodos = ()=>useContext(TodosContext);