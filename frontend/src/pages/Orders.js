import React from "react";

const Orders = () => {
  const orders = [
    { id: 1, name: "Laptop", price: "$1200", status: "Shipped" },
    { id: 2, name: "Smartphone", price: "$800", status: "Delivered" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id} className="p-2 border-b">
            <strong>{order.name}</strong> - {order.price} - <span className="text-green-600">{order.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;

