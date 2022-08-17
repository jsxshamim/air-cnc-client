import React from "react";
import { Link } from "react-router-dom";
import "../Home/style.css";

const Header = () => {
  const menuItems = (
    <>
      <li>
        <Link className="font-bold text-sm" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="font-bold text-sm lg:p-0 mx-3" to="/">
          Host your home
        </Link>
      </li>
      <li>
        <Link className="font-bold text-sm lg:p-0 mx-3" to="/">
          Host your experience
        </Link>
      </li>
      <li>
        <Link className="font-bold text-sm " to="/">
          Help
        </Link>
      </li>
      <li>
        <Link className="font-bold text-sm " to="/">
          Login
        </Link>
      </li>
      <li className="roundedCss">
        <Link className="font-bold bg-success text-white" to="/">
          SignUp
        </Link>
      </li>
    </>
  );
  return (
    <div className="border-b mb-5">
      <div className="container mx-auto">
        <div class="navbar ">
          <div class="navbar-start">
            <div class="dropdown">
              <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
              >
                {menuItems}
              </ul>
            </div>
            <Link to="/" class="text-success normal-case text-3xl font-bold">
              Aircnc
            </Link>
          </div>
          <div class="navbar-end text-end hidden lg:flex lg:w-full">
            <ul class="menu menu-horizontal p-0">{menuItems}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
