import React, { useState } from 'react';
import Lottie from "lottie-react";
import authAnimation from "../assets/auth-animation.json";
import { Link } from 'react-router-dom';


const Register = () => {

    const [error, setError] = useState()

    const handleRegisterSubmit = (event) => {
        event.preventDefault()

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        setError('')

        if(!(name,email,photoUrl, password,confirmPassword)){
            setError('Empty value')
            return;
        }

        console.log(name, email, password, photoUrl, password, confirmPassword);
    }

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
                    <form onSubmit={handleRegisterSubmit} className="card-body gap-3">
                        <div className="form-control">
                            <input type="text" placeholder="Name" name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Photo url" name='photoUrl' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="Email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="Password" name='password' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="Confirm Password" name='confirmPassword' className="input input-bordered" />
                        </div>

                        {/* set error message  */}
                        <p className="text-red-500 text-center">{error}</p>

                        <label className="label">
                            <span> Already have an account? <Link to='/login' className="link text-info link-hover"> Login Here </Link></span>
                        </label>

                        <div className="form-control mt-3">
                            <button type='submit' className="btn btn-accent">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;