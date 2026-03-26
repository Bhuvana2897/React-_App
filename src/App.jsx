/*function Header() {
  return (
    <>
    
    <h1>Hello</h1>
    <h2>world</h2>
    </>
  )
  
}*/





/*function App() {
 return (
  <>
  <Header/>
     <Header/>
  </>
 )
} */

//export default App;

/*             PARENT TO CHILD  DATA PASSING
 


 import Header from "./Components/Header.jsx";
function App() {
  let message = "Hi , How are you?";
  return (
    <>
      <Header message={message} />
    </>
  );
}
export default App;*/



/*                CHILD TO PARRENT DATA PASSING



import Header from "./Components/Header.jsx";
function App() {
  const getDataFromChild = (message) => {
    console.log("child:", message);
  }

  return (
    <>
      <Header getDataFromChild={getDataFromChild} />
    </>
  )
}
export default App; */



/*                       PROPS DRILLING



import ParentComponent from "./Components/ParentComponent.jsx";

const App = () => {
  const name = "Bhuvana";
  return (
  <>
    < ParentComponent 
      name = {name} />
  </>
  )
}
export default App ;
*/




             // FORM LOGIN 



 /*import Login from "./Components/login.jsx";

const App = () => {
  return (
   <> 
     <Login/>
   </>
  )
}

export default App;

*/

              //    FETCH



/*  import { useState } from "react";

const App = () => {
 
 const [ todos , setTodos] = useState([]);

  const fetching = () =>{
    fetch('https://698dd17eb79d1c928ed6a359.mockapi.io/todos')
      // method :"GET"
    .then (response => {
      return response.json();
    })
    
    .then((response) => {
      setTodos(response);
    })
    
  }
   console.log(todos);
  return (
    <>
       <button onClick = {fetching}>Fetch Todos</button>
       <h1>Todos</h1>
       <ul>
        {
         todos
             .map(todo => (
               <li key={todo.id}>{todo.Title}</li>
             ))
        }
       </ul> 
    </>
  )
}

export default App ;

*/
     
           
           /*      AXIOS



import { useState } from "react";
import axios from "axios";

const App = () => {
 
 const [ todos , setTodos] = useState([]);

  const fetching = () =>{
    axios.get('https://698dd17eb79d1c928ed6a359.mockapi.io/todos')
      
      .then(response=> {
        // default json string in console
        // setTodos(response);
        //console.log(response);
        //console.log(response.data);
        setTodos(response.data);
    })
    
  }
   console.log(todos);
  return (
    <>
       <button onClick = {fetching}>Fetch Todos</button>
       <h1>Todos</h1>
       <ul>
        {
         todos
             .map(todo => (
               <li key={todo.id}>{todo.Title}</li>
             ))
        }
       </ul> 
    </>
  )
}

export default App ;
     
*/
           
   

                  // USE EFFECT [HOOKS]

           // run a function after a component is rendered whenever state changes       

import {useEffect , useState} from "react"; 

const App = () => {

  const [ count , setCount] = useState(0);

  useEffect (() =>{

    console.log ('running inside useEfect')
  } , );
         
          return (
          <>
            <h1>Count: {count}</h1>
            <button onClick = {() => setCount(count + 1)}> Increase</button>
          </>
  )
}

export default App ;
     

           
   