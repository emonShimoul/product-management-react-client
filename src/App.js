
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AddProduct from './components/AddProduct/AddProduct';
import Products from './components/Products/Products';
import UpdateUser from './components/UpdateUser/UpdateUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/products" element={<Products></Products>} />
          <Route path="/addproducts" element={<AddProduct></AddProduct>} />
          <Route path='/updateuser/:id' element={<UpdateUser></UpdateUser>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
