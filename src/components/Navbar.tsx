import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="w-full bg-background text-light flex items-center justify-center text-md h-[65px] relative shadow inset shadow-top-2">
      <div className="w-[90%] h-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            to={"/"}
            className="px-4 py-2 rounded flex bg-white text-background text-sm font-bold hover:bg-light duration-500"
          >
            /
          </Link>
        </div>
        <div
          className={`absolute sm:relative sm:top-0 sm:left-0 sm:z-0 sm:w-fit sm:min-h-fit hidden sm:block`}
        >
          <ul className="flex gap-8 text-center items-center flex-row">
          <li className="hover:text-accent duration-300">
              <Link to={"/Home"}>Home</Link>
            </li>
            <li className="hover:text-accent duration-300">
              <Link to={"/List"}>List</Link>
            </li>
            <li className="hover:text-accent duration-300">
              <Link to={"/Download"}>Download</Link>
            </li>
            <li className="hover:text-accent duration-300">
              <Link to={"/Settings"}>Settings</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <div className="h-[60px] w-[80px]">
            <Link to={"/"}>
              <img className="h-full w-full" src={logo} alt="logo" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
