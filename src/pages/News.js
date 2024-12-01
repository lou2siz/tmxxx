import React from 'react';

const News = () => {
  const newsItems = [
    '11/15/2024: Tuscan Money Forms as a Missouri LLC.',
    "11/27/2024: Tuscan Money Distributes a Soundcloud Exclusive Song 'Frontseat - louie'",
    '12/1/2024: Passionfruit Media Partners with Tuscan Money For Strategic Litigation in California',
  ];

  return (
    <div className="content">
      <h1>News</h1>
      <ul className="news-list">
        {newsItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default News;
