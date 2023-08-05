
import Input from '../../conponentes/search-fav-card/search/search';
import './style.css';
import { useForm } from '../../hooks/useForm';


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
  const [formState, inputHandler,clearInputs, inputFocus,inputBlur] = useForm(initialState);

  const onChange = (event)=>{
    const { name, value} = event.target
    inputHandler({name,value})
  }

  const onFocus = ({name}) => {
    inputFocus({name})
  }

  const onBlur = ({name}) => {
    inputBlur({name})
  }


  const onSubmit = (event)=>{
    event.preventDefault()
    console.log('formState',formState)
    // clearInputs({formState})
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