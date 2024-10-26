"use client";
import { useState , useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useTodos } from "../context/TodosContextProvider";
import { useFilteredData } from "../context/FilteredDataContextProvider";

export default function ToDoList(){
    const {todos , setTodos} = useTodos();
    const {filteredData , setFilteredData , status , setStatus } = useFilteredData();
    useEffect(()=>{
        filterHandler();
        console.log(`filteredData:${filteredData}`);
    },[ todos, status ]);
   
   
    const filterHandler = ()=>{
        switch(status){
        case "all":
             setFilteredData(todos);
             break;
        case 'completed':
                 setFilteredData(todos.filter(todo=> todo.completed === true));
                 break;
        case 'uncompleted':
             setFilteredData(todos.filter(todo=> todo.completed === false));
             break;
            
        default:
             setFilteredData(todos)
             break;
        }
    }
    return(
        <div className="w-full pt-6 my-8">
            <ul>
               {
                filteredData?.map((todo)=><Item key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>)
               }
            </ul>
        </div>
    );
}


function Item({todo,todos,setTodos}){
    console.log(todo);

    const deletehandler = ()=>{
       const newTodos = todos.filter(item=> item.id !== todo.id);
       setTodos(newTodos);
    }

    const completedHandler = (todo)=>{
       const selectedTodo = todos?.find(item=> item.id == todo.id);
       const newTodo = selectedTodo.completed = true;
       setTodos([
        ...todos ,
        
       ]);
       
    }

    return(
        <li className={`flex w-full bg-white h-[60px] my-1 ${todo.completed ?"opacity-60":""} `}>
            <div className="bg-white w-[80%] flex items-center">
                <p className="text-gray-700 px-1">{todo.text}</p>
            </div>
            <button onClick={()=>completedHandler(todo)} className={`w-[10%] flex items-center justify-center text-xl text-white transition duration-700  ${todo.completed ?"bg-[#FFD700] cursor-not-allowed ":"bg-sky-600 hover:bg-sky-700"}  `}>
                <FaCheck />
            </button>
            <button onClick={deletehandler} className="w-[10%] flex items-center justify-center text-xl text-white transition duration-700  bg-red-600 hover:bg-red-700">
                <FaTrashAlt />
            </button>
        </li>
    );
}

// const completehandler = ()=>{
//     setTodos(todos.map((item)=>{
//         if(item.id == todo.id){
//             return {...item , completed:true}
//         }
//         return item;
//     }));
// }