/* eslint-disable react/jsx-key */
import './style.css'
import { useState} from 'react';
import Search from '../../conponentes/search-fav-card/search/search';
import Card from '../../conponentes/card';
import { useFech } from '../../hooks/useFech';
import {API_URLS} from '../../constants/index'
import Loader from '../../conponentes/loader';
import { useNavigate } from 'react-router-dom';
import Slider from '../../conponentes/slider';
import CartFavLogin from '../../conponentes/search-fav-card/cart-fav';


function Product() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [active,setActive ] =useState( false );
  const [isFiltered, setIsFiltered] = useState(false);
  const [productFiltered,setProductFiltered] = useState([])
  const [cart, setCart] = useState([]);
  


  const {data: products , loading : loadingProducts, error : errorProducts} = useFech(API_URLS.PRODUCTS.url,  API_URLS.PRODUCTS.config);
  const {data: categories , loading: loadingCategories , error : errorCategories} = useFech(API_URLS.PRODUCTS.url, API_URLS.PRODUCTS.CONFIG)


  const filterSearch = (query)=>{
    let updateProductList = [...products];
    updateProductList= updateProductList.filter((item)=>{
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    })
    setProductFiltered(updateProductList);
  }

  const onFilter = (name)=>{
    setIsFiltered(true);
    const productsByCategory = products.filter((product)=>product.category === name)
    setProductFiltered(productsByCategory);
  }

  const onChange = (event)=>{
    const value = event.target.value;
    setSearch(value);
    filterSearch(value)
  }
  const onFocus = () => {
    setActive(true);
  }
  const onBlur = () => {
    setActive(false);
  }
  const onShowDetails = (id)=>{
    navigate(`/products/${id}`)
  }
  // console.log({loading,error,products})
  
  const uniqueCategory = new Set(categories.map((item)=>item.category))


  const onAddToCart = (id)=>{
    const item = products.find((product)=>product.id ===id);
    if(cart?.find((product)=>product.id === id)?.quantity ===Number(item.stock)) return;
    if(cart?.length ===0){
      setCart([{...item,quantity:1}])
    }
    if(cart?.length > 0 && !cart?.find((product)=>product.id === id)){
      setCart([...cart,{...item, quantity:1}])
    }
    if (cart?.length > 0 && cart?.find((product)=>product.id === id)){
      setCart((currentCart)=>{
        return currentCart.map((product)=>{
          if(product.id === id){
            return{ ...product, quantity: product.quantity + 1}
          }else{
            return product
          }
        })
      })
    }
  }

  return (
    <div>
      <div className="contain-search-cart">
        <Search
        id='search'
        type='text'
        placeholder='Buscar...'
        required={false}
        name='Buscar'
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        active={active}
        value={search}
        />
        <CartFavLogin/>
      </div>
      <div className="cart-container" >
        <h2 className="title-cart">Cart</h2>
        <div className="cart-content">
          {cart.length === 0 && <h3>Cart is empty</h3>}
          {cart.length > 0 && cart.map((product)=> (
            <div className="cart-item">
              <div className="image-cart-container">
                <img className='cart-image' src={product.image} alt={product.name}/>
              </div>
              <div className="cart-content-container">
                <p className="cart-product-name">{product.name}</p>
                <p className="cart-stock">{product.stock} stock</p>
                <p className="cart-quantity">Qty: {product.quantity}</p>
                <p className="cart-price">$ {product.price}</p>
                <div className="cart-action">
                  <button className='cart-btn-add' type="button">+</button>
                  <button className='cart-btn-decrease' type="button">-</button>
                  <button className='cart-btn-reduce' type="button">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="category-contain">
        {loadingCategories && <Loader/>}
        {errorCategories && <h2>{errorCategories}</h2>}
        <Slider>
          <button onClick={()=> setIsFiltered(false) }type="button" className='category-container'><p className="category-name">all</p></button>
          {Array.from(uniqueCategory).map((category) => (
              <button key={category.id}  onClick={()=>onFilter(category)} className="category-container">
                <p className="category-name">{category}</p>
              </button> 
            ))
          }
        </Slider>
      </div>
        <h2 className="title-products">Products</h2>
        <div className="card-contain">
          {loadingProducts && <Loader/> }
          {errorProducts && <h2> {errorProducts} </h2>}
          {search.length > 0 && productFiltered.length === 0 && <h2>Product not found</h2>}
          {
            isFiltered ?
              productFiltered.map((product) => (
              <Card key={product.id} {...product} onShowDetails={onShowDetails} onAddToCart={onAddToCart}/>
            )) : (
              products.map((product)=>(
              <Card key={product.id} {...product} onShowDetails={onShowDetails} onAddToCart={onAddToCart}/>
            ))
            )
          }
        </div>
    </div>
  )
}


export default Product
