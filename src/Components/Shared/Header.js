import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const menuItems = (
        <>
            <li>
                <NavLink className="font-bold text-sm hover:bg-transparent hover:text-primary" to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink className="font-bold text-sm hover:bg-transparent hover:text-primary" to="/home">
                    Host your home
                </NavLink>
            </li>
            <li>
                <NavLink className="font-bold text-sm hover:bg-transparent hover:text-primary" to="/experience">
                    Host your experience
                </NavLink>
            </li>
            <li>
                <NavLink className="font-bold text-sm hover:bg-transparent hover:text-primary" to="/help">
                    Help
                </NavLink>
            </li>
        </>
    );
    const activeStyle = { color: "green", textDecoration: "underline" };
    const activeClass = "activated";

    const navItems = [
        {
            id: 1,
            path: "/",
            name: "Home",
        },
        {
            id: 2,
            path: "/homes",
            name: "Host your home",
        },
        {
            id: 3,
            path: "/experience",
            name: "Host your experience",
        },
        {
            id: 4,
            path: "/help",
            name: "Help",
        },
    ];

    const headerAuth = () => {
        return (
            <NavLink className="focus:bg-transparent bg-transparent text-base font-medium bg-gradient-to-r from-primary to-accent text-white rounded-3xl px-6 py-2 lg:ml-5" to="/login">
                Sign up
            </NavLink>
        );
    };

    return (
        <div className="border-b mb-5">
            <div className="container mx-auto">
                <div class="navbar ">
                    <div class="navbar-start">
                        <div class="dropdown">
                            <label tabindex="0" class="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </label>
                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                                {navItems.map((nav) => (
                                    <li className="mb-2">
                                        <NavLink className={({ isActive }) => (isActive ? "font-bold text-sm hover:bg-transparent hover:text-primary" : undefined)} to={nav.path}>
                                            {nav.name}
                                        </NavLink>
                                    </li>
                                ))}
                                {headerAuth()}
                            </ul>
                        </div>
                        <Link to="/" class="font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-primary to-accent">
                            Aircnc
                        </Link>
                    </div>
                    <div class="navbar-end  text-end hidden lg:flex lg:w-full">
                        <ul class="menu menu-horizontal gap-4">
                            {navItems.map((nav) => (
                                <li>
                                    <NavLink className={({ isActive }) => (isActive ? "font-bold  hover:bg-transparent focus:bg-transparent text-primary" : "font-bold  hover:bg-transparent hover:text-primary")} to={nav.path}>
                                        {nav.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        {headerAuth()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
