import React from "react";

const Spinner = () => {
  return (
    <div className="h-screen w-full z-50 fixed backdrop-blur-sm flex justify-center items-center">
      <button className="btn btn-xl btn-circle loading"></button>
    </div>
  );
};

export default Spinner;
