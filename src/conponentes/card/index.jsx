/* eslint-disable react/prop-types */
import './style.css'

const Card = ({id, image, name, category, description, price, stock,onAddToCart, onShowDetails})=>{
    return(
        <div className="container-card">
          <div key={id} className='card' onClick={() => onShowDetails(id)}>
            <img className='card-image' src={image} alt={name}/>
            <div className="card-contend">
              <h1 className='card-name'>{name}</h1>
              <p className="card-category">{category}</p>
              <p className="card-description">{description}</p>
              <p className="card-price">$ {price}</p>
              <p className="card-stock">{stock} stock</p>
            </div>
          </div>
          <div className="card-contain-btn">
            <button className='card-btn'onClick={()=>onAddToCart(id)}> add to card </button>
          </div>
          
        </div>
    )
}

export default Card