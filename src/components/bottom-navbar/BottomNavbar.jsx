import React from "react";
import { BsFileEarmarkText } from "react-icons/bs";
import { BsCart4 } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";
import { BsStack } from "react-icons/bs";
import "./bottom-navbar.scss";

const BottomNavbar = () => {
  const tabs = [
    {
      name: "Route list",
      component: BsFileEarmarkText,
      active: false,
    },
    {
      name: "Picker",
      component: BsCart4,
      active: false,
    },
    {
      name: "Driver",
      component: BsTruck,
      active: false,
    },
    {
      name: "Order status",
      component: BsStack,
      active: true,
    },
  ];

  return (
    <div className="bottom-navbar">
      {tabs.map((tab) => (
        <div
          key={tab.name}
          className={"tab text-center" + (tab.active ? " active" : "")}
        >
          <tab.component
            size="1.3rem"
            fill={tab.active ? "#98184d" : "rgba(0, 0, 0, 0.55)"}
          />
          <div className="name mt-1">{tab.name}</div>
        </div>
      ))}
    </div>
  );
};

export default BottomNavbar;
