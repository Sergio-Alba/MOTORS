import { Route, Routes } from "react-router-dom";
import Home from '../page/home';
import Product from '../page/products';
import ProductDetail from '../page/product-detail';
import Cart from "../page/cart";
import Fav from "../page/fav";
import Login from "../page/login";
import About from "../page/about";
import Contact from "../page/contact" ;
import Checkout  from "../page/checkout";
import SuccesOrder   from "../page/successOrder";



function Router () {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Product/>}/>
      <Route path='/products/:productId' element={<ProductDetail/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/fav' element={<Fav/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/checkout' element={<Checkout/>}></Route>
      <Route path='/success-order' element={<SuccesOrder/>}></Route>
    </Routes>
  )
}

export default Router 
