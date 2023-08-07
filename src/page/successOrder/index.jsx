import { Link, useLocation } from 'react-router-dom'
import './style.css'
import images from '../../assets/images';

const SuccesOrder = ()=>{
  const location = useLocation();
  const {orderId} = location.state;
  
  return(
    <div className="succes-containet">
      
      <h1 className='succes-order'>Id orden:{orderId}</h1>

      <div className="alert-order">
        <section className="alert-container">
          <div className="alert-content-emoji"  >
            <img className='alert-gif' src={images.gif} alt="" />
          </div>
          <div className="alert-conten-description">
            <h1 className="description">felicidades por su compra</h1>
            <Link  to="/products/">
              <button  className='return-btn'>Seguir comprando</button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SuccesOrder
