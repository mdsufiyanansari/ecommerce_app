import React from 'react';
import cardsData from '../json/crad.json';
import { Link } from 'react-router-dom';

const Card = ({ image, title, description, buttonText, price, link }) => {
  return (
    <div className="bg-white shadow-md   mt-10 rounded-2xl overflow-hidden hover:scale-105 transition-all">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        {price && <p className="text-cyan-500 font-semibold mb-2">{price}</p>}
        <Link
          to={link}
          className="inline-block mt-2 bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-cyan-600"
        >
          {buttonText ? buttonText : 'View Product'}
        </Link>
      </div>
    </div>
  );
};

const CardsSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {/* Home Page Cards */}
      {cardsData.homePageCards.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          title={card.title}
          description={card.description}
          buttonText={card.buttonText}
          link={card.link}
        />
      ))}

      {/* E-commerce Product Cards */}
      {cardsData.ecommerceCards.map((product) => (
        <Card
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          link={product.link}
        />
      ))}
    </div>
  );
};

export default CardsSection;
