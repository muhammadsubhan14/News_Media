import { Link } from "react-router-dom";
export default function Register() {
  return (
    <>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center h-full">
        {/* login container */}
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5">
          {/* form */}
          <div className="md:w-1/2 px-16">
            <h2 className="font-bold text-2xl text-gray-900">Register</h2>
            <p className="text-sm mt-6 text-gray-400">
              if you already have an account, easy peasy to login
            </p>
            <form action="" method="post" className="flex flex-col gap-3 mt-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-2 mt-8 rounded-xl border border-gray-200"
              />
              <input
                type="tel"
                name="telp"
                placeholder="Telp"
                className="w-full p-2 mt-8 rounded-xl border border-gray-200"
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="w-full p-2 mt-8 rounded-xl border border-gray-200"
              />
              <div className="relative">
                <input
                  type="password"
                  name="Password"
                  placeholder="Password"
                  className=" p-2 mt-8 rounded-xl border w-full border-gray-200"
                />
              </div>
              <button className="bg-gray-500 rounded-xl text-white py-3 hover:scale-105 duration-300 mt-3">
                Register
              </button>
            </form>
            <div className="mt-10 grid grid-cols-3 items-center text-black text-center ">
              <hr className="border-gray-600 " />
              OR
              <hr className="border-gray-600 " />
            </div>

            <div className="mt-5 text-xs flex justify-between items-center text-black">
              <p>already have an account?</p>
              <Link to={"/login"}>Login</Link>
            </div>
          </div>

          {/* image */}
          <div className="md:block hidden w-1/2">
            <img
              className="rounded-2xl object-cover h-full"
              src="https://www.designscene.net/wp-content/uploads/2023/02/Vogue-Netherlands-Gigi-Hadid-2.jpg"
              alt="gigi"
            />
          </div>
        </div>
      </section>
    </>
  );
}
