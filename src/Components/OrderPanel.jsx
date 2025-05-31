import React, { useState } from 'react';

const OrderPanel = ({ product, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add real backend API call if you want
    setSubmitted(true);
  };

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-6 max-w-lg w-full relative shadow-xl overflow-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-4xl font-bold text-gray-500 hover:text-black"
          aria-label="Close order panel"
        >
          ×
        </button>

        {!submitted ? (
          <>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
            <p className="text-lg text-gray-700 mb-4">Price: {product.price}</p>
            <p className="mb-6 text-gray-600">
            
              This is a high-quality {product.name} perfect for your style and comfort. Order now to upgrade your wardrobe!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-semibold" htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold" htmlFor="address">Address</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your shipping address"
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold" htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your phone number"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition text-xl font-semibold"
              >
                Confirm Order
              </button>
            </form>
          </>
        ) : (
          <div className="text-center p-6">
            <h2 className="text-3xl font-bold mb-4 text-green-600">Thank you for your order!</h2>
            <p className="mb-6">We have received your order for <strong>{product.name}</strong>.</p>
            <button
              onClick={onClose}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition text-lg font-semibold"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderPanel;
