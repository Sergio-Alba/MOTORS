/* eslint-disable react/jsx-key */
import './style.css'
import { useState} from 'react';
import Search from '../../conponentes/search-fav-card/search/search';
import Card from '../../conponentes/products/card';
import Details from '../../conponentes/products/details';
import { useFech } from '../../hooks/useFech';
import {API_URLS} from '../../constants/index'
import Loader from '../../conponentes/loader';


function Home() {
  const [search, setSearch] = useState('');
  const [active,setActive ] =useState( false );
  const [showDetails, setShowDetails] = useState(false);
  const [productDetails, setProductDetails] = useState(null);
  const [productFiltered,setProductFiltered] = useState([])


  const {data: products , loading, error} = useFech(API_URLS.PRODUCTS.url,  API_URLS.PRODUCTS.config);


  const filterSearch = (query)=>{
    let updateProductList = [...products];

    updateProductList= updateProductList.filter((item)=>{
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    })
    setProductFiltered(updateProductList);
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
    setShowDetails(true);
    const findProduct = products.find((product) => product.id == id);
    setProductDetails(findProduct);
  }
  console.log({loading,error,products})
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
      </div>
        {showDetails ?(
          
        ) : (
          <>
            <h2 className="title-products">Products</h2>
            <div className="card-contain">
              {loading && <Loader/> }
              {search.length > 0 && productFiltered.length === 0 && <h2>Product not found</h2>}
              {
                search.length > 0 ?
                  productFiltered.map((product) => (
                  <Card key={product.id} {...product} onShowDetails={onShowDetails}/>
                )) : (
                  products.map((product)=>(
                  <Card key={product.id} {...product} onShowDetails={onShowDetails}/>
                ))
                )
              }
            </div>
          </>
        )
      }
    </div>
  )
}

export default Home
