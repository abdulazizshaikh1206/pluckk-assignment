import React from "react";
import { Outlet } from "react-router";
import { BsBell } from "react-icons/bs";
import { BsPower } from "react-icons/bs";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="wrapper">
      <div className="d-flex justify-content-between">
        <h1>pluckk</h1>
        <div className="d-flex align-items-center">
          <BsBell size="1.5rem" />
          <BsPower size="1.65rem" className="ml-4" />
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;
