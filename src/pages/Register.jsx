import React from 'react';
import Lottie from "lottie-react";
import authAnimation from "../assets/auth-animation.json";


const Register = () => {
    return (
        <div className="hero min-h-screen max-w-screen-lg mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <div className="w-3/5 ml-auto">
                        <Lottie animationData={authAnimation} loop={true} />
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className='text-center mt-3 text-2xl font-bold text-accent'>Register here</h2>
                    <form className="card-body gap-3">
                        <div className="form-control">
                            <input type="text" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="Password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="Confirm Password" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-3">
                            <button className="btn btn-accent">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;