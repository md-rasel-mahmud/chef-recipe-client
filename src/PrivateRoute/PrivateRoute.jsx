import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Spinner from "../components/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);

  //   current location capture
  const location = useLocation();

  if (loader) {
    return <Spinner />;
  }

  if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login" replace={true} />;
};

export default PrivateRoute;
