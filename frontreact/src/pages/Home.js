import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { FormattedMessage } from 'react-intl';
export const Home = ({ searchKey }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/api/products?q=" + searchKey)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, [searchKey]);

  return (
    <section id="home">
      <div className="home-container">
        <FormattedMessage id = "gallery" />
        <div className="home-card">
          {products.map((item) => {
            return (
              <div className="card">
                <Card
                  name={item.name}
                  picture={item.picture}
                  price={item.price}
                  isActive={item.isActive}
                ></Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
