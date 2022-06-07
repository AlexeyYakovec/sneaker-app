import React from 'react';

import sneaker from '../assets/img/sneakers/air-force.jpg';

function Card() {
  return (
    <div className='product-card'>
      <img src={sneaker} alt='' />
      <div className='product-card__body'>
        <div className='product-card__title'>
          'Nike'
          <span>Sneaker</span>
          <span>Air Force 1 High Crater</span>
        </div>
        <div className='product-card__price'></div>
      </div>
    </div>
  );
}

export default Card;
