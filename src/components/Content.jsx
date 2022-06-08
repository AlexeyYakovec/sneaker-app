import React from 'react';
import Card from './Card';

const data = [
  {
    img: './assets/img/sneakers/air-force.jpg',
    brand: 'Nike',
    shoeType: 'sneaker',
    title: 'Air Force 1 High Crater',
    price: '17 490',
  },
  {
    img: './assets/img/sneakers/air-mada.jpg',
    brand: 'Nike',
    shoeType: 'sneaker',
    title: 'ACG Air Mada',
    price: '13 690',
  },
  {
    img: './assets/img/sneakers/air-mowabb.jpg',
    brand: 'Nike',
    shoeType: 'sneaker',
    title: 'ACG Air Mowabb',
    price: '15 690',
  },
  {
    img: './assets/img/sneakers/jogger.jpg',
    brand: 'Adidas original',
    shoeType: 'sneaker',
    title: 'Nite Jogger Winterized',
    price: '14 990',
  },
  {
    img: './assets/img/sneakers/ozrah.jpg',
    brand: 'Adidas original',
    shoeType: 'sneaker',
    title: 'Ozrah',
    price: '12 790',
  },
  {
    img: './assets/img/sneakers/ozzelia.jpg',
    brand: 'Adidas original',
    shoeType: 'sneaker',
    title: 'Ozelia',
    price: '10 490',
  },
];

function Content() {
  return (
    <div className='content'>
      <div className='content-header flex'>
        <h2>sneaker list</h2>
        <input placeholder='enter sneakers...' type='search' />
      </div>

      <div className='product-contenct'>
        {data.map(({}) => (
          <Card />
        ))}

        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Content;
