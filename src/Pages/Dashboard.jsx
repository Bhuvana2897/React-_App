import { Outlet } from "react-router";
import Sidebar from "../Components/Sidebar";


const Dashboard = () => {
  return (
    <>
          <h1 className="text-4xl p-4 ml-4"> Dashboard </h1>
        <div className="min-h-screen flex gap-8">
                   <Sidebar />
              <div className="border-r
                  min-h-screen"></div>
                  <Outlet  />
        </div>
    </>
   
  )
}

export default Dashboard ;