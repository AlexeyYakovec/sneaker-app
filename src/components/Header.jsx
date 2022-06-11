import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/img/high-sneaker-svgrepo-com.svg';

import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { BsFillBookmarkHeartFill } from 'react-icons/bs';

function Header({ onClickCart }) {
  return (
    <div className='header'>
      <Link to='/'>
        <div className='header__logo'>
          <img src={logo} alt='' />
          <div className='header__logo-title'>
            <h3>React sneakers</h3>
            <p>sneaker store</p>
          </div>
        </div>
      </Link>

      <div className='header__actions'>
        <div className='price-block' onClick={onClickCart}>
          <AiOutlineShoppingCart size={28} className='icon' />
          <p className='header__actions-price'>1205 p.</p>
        </div>
        <Link to='/favorites'>
          <BsFillBookmarkHeartFill size={28} className='bookmarks icon' />
        </Link>

        <AiOutlineUser size={28} className='icon' />
      </div>
    </div>
  );
}

export default Header;
