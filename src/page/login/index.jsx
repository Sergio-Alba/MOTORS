import { useContext, useEffect } from 'react';
import Input from '../../conponentes/search-fav-card/search/search'
import { useForm } from '../../hooks/useForm';
import { useQuery } from '../../hooks/useQuery';
import { firebaseServices } from '../../services/firebase';
import './style.css'
import { CartContext } from '../../conponentes/context/cart-context';
import { useLocation, useNavigate } from 'react-router-dom';


const initialState = {
  name:{value:'', error:'',hasError:true,active:false,name:'name'},
  surname:{value:'', error:'',hasError:true,active:false,name:'surname'},
  document:{value:'', error:'',hasError:true,active:false,name:'document'},
  email:{value:'', error:'',hasError:true,active:false,name:'email'},
  phone:{value:'', error:'',hasError:true,active:false,name:'phone'},
  address:{value:'', error:'',hasError:true,active:false,name:'address'},
  postalCode:{value:'', error:'',hasError:true,active:false,name:'postalCode'},
  password:{value:'', error:'',hasError:true,active:false,name:'password'},
  isFormValid:false,
}

const Login = ()=>{
  const {cart, total, setCart} = useContext(CartContext);
    const [formState, inputHandler, inputFocus, inputBlur,clearInputs] = useForm(initialState)
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

    const onSubmit = async(event)=>{
      event.preventDefault()
      onHandlerOrder()
          const { orderId } = await  onHandlerOrder();
          clearInputs({ formState })
          navigate('/success-order', { state: { orderId: orderId.id } })
    }

  return (
    <div className="login">
      <h1>Login</h1>
      <section className="login-form-contain">
        <form onSubmit={onSubmit} className='login-form'>
          <section className="login-form-contain">
            
              <div className="login-form-input">
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
              <div className="login-form-input">
                <Input
                id='password'
                type='password'
                name='password'
                placeholder='***********'
                label='Password'
                required={true}
                onFocus={()=>onFocus({name:'password'})}
                onBlur={()=>onBlur({name:'password'})}
                onChange={onChange}
                active={formState.password.active}
                error={formState.password.error}
                hasError={formState.password.hasError}
                />
            </div>
            <button disabled={!formState.isFormValid}  type='submit' className='btn-login' >Enviar</button>
          </section>
        </form>
      </section>
    </div>
  )
}

export default Login