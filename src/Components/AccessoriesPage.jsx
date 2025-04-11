import React from "react";

const accessoriesItems = [
  { name: "Men Accessories", image: "Image/Accessories_1.jpg", price: "$199.99" },
  { name: "Female Accessories", image: "Image/Accessories_for_female.jpg", price: "$89.99" },
  { name: "Makeup Accessories", image: "Image/Accessories_for_women.jpg", price: "$59.99" },
  { name: "Gentlemen Accessories", image: "Image/Accessories_for_men_care.jpg", price: "$129.99" },
  { name: "Package Accessories", image: "Image/model-career-kit-still-life.jpg", price: "$149.99" }
];

const AccessoriesPage = () => {
  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
          Accessories Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {accessoriesItems.map((item, index) => (
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

export default AccessoriesPage;
