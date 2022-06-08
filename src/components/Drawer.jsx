import React from 'react';

import { AiOutlineDelete } from 'react-icons/ai';

import sneaker from '../assets/img/sneakers/air-force.jpg';

function Drawer() {
  return (
    <div className='overlay'>
      <div className='drawer'>
        <h2>Shopping</h2>
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
          <AiOutlineDelete size={24} className='icon' />
        </div>
      </div>
    </div>
  );
}

export default Drawer;
