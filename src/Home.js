import React from 'react'
import './Home.css'
import cara from './images/caron.jpeg'
import { motion } from 'framer-motion'



export const Home = () => {
  return (
    <main className='main'>
      <section className='home-container'>
      <div>  
      <motion.img initial={{ y: "100%" }}
  animate={{ y: "calc(15vw - 50%)"  , rotate: 360, scale: 0.98 }} className='caripela' src={cara} alt="caripela" >
      </motion.img>
      </div>
        <div>
      <h1 className='nombre'>Anibal Amoroso</h1>
      
      <div  className="typing-demo dev">
      Full-Stack Developer
    </div>
      </div>
      <div className="paragraph">
          I can help you build a product , feature or website.
           Look through some of my work and experience! If you like what you see and have a project
          you need coded, do not hesitate to contact me.
        </div>
      </section>

    </main>
  )
}
