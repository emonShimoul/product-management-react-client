
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/products" element={<Products></Products>} />
          <Route path="/addproducts" element={<AddProduct></AddProduct>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
