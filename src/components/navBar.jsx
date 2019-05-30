import React from "react";

const navBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {props.counterTotal}
        </span>
      </a>
    </nav>
  );
};

export default navBar;
