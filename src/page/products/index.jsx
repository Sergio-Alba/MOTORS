/* eslint-disable no-unused-vars */
import './style.css'
import { useEffect, useState, useContext} from 'react';
import { useFech } from '../../hooks/useFech';
import {API_URLS} from '../../constants/index'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../conponentes/context/cart-context';
import Card from '../../conponentes/card';
import Loader from '../../conponentes/loader';
import Slider from '../../conponentes/slider';
import CategoryItem from '../../conponentes/category/items/index'



function Product() {
  const navigate = useNavigate();
  const [isFiltered, setIsFiltered] = useState(false);
  const [productFiltered,setProductFiltered] = useState([])

  const {setProducts, products:productsContext, onAddToCart, cart} = useContext(CartContext)
  
//? TRAEMOS LAS UTILIDADES DE LA API 
  const {data: products , loading : loadingProducts, error : errorProducts} = useFech(API_URLS.PRODUCTS.url,  API_URLS.PRODUCTS.config);
  const {data: categories , loading: loadingCategories , error : errorCategories} = useFech(API_URLS.PRODUCTS.url, API_URLS.PRODUCTS.CONFIG)

  useEffect(()=>{
    if( products?.length > 0){
      setProducts(products);
    }
  },[products, setProducts])
  const onFilter = (name)=>{
    setIsFiltered(true);
    const productsByCategory = products.filter((product)=>product.category === name)
    setProductFiltered(productsByCategory);
  }
  //? MUESTRA LOS DETALLES DE UN PRODUCTO MEDIANTE SU ID Y NAVEGA HASTA DONDE SE ESCUENTRA LA PAGINA
  const onShowDetails = (id)=>{
    navigate(`/products/${id}`)
  }

  //?  REVISA QUE NO SE REPITAN LAS CATEGORIAS 
  const uniqueCategory = new Set(categories.map((item)=>item.category))
  return (
    <div>
      <div className="category-contain">
        {loadingCategories && <Loader/>}
        {errorCategories && <h2>{errorCategories}</h2>}
        <Slider>

          <CategoryItem name='all' onSelecteCategory={()=>setIsFiltered(false)} type='button'  />

          {Array.from(uniqueCategory).map((categorys) => (
                  <CategoryItem key={categorys} name={categorys} onSelecteCategory={ ()=>onFilter(categorys) }type='button'/>
          ))
          }       
        </Slider>
      </div>
        <h2 className="title-products">Products</h2>
        <div className="card-contain">
          {loadingProducts && <Loader/> }
          {errorProducts && <h2> {errorProducts} </h2>}
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
