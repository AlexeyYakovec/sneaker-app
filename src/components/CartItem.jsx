import React from 'react';

import { AiOutlineDelete } from 'react-icons/ai';

import sneaker from '../assets/img/sneakers/air-force.jpg';

function CartItem({ id, img, brand, title, price }) {
  return (
    <div className='cartItem' key={id}>
      <img src={img} alt='' />
      <div className='cartItem-desc'>
        <div className='cartItem-desc-name'>
          <span>{brand}</span>
          <span className='opacity'>{title}</span>
        </div>
        <div className='cartItem-desc-price'>
          <p>{price} p.</p>
        </div>
      </div>
      <AiOutlineDelete
        size={24}
        style={{ cursor: 'pointer', marginRight: '12px' }}
        className='cartItem-delete'
      />
    </div>
  );
}

export default CartItem;
