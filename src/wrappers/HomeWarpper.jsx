import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";


const HomeWarpper = () => {
  return (
    <>
         <Navbar />
         <Outlet />
    </>

  )
}

export default HomeWarpper ;