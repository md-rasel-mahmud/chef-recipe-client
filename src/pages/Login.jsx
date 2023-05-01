import React from 'react';
import Lottie from "lottie-react";
import authAnimation from "../assets/auth-animation.json";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen max-w-screen-lg mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
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
                        </div>

                        <button className="btn mt-3 btn-primary btn-outline capitalize btn-sm"><FaGoogle className='mr-2'/> login with google</button>
                        <button className="btn btn-primary btn-outline capitalize btn-sm"><FaGithub className='mr-2'/> login with github</button>
                        
                            <label className="label">
                                <span> Don't have an account? <Link to='/register' className="link text-info link-hover"> Register Here </Link></span>
                            </label>
                        <div className="form-control mt-3">
                            <button className="btn btn-accent">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;