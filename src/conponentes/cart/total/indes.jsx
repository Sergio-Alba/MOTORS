/* eslint-disable react/prop-types */
import './style.css'


const Total = ({onHandleCheckout, total, totalItemQuantity ,isCart})=>{
  return(
    <section className='cart-footer'>
      <p className='cart-total'  >Total Items: {totalItemQuantity}</p>
      <p className='cart-total'>Total: $ {total}</p>
      { isCart? <button className='cart-checkout' onClick={onHandleCheckout}><i className="bi bi-cart-check"></i> Checkout</button> : null}
    </section>
  )
}

export default Total