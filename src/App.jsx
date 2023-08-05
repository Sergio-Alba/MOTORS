/* eslint-disable react/jsx-key */
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Header from './conponentes/header';
import Home from './page/home';
import Product from './page/products';
import ProductDetail from './page/product-detail';
import Contact from './page/contact';
import About from './page/about';
import { CartProvider } from './conponentes/context/cart-context';
import Cart from './page/cart';
import CartFavLogin from './conponentes/search-fav-card/cart-fav';
import Checkout from './page/checkout';

function App() {
  return (
    <div>
      <CartProvider>
        <Header logo ="MOTORS"/>
        <CartFavLogin/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Product/>}/>
            <Route path='/products/:productId' element={<ProductDetail/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
          </Routes>
      </CartProvider>
    </div>
  )
}

export default App
