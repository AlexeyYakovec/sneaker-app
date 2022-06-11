import React from 'react';

import Card from '../components/Card';

function Home({
  items,
  onChangeSearchInput,
  searchValue,
  onAddToCart,
  onAddToFavorite,
}) {
  return (
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
            item.brand.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map(({ img, brand, shoeType, title, price, id }) => (
            <Card
              key={id}
              img={img}
              brand={brand}
              shoeType={shoeType}
              title={title}
              price={price}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
