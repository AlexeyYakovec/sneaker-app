import Content from './components/Content';
import Drawer from './components/Drawer';
import Header from './components/Header';

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
