import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import Modal from "../components/Modal"; // Import the modal
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(ProductContext);
  const [showModal, setShowModal] = useState(false); // State to control the modal visibility
  const navigate = useNavigate(); // Hook to access navigate for routing

  // Calculate total price and discounted price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discountedPrice = totalPrice * 0.9; // 10% discount

  const handleCheckout = () => {
    setShowModal(true); // Show the modal
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
    navigate("/"); // Redirect to home
  };

  const handleContinueShopping = () => {
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="bg-white shadow-lg mx-auto p-8 rounded-lg max-w-4xl container">
      <h2 className="mb-8 font-bold text-4xl text-center text-gray-800">
        Your Shopping Cart
      </h2>
      {cart.length === 0 ? (
        <div className="text-center text-gray-500">
          <p className="text-lg">
            Your cart is empty. Start adding some products!
          </p>
          <button
            onClick={handleContinueShopping}
            className="bg-blue-600 hover:bg-blue-500 mt-4 px-6 py-2 rounded-full text-white transition duration-300"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <table className="border-collapse border-gray-300 mb-8 border w-full">
            <thead className="bg-gray-100 text-gray-800">
              <tr>
                <th className="px-4 py-3 text-left">Product</th>
                <th className="px-4 py-3 text-left">Price</th>
                <th className="px-4 py-3 text-left">Quantity</th>
                <th className="px-4 py-3 text-left">Total</th>
                <th className="px-4 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="bg-gray-50 text-gray-700">
              {cart.map((item) => (
                <tr
                  key={item.id}
                  className="border-gray-200 hover:bg-gray-100 border-b transition duration-300"
                >
                  <td className="flex items-center px-4 py-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="shadow-md rounded w-24 h-24 object-cover"
                    />
                    <span className="ml-4 font-semibold text-lg">
                      {item.title}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-gray-900">
                    ₹{item.price.toFixed(2)}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                        className="bg-gray-300 hover:bg-gray-200 px-3 py-1 rounded-l text-gray-700 transition"
                      >
                        -
                      </button>
                      <span className="border-gray-300 px-4 border-t border-b">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="bg-gray-300 hover:bg-gray-200 px-3 py-1 rounded-r text-gray-700 transition"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-gray-900">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="px-4 py-4">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-600 hover:bg-red-500 shadow px-4 py-2 rounded-full text-white transition duration-300"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg mt-6 p-6 rounded-lg text-white">
            <h3 className="mb-4 font-bold text-2xl">Pricing Summary</h3>
            <div className="flex justify-between border-gray-300 mb-2 pb-2 border-b">
              <span className="text-lg">Total Price:</span>
              <span className="font-semibold text-lg">
                ₹{totalPrice.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-300">Discounted Price (10% off):</span>
              <span className="font-semibold text-lg">
                ₹{discountedPrice.toFixed(2)}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="bg-white hover:bg-gray-100 shadow-lg mt-4 px-8 py-3 rounded-full w-full font-semibold text-blue-600 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
      {showModal && (
        <Modal
          message="Thanks for Shopping!"
          onClose={handleCloseModal}
          confirmText="OK" // Set the button text here
        />
      )}
    </div>
  );
};

export default Cart;
