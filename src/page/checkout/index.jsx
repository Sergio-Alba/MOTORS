/* eslint-disable no-unused-vars */

import Input from '../../conponentes/search-fav-card/search/search';
import './style.css';
import { useForm } from '../../hooks/useForm';
import { useContext, useEffect } from 'react';
import { CartContext } from '../../conponentes/context/cart-context';
import { useLocation, useNavigate } from 'react-router-dom';
import { firebaseServices } from '../../services/firebase';
import { useQuery } from '../../hooks/useQuery';


const initialState = {
  name:{value:'', error:'',hasError:true,active:false,name:'name'},
  surname:{value:'', error:'',hasError:true,active:false,name:'surname'},
  document:{value:'', error:'',hasError:true,active:false,name:'document'},
  email:{value:'', error:'',hasError:true,active:false,name:'email'},
  phone:{value:'', error:'',hasError:true,active:false,name:'phone'},
  address:{value:'', error:'',hasError:true,active:false,name:'address'},
  postalCode:{value:'', error:'',hasError:true,active:false,name:'postalCode'},
  isFormValid:false,
}

function Checkout  (){
    const {cart, total, setCart, onAddToCart, onDecreaseItem, onRemoveItem, getTotalItemQuantity} = useContext(CartContext);
    const [formState, inputHandler, inputFocus, inputBlur, clearInputs] = useForm(initialState)
    const { state } = useLocation();
    const navigate = useNavigate();
    let query = useQuery();

    useEffect(() => {
        const cartId = query.get("cartId") 
        
        if(query.get("cartId")) {
            const getCart = async () => {
                const cart = await firebaseServices.getCartById(cartId)
                return cart
            }
            getCart()
                .then((cart) => {
                    setCart(cart.items)
                })
                .catch((error) => {
                    console.log({error})
                })
        }

    }, [query, setCart])


    const onChange = (event) => {
        const { name, value } = event.target;
        inputHandler({ name, value })
    }

    const onFocus = ({ name }) => {
        inputFocus({ name })
    }

    const onBlur = ({ name }) => {
        inputBlur({ name })
    }


  const onHandlerOrder = async () => {
    const newOrder = {
        buyer: {
            name: formState.name.value,
            surname: formState.surname.value,
            document: formState.document.value,
            email: formState.email.value,
            phone: formState.phone.value,
            address: formState.address.value,
            postalCode: formState.postalCode.value,
        },
        createdAt: new Date(),
        items: cart,
        payment: {
            currency: 'USD',
            method: 'CASH',
            type: 'CASH'
        },
        seller: {
            id: 1,
            name: 'Pedrito',
            phone: '123456789',
            email: 'pedrito@taskmanager.com'
        },
        shipping: {
            deliverDate: new Date() + 7,
            trackingNumber: '123456ff227aa89',
            type: 'DELIVERY'
        },
        total: total
    }

    const orderId = await firebaseServices.createOrder(newOrder)
    await firebaseServices.updateCart(state.cartId)

    return {
        orderId,
    }
}

  const onSubmit = async(event)=>{
    event.preventDefault()
    onHandlerOrder()
        const { orderId } = await  onHandlerOrder();
        clearInputs({ formState })
        navigate('/success-order', { state: { orderId: orderId.id } })
  }

  return(
    <div className="checkout-container">
      <h1 className='checkout-title'>Checkout</h1>
      <form onSubmit={onSubmit} className='checkout-form'>
        <section className="checkout-form-contain">
          <div className="checkout-form-input">
            <Input
            id='name'
            name='name'
            placeholder='Juan Jose'
            label='Nombre'
            required={true}
            onFocus={()=>onFocus({name:'name'})}
            onBlur={()=>onBlur({name:'name'})}
            onChange={onChange}
            active={formState.name.active}
            error={formState.name.error}
            hasError={formState.name.hasError}
          />
          </div>
          <div className="checkout-form-input">
            <Input
            id='surname'
            name='surname'
            placeholder='Smith'
            required={true}
            label='Apellido'
            onFocus={()=>onFocus({name:'surname'})}
            onBlur={()=>onBlur({name:'surname'})}
            onChange={onChange}
            active={formState.surname.active}
            error={formState.surname.error}
            hasError={formState.surname.hasError}
          />
          </div>
          <div className="checkout-form-input">
            <Input
            id='document'
            name='document'
            placeholder='13569870'
            required={true}
            label='Documento de Identificacion'
            onFocus={()=>onFocus({name:'document'})}
            onBlur={()=>onBlur({name:'document'})}
            onChange={onChange}
            active={formState.document.active}
            error={formState.document.error}
            hasError={formState.document.hasError}
          />
          </div>
          <div className="checkout-form-input">
            <Input
            id='phone'
            name='phone'
            placeholder='+57 787293899'
            required={true}
            label='Telefono'
            onFocus={()=>onFocus({name:'phone'})}
            onBlur={()=>onBlur({name:'phone'})}
            onChange={onChange}
            active={formState.phone.active}
            error={formState.phone.error}
            hasError={formState.phone.hasError}
          />
          </div>
          <div className="checkout-form-input">
            <Input
            id='email'
            name='email'
            placeholder='juanPocajonta@gmail'
            required={true}
            label='Email'
            onFocus={()=>onFocus({name:'email'})}
            onBlur={()=>onBlur({name:'email'})}
            onChange={onChange}
            active={formState.email.active}
            error={formState.email.error}
            hasError={formState.email.hasError}
          />
          </div>
          <div className="checkout-form-input">
            <Input
            id='address'
            name='address'
            placeholder='Miami-5483'
            required={true}
            label='Direccion'
            onFocus={()=>onFocus({name:'address'})}
            onBlur={()=>onBlur({name:'address'})}
            onChange={onChange}
            active={formState.address.active}
            error={formState.address.error}
            hasError={formState.address.hasError}
          />
          </div>
          <div className="checkout-form-input">
            <Input
            id='postalCode'
            name='postalCode'
            placeholder='0032'
            required={true}
            label='Codigo Postal'
            onFocus={()=>onFocus({name:'postalCode'})}
            onBlur={()=>onBlur({name:'postalCode'})}
            onChange={onChange}
            active={formState.postalCode.active}
            error={formState.postalCode.error}
            hasError={formState.postalCode.hasError}
          />
          
          </div>
          <button disabled={!formState.isFormValid} type='submit' className='btn-checkout' >checkout</button>
        </section>
        
      </form>
    </div>
  )
}
export default  Checkout;