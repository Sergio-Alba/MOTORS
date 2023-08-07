import './style.css'
import images from '../../assets/images'

const Contact = ()=>{
  return(
    <div className="contact">
      <div className="contact-container">
        <section className="contact-section">
          <h3 className="contact--h3">
              Nuestra Ubicación
          </h3>
          <ul>
              <li className="contact--list"><a href="" className="contact--item">Av. Cielo lindo N-5001</a></li>
              <li className="contact--list"><a href="" className="contact--item">MotosImport@gmail.com</a></li>
              <li className="contact--list"><a href="" className="contact--item">+11165523</a></li>
          </ul>
        </section>
        <section className="contact-container-map">
          <img className='map-contact' src={images.mapa} alt="" />
        </section>
        <section className="contact-section">
          <h3 className="contact--h3">
              Contactanos por nuestras redes 
          </h3>
          <ul>
              <li className="contact--list">
                  <a href="" className="contact--item"><i className="bi bi-facebook"></i>Facebook</a>
              </li>
              <li className="contact--list">
                  <a href="" className="contact--item"><i className="bi bi-instagram"></i>Instagram</a>
              </li>
              
          </ul>
        </section>
      </div>
      
    </div>
  )
}
export default Contact;