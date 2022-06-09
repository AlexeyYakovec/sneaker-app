import React from 'react';
import Card from './Card';

function Content({ items }) {
  const onAddToCart = (obj) => {
    console.log(obj, 'onAddToCart');
  };

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
