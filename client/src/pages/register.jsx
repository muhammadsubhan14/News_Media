import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const [regist, setRegist] = useState({
    name: "",
    telp: "",
    email: "",
    password: "",
  });

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/register",
        regist,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      console.log(data, "<<data>>");
      navigate("/login");
    } catch (error) {
      console.log(error.message);
      alert(error.response?.data?.message || 'An error occurred');
      throw error;
    }
  };

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setRegist({
      ...regist,
      [name]: value,
    });
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center h-full">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5">
        <div className="md:w-1/2 px-16">
          <h2 className="font-bold text-2xl text-gray-900">Register</h2>
          <p className="text-sm mt-6 text-gray-400">
            If you already have an account, easy peasy to login
          </p>
          <form onSubmit={handleOnSubmit} className="flex flex-col gap-3 mt-4">
            <input
              type="text"
              name="name"
              value={regist.name}
              onChange={handleOnChange}
              placeholder="Name"
              className="w-full p-2 mt-8 rounded-xl border border-gray-200"
            />
            <input
              type="tel"
              name="telp"
              value={regist.telp}
              onChange={handleOnChange}
              placeholder="Telp"
              className="w-full p-2 mt-8 rounded-xl border border-gray-200"
            />
            <input
              type="email"
              name="email"
              value={regist.email}
              onChange={handleOnChange}
              placeholder="Email"
              className="w-full p-2 mt-8 rounded-xl border border-gray-200"
            />
            <div className="relative">
              <input
                type="password"
                name="password" // Ubah dari "Password" ke "password"
                value={regist.password}
                onChange={handleOnChange}
                placeholder="Password"
                className="w-full p-2 mt-8 rounded-xl border border-gray-200"
              />
            </div>
            <button className="bg-gray-500 rounded-xl text-white py-3 hover:scale-105 duration-300 mt-3">
              Register
            </button>
          </form>
          <div className="mt-10 grid grid-cols-3 items-center text-black text-center">
            <hr className="border-gray-600" />
            OR
            <hr className="border-gray-600" />
          </div>
          <div className="mt-5 text-xs flex justify-between items-center text-black">
            <p>Already have an account?</p>
            <Link to={"/login"}>Login</Link>
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
