import React from "react";
import { useState } from "react";

const Login = ({ signupDetails, isSignedIn, setisSignedIn, setIsSuccess }) => {
  const [idPass, setidPass] = useState({
    email: "",
    password: "",
  });

  const LoginHandler = () => {
    if (!idPass.email || !idPass.password) {
      alert("Enter Username or password");
    } else {
      console.log("login");
      if (signupDetails.email === idPass.email) {
        if (signupDetails.password === idPass.password) {
          setIsSuccess(true);
          setisSignedIn(false);
          console.log("success");
        } else {
          setisSignedIn(false);
          setIsSuccess(false);
          console.log("error");
        }
      } else {
        setisSignedIn(false);
        setIsSuccess(false);
        console.log("errors");
      }
    }
  };
  return (
    <div className="signup-box">
      <h1 className="text-light text-center">Login</h1>
      <input
        className=" my-2 bg-transparent py-2 rounded-3 px-5 text-light
        "
        type="text"
        placeholder="Enter your Username"
        onChange={(e) => {
          setidPass((prev) => ({ ...prev, email: e.target.value }));
        }}
      />
      <div>
        <input
          className=" my-2 bg-transparent py-2 rounded-3 px-5 text-light
        "
          type="password"
          placeholder="Enter your Password"
          onChange={(e) => {
            setidPass((prev) => ({ ...prev, password: e.target.value }));
          }}
        />
      </div>
      <button
        onClick={LoginHandler}
        className="bg-transparent px-5 text-light border-white rounded-pill ms-5"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
