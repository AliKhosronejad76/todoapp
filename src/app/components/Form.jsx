"use client";
import { IoMdAdd } from "react-icons/io";
import { useInputValue } from "../context/InputContextProvider";
import { useTodos } from "../context/TodosContextProvider";
import { useFilteredData } from "../context/FilteredDataContextProvider";

export default function Form(){ 
    const {todoValue ,setTodoValue} = useInputValue();
    const {todos , setTodos} = useTodos();
    const {setStatus} = useFilteredData();
    const submitHandler = (e)=>{
        e.preventDefault();
        if(todoValue.length){
        setTodos([
            ...todos,
            {
                text:todoValue,
                completed:false,
                id:Date.now(),
            }
        ]);
        setTodoValue("");
        }
    }
    const statusHandler = (e)=>{
        console.log(e.target.value);
        setStatus(e.target.value);
    }
    return(
        <form className="flex items-center gap-4 w-full text-gray-700">   
            <div className="bg-white flex w-[70%]">
                <input 
                 className="bg-transparent outline-none w-[90%] px-2 py-3"
                 type="text" 
                 value={todoValue}
                 onChange={(e)=>setTodoValue(e.target.value)}
                />

                <button onClick={submitHandler} type="submit" className="bg-orange-700 text-white flex items-center justify-center w-[10%]">
                    <IoMdAdd/>
                </button>
            </div>
            <div className="w-[30%]">
                <select onChange={statusHandler} name="todos" className="w-full py-3 outline-none px-2">
                    <option value={"all"}>All</option>
                    <option value={"completed"}>Compeleted</option>
                    <option value={"uncompleted"}>UnCompeleted</option>
                </select>
            </div>


        </form>
    )
}