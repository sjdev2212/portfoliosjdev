import React from 'react'
import Carousel from "@itseasy21/react-elastic-carousel";
import { RiArrowGoBackFill } from "react-icons/ri";
import streetOne from './images/Streets1.png'
import streetTwo from './images/Street2.png'
import streetThree from './images/Street3.png'

const StreetNames = (
    {
        activeStreet,
        setActiveStreet
    }
) => {
    const handleActiveStreet = () => {
        setActiveStreet(!activeStreet);
    }
  return (
    <>
    <div className="task-content">
      <div className="task-content-upper">
        <h2>Calles de Buenos Aires</h2>
        <p>

        My Next.js app allows users to explore the history behind street names in Buenos Aires. By searching for any street, users can discover the stories behind its name, as well as learn which neighborhood it belongs to. The app provides an engaging way to connect with the rich cultural and historical heritage of the city, making it easy to explore Buenos Aires from a new perspective.
        </p>
        <div className="neon-text">
          Built with Next.js, HTML, CSS, MongoDB, deployed on Vercel
         
        </div>
      </div>
      <div className="task-content-downer">
        <div className="carousel-task">
          <Carousel itemsToShow={1}>
            <img className="task-img" src={streetOne} alt="first streets" />
            <img className="task-img" src={streetTwo} alt="second streets" />
            <img className="task-img" src={streetThree} alt="third streers" />
        

          </Carousel>
        </div>
        <div className="task-btns">
          <a
            href="https://nextjs-sjdev2212s-projects.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="btn"
            style={{marginBottom: '2vw'}}
          >
            See Live
          </a>

          <div  onClick={handleActiveStreet}  className="btn">
            <RiArrowGoBackFill style={{fontSize: '1.5vw', marginTop: '0.4vw'}} className="back-icon"/>
          </div>
          <a
            href="https://github.com/sjdev2212/nextjs.git"
            target="_blank"
            rel="noreferrer"
            className="btn"
            style={{marginBottom: '2vw'}}
          >
            See Source
          </a>
        </div>
      </div>
    </div>
</>
  )
}

export default StreetNames