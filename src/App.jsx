/* eslint-disable react/jsx-key */
import './App.css';
import Header from './conponentes/header';
import Cart from './conponentes/search-fav-card/cart-fav';
import {Route, Routes} from 'react-router-dom';
import Home from './page/home';
import ProductDetail from './page/product-detail';

function App() {
  return (
    <div>
      <Header logo ="MOTORS"/>
      <Cart/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products/:productId' element={<ProductDetail/>}></Route>
        </Routes>
    </div>
  )
}

export default App
