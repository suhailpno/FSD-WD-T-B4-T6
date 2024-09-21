import React from "react";

const Modal = ({ message, onClose, confirmText, darkMode }) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-50`}
      onClick={onClose} // Close modal on outside click
    >
      <div
        className={`rounded-lg p-6 shadow-lg text-center transition duration-300 transform ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        role="dialog"
        aria-labelledby="modal-title"
        aria-modal="true"
      >
        <h2 id="modal-title" className="mb-4 font-bold text-2xl">
          {message}
        </h2>
        <button
          onClick={onClose}
          className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full text-white transition"
        >
          {confirmText} {/* Display the confirmText prop */}
        </button>
      </div>
    </div>
  );
};

export default Modal;
