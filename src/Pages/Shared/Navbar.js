import React, { Children } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = ({ children }) => {
  const menuItem = (
    <>
      <li>
        <NavLink className="rounded-md mr-3" to="/home">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="rounded-md mr-3" to="/buy">
          Buy
        </NavLink>
      </li>
      <li>
        <NavLink className="rounded-md mr-3" to="/sell">
          Sell
        </NavLink>
      </li>
      <li>
        <NavLink className="rounded-md mr-3" to="/manage-property">
          Manage Property
        </NavLink>
      </li>
      <li>
        <NavLink className="rounded-md mr-3 btn text-white" to="/login">
          Login
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="drawer drawer-end ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-1">
            <Link
              to="/"
              className="px-2 mx-2 text-4xl font-bold  hover:text-violet-600 transition duration-500 ease-in-out"
            >
              Property Bazar
            </Link>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* <!-- Navbar menu content here --> */}

              {menuItem}
            </ul>
          </div>
          <div className="flex-none lg:hidden">
            <label for="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div className="drawer-side">
        <label for="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          {menuItem}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
