import React, { useEffect, useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Home = () => {
  const { cart, addToCart, removeFromCart } = useContext(ProductContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-100 py-8">
      <div className="mx-auto px-4 container">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md hover:shadow-lg rounded-lg transform transition-transform overflow-hidden hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h2 className="font-semibold text-gray-800 text-lg truncate">
                  {product.title}
                </h2>
                <p className="mt-1 text-gray-500 text-sm truncate">
                  {product.description} {/* Add product description here */}
                </p>
                <p className="mt-2 font-medium text-gray-600">
                  ₹{product.price}
                </p>
                <div className="mt-4">
                  {cart.some((item) => item.id === product.id) ? (
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="bg-gradient-to-r from-red-500 hover:from-red-600 to-red-700 hover:to-red-800 shadow-md py-2 rounded-md w-full text-white transition duration-300"
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-gradient-to-r from-blue-500 hover:from-blue-600 to-blue-700 hover:to-blue-800 shadow-md py-2 rounded-md w-full text-white transition duration-300"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
