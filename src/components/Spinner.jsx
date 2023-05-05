import React from "react";

const Spinner = () => {
  return (
    <div className="min-h-screen w-full z-50 fixed backdrop-blur-lg flex justify-center items-center">
      <button className="btn btn-lg btn-primary text-white btn-circle loading"></button>
    </div>
  );
};

export default Spinner;
