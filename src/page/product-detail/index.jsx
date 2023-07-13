import './style.css'
import Details from '../../conponentes/products/details'

const ProductDetail = () =>{
  return(
    <>
      <div className="header-detail-container">
        <button className='back-btn'>«</button>
        <h2 className="title-products-details">Products details</h2>
      </div>
      {/* <Details {...productDetails} /> */}
    </>
  )
}


export default ProductDetail