import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const navItems = [
        {
            id: 1,
            path: "/homes",
            name: "Host your home",
        },
        {
            id: 2,
            path: "/experience",
            name: "Host your experience",
        },
        {
            id: 3,
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
        <div className="border-b mb-10 py-2">
            <div className="w-[90%] mx-auto">
                <div class="navbar justify-between">
                    <div>
                        <Link to="/" class="font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-primary to-accent">
                            Aircnc
                        </Link>
                    </div>
                    <div class="navbar-end text-end hidden md:flex md:w-full">
                        <ul class="menu menu-horizontal xl:gap-4">
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
                    <div className="navbar-end md:hidden">
                        <div class="dropdown">
                            <label tabindex="0" class="btn btn-ghost md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </label>
                            <ul tabindex="0" class="right-0 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
