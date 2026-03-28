
import axios from "axios";
import {  useEffect, useState } from "react";

const Todos = () => {

    const [ todos , setTodos] = useState("") ;

    useEffect(() => {
         axios
            .get('https://698dd17eb79d1c928ed6a359.mockapi.io/todos')
            .then(response => {
                setTodos(response.data);
            })
    }, []);
    
    return (
    <div>
         <h1 className="text-3xl"> Todos </h1>
          
            {
                todos.length == 0 ? (
                    <>
                      <p className="text-sm p-1">No Todos Found.Start Creating todos

                      </p>
                      <button className="border p-1 
                      text-sm px-2 hover:bg-gray-300 
                      hover:cursor-pointer"
                      >
                        Create Todo
                     </button>

                    </>
                ) :
                   (
                    <>
                       <ul className="space-y-3 list-disk pl-10 mt-4">
                        {
                            todos
                            .map(todo =>(
                                <li key = {todo.id}>{todo.Title}</li>
                            ))

                        }
                       </ul>
                    </>
                   )
                

            }
         

    </div>
  );
};

export default Todos ;