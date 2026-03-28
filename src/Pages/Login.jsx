import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { toast } from "react-toastify"


const Login = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const Navigate = useNavigate();

  const handlelogin = (e) => {
    event.preventDefault();
    console.log('loging in user .....')
    console.log(`email : ${email}`)
    console.log(`password : ${password}`)

    toast.success('Login successful')
    setTimeout(() => {
      Navigate('/Dashboard')
    } , 500)

  }
 
  return (
   <div>
         <h1 className="text-4xl p-4 ml-4"> Login </h1>
         <div className="w-xs mx-8 border p-4 border-gray-400 shadow-2xl">
          <form className="flex flex-col gap-3" onSubmit = {handlelogin}>
             <input 
                  type="text"
                  className="border border w-full p-1"
                  placeholder="Your email......."
                  value = {email}
                  onChange = { e => setEmail(e.target.value)}
              />
              <input 
                  type="password"
                  className="border border w-full p-1"
                  placeholder = "Enter your password..."
                  value = {password}
                  onChange = {e => setPassword(e.target.value)}  
              />
              <button
                   type="submit"
                   className="border p-2 bg-blue-700 text-white 
                   cursor-pointer"
              >  
                  Login
               </button>
              <p className="text-sm font-bold text-slate-600">
                  Already have an account?&nbsp; 
                 <Link 
                      to={"/register"}
                      className="hover:text-blue-500"
                  >
                      Register
                 </Link>

              </p>

          </form>
         </div>
    </div>
  )
}

export default Login