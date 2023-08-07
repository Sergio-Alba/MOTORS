import './App.css';
import { CartProvider } from './conponentes/context/cart-context';
import Header from './conponentes/header';
import CartFavLogin from './conponentes/search-fav-card/cart-fav';
import Router from './navigation';
import Footer from './conponentes/footer';

function App() {
  return (
    <div>
      <CartProvider>
        <Header logo ="MOTORS"/>
        <CartFavLogin/>
        <Router/>
        <Footer/>
      </CartProvider>
    </div>
  )
}

export default App
