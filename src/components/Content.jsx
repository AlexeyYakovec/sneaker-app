import React from 'react';
import Card from './Card';

function Content({ items, setCartItems, cartItems }) {
  const onAddToCart = (obj) => {
    // console.log(obj, 'onAddToCart');
    setCartItems((prev) => [...prev, obj]);
  };

  console.log(cartItems);

  return (
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
  );
}

export default Content;
