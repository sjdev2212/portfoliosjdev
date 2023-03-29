import { useState } from 'react'
import {Modal} from './Modal'
import { ModalProject2 } from './ModalProject2'
import { ModalProject3 } from './ModalProject3'
import { ModalProject4 } from './ModalProject4'
import './Content.css'
import budget from './images/budget.png'
import covid from './images/covid.png'
import reserv from './images/reservify.png'
import weather from './images/ozone.png'
import js from './images/javascript.svg'
import react from './images/react.svg'
import redux from './images/redux.svg'
import html from './images/html-5.svg'
import ax from './images/axios.svg'
import boot from './images/bootstrap.svg'
import ruby from './images/ruby.svg'
import rails from './images/rails.svg'
import post from './images/post.svg'
import hero from './images/hero.svg'
import nety from './images/netlify.svg'

export const Content = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)


  return (
    <main className='content'>
<h1 className='latest'>Latest Projects</h1>
<section className='projects'>
  <div className='project1-3'>
    <div>
    <img className='projects-img' src={budget} alt="expense tracker" />
    </div>
    <div>
    <h2 className='project-title mob'>Expense Tracker</h2>
    <p className='built'>Built with : </p>
    <div className='content-container'>
    <img className='ruby' src={ruby} alt="ruby" />
    <img className='rails' src={rails} alt="rails" />
    <img className='techs' src={post} alt="postgresql" />
    <img className='techs' src={html} alt="html" />
    <img className='techs' src={hero} alt="heroku" />
    <img className='techs' src={boot} alt="bootstrap" />
    </div>
    <div className='btn-container'>
    <button className='btn'  onClick={() => setIsOpen(true)}>See Project</button>
    </div>
    </div>
          
    </div>
    <div className='project2-4'>
    <div>
    <h2 className='project-title '>Reservify</h2>
    <p className='built'>Built with : </p>
    <div className='content-container'>
    <img className='ruby' src={ruby} alt="ruby" />
    <img className='rails' src={rails} alt="rails" />
    <img className='techs' src={post} alt="postgresql" />
    <img className='techs' src={html} alt="html" />
    <img className='techs' src={nety} alt="netlify" />
    <img className='techs' src={boot} alt="bootstrap" />
    </div>
    <div className='btn-container'>
    <button className='btn'  onClick={() => setIsOpen3(true)}>See Project</button>
    </div>
    </div>
    <div>
    <img className='projects-img-r'  src={reserv} alt="reservify" />
    </div>
            
    </div>
    <div className='project1-3'>
    <div>
    <img className='projects-img  third-img' src={covid} alt="covid app" />
    </div>
    <div>
    <h2 className='project-title third'>Covid Stats</h2>
    <p className='built'>Built with : </p>
    <div className='content-container'>
    <img className='techs' src={js} alt="javascript" />
    <img className='techs' src={react} alt="react" />
    <img className='techs' src={redux} alt="redux" />
    <img className='techs' src={html} alt="html" />
    <img className='techs' src={ax} alt="axios" />
    <img className='techs' src={boot} alt="bootstrap" />
    </div>
    <div className='btn-container'>
    <button className='btn'  onClick={() => setIsOpen2(true)}>See Project</button>
    </div>
    </div>
            
    </div>
    <div className='project2-4'>
      <div>
    <h2 className='project-title'>Ozone Quality</h2>
    <p className='built'>Built with : </p>
    <div className='content-container'>
    <img className='ruby' src={ruby} alt="ruby" />
    <img className='rails' src={rails} alt="rails" />
    <img className='techs' src={post} alt="postgresql" />
    <img className='techs' src={html} alt="html" />
    <img className='techs' src={hero} alt="netlify" />
    <img className='techs' src={boot} alt="bootstrap" />
    </div>
    <div className='btn-container'>
    <button className='btn'  onClick={() => setIsOpen4(true)}>See Project</button>
    </div>
 
    </div>  
    <div>
    <img className='projects-img-r' src={weather} alt="ozone app" />
    </div>
            
    </div>
  </section>
  <Modal open={isOpen} onClose={() => setIsOpen(false)}/>
  <ModalProject2 open2={isOpen2} onClose={() => setIsOpen2(false)}/>
  <ModalProject3 open3={isOpen3} onClose={() => setIsOpen3(false)}/>
  <ModalProject4 open4={isOpen4} onClose={() => setIsOpen4(false)}/>
</main>
  )
}
