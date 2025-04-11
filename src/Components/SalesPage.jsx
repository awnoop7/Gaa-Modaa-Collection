import React from "react";

const salesItems = [
  { name: "Weekly Sales", image: "Image/Sales_1.jpg", price: "$199.99" },
  { name: "Monthly Sales", image: "Image/Sales_2.jpg", price: "$499.99" },
  { name: "Summer Sales", image: "Image/Sales_3.jpg", price: "$359.99" },
  { name: "Coming Soon", image: "Image/Coming  Soon.png", price: "Coming Soon" },
  { name: "Coming Soon", image: "Image/Coming  Soon.png", price: "Coming Soon" }
];

const SalesPage = () => {
  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
          Sales Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {salesItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-all">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-60 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                {item.name}
              </h3>
              <p className="text-lg text-gray-600 mt-2">{item.price}</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Explore Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesPage;
