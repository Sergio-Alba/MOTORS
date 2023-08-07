/* eslint-disable react/prop-types */
import './style.css'

const CategoryItem = ({onSelecteCategory,type,name})=>{
  return(
    <button  onClick={onSelecteCategory}type={type} className='category-container'>
            <p className="category-name">{name}</p>
    </button>
  )
}
export default CategoryItem