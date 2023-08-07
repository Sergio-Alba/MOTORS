/* eslint-disable react/prop-types */
import './style.css'


const CartItem = ({onAddToCart,onDecreaseItem,onRemoveItem,id,name,image,price,quantity,stock,description})=>{
  return(
    <div className="cart-item">
              <div className="image-cart-container">
                <img className='cart-image' src={image} alt={name}/>
              </div>
              <div className="cart-content-container">
                <p className="cart-product-name">{name}</p>
                <p className="cart-product-description">{description}</p>
                <p className="cart-stock">{stock} stock</p>
                <p className="cart-quantity">Qty: {quantity}</p>
                <p className="cart-price">$ {price}</p>
                <div className="cart-action">
                  <button className='cart-btn-add  cart-btn' type="button"  onClick={()=>onAddToCart(id)}>➕</button>
                  <p className='cart-input'  > {quantity}</p>
                  <button className='cart-btn-decrease cart-btn' type="button" onClick={(()=>onDecreaseItem(id))}>➖</button>
                  <button className='cart-btn-remove ' type="button" onClick={()=>onRemoveItem(id)}><i className="bi bi-cart-x"></i></button>
                </div>
              </div>
            </div>
  )
}


export default CartItem