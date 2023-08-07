import './style.css'

const Footer = ()=>{
  return(
    <div className="footer-container">
      <footer className="footer">
            <div className="footer__div">
                <section className="footer__section">
                    <h3 className="footer__section--h3">
                        Nuestra Ubicación
                    </h3>
                    <ul>
                        <li className="footer__section--list"><a href="" className="footer__section--item">Av. Cielo lindo N-5001</a></li>
                        <li className="footer__section--list"><a href="" className="footer__section--item">MotosImport@gmail.com</a></li>
                        <li className="footer__section--list"><a href="" className="footer__section--item">+11165523</a></li>
                    </ul>
                </section>
                <section className="footer__section">
                    <h3 className="footer__section--h3">
                        Tienda
                    </h3>
                    <ul>
                        <li className="footer__section--list"><a href="" className="footer__section--item">kawasaki</a></li>
                        <li className="footer__section--list"><a href="" className="footer__section--item">Suzuki</a></li>
                        <li className="footer__section--list"><a href="" className="footer__section--item">Yahamaa</a></li>
                        <li className="footer__section--list"><a href="" className="footer__section--item">ktm</a></li>
                        <li className="footer__section--list"><a href="" className="footer__section--item">Honda</a></li>
                    </ul>
                </section>
                <section className="footer__section">
                    <h3 className="footer__section--h3">
                        Atencion al cliente
                    </h3>
                    <ul>
                        <li className="footer__section--list"><a href="" className="footer__section--item">Contactanos</a></li>
                        <li className="footer__section--list"><a href="" className="footer__section--item">reportar un problema</a></li>
                    </ul>
                </section>
                <section className="footer__section">
                    <h3 className="footer__section--h3">
                        Nuestras Redes
                    </h3>
                    <ul>
                        <li className="footer__section--list">
                            <a href="" className="footer__section--item"><i className="bi bi-facebook"></i>Facebook</a>
                        </li>
                        <li className="footer__section--list">
                            <a href="" className="footer__section--item"><i className="bi bi-instagram"></i>Instagram</a>
                        </li>
                        <li className="footer__section--list">
                            <a href="" className="footer__section--item"><i className="bi bi-youtube"></i>Youtube</a>
                        </li>
                        <li className="footer__section--list">
                            <a href="" className="footer__section--item"><i className="bi bi-tiktok"></i>Tiktok</a>
                        </li>
                    </ul>
                </section>
            </div>
            <small className="footer__p--derechos">
                &copy : 2023 @SergioAlba.- Todos los derechos reservados
            </small>
        </footer>
    </div>
  )
}

export default Footer