import React from "react";

export default function Login() {
  return (
    <div className="flex flex-col items-center pt-10 bg-white min-h-screen">
      <div className="container max-w-md bg-secondary rounded-lg overflow-hidden">
        <form className="flex flex-col items-center p-8 gap-4 text-center">
          <div className="head flex flex-col gap-4">
            <span className="text-2xl font-bold text-black">Log In</span>
            <p className="text-base text-gray-700"></p>
          </div>
          <div className="inputs overflow-hidden bg-white w-full my-4 mx-2 p-2 rounded-lg border-b-0">
            <input
              type="email"
              placeholder="Email"
              className="border-none outline-none w-full h-10 border-b border-gray-300 font-light text-black"
            />
          </div>
          <div className="inputs overflow-hidden bg-white w-full mb-4 mx-2 p-2 rounded-lg border-b-0">
            <input
              type="password"
              placeholder="Password"
              className="border-none outline-none w-full h-10 border-b border-gray-300 font-light text-black"
            />
          </div>
          <div className="form-footer">
            <a
              href="#"
              className="font-bold text-blue-600 hover:text-blue-700 transition duration-300 underline"
            >
              Forgot you password?
            </a>
          </div>
          <button className="bg-primary text-white w-full h-10 rounded-lg font-semibold cursor-pointer hover:bg-blue-700 transition duration-500">
            Log In
          </button>
        </form>
        <div className="form-footer bg-blue-200 p-4 text-base text-center">
          <p>
            Don't have an account yet?{" "}
            <a
              href="#"
              className="font-bold text-blue-600 hover:text-blue-700 transition duration-300"
            >
              Create one
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
