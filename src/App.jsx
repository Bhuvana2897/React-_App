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

/*   PARENT TO CHILD  DATA PASSING

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

/*   CHILD TO PARRENT DATA PASSING

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

/* PROPS DRILLING

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




import Login from "./Components/login.jsx";

const App = () => {
  return (
   <> 
     <Login/>
   </>
  )
}

export default App
     
           
   