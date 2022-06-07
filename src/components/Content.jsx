import React from 'react';
import Card from './Card';

function Content() {
  return (
    <div className='content'>
      <h2>sneaker list</h2>
      <div className='product-contenct'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Content;
