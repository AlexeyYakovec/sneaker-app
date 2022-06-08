import React from 'react';
import Card from './Card';

function Content() {
  return (
    <div className='content'>
      <div className='content-header flex'>
        <h2>sneaker list</h2>
        <input placeholder='enter sneakers...' type='search' />
      </div>

      <div className='product-contenct'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Content;
