import images from '../../assets/images'
import './style.css'

const About = ()=>{
  return (
    <div className="about-contaimer">
      <div className="about-title-container">
          <div className="about-description-page">
            <h1 className="about-title">Motors</h1>
            <h2 className="about-title-sec">Importations</h2>
            <p className="about-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia iure perspiciatis odio autem voluptatum ipsum ex veritatis? Tenetur consequatur necessitatibus vel nostrum sit voluptas dolorum maxime, quas adipisci, at beatae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus nisi exercitationem ab ullam eum deleniti doloribus culpa officia, possimus non repudiandae nemo inventore nostrum! Sunt, cum quam, repudiandae modi exercitationem animi ipsa aliquid doloremque facere soluta ab nisi sapiente vero! </p>
          </div>
        <section className="about-content-images">
          <img src={images.img11}  className='about-image-sec' alt="" width={420} />
        </section>
      </div>
    </div>
  )
}

export default About