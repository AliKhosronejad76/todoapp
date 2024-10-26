import InputContextProvider from "./InputContextProvider";
import TodosContextProvider from "./TodosContextProvider";
import FilteredDataContextProvider from "./FilteredDataContextProvider";

export default function Provider({children}){
    return(
        <>
            <InputContextProvider>
                <TodosContextProvider>
                    <FilteredDataContextProvider>
                        {children}
                    </FilteredDataContextProvider>    
                </TodosContextProvider>
            </InputContextProvider>
        </>
    );
}