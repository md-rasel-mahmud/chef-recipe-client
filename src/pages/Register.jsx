import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import authAnimation from "../assets/auth-animation.json";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const [error, setError] = useState();

  // import context
  const { registerWithEmailPass, updateRegisterProfile } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegisterSubmit = (event) => {
    event.preventDefault();

    setError("");

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (!(name, email, password, confirmPassword)) {
      setError("Empty value");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password doesn't match");
      return;
    }

    if (password < 6 && confirmPassword < 6) {
      setError("Password should be at list 6 character and more");
      return;
    }

    registerWithEmailPass(email, password)
      .then(() => {
        updateRegisterProfile(name, photoUrl)
          .then(() => {
            navigate("/");
          })
          .catch((error) => setError(error.message));
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="hero min-h-screen max-w-screen-lg mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <div className="lg:w-3/5 ml-auto">
            <Lottie animationData={authAnimation} loop={true} />
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h2 className="text-center mt-3 text-2xl font-bold text-accent">
            Register here
          </h2>
          <form onSubmit={handleRegisterSubmit} className="card-body gap-3">
            <div className="form-control">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Photo url"
                name="photoUrl"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                className="input input-bordered"
              />
            </div>

            {/* set error message  */}
            <p className="text-red-500 text-center">{error}</p>

            <label className="label">
              <span>
                {" "}
                Already have an account?{" "}
                <Link to="/login" className="link text-info link-hover">
                  {" "}
                  Login Here{" "}
                </Link>
              </span>
            </label>

            <div className="form-control mt-3">
              <button type="submit" className="btn btn-accent">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
