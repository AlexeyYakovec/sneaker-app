import Content from './components/Content';
import Drawer from './components/Drawer';
import Header from './components/Header';

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

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Drawer />
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
