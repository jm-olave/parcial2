import React, { useEffect, useState } from 'react';

export const Home = ({ searchKey }) => {
  const [products, setProducts] = useState([]);

  return (
    <section id='home'>
      <div className='home-container'>
        <h1>Gallery</h1>
        <div className='home-card'>
          <p>Show here product cards</p>
        </div>
      </div>
    </section>
  );
};
