import React from 'react';
import CartItem from './CartItem';

function Drawer() {
  return (
    <div className='overlay' style={{ display: 'none' }}>
      <div className='drawer'>
        <h2>Shopping</h2>
        <div className='cardItems'>
          <CartItem />
          <CartItem />
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
