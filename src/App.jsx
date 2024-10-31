import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";
import Success from "./components/Success";
import ErrorPage from "./components/ErrorPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [signupDetails, setsignupDetails] = useState({
    email: "",
    password: "",
  });
  const [isSignedIn, setisSignedIn] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className="full">
      <div className="  d-flex  justify-content-center align-items-center h-100">
        <div className=" text-light content1 d-flex flex-column align-items-center justify-content-center  ">
          {!isSignedIn && isSignedUp && (
            <>
              <h2 className="fs-1">Welcome Back!</h2>
            </>
          )}
          {!isSignedUp && isSignedIn && (
            <>
              <h2 className="fs-1">Login Bro!</h2>
            </>
          )}
          {!isSignedUp &&
            !isSignedIn &&
            (isSuccess ? (
              <>
                <h3 className="fs-1">You are Sucessfully Login</h3>
              </>
            ) : (
              <>
                <h2 className="fs-1">Login Failed</h2>
              </>
            ))}
        </div>
        <div className="  content2 d-flex flex-column align-items-center justify-content-center  ">
          {!isSignedIn && isSignedUp && (
            <Signup
              signupDetails={signupDetails}
              setsignupDetails={setsignupDetails}
              setisSignedIn={setisSignedIn}
              setIsSignedUp={setIsSignedUp}
            />
          )}
          {!isSignedUp && isSignedIn && (
            <Login
              signupDetails={signupDetails}
              isSignedIn={isSignedIn}
              setisSignedIn={setisSignedIn}
              isSignedUp={isSignedUp}
              isSuccess={isSuccess}
              setIsSuccess={setIsSuccess}
            />
          )}
          {!isSignedUp &&
            !isSignedIn &&
            (isSuccess ? (
              <Success />
            ) : (
              <ErrorPage setisSignedIn={setisSignedIn} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
