import './style.css'
import { CartContext } from '../../conponentes/context/cart-context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
  

const Fav = ()=>{
  const navigate = useNavigate()
  const{id, cart,onAddToCart, onRemoveItem,getTotalItemQuantity}=useContext(CartContext)
  return(
    <div className="cart-container" >
      {history.length > 2 ? (<button onClick={()=>navigate(-1)} className='back-btn'>«</button>)
        : null}
        <h2 className="cart-header">Fav</h2>
        <div className="cart-content">
          {cart.length === 0 && <h3>Fav is empty</h3>}
          {cart.length > 0 && cart.map((product)=> (
            <div key={product.id} className="cart-item">
              <div className="image-cart-container">
                <img className='cart-image' src={product.image} alt={product.name}/>
              </div>
              <div className="cart-content-container">
                <p className="cart-product-name">{product.name}</p>
                <p className="cart-product-description">{product.description}</p>
                <p className="cart-stock">{product.stock} stock</p>
                <p className="cart-quantity">Qty: {product.quantity}</p>
                <p className="cart-price">$ {product.price}</p>
                <div className="cart-action-fav">
                  <button className='card-btn'onClick={()=>onAddToCart(id)}><i className="bi bi-cart-plus"></i> </button>
                  <button className=' card-btn ' type="button" onClick={()=>onRemoveItem(product.id)}><i className="bi bi-cart-x"></i></button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <section className='cart-footer'>
          <p className='cart-total'  >Total Items Fav: {getTotalItemQuantity()}</p>
        </section>
    </div>
  )
}

export default Fav