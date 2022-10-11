import React from "react";
import OrderList from "../order-list/OrderList";
import "./shot-orders.scss";

const ShotOrders = () => {
  const order = {
    id: "P2207200016333",
    route: 3,
    pickerName: "Rohit",
    driverName: "Guy Hawkins",
    exoticVegOrders: [
      {
        id: 1,
        itemImageUrl: "assets/vegetables.webp",
        name: "Capsicum Yellow",
        weight: 200,
        weightUnit: "gms",
        quantity: 1,
      },
    ],
    exoticFruitOrders: [
      {
        id: 2,
        itemImageUrl: "assets/dragon-fruit.jpg",
        name: "Dragon Fruit",
        weight: 200,
        weightUnit: "gms",
        quantity: 1,
      },
      {
        id: 3,
        itemImageUrl: "assets/avocado.cms",
        name: "Avocado Avanza",
        weight: 200,
        weightUnit: "gms",
        quantity: 1,
      },
    ],
    panReadyOrders: [
      {
        id: 4,
        itemImageUrl: "assets/chinese-stir-fry.jpg",
        name: "Chinese Stir Fry Mix",
        weight: 200,
        weightUnit: "gms",
        quantity: 1,
      },
      {
        id: 5,
        itemImageUrl: "assets/chinese-stir-fry.jpg",
        name: "Chinese Stir Fry Mix",
        weight: 200,
        weightUnit: "gms",
        quantity: 1,
      },
    ],
  };

  return (
    <>
      <div className="picker-details">
        <h5>{order.id}</h5>
        <div className="dotted-line"></div>
        <div className="details">
          <div className="info">
            <span>Route</span>
            <span>{order.route}</span>
          </div>
          <div className="info">
            <span>Assigned picker</span>
            <span>{order.pickerName}</span>
          </div>
          <div className="info">
            <span>Assigned Driver</span>
            <span>{order.driverName}</span>
          </div>
        </div>
      </div>
      <h6 className="mt-4 mb-3">Exotic veg</h6>
      <OrderList orders={order.exoticVegOrders} />
      <h6 className="mt-4 mb-3">Exotic Fruits</h6>
      <OrderList orders={order.exoticFruitOrders} />
      <h6 className="mt-4 mb-3">Pan ready</h6>
      <OrderList orders={order.panReadyOrders} />
    </>
  );
};

export default ShotOrders;
