import React from 'react';

//icons
import { AiOutlineDelete } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

function Drawer({ onClose, onRemove, items = [] }) {
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
          {items.map((obj) => (
            <div key={obj.id} className='cartItem'>
              <img src={obj.img} alt='' />
              <div className='cartItem-desc'>
                <div className='cartItem-desc-name'>
                  <span>{obj.brand}</span>
                  <span className='opacity'>{obj.title}</span>
                </div>
                <div className='cartItem-desc-price'>
                  <p>{obj.price} p.</p>
                </div>
              </div>
              <AiOutlineDelete
                onClick={() => onRemove(obj.id)}
                size={24}
                style={{ cursor: 'pointer', marginRight: '12px' }}
                className='cartItem-delete'
              />
            </div>
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
