"use client";

import { createContext , useContext , useState } from "react"

const FilteredContext = createContext();

export default function FilteredDataContextProvider({children}){
    const [status , setStatus] = useState("");
    const [filteredData,setFilteredData] = useState([]);

    return(
        <FilteredContext.Provider
         value={{
            status ,
            setStatus,
            filteredData,
            setFilteredData

            }}
        >
            {children}
        </FilteredContext.Provider>
    );
}

export const useFilteredData = ()=> useContext(FilteredContext);