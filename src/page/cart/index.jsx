import { useContext } from 'react';
import './style.css';
import { CartContext } from '../../conponentes/context/cart-context';
import { useNavigate } from 'react-router-dom';
import { firebaseServices } from '../../services/firebase';


const Cart = ()=>{
  const navigate = useNavigate()
  const{ cart, onAddToCart,onDecreaseItem,onRemoveItem,total,getTotalItemQuantity}=useContext(CartContext)
  const onHandlerCreateCart = async()=>{
    const newCart ={
      buyer: {
        id:1,
      },
      createdAt:new Date(),
      total:total,
      status:'Pending',
    }
    const cartId = await firebaseServices.createCart(newCart)

    return cartId
  }
  const onHandleCheckout = async()=>{
    const cartId = await onHandlerCreateCart()
    navigate('/checkout',{state: {cartId}})
  }
  return(
    <div className="cart-container" >
        <h2 className="cart-header">Cart</h2>
        <div className="cart-content">
          {cart.length === 0 && <h3>Cart is empty</h3>}
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
                <div className="cart-action">
                  <button className='cart-btn-add  cart-btn' type="button"  onClick={()=>onAddToCart(product.id)}>➕</button>
                  <p className='cart-input'  > {product.quantity}</p>
                  <button className='cart-btn-decrease cart-btn' type="button" onClick={(()=>onDecreaseItem(product.id))}>➖</button>
                  <button className='cart-btn-remove ' type="button" onClick={()=>onRemoveItem(product.id)}><i className="bi bi-cart-x"></i></button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <section className='cart-footer'>
          <p className='cart-total'  >Total Items: {getTotalItemQuantity()}</p>
          <p className='cart-total'>Total: $ {total}</p>

          <button className='cart-checkout' onClick={onHandleCheckout}><i className="bi bi-cart-check"></i> Checkout</button>
        </section>
    </div>
  )
}

export default Cart