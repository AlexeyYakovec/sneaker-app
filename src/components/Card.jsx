import React from 'react';

import { IoMdAdd } from 'react-icons/io';
import { MdFavoriteBorder } from 'react-icons/md';
import { MdFavorite } from 'react-icons/md';

import sneaker from '../assets/img/sneakers/air-force.jpg';

function Card() {
  return (
    <div className='product-card'>
      <MdFavoriteBorder size={21} className='favorite-icon' />
      {/* <MdFavorite size={21} className='favorite-icon' /> */}
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
            <IoMdAdd size={15} className='btn-icon' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
