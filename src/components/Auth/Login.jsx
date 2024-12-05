import React from "react";
import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          action=""
          className="flex flex-col items-center justify-center"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400"
            type="email"
            value={email}
            placeholder="Enter your email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400 mt-3"
            type="password"
            value={password}
            placeholder="Enter password"
          />
          <button className="text-white border-none outline-none border-2 bg-emerald-600 py-2 px-8 font-semibold text-lg w-full rounded-full placeholder:text-white mt-5">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
