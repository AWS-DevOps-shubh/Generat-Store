import { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product._id} className="border p-4">
            <h3 className="font-bold">{product.name}</h3>
            <p>{product.description}</p>
            <p className="text-lg font-bold">₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
