import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isId, setIsId] = useState(null);
  const [login, setLogin] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const handleLogin = localStorage.getItem("access_token");
    setLogin(!!handleLogin);
    const handleId = localStorage.getItem("id");
    setIsId(handleId);
  }, [isId]);
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id");
    setLogin(false);
    navigate("/login");
  };

  return (
    <nav className="bg-slate-600 h-20 w-full relative top-0 left-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center h-full px-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/news" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `/profile/${isId}`,
              }}
              className="text-white hover:text-gray-300"
            >
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
