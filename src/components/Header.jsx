import React from 'react';

import logo from '../assets/img/high-sneaker-svgrepo-com.svg';

import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';

function Header() {
  return (
    <div className='header'>
      <div className='header__logo'>
        <a href='/'>
          <img src={logo} alt='' />
        </a>
        <div className='header__logo-title'>
          <h3>React sneakers</h3>
          <p>sneaker store</p>
        </div>
      </div>

      <div className='header__actions'>
        <div className='price-block'>
          <AiOutlineShoppingCart size={28} className='icon' />
          <p className='header__actions-price'>1205 p.</p>
        </div>
        <AiOutlineUser size={28} className='icon' />
      </div>
    </div>
  );
}

export default Header;
