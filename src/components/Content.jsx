import React from 'react';
import Card from './Card';

const data = [
  {
    id: 1,
    img: './sneakers/air-force.jpg',
    brand: 'Nike',
    shoeType: 'Sneaker',
    title: 'Air Force 1 High Crater',
    price: '17 490',
  },
  {
    id: 2,
    img: './sneakers/air-mada.jpg',
    brand: 'Nike',
    shoeType: 'Sneaker',
    title: 'ACG Air Mada',
    price: '13 690',
  },
  {
    id: 3,
    img: './sneakers/air-mowabb.jpg',
    brand: 'Nike',
    shoeType: 'Sneaker',
    title: 'ACG Air Mowabb',
    price: '15 690',
  },
  {
    id: 4,
    img: './sneakers/jogger.jpg',
    brand: 'Adidas original',
    shoeType: 'Sneaker',
    title: 'Nite Jogger Winterized',
    price: '14 990',
  },
  {
    id: 5,
    img: './sneakers/ozrah.jpg',
    brand: 'Adidas original',
    shoeType: 'Sneaker',
    title: 'Ozrah',
    price: '12 790',
  },
  {
    id: 6,
    img: './sneakers/ozzelia.jpg',
    brand: 'Adidas original',
    shoeType: 'Sneaker',
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
        {data.map(({ id, img, brand, shoeType, title, price }) => (
          <Card
            key={id}
            img={img}
            brand={brand}
            shoeType={shoeType}
            title={title}
            price={price}
          />
        ))}
      </div>
    </div>
  );
}

export default Content;
