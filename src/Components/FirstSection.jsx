import React from 'react';

const categories = [
  {
    title: "Women's Collection",
    items: [
      { name: "Elegant Dress", image: "Image/high-fashion-look-glamor-stylish-sexy-smiling-beautiful-young-woman-model-summer-black-hipster-dress.jpg", price: "$49.99" },
      { name: "Casual Outfit", image: "Image/young-woman-beautiful-red-dress.jpg", price: "$29.99" },
      { name: "Party Wear", image: "Image/fashionable-girl-red.jpg", price: "$69.99" },
      { name: "Evening Gown", image: "Image/young-woman-beautiful-yellow-dress.jpg", price: "$89.99" },
      { name: "Traditional Dress", image: "Image/woman-traditional-dress.jpg", price: "$39.99" }
    ]
  },
  {
    title: "Men's Collection",
    items: [
      { name: "Formal Suit", image: "Image/Formal Suit.jpg", price: "$199.99" },
      { name: "Casual Jacket", image: "Image/Casual Jacket.jpg", price: "$89.99" },
      { name: "Sportswear", image: "Image/Sportswear.jpg", price: "$59.99" },
      { name: "Winter Coat", image: "Image/Winter Coat.jpg", price: "$129.99" },
      { name: "Brown Pant", image: "Image/man-wearing-brown-pants-close-up.jpg.crdownload", price: "$149.99" }
    ]
  },
  {
    title: "Accessories",
    items: [
      { name: "Formal Suit", image: "/Images/men-suit.png", price: "$199.99" },
      { name: "Casual Jacket", image: "/Images/men-casual.png", price: "$89.99" },
      { name: "Sportswear", image: "/Images/men-sports.png", price: "$59.99" },
      { name: "Winter Coat", image: "/Images/men-winter.png", price: "$129.99" },
      { name: "Leather Jacket", image: "/Images/men-leather.png", price: "$149.99" }
    ]
  },
  {
    title: "Sales",
    items: [
      { name: "Formal Suit", image: "/Images/men-suit.png", price: "$199.99" },
      { name: "Casual Jacket", image: "/Images/men-casual.png", price: "$89.99" },
      { name: "Sportswear", image: "/Images/men-sports.png", price: "$59.99" },
      { name: "Winter Coat", image: "/Images/men-winter.png", price: "$129.99" },
      { name: "Leather Jacket", image: "/Images/men-leather.png", price: "$149.99" }
    ]
  }

];

const FirstSection = () => {
  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {categories.map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
              {category.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {category.items.map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-all">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-60 object-cover rounded-lg"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mt-4">
                    {item.name}
                  </h3>
                  <p className="text-lg text-gray-600 mt-2">{item.price}</p> {/* Price added here */}
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                    Explore Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FirstSection;
