import React from 'react';
import CartItem from './CartItem';

import { AiOutlineClose } from 'react-icons/ai';

function Drawer({ onClose, items = [] }) {
  return (
    <div className='overlay'>
      <div className='drawer'>
        <h2>Shopping</h2>
        <AiOutlineClose
          size={24}
          style={{ cursor: 'pointer' }}
          className='close'
          onClick={onClose}
        />
        <div className='cardItems'>
          {items.map(({ id, img, brand, title, price }) => (
            <CartItem
              key={id}
              img={img}
              brand={brand}
              title={title}
              price={price}
            />
          ))}
        </div>

        <div className='drawer-footer'>
          <button>Оформить заказ на 14 690 р.</button>
          <div className='drawer-footer-tax'>
            <span>Налог 5% : </span>
            <span className='price'> 734 p.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
