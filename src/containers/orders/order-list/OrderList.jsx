import React from "react";
import "./order-list.scss";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsCheck2 } from "react-icons/bs";

const OrderList = ({ orders }) => {
  return (
    <div>
      {orders.map((order) => (
        <div className="card" key={order.id}>
          <div className="image-wrapper d-flex align-items-center">
            <img src={order.itemImageUrl} alt="item image" />
          </div>
          <div className="d-flex justify-content-between w-100">
            <div>
              <div className="name">{order.name}</div>
              <div className="weight">
                {order.weight}
                {order.weightUnit}
              </div>
              <div className="quantity">Qty : {order.quantity}</div>
            </div>
            <div className="d-flex align-items-center">
              <div className="check-icon-wrapper">
                <BsCheck2 size="1.2rem" fill="black" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
