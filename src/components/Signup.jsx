import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = ({
  signupDetails,
  setsignupDetails,
  setisSignedIn,
  setIsSignedUp,
}) => {
  const signupHandler = () => {
    console.log(signupDetails);

    localStorage.setItem("userData", JSON.stringify(signupDetails));

    if (!signupDetails.email || !signupDetails.password) {
      alert("Enter Username or password");
    } else {
      setisSignedIn(true);
      setIsSignedUp(false);
    }
  };

  return (
    <div className="signup-box">
      <h1 className="text-light text-center">SignUp</h1>
      <input
        className=" my-2 bg-transparent py-2 rounded-3 px-5 
        "
        type="text"
        placeholder="Enter your Username"
        onChange={(e) => {
          setsignupDetails((prev) => ({
            ...prev,
            email: e.target.value,
          }));
        }}
      />
      <div>
        <input className="my-2 py-2  rounded-3 px-5"
          type="text"
          placeholder="Enter your Password"
          onChange={(e) => {
            setsignupDetails((prev) => ({
              ...prev,
              password: e.target.value,
            }));
          }}
        />
      </div>
      <button onClick={signupHandler} className="bg-transparent px-5 text-light border-white rounded-pill ms-5">Signup</button>
    </div>
  );
};

export default Signup;
