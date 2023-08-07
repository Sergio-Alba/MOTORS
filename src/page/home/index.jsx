import images from '../../assets/images'
import './style.css'


const Home = ()=>{
  
  return(
    <div className="home-contaimer">
      <section className="home-content">
          <img src={images.img4}  className='home-image-principal' alt="" width={420} />
      </section>
      <div className="home-description-container">
        <section className="home-content-images">
          <p className="description-images">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eum beatae ducimus fugiat assumenda voluptates deleniti veritatis eligendi. Minima, nihil!</p>
          <img src={images.img10}  className='home-image-sec' alt="" width={420} />
        </section>
        <section className="home-content-images">
        <p className="description-images"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ullam recusandae expedita deleniti id quam dolore sint perferendis laboriosam vel fugiat quibusdam in doloremque, laborum provident ex eius rerum quis ea quasi quidem corrupti nihil est et? Doloremque porro voluptate neque assumenda sed aliquid expedita dignissimos. Id ipsum rem inventore? Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            <img src={images.img3}  className='home-image-sec' alt="" width={420} />
        </section>
      </div>
      <div className="home-container-cart">
      
      </div>
      
    </div>
  )
}

export default Home