import React, { useState } from "react";
import { ShoppingBagIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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
        <button className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-wider">GAA MODAA</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button className="text-sm font-medium transition-colors hover:text-blue-600">Home</button>
          <button className="text-sm font-medium transition-colors hover:text-blue-600">Women</button>
          <button className="text-sm font-medium transition-colors hover:text-blue-600">Men</button>
          <button className="text-sm font-medium transition-colors hover:text-blue-600">Accessories</button>
          <button className="text-sm font-medium transition-colors hover:text-blue-600">Sale</button>
        </nav>

        {/* Cart Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button className="relative p-2 border border-gray-200 rounded-md">
            <ShoppingBagIcon className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-blue-600 text-white rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 border border-gray-200 rounded-md" onClick={toggleMenu}>
            <Bars3Icon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}></div>}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 bottom-0 w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-end p-4 border-b">
          <button onClick={toggleMenu}>
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col p-4">
          <button className="py-3 text-lg border-b border-gray-100" onClick={toggleMenu}>Home</button>
          <button className="py-3 text-lg border-b border-gray-100" onClick={toggleMenu}>Women</button>
          <button className="py-3 text-lg border-b border-gray-100" onClick={toggleMenu}>Men</button>
          <button className="py-3 text-lg border-b border-gray-100" onClick={toggleMenu}>Accessories</button>
          <button className="py-3 text-lg" onClick={toggleMenu}>Sale</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
