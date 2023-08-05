/* eslint-disable react/jsx-key */
import './style.css'
import { useEffect, useState, useContext} from 'react';
import Card from '../../conponentes/card';
import { useFech } from '../../hooks/useFech';
import {API_URLS} from '../../constants/index'
import Loader from '../../conponentes/loader';
import { useNavigate } from 'react-router-dom';
import Slider from '../../conponentes/slider';
import { CartContext } from '../../conponentes/context/cart-context';


function Product() {
  const navigate = useNavigate();
  // const [search, setSearch] = useState('');
  // const [active,setActive ] =useState( false );
  const [isFiltered, setIsFiltered] = useState(false);
  const [productFiltered,setProductFiltered] = useState([])

  // eslint-disable-next-line no-unused-vars
  const {setProducts, products:productsContext, onAddToCart, cart} = useContext(CartContext)
  

//? TRAEMOS LAS UTILIDADES DE LA API 
  const {data: products , loading : loadingProducts, error : errorProducts} = useFech(API_URLS.PRODUCTS.url,  API_URLS.PRODUCTS.config);
  const {data: categories , loading: loadingCategories , error : errorCategories} = useFech(API_URLS.PRODUCTS.url, API_URLS.PRODUCTS.CONFIG)

  useEffect(()=>{
    if( products?.length > 0){
      setProducts(products);
    }
  },[products, setProducts])

  // const filterSearch = (query)=>{
  //   let updateProductList = [...products];
  //   updateProductList= updateProductList.filter((item)=>{
  //     return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  //   })
  //   setProductFiltered(updateProductList);
  // }

  const onFilter = (name)=>{
    setIsFiltered(true);
    const productsByCategory = products.filter((product)=>product.category === name)
    setProductFiltered(productsByCategory);
  }

  // const onChange = (event)=>{
  //   const value = event.target.value;
  //   setSearch(value);
  //   filterSearch(value)
  // }
  // const onFocus = () => {
  //   setActive(true);
  // }
  // const onBlur = () => {
  //   setActive(false);
  // }
  //? MUESTRA LOS DETALLES DE UN PRODUCTO MEDIANTE SU ID Y NAVEGA HASTA DONDE SE ESCUENTRA LA PAGINA
  const onShowDetails = (id)=>{
    navigate(`/products/${id}`)
  }

  //?  REVISA QUE NO SE REPITAN LAS CATEGORIAS 
  const uniqueCategory = new Set(categories.map((item)=>item.category))
  return (
    <div>
      {/* <div className="contain-search-cart">
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
      </div> */}
      
      <div className="category-contain">
        {loadingCategories && <Loader/>}
        {errorCategories && <h2>{errorCategories}</h2>}
        <Slider>
          <button onClick={()=> setIsFiltered(false) }type="button" className='category-container'>
            <p className="category-name">all</p>
          </button>
          {Array.from(uniqueCategory).map((category) => (
              <button key={category}  onClick={()=>onFilter(category)} className="category-container">
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
          {/* {search.length > 0 && productFiltered.length === 0 && <h2>Product not found</h2>} */}
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
