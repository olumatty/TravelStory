import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import PasswordInput from "../../components/input/passwordInput";
import axiosInstance from "../../utils/axiosinstance";

const SignUp = () => {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!Name) {
      setError("Please enter your name");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter your passsword");
      return;
    }
    setError("");

    try {
      const response = await axiosInstance.post("/create-account", {
        fullName : Name,
        email: email,
        password: password,
      });
      //Handle Successful Login
      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/dashboard");
      }  
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occcured. Please try again.");
      }
    }
  };
  return (
    <div className="min-h-screen bg-cyan-50 overflow-hidden relative">
      <div className="login-ui-box right-10 -top-40 hidden lg:block" />
      <div className="login-ui-box bg-cyan-200 -bottom-40 right-1/2 hidden lg:block" />

      <div className="container min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 mx-auto">
        <div className="w-full lg:w-1/2 h-[40vh] lg:h-[90vh] flex items-end bg-signup-bg-img bg-cover bg-center rounded-lg p-8 lg:p-10 mb-10 lg:mb-0 relative z-10">
          <div className=" p-4 rounded-lg">
            <h4 className="text-3xl lg:text-5xl text-white font-semibold leading-snug lg:leading-[58px]">
              Join the <br /> Adventure
            </h4>
            <p className="text-sm lg:text-[15px] text-white leading-5 lg:leading-6 pr-3 lg:pr-7 mt-4">
              Create your account to start documenting your travels and
              preserving your memories in your personal travel journal.
            </p>
          </div>
        </div>

        {/* Right side: Form */}
        <div className="w-full lg:w-1/2 h-auto lg:h-[75vh] bg-white rounded-lg lg:rounded-r-lg p-8 lg:p-16 shadow-lg shadow-cyan-200/20 relative z-20">
          <form onSubmit={handleSignup}>
            <h4 className="text-xl lg:text-2xl font-semibold mb-6 lg:mb-7">
              SignUp
            </h4>

            <input
              type="text"
              placeholder="Name"
              className="input-box w-full mb-4"
              value={Name}
              onChange={({ target }) => {
                setName(target.value);
              }}
            />

            <input
              type="text"
              placeholder="Email"
              className="input-box w-full mb-4"
              value={email}
              onChange={({ target }) => {
                setEmail(target.value);
              }}
            />

            <PasswordInput
              value={password}
              onChange={({ target }) => {
                setPassword(target.value);
              }}
              className="w-full mb-6"
            />
            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
            <button type="submit" className="btn-primary w-full">
              CREATE ACCOUNT
            </button>

            <p className="text-xs text-slate-500 text-center my-4">Or</p>

            <button
              type="button"
              className="btn-primary btn-light w-full"
              onClick={() => {
                navigate("/");
              }}
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
