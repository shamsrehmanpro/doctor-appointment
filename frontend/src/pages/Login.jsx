import React, { useContext } from "react";
import { doctorContext } from "../context/DoctorContext";

const Login = () => {
  const { condition, setCondition } = useContext(doctorContext);
  return (
    <div className="flex justify-center-safe w-full mt-10">
      <div className="px-5 py-10 border border-gray-400 w-[50%] flex flex-col shadow rounded-[10px]">
        <b className="text-[20px]">Create Account</b>
        <p>Please {condition ? "login" : "sign up" } to book appointment</p>
        <br />

        <form action="" className="flex flex-col gap-3">
          {condition ? (
            ""
          ) : (
            <>
              {" "}
              <p>Full Name</p>
              <input
                className="border border-gray py-2 rounded px-2"
                type="text"
                placeholder="enter full name"
                required
              />
            </>
          )}

          <p>Email</p>
          <input
            className="border border-gray py-2 rounded px-2"
            type="email"
            placeholder="enter email address"
            required
          />
          <p>Password</p>
          <input
            className="border border-gray py-2 rounded px-2"
            type="password"
            placeholder="enter password"
            required
          />
          <button className="bg-blue-500 py-2 rounded cursor-pointer text-white">
            {condition ? "Login" : "Create account"}
          </button>
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setCondition(!condition)}
              className="text-blue-500 underline cursor-pointer"
            >
              {condition ? "Sign up here" : " Login here"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
