import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar(props) {
  console.log(props);
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            activeClassName="text-white"
            className="inline-flex items-center py-3 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            Chris
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 mr-4 my-6 rounded text-red-200 hover:text-green-800"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 mr-4 my-6 rounded text-red-200 hover:text-green-800"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            About Me
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
