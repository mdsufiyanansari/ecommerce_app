import { useState } from "react";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "Shop", "Categories", "About", "Contact"];

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-cyan-600">eCommerce</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navLinks.map((link, i) => (
            <li key={i} className="hover:text-cyan-600 cursor-pointer transition">
              {link}
            </li>
          ))}
        </ul>

        {/* Search + Cart */}
        <div className="hidden md:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search products..."
            className="px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <button className="text-2xl text-gray-700 hover:text-cyan-600 transition">
            <FiShoppingCart />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden bg-white shadow-md px-4 py-3 space-y-3"
        >
          {navLinks.map((link, i) => (
            <div key={i} className="text-gray-700 font-medium hover:text-cyan-600 transition cursor-pointer">
              {link}
            </div>
          ))}
          <div className="flex items-center space-x-2 mt-3">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <FiShoppingCart className="text-xl text-gray-700" />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
