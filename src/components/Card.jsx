import React from 'react';

import { GrFormAdd } from 'react-icons/gr';

import sneaker from '../assets/img/sneakers/air-force.jpg';

function Card() {
  return (
    <div className='product-card'>
      <img src={sneaker} alt='' className='product-card__img' />
      <div className='product-card__body'>
        'Nike'
        <div className='product-card__title'>
          <span>Sneaker</span>
          <span>Air Force 1 High Crater</span>
        </div>
        <div className='product-card__price'>
          <span>17005 p.</span>
          <button className='btn-border'>
            <GrFormAdd size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
