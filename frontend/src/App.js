import './App.css';
import Header from './component/header/header'
import Footer from './component/footer/footer'
import Copy from './component/footer/copyright'
import Product from './component/productGrid/product'

function App() {
  return (
    <div className="App">
      <Header />
      <Product />
      <Footer />
      <Copy />
    </div>
  );
}

export default App;
