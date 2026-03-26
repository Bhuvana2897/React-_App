
/*import { useState } from "react";
const Login = () => {
                            un controlled inputs

        const Username = event.target.username.value; 
        const Password = event.target.password.value;
        
        console.log( 'Logging in with' , Username ,'and ', password)
        

                            controlled inputs
                            

        const [Username ,  setUsername ] = useState('');
        const [Password ,  setPassword ] = useState('');    

    const handleLogin = (event) => {
        event.preventDefault();
        console.log(Username , Password )
     }
     return (
    <>
         <h1>Login</h1>
         <form onSubmit={ handleLogin}> 
            <div>
                <input
                  type="text"
                  placeholder="Username ....."
                  name="username"
                  value={Username}
                  onChange={(e) =>setUsername(e.target.value)} 
                />
            </div>
            <br/>
            <div>
                <input
                  type="text"
                  placeholder="Password ....."
                  name="password"
                  value = {Password}
                  onChange={(e) =>setPassword(e.target.value)}
                />
            </div>
            <br/>
                <button type="submit">Login</button>
            
         </form>
    </>
   
  )
}

export default Login;

*/




