import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import "../scss/pages/login.scss";
function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container login my-1">
      {/* Desktop/Laptop layout (existing) */}
      <div className="d-none d-lg-flex flex-row justify-content-center hstack gap-5">
        <div className="ms-5 login_video">
          <video className="login_video_content" autoPlay muted loop>
            <source src="/videos/login.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div className=" me-5 p-5 login-form">
        <Link to="/signup" className="text-decoration-none">
          ← Go to Signup
        </Link>

        <h2 className="mt-5 mb-4">Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="flex-row space-between my-2">
            <label htmlFor="email">Email address:</label>
            <input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="pwd">Password:</label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          {error ? (
            <div>
              <p className="error-text">
                The provided credentials are incorrect
              </p>
            </div>
          ) : null}
          <div className="flex-row flex-end">
            <button
              type="submit"
              className="p-2 px-4 bg-primary text-white rounded-4 mt-3"
            >
              Submit
            </button>
          </div>
        </form>
        </div>
        <div className="ms-5 login_video">
          <video className="login_video_content" autoPlay muted loop>
            <source src="/videos/login.mp4" type="video/mp4"></source>
          </video>
        </div>
      </div>

      {/* Mobile/Tablet layout: video background with form overlay */}
      <div className="d-lg-none login-overlay-container">
        <video className="login-overlay-video" autoPlay muted loop>
          <source src="/videos/login.mp4" type="video/mp4"></source>
        </video>
        <div className="login-overlay-form p-4">
          <Link to="/signup" className="text-decoration-none text-white">
            ← Go to Signup
          </Link>

          <h2 className="mt-3 mb-3 text-white">Login</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="flex-row space-between my-2">
              <label htmlFor="email" className="text-white">Email address:</label>
              <input
                placeholder="youremail@test.com"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="flex-row space-between my-2">
              <label htmlFor="pwd" className="text-white">Password:</label>
              <input
                placeholder="******"
                name="password"
                type="password"
                id="pwd"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            {error ? (
              <div>
                <p className="error-text text-white">
                  The provided credentials are incorrect
                </p>
              </div>
            ) : null}
            <div className="flex-row flex-end">
              <button
                type="submit"
                className="p-2 px-4 bg-primary text-white rounded-4 mt-3"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
