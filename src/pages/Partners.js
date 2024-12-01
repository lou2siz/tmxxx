import React from 'react';
import './Partners.css'; // Create this file for Partners-specific styles

const Partners = () => {
  const partners = [
    { name: 'Soundcloud', image: '/Soundcloud.jpg' },
    { name: 'Passionfruit Media', image: '/PassionfruitMedia.jpg' },
    { name: 'California Government', image: '/CaliforniaGovernment.jpg' },
    { name: 'Universal Music', image: '/UniversalMusic.jpg' },
  ];

  return (
    <div className="partners">
      <h1>Partners</h1>
      <div className="partners-list">
        {partners.map((partner, index) => (
          <div className="partner" key={index}>
            <img src={partner.image} alt={partner.name} />
            <p>{partner.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
