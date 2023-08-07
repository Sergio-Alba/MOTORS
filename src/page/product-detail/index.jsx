import './style.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useFech } from '../../hooks/useFech';
import { API_URLS } from '../../constants';
import Details from '../../conponentes/details'
import Loader from '../../conponentes/loader';
import { useContext } from 'react';
import { CartContext } from '../../conponentes/context/cart-context';

function  ProductDetail(){
  const {productId} = useParams();
  const navigate = useNavigate();
  const {onAddToCart}= useContext(CartContext)
  const urlProductDetail = `${API_URLS.PRODUCTS.url}/${productId}`;
  const history = window.history;

  console.log(history);
  const {data , loading, error} = useFech(urlProductDetail,  API_URLS.PRODUCTS.config);

  return(
    <>
      <div className="header-detail-container">
        {history.length > 2 ? (<button onClick={()=>navigate(-1)} className='back-btn'>«</button>)
        : null}
        <h2 className="title-products-details">Products details</h2>
      </div>
      {loading && <Loader/>}
      {error && <h2>Error de carga</h2> }
      <Details {...data } onAddToCart={onAddToCart}/>
    </>
  )
}


export default ProductDetail