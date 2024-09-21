import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext"; // Your context provider
import Home from "./pages/Home"; // Home component
import Cart from "./pages/Cart"; // Cart component

import Navbar from "./components/Navbar"; // Navbar component
import Footer from "./components/Footer"; // Import Footer

const App = () => {
  return (
    <ProductProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </ProductProvider>
  );
};

export default App;
