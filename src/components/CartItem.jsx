import React from 'react';

import { AiOutlineDelete } from 'react-icons/ai';

import sneaker from '../assets/img/sneakers/air-force.jpg';

function CartItem() {
  return (
    <div className='cartItem'>
      <img src={sneaker} alt='' />
      <div className='cartItem-desc'>
        <div className='cartItem-desc-name'>
          <span>'Nike'</span>
          <span className='opacity'>Air Force 1 High Crater</span>
        </div>
        <div className='cartItem-desc-price'>
          <span>17005 p.</span>
        </div>
      </div>
      <AiOutlineDelete
        size={24}
        style={{ cursor: 'pointer' }}
        className='cartItem-delete'
      />
    </div>
  );
}

export default CartItem;
