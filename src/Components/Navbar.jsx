import React, { useState } from "react";
import {
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function Navbar() {
  const [cartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-wider">GAA MODAA</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium transition-colors hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            to="/womens"
            className="text-sm font-medium transition-colors hover:text-blue-600"
          >
            Women
          </Link>
          <Link
            to="/mens"
            className="text-sm font-medium transition-colors hover:text-blue-600"
          >
            Men
          </Link>
          <Link
            to="/accessories"
            className="text-sm font-medium transition-colors hover:text-blue-600"
          >
            Accessories
          </Link>
          <Link
            to="/sale"
            className="text-sm font-medium transition-colors hover:text-blue-600"
          >
            Sale
          </Link>
        </nav>

        {/* Cart, Login & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Cart Button */}
          <button className="relative p-2 border border-gray-200 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-200">
            <ShoppingBagIcon className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs bg-blue-600 text-white rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          {/* Login Button next to Cart */}
          <Link
            to="/login"
            className="hidden md:inline-block px-4 py-2 border border-blue-600 rounded-md text-blue-600 hover:bg-blue-600 hover:text-white transition"
          >
            Login
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 border border-gray-200 rounded-md"
            onClick={toggleMenu}
          >
            <Bars3Icon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4 border-b">
          <button onClick={toggleMenu}>
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col p-4">
          <Link
            to="/"
            className="py-3 text-lg border-b border-gray-100"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/womens"
            className="py-3 text-lg border-b border-gray-100"
            onClick={toggleMenu}
          >
            Women
          </Link>
          <Link
            to="/mens"
            className="py-3 text-lg border-b border-gray-100"
            onClick={toggleMenu}
          >
            Men
          </Link>
          <Link
            to="/accessories"
            className="py-3 text-lg border-b border-gray-100"
            onClick={toggleMenu}
          >
            Accessories
          </Link>
          <Link
            to="/sale"
            className="py-3 text-lg border-b border-gray-100"
            onClick={toggleMenu}
          >
            Sale
          </Link>

          {/* Login button in mobile menu */}
          <Link
            to="/login"
            className="mt-4 py-3 text-lg border border-blue-600 rounded-md text-blue-600 text-center hover:bg-blue-600 hover:text-white transition"
            onClick={toggleMenu}
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
