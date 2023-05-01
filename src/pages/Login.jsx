import React from 'react';
import Lottie from "lottie-react";
import authAnimation from "../assets/auth-animation.json";
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
    return (
        <div className="hero min-h-[70vh] max-w-screen-lg mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    {/* <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}

                    <div className="w-3/5 ml-auto">
                        <Lottie animationData={authAnimation} loop={true} />
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className='text-center mt-3 text-2xl font-bold text-accent'>Login here</h2>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <button className="btn btn-primary btn-outline capitalize btn-sm"><FaGoogle className='mr-2'/> login with google</button>
                        <button className="btn btn-primary btn-outline capitalize btn-sm"><FaGithub className='mr-2'/> login with github</button>
                        <div className="form-control mt-6">
                            <button className="btn btn-accent">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;