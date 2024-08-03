import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/login",
        loginData
      );
      // console.log(data, "<<data>>");
      localStorage.setItem("access_token", data.token);
      navigate("/news");
    } catch (error) {
      console.log("Error:", error.message);
      if (error.response) {
        console.log("Response Error:", error.response.data);
        alert(error.response.data.message || "An error occurred");
      } else if (error.request) {
        console.log("Request Error:", error.request);
        alert("No response from server");
      } else {
        console.log("General Error:", error.message);
        alert("An error occurred");
      }
    }
  };

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center h-full">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5">
        <div className="md:w-1/2 px-16">
          <h2 className="font-bold text-2xl text-gray-900">Login</h2>
          <p className="text-sm mt-6 text-gray-400">
            If you already have an account, easy peasy to login
          </p>
          <form onSubmit={handleOnSubmit} className="flex flex-col gap-3 mt-4">
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleOnChange}
              placeholder="Email"
              className="w-full p-2 mt-8 rounded-xl border border-gray-200"
            />
            <div className="relative">
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleOnChange}
                placeholder="Password"
                className="w-full p-2 mt-8 rounded-xl border border-gray-200"
              />
            </div>
            <button className="bg-gray-500 rounded-xl text-white py-3 hover:scale-105 duration-300 mt-3">
              Login
            </button>
          </form>
          <div className="mt-10 grid grid-cols-3 items-center text-black text-center">
            <hr className="border-gray-600" />
            OR
            <hr className="border-gray-600" />
          </div>
          <div className="mt-5 text-xs flex justify-between items-center text-black">
            <p>Don't have an account?</p>
            <Link to={"/register"}>Register</Link>
          </div>
        </div>
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl object-cover h-full"
            src="https://www.designscene.net/wp-content/uploads/2023/02/Vogue-Netherlands-Gigi-Hadid-2.jpg"
            alt="gigi"
          />
        </div>
      </div>
    </section>
  );
}
