import React from 'react';

const womensItems = [
  { name: "Elegant Dress", image: "Image/high-fashion-look-glamor-stylish-sexy-smiling-beautiful-young-woman-model-summer-black-hipster-dress.jpg", price: "$49.99" },
  { name: "Casual Outfit", image: "Image/young-woman-beautiful-red-dress.jpg", price: "$29.99" },
  { name: "Party Wear", image: "Image/fashionable-girl-red.jpg", price: "$69.99" },
  { name: "Evening Gown", image: "Image/young-woman-beautiful-yellow-dress.jpg", price: "$89.99" },
  { name: "Traditional Dress", image: "Image/woman-traditional-dress.jpg", price: "$39.99" }
];

const WomensPage = () => {
  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
          Women's Full Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {womensItems.map((item, index) => (
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

export default WomensPage;
