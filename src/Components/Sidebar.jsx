import { Link } from "react-router";


const Sidebar = () => {
  return (
    <div className="ml-8">
        <ul>
            <li>
                <Link to={"/dashboard/todos"}>
                      All Todos
               </Link>
             </li>
            <li>Create Todos</li>
            <li>Update Todos</li>
            <li>Delete Todos</li>
        </ul>
    </div>
  )
}

export default Sidebar;