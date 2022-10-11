import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { BsCheck2 } from "react-icons/bs";
import WithBottomNavbar from "../../components/with-bottom-navbar/WithBottomNavbar";
import "./order-status.scss";

const pickerList = [
  {
    id: "P2207200016333",
    checked: true,
  },
  {
    id: "P2207200016334",
    checked: true,
  },
  {
    id: "P2207200016335",
    checked: true,
  },
  {
    id: "P2207200016336",
    checked: true,
  },
  {
    id: "P2207200016337",
    checked: false,
  },
  {
    id: "P2207200016338",
    checked: false,
  },
  {
    id: "P2207200016339",
    checked: false,
  },
  {
    id: "P2207200016340",
    checked: false,
  },
  {
    id: "P2207200016341",
    checked: false,
  },
];

const OrderStatus = () => {
  const [pickers, setPickers] = useState(pickerList);
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
      active: false,
      count: 8,
    },
  ];

  const changePickerState = (picker) => {
    const newPickers = [];
    pickers.forEach((pi) => {
      if (pi.id === picker.id) {
        newPickers.push({ ...pi, checked: !picker.checked });
      } else {
        newPickers.push(pi);
      }
    });
    setPickers(newPickers);
  };

  return (
    <>
      <div className="mt-2 d-flex align-items-center justify-content-between">
        <div>
          <BsArrowLeft size="1.25rem" />
          <span className="ml-3">Order status</span>
        </div>
        <div>Wed 27 Jul</div>
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
      <div className="mt-4">
        {pickers.map((picker) => (
          <div
            key={picker.id}
            className="picker"
            onClick={() => changePickerState(picker)}
          >
            <span>{picker.id}</span>
            <div className="check-icon-wrapper">
              {picker.checked ? <BsCheck2 size="1.1rem" fill="black" /> : null}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="picker-button">Choose picker</button>
      </div>
    </>
  );
};

export default WithBottomNavbar(OrderStatus);
