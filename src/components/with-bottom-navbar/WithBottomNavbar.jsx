import React, { useEffect, useRef } from "react";
import BottomNavbar from "../bottom-navbar/BottomNavbar";
import "./with-bottom-navbar.scss";

const WithBottomNavbar = (WrappedComponent) => {
  const Hoc = () => {
    const ref = useRef(null);

    useEffect(() => {
      if (window.innerHeight < ref.current.clientHeight) {
        ref.current.style.height = ref.current.clientHeight + 50 + "px";
      }
    }, []);

    return (
      <div className="my-container">
        <div ref={ref}>
          <WrappedComponent />
        </div>
        <div className="navbar-container">
          <BottomNavbar />
        </div>
      </div>
    );
  };
  return Hoc;
};

export default WithBottomNavbar;
