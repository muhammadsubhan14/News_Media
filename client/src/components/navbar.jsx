import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="bg-slate-600 h-20 w-full fixed">
        <ul className="flex justify-center items-center mt-6">
          <li className="mr-4">
            <Link to={"/"} className="text-white">
              Home
            </Link>
          </li>
          <li className="mr-4">
            <Link to={"/about"} className="text-white">
              About
            </Link>
          </li>
          <li className="mr-4">
            <Link to={"/profile"} className="text-white">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
