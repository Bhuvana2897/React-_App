import { Link } from "react-router";


const Navbar = () => {
  return (
    <div className="p-4 ml-4">
          <ul className="flex flex-row space-x-5">
              <li>
                 <Link className=" hover:bg-amber-950 hover:text-white hover-border hover:border-2 hover p-2" to="/"> Home </Link>
              </li>
              <li>
                 <Link className=" hover:bg-amber-950 hover:text-white hover-border hover:border-2 hover p-2" to="/register"> Register </Link>
              </li>
              <li>
                 <Link className=" hover:bg-amber-950 hover:text-white hover-border hover:border-2 hover p-2" to="/login">Login</Link>
              </li>
          </ul>
    </div>
   
  )
}

export default Navbar ;