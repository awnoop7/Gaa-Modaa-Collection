import React from "react";

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Our Services</h1>
      
      <div className="space-y-8 text-gray-700 text-lg max-w-3xl mx-auto">
        <p>
          At Gaamodaa, we offer a wide range of digital services designed to help you achieve your goals. From website development and digital marketing to content creation and tech consulting, our team is dedicated to delivering excellence.
        </p>

        <p>
          Our services include:
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>Custom website and app development</li>
          <li>SEO and digital marketing strategies</li>
          <li>Social media management</li>
          <li>Content creation and copywriting</li>
          <li>IT consulting and support</li>
        </ul>

        <p>
          We believe in tailored solutions to fit your unique needs and help your brand grow in the digital world.
        </p>
      </div>
    </section>
  );
};

export default Services;
