import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { toast } from "react-toastify";


const Register = () => {

  const[ Name, setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const Navigate = useNavigate();

  const handlRegister =(e) => {
      event.preventDefault() ;
      console.log('Registering User ......')
      console.log(`Name : ${Name}`)
      console.log(`email : ${email}`)
      console.log(`password : ${password}`)
   
      setTimeout(() =>{
        //clear the form
        setName ("") ;
        setEmail("") ;
        setPassword ("") ;
          //alert('Registration Succesfull')
         toast.success('Registration Successful')
         Navigate ("/Login") ; 
      } , 500)

  }

  return ( 
    <div>
         <h1 className="text-4xl p-4 ml-4"> Register </h1>
         <div className="w-xs mx-8 border p-4 border-gray-400 shadow-2xl">
          <form className="flex flex-col gap-3" onSubmit = {handlRegister}>
             <input 
                  type="text"
                  className="border border w-full p-1"
                  placeholder="Your name......."
                  value = {Name}
                  onChange = {(e) => setName(e.target.value)}
              />
                <input 
                  type="text"
                  className="border border w-full p-1"
                  placeholder="Your email......."
                  value = {email}
                  onChange = {(e) => setEmail(e.target.value)}
              />
              <input 
                  type="password"
                  className="border border w-full p-1"
                  placeholder="Your password......."
                  value = {password}
                  onChange = {(e) => setPassword(e.target.value)}
              />
              <button
                   type="submit"
                   className="border p-2 bg-blue-700 text-white 
                   cursor-pointer"
              >  Register </button>
              <p className="text-sm font-bold text-slate-600">
                  Already have an account? &nbsp;
                  <Link 
                      to={"/login"}
                      className="hover:text-blue-500"
                    >
                      Login
                  </Link>

              </p>

          </form>
         </div>
    </div>
  )

}

export default Register