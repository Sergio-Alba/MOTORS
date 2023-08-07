import { useContext } from 'react';
import './style.css';
import { CartContext } from '../../conponentes/context/cart-context';
import { useNavigate } from 'react-router-dom';
import { firebaseServices } from '../../services/firebase';
import CartItem from '../../conponentes/cart/item';
import Total from '../../conponentes/cart/total/indes';


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
      {history.length > 1 ? (<button onClick={()=>navigate(-1)} className='back-btn'>«</button>)
        : null}
        <h2 className="cart-header">Cart</h2>
        <div className="cart-content">
          {cart.length === 0 && <h3>Cart is empty</h3>}
          {cart.length > 0 && cart.map((product)=> (
            <CartItem {...product} key={product.id} onAddToCart={onAddToCart} onDecreaseItem={onDecreaseItem} onRemoveItem={onRemoveItem}/>
            
          ))}
        </div>
        {
          cart?.length > 0 && (
            <Total isCart={true}  onHandleCheckout={onHandleCheckout} total={total} totalItemQuantity={getTotalItemQuantity()}/>
          )
        }
        
    </div>
  )
}

export default Cart