import React, { useState, useEffect } from 'react';

import Drawer from './components/Drawer';
import Header from './components/Header';

import Card from './components/Card';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCardOpen] = useState(false);

  useEffect(() => {
    fetch('https://62a1c3cacd2e8da9b0f9dd01.mockapi.io/items')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    // console.log(obj, 'onAddToCart');
    setCartItems((prev) => [...prev, obj]);
  };

  return (
    <div className='App'>
      <div className='container'>
        {cartOpen ? (
          <Drawer items={cartItems} onClose={() => setCardOpen(false)} />
        ) : null}
        <Header onClickCart={() => setCardOpen(true)} />
        <div className='content'>
          <div className='content-header flex'>
            <h2>sneaker list</h2>
            <input placeholder='enter sneakers...' type='search' />
          </div>
          <div className='product-contenct'>
            {items.map(({ img, brand, shoeType, title, price, id }) => (
              <Card
                key={id}
                img={img}
                brand={brand}
                shoeType={shoeType}
                title={title}
                price={price}
                onFavorite={() => alert('on favorite')}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
