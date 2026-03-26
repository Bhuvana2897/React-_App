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

/*               PARENT TO CHILD  DATA PASSING
 


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

//                          FETCH

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

/*                             AXIOS



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

//                              USE EFFECT [HOOKS]


// run a function after a component is rendered whenever state changes

/*     import {useEffect , useState} from "react"; 

const App = () => {

  const [ count , setCount] = useState(0);

  useEffect (() =>{

    console.log ('running inside useEfect')
   // []  run a function after a componenet is rendered
  } ,[] );
         
          return (
          <>
            <h1>Count: {count}</h1>
            <button onClick = {() => setCount(count + 1)}> Increase</button>
          </>
  )
}

export default App ;

*/

/*                           set state for dependencies for singlre state run


    import {useEffect , useState} from  "react" ;

    
    const App = () => {

      const [ Likes , setLikes ] = useState (0);
      const [ Dislikes , setDislikes ] = useState (0);

      useEffect (() =>{

    console.log ('running inside useEfect')
   // []  run a function after a componenet is rendered
  } , [Likes] );

      return (
        <>
       <div>
              <button onClick={() => setLikes (Likes + 1) }> Likes</button> &nbsp; {Likes} &nbsp; Likes 
       </div>
       &nbsp;
       <div>
              <button onClick = {() => setDislikes ( Dislikes + 1) }> Dislikes </button> &nbsp; { Dislikes} &nbsp; Dislikes 
       </div>
       </>
      )
    }
    
    export default App ;



  */

/*                       api call fror useeffect

    import {useState ,  useEffect} from "react" ;
    import axios from "axios";
     
     const App = () => {

      const [ Todos , setTodos] = useState ([0])

      useEffect (() => {

        axios.get ('https://698dd17eb79d1c928ed6a359.mockapi.io/todos')
          .then (response =>{
            setTodos (response. data)
          })
      })
       return (
        <>
          <h1> Todos </h1>
             
          <ul> 
             {
              Todos
                 .map ((Todo , index) => (
                    <li key = {Todo.id  || index}> {Todo.Title} </li>
                 ))
             }
          </ul>
          </>

       )
     }
     
     export default App ;

     */

/*                          USEREF[ HOOKS]  
                      

          

          import { useRef } from "react"
         
         const App = () => {

          const messageRef = useRef(null)


          const handleSend = () =>{
            console.log ('sending message .....')
            console.log( messageRef .current .value)
          }
           return (
            <>
                  <input 
                         type = "text" 
                         placeholder = " Type a message ......."
                         ref = {messageRef}

                  />  
                  &nbsp;&nbsp;
                  <button  onClick = {handleSend}>
                          Send  
                  </button>        
            </>
           )
         }
         
         export default App   ;    

         */



/*                  useRef [ normal variable and using useRef variables ]


          
       import {useRef ,  useState} from  "react" 
        
        const App = () => {
           // normal variable
          // let likes = 0 ;

          let likes = useRef(0);


          let [test , setTest] = useState (0);

          const handleLike = () => {
            // normal variable
            // likes++ ;         
            likes.current++;
            // normal variable
            // console.log (likes)
            console.log(likes.current);

          }
          console.log(component re-rendered);
          return (
            
            <>
               <h1> Likes :{likes} </h1>
               <button onClick={handleLike}> Likes  </button> &nbsp;
               <button onClick ={() => setTest(test + 1)} > change State</button>
            </>
          )
        }
        
        export default App ;

        */

/*                             Basic useState example  


         import {useState} from  "react" 
        
            const App = () => {

                 let [Likes , setLikes] = useState (0);

            const handleLike = () => {

                  setLikes(Likes + 1 );

            }

             console.log(Likes);

           return (
            
            <>
               <h1> Likes :{Likes} </h1>
               <button onClick={handleLike}> Likes  </button> &nbsp;
               
            </>
          )
        }
        
        export default App ; */



        /*                      useReducer [ hooks]

import { useReducer } from "react";

const reducer = () => {
  console.log("reducer called");
};

const App = () => {
  let [Likes, dispatch] = useReducer(reducer, 0);

  const handleLike = () => {
    dispatch();
  };

  console.log(Likes);

  return (
    <>
      <h1> Likes :{Likes} </h1>
      <button onClick={handleLike}> Likes </button> &nbsp;
    </>
  );
};

export default App;


*/

              /*   usereducer with [switch case statement]

import { useReducer } from "react";

const reducer = ( state , action) => {
  switch (action.type) {

    case 'LIKE': state = state + 1 ;
    break ;

    case 'DISLIKE' : state = state - 1 ;
    break ;

    default :
     return state ;

  }
  return state ;
};

const App = () => {

  let [Likes, dispatch] = useReducer(reducer, 0);

  const handleLike = () => {
    dispatch({
      type : "LIKE" 
    });
  };

  const handleDislike = () => {
    dispatch ({
      type : "DISLIKE"
    });
  };

  

  return (
    <>
      <h1> Likes :{Likes} </h1>
      <button onClick={handleLike}> Likes </button> &nbsp;&nbsp;
      <button onClick = { handleDislike}> Dislike</button>
    </>
  );
};

export default App;

*/


             //        USEEFFECT  USING [IF ELSE ]

import { useReducer } from "react";

const reducer = (state ,  action ) => {
   if (action.type == 'LIKE'){
          state = state + 1 ;

      }else if ( action.type == 'DISLIKE'){
                 state = state - 1 ;

            } else {
             return state ;
  }

  return state ;
};

const App = () => {

  let [Likes, dispatch] = useReducer(reducer, 0);

  const handleLike = () => {
    dispatch({
      type : "LIKE" 
    });
  };

  const handleDislike = () => {
    dispatch ({
      type : "DISLIKE"
    });
  };

  

  return (
    <>
      <h1> Likes :{Likes} </h1>
      <button onClick={handleLike}> Likes </button> &nbsp;&nbsp;
      <button onClick = { handleDislike}> Dislike</button>
    </>
  );
};

export default App;
