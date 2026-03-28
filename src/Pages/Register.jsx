import { Link } from "react-router"


const Register = () => {
  return ( 
    <div>
         <h1 className="text-4xl p-4 ml-4"> Register </h1>
         <div className="w-xs mx-8 border p-4 border-gray-400 shadow-2xl">
          <form className="flex flex-col gap-3">
             <input 
                  type="text"
                  className="border border w-full p-1"
                  placeholder="Your name......."
              />
                <input 
                  type="text"
                  className="border border w-full p-1"
                  placeholder="Your email......."
              />
              <input 
                  type="password"
                  className="border border w-full p-1"
                  placeholder="Your password......."
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