import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import authAnimation from "../assets/auth-animation.json";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const [error, setError] = useState();

  // import context
  const { user, googlePopupLogin, githubPopupLogin, loginWithEmailPass } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // handle manual enter email password login

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    if (!(email, password)) {
      setError("Empty value");
      return;
    }

    loginWithEmailPass(email, password)
      .then((result) => {
        if (result.user) {
          navigate(from);
          return;
        }
      })
      .catch((error) => setError(error.message));
  };

  // handle google popup login
  const handleGooglePopupLogin = () => {
    setError("");

    googlePopupLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from);
      })
      .catch((error) => setError(error.message));
  };

  // handle github popup login
  const handleGithubPopupLogin = () => {
    setError("");

    githubPopupLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from);
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="hero min-h-screen max-w-screen-lg mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <div className="w-3/5 ml-auto">
            <Lottie animationData={authAnimation} loop={true} />
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h2 className="text-center mt-3 text-2xl font-bold text-accent">
            Login here
          </h2>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="input input-bordered"
              />
            </div>

            {/* set error message  */}
            <p className="text-red-500 text-center">{error}</p>

            {/* one click login method  */}
            <button
              type="button"
              onClick={handleGooglePopupLogin}
              className="btn mt-3 btn-primary btn-outline capitalize btn-sm"
            >
              <FaGoogle className="mr-2" /> login with google
            </button>
            <button
              type="button"
              onClick={handleGithubPopupLogin}
              className="btn btn-primary btn-outline capitalize btn-sm"
            >
              <FaGithub className="mr-2" /> login with github
            </button>

            <label className="label">
              <span>
                Don't have an account?
                <Link to="/register" className="link text-info link-hover">
                  Register Here
                </Link>
              </span>
            </label>

            <div className="form-control mt-3">
              <button type="submit" className="btn btn-accent">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
