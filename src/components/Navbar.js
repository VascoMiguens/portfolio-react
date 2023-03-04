import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/about" className="logo">
        Vasco Miguéns
      </Link>
      <ul>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/portfolio">Portfolio</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink to="/resume">Resume</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const { pathname } = useResolvedPath(to);
  const isActive = useMatch({ path: pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}