import React, { useState, useEffect } from 'react';

//libraries
import axios from 'axios';

// components
import Drawer from './components/Drawer';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpen, setCardOpen] = useState(false);

  useEffect(() => {
    // fetch('https://62a1c3cacd2e8da9b0f9dd01.mockapi.io/items')
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((json) => {
    //     setItems(json);
    //   });

    axios
      .get('https://62a1c3cacd2e8da9b0f9dd01.mockapi.io/items')
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      });
    axios
      .get('https://62a1c3cacd2e8da9b0f9dd01.mockapi.io/cart')
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://62a1c3cacd2e8da9b0f9dd01.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
    // setCartItems([...cartItems, obj]);
  };

  const onChangeSearchInput = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  const onRemoveItem = (id) => {
    // axios.delete(`https://62a1c3cacd2e8da9b0f9dd01.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    console.log(id);
  };
  return (
    <div className='App'>
      <div className='container'>
        {cartOpen ? (
          <Drawer
            items={cartItems}
            onClose={() => setCardOpen(false)}
            onRemove={onRemoveItem}
          />
        ) : null}
        <Header onClickCart={() => setCardOpen(true)} />
        {/* content */}
        <div className='content'>
          <div className='content-header flex'>
            <h2>
              {searchValue ? `Search by: '${searchValue} ' ` : 'All sneakers'}
            </h2>
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder='enter sneakers...'
              type='search'
            />
          </div>
          <div className='product-contenct'>
            {items
              .filter((item) =>
                item.title.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map(({ img, brand, shoeType, title, price, id }) => (
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
