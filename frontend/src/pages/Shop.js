import React, { useState } from "react";

const Shop = () => {
  const [products] = useState([
    { id: 1, name: "Laptop", price: "$1200" },
    { id: 2, name: "Smartphone", price: "$800" },
    { id: 3, name: "Headphones", price: "$100" },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Shop</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded shadow-md">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

