import React, { useState, useEffect } from 'react';

import Content from './components/Content';
import Drawer from './components/Drawer';
import Header from './components/Header';

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

  console.log(items);
  return (
    <div className='App'>
      <div className='container'>
        {cartOpen ? (
          <Drawer items={items} onClose={() => setCardOpen(false)} />
        ) : null}
        <Header onClickCart={() => setCardOpen(true)} />
        <Content items={items} />
      </div>
    </div>
  );
}

export default App;
