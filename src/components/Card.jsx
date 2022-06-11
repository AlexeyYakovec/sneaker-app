import React, { useState } from 'react';

import { IoMdAdd } from 'react-icons/io';
import { MdFavoriteBorder } from 'react-icons/md';
import { MdFavorite } from 'react-icons/md';

function Card({ img, brand, shoeType, title, price, onPlus, onFavorite }) {
  const [isFavorite, setIsFavorite] = useState(true);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    onFavorite({ shoeType, title, img, price, brand });
  };

  const onClickPlus = () => {
    onPlus({ shoeType, title, img, price, brand });
  };

  return (
    <div className='product-card' id={title.toLowerCase().replace(/ /g, '-')}>
      {isFavorite ? (
        <MdFavoriteBorder
          size={21}
          className='favorite-icon'
          onClick={handleFavorite}
        />
      ) : (
        <MdFavorite
          size={21}
          className='favorite-icon'
          onClick={handleFavorite}
        />
      )}
      <img src={img} alt='' className='product-card__img' />
      <div className='product-card__body'>
        {brand}
        <div className='product-card__title'>
          <span>{shoeType}</span>
          <span>{title}</span>
        </div>
        <div className='product-card__price'>
          <span>{price} p.</span>
          <button className='btn-border' onClick={onClickPlus}>
            <IoMdAdd size={15} className='btn-icon' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
