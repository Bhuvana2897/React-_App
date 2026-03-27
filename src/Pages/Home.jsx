import { Link } from "react-router";

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl p-4">Welcome To React Router Router App .</h1>

      <p className="p-4">
        This is the home page of my React Router app . You can Navigate to the
        register and login pages using the links in the header.
      </p>

      <div className="p-4 flex flex-row gap-6">
        <Link
          className="border-2 border-black p-2 hover:text-red-700"
          to="/register"
        >
            Register
        </Link>
        <Link
          className="border-2 border-black p-2 hover:text-red-700"
          to="/login"
        >
            Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
