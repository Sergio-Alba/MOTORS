import { useState } from 'react';
import Input from '../../conponentes/search-fav-card/search/search';
import './style.css';

function Checkout  (){
    const [active,setActive ] =useState( false );


  const onChange = ()=>{
  }
  const onFocus = () => {
  }
  const onBlur = () => {
    setActive(true)
  }
  return(
    <div className="checkout-container">
      <h1 className='checkout-title'>Checkout</h1>
      <form className='checkout-form'>
        <section className="checkout-form-contain">
          <div className="checkout-form-input">
            <Input
            id='name'
            type
            placeholder='name'
            required={true}
            name='Name'
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            value='Name'
            active={active}
          />
          </div>
          
        </section>
      </form>
    </div>
  )
}
export default  Checkout;