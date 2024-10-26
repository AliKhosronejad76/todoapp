import Form from "./components/Form";
import ToDoList from "./components/TodoList";


export default function Home() {
  return (
    <div className="flex justify-center ">
      <div className="w-[60%] pt-20 pb-20">
        <Form/>
        <ToDoList/>
      </div>
      
    
    </div>
  );
}
