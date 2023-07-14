import React, { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import { CgMenuLeftAlt } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  // import user context
  const { user, logoutUser } = useContext(AuthContext);

  const navigation = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-accent font-semibold underline underline-offset-8"
              : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-accent font-semibold underline underline-offset-8"
              : ""
          }
          to="/blog"
        >
          Blog
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 bg-base-100 shadow-md mb-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-2xl">
            <CgMenuLeftAlt />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navigation}
          </ul>
        </div>
        <a className="text-primary lg:uppercase lg:text-xl">
          Satisfaction Chef Recipes
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navigation}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div
              className="dropdown dropdown-end tooltip tooltip-bottom"
              data-tip={user && user.displayName}
            >
              <label className="btn btn-ghost mr-2 btn-circle avatar ">
                <div className="text-2xl rounded-full">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="profile pic" />
                  ) : (
                    <FaUserAlt />
                  )}
                </div>
              </label>
            </div>
            <button onClick={logoutUser} className="btn btn-sm btn-error">
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/login" className="btn btn-sm btn-primary mr-2">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
