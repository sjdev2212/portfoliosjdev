import React from 'react'
import './Home.css'
import cara from './images/carucha.jpg'
import {Link} from 'react-router-dom'
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
      <p className='paragraph'> 
      Career changer with a wealth of life experience and a strong sense of responsibility,
       now pursuing a passion for coding.
      </p>

    
      
     
      </section>
<section className='options'>
   <ul>
    <Link to='/projects'>
    <li> <button className="sm-btn">Projects</button></li>
    </Link>
    <Link to='/contact'>
    <li><button className="sm-btn"> Contact</button> </li>
    </Link>
    <Link to='/about'>
     <li><button className="sm-btn">About</button></li>
    </Link>
   </ul>
  </section>
  


    </main>
  )
}
