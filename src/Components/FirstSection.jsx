import React from 'react';
import { Link } from "react-router-dom"; // ✅ Import Link from react-router-dom

const categories = [
  {
    title: "Women's Collection",
    link: "/womens",
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
    link: "/mens",
    items: [
      { name: "Formal Suit", image: "Image/Formal Suit.jpg", price: "$199.99" },
      { name: "Casual Jacket", image: "Image/Casual Jacket.jpg", price: "$89.99" },
      { name: "Sportswear", image: "Image/Sportswear.jpg", price: "$59.99" },
      { name: "Winter Coat", image: "Image/Winter Coat.jpg", price: "$129.99" },
      { name: "Brown Pant", image: "Image/brown-pants.jpg", price: "$149.99" }
    ]
  },
  {
    title: "Accessories",
    link: "/accessories",
    items: [
      { name: "Men Accessories", image: "Image/Accessories_1.jpg", price: "$199.99" },
      { name: "Female Accessories", image: "Image/Accessories_for_female.jpg", price: "$89.99" },
      { name: "Makeup Accessories", image: "Image/Accessories_for_women.jpg", price: "$59.99" },
      { name: "GentalMen Accessories", image: "Image/Accessories_for _men_care.jpg", price: "$129.99" },
      { name: "Package Accessories", image: "Image/model-career-kit-still-life.jpg", price: "$149.99" }
    ]
  },
  {
    title: "Sales",
    link: "/sales",
    items: [
      { name: "Weakly Sales", image: "Image/Sales_1.jpg", price: "$199.99" },
      { name: "Monthly Sales", image: "Image/Sales_2.jpg", price: "$499.99" },
      { name: "Summer Sales", image: "Image/Sales_3.jpg", price: "$359.99" },
      { name: "Coming Soon", image: "Image/Coming  Soon.png", price: "Coming Soon" },
      { name: "Coming Soon", image: "Image/Coming  Soon.png", price: "Coming Soon" }
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
              {/* First 4 items */}
              {category.items.slice(0, 4).map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-all">
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

              {/* See More Card using <Link> */}
              <Link
                to={category.link}
                className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="w-full h-60 flex items-center justify-center bg-gray-200 rounded-lg">
                  <span className="text-xl font-bold text-blue-600">See More</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mt-4 text-center">
                  Explore Full Collection
                </h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FirstSection;
