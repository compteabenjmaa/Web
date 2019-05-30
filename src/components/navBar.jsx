import React from "react";

const navBar = ({ counterTotal }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">{counterTotal}</span>
      </a>
    </nav>
  );
};

export default navBar;
