/* eslint-disable react/prop-types */
import './style.css'

const Details = ({id, image, name, category, description, price, stock,onAddToCart,onAddToFav})=>{
  
    return(
          <div  className='details-card' >
            <img className='details-card-image' src={image} alt={name}/>
            <div className="details-card-contend">
              <h1 className='details-card-name'>{name}</h1>
              <p className="details-card-category">{category}</p>
              <p className="details-card-description">{description}</p>
              <p className="details-card-price">$ {price}</p>
              <p className="details-card-stock">{stock} stock</p>
              <div className="details-card-contain-btn">
                <button className='card-btn'onClick={()=>onAddToCart(id)} ><i className="bi bi-cart-plus"></i> </button>
                <button className='card-btn btn-fav'onClick={()=>onAddToFav(id)}><i className="bi bi-star"></i> </button>
              </div>
            </div>
          </div>
    )
}

export default Details