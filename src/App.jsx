/* eslint-disable react/jsx-key */
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Header from './conponentes/header';
import Home from './page/home';
import Product from './page/products';
import ProductDetail from './page/product-detail';
import Contact from './page/contact';
import About from './page/about';

function App() {
  return (
    <div>
      <Header logo ="MOTORS"/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Product/>}/>
          <Route path='/products/:productId' element={<ProductDetail/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
    </div>
  )
}

export default App
