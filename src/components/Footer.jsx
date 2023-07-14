import moment from "moment/moment";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center p-5 bg-base-200 gap-5 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
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
      </div>
      <div>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <Link
            className="hover:text-accent"
            target="_blank"
            to="https://facebook.com/MyselfRaselMahmud"
          >
            <FaFacebook />
          </Link>
          <Link
            className="hover:text-accent"
            target="_blank"
            to="https://github.com/myself-rasel-mahmud"
          >
            <FaGithub />
          </Link>
          <Link
            className="hover:text-accent"
            target="_blank"
            to="https://www.linkedin.com/in/myselfraselmahmud"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
      <div>
        <p>
          Copyright © {moment().format("yyy")} - All right reserved by{" "}
          <a
            href="https://raselmahmud.site"
            target="_blank"
            className="text-accent uppercase"
          >
            Satisfaction Chef Recipes
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
