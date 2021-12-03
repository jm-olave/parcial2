import React, { useState, useEffect } from 'react';

export const Report = () => {
  const [products, setProducts] = useState([]);

  return (
    <section id='report'>
      <div className='report-container'>
        <h1>Unidades en inventario</h1>
        <p>Show here the graph</p>
      </div>
    </section>
  );
};
