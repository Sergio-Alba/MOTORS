/* eslint-disable react/prop-types */
import './style.css'

const Details = ({id, image, name, category, description, price, stock, onShowDetails})=>{
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
                <button className='details-card-btn'> add to card </button>
              </div>
            </div>
          
          </div>
    )
}

export default Details