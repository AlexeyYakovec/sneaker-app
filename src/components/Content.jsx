import React from 'react';
import Card from './Card';

function Content({ items }) {
  return (
    <div className='content'>
      <div className='content-header flex'>
        <h2>sneaker list</h2>
        <input placeholder='enter sneakers...' type='search' />
      </div>

      <div className='product-contenct'>
        {items.map(({ id, img, brand, shoeType, title, price }) => (
          <Card
            key={id}
            img={img}
            brand={brand}
            shoeType={shoeType}
            title={title}
            price={price}
            onFavorite={() => alert('on favorite')}
          />
        ))}
      </div>
    </div>
  );
}

export default Content;
