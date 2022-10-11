import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import "./orders.scss";
import ShotOrders from "./shot-orders/ShotOrders";

const Orders = () => {
  const tabs = [
    {
      name: "Partially picked",
      active: false,
      count: 10,
    },
    {
      name: "Pending order",
      active: false,
      count: 8,
    },
    {
      name: "Shot order",
      active: true,
      count: 8,
      component: <ShotOrders />,
    },
  ];

  return (
    <>
      <div className="mt-2 d-flex align-items-center">
        <BsArrowLeft size="1.25rem" />
        <span className="ml-3">Picker list</span>
      </div>
      <div className="line mt-2"></div>
      <div className="d-flex mt-4">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={"my-card" + (tab.active ? " active" : "")}
          >
            <div>{tab.name}</div>
            <div>{tab.count}</div>
          </div>
        ))}
      </div>
      <div className="mt-3">{tabs.find((tab) => tab.active).component}</div>
    </>
  );
};

export default Orders;
