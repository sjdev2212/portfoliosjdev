import React from 'react'
import socorrosFirstHome from './images/first-home.png'
import socorrosSecondHome from './images/second-home.png'
import socorrosContact from './images/contacto.png'
import socorrosFooter from './images/footer.png'
import socorrosInst from './images/institucional.png'
import socorrosInst2 from './images/institucional-2.png'
import socorrosUrgencias  from './images/urgencias.png'
import socorrosPagos  from './images/pagos.png'
import Carousel from "@itseasy21/react-elastic-carousel";
 

const Socorros = ({activeSocorros,setActiveSocorros}) => {

  const handleActiveSocorros = () => {
    setActiveSocorros(!activeSocorros);
  }
  return (
    <>
        <div className="task-content">
          <div className="task-content-upper">
            <h2>Socorros Mutuos</h2>
            <p>
            This React application has been exclusively designed for the 
    Socorros Mutuos Association in Argentina. 
    Serving as a comprehensive static service page, 
    it offers affiliates a centralized platform to access a wealth 
    of information and stay updated on all the latest news and developments pertaining to the Socorros 
    Mutuos Association. Whether you are a member or supporter, 
    this platform is your gateway to a treasure trove of resources and 
    insights about the association.
            </p>
            <div className="neon-text">
              Built with React, HTML, CSS, and JavaScript. Deployed on Cpannel
             
            </div>
          </div>
          <div className="task-content-downer">
            <div className="carousel-task">
              <Carousel itemsToShow={1}>
                <img className="task-img" src={socorrosFirstHome} alt="first home" />
                <img className="task-img" src={socorrosSecondHome} alt="second home" />
                <img className="task-img" src={socorrosContact} alt="contac" />
                <img className="task-img" src={socorrosFooter} alt="footer" />
                <img className="task-img" src={socorrosInst} alt="inst" />
                <img className="task-img" src={socorrosInst2} alt="inst2" />
                <img className="task-img" src={socorrosUrgencias} alt="urgencias" />
                <img className="task-img" src={socorrosPagos} alt="pagos" />
              </Carousel>
            </div>
            <div className="task-btns">
              <a
                href="https://socorrosmutuos.com.ar/"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                See Live
              </a>

              <image  onClick={handleActiveSocorros}  className="btn">
                Go Back
              </image>
              <a
                href="https://github.com/sjdev2212/socorros-mutuos.git"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                See Source
              </a>
            </div>
          </div>
        </div>
    </>
  )
}

export default Socorros