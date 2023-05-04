import React from 'react';
import Lottie from "lottie-react";
import { useRouteError } from 'react-router-dom';
import errorAnimation from '../assets/error-animation.json'

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <div className='flex flex-col gap-4 justify-center items-center h-screen'>
            <Lottie className='w-1/3' animationData={errorAnimation} loop={true} />
            <h1 className="text-4xl text-error text-center">{error.status}</h1>
            <h4 className='text-2xl text-error'>{error.data}</h4>
        </div>
    );
};

export default ErrorPage;