import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

//libraries
import axios from 'axios';

// components
import Drawer from './components/Drawer';
import Header from './components/Header';
import Card from './components/Card';

//pages
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpen, setCardOpen] = useState(false);

  useEffect(() => {
    axios
      .get('https://62a1c3cacd2e8da9b0f9dd01.mockapi.io/items')
      .then((res) => {
        // console.log(res.data);
        setItems(res.data);
      });
    axios
      .get('https://62a1c3cacd2e8da9b0f9dd01.mockapi.io/cart')
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  const onAddToCart = (obj) => {
    axios.post('https://62a1c3cacd2e8da9b0f9dd01.mockapi.io/cart', obj);
    setCartItems([...cartItems, obj]);
  };
  const onAddToFavorite = (obj) => {
    axios.post('https://62a1c3cacd2e8da9b0f9dd01.mockapi.io/favorites', obj);
    setFavorites((prev) => [...prev, obj]);
  };
  const onRemoveItem = (id) => {
    axios.delete(`https://62a1c3cacd2e8da9b0f9dd01.mockapi.io/cart/${id}`);
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

        <Routes>
          <Route
            path='/'
            element={
              <Home
                onChangeSearchInput={onChangeSearchInput}
                onAddToCart={onAddToCart}
                onAddToFavorite={onAddToFavorite}
                items={items}
                searchValue={searchValue}
              />
            }
          />
          <Route
            path='/favorites'
            element={
              <Favorites
                searchValue={searchValue}
                onChangeSearchInput={onChangeSearchInput}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
