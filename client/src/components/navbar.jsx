import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id");
    localStorage.removeItem("status");
    navigate("/login");
  };

  return (
    <nav className="bg-slate-600 h-20 w-full fixed top-0 left-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center h-full px-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/news" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/profile" className="text-white hover:text-gray-300">
              Profile
            </Link>
          </li>
        </ul>
        <button
          onClick={handleLogout}
          className="text-white hover:text-gray-300 focus:outline-none"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
