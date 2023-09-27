import { useState } from 'react'
import {Modal} from './Modal'
import { ModalProject2 } from './ModalProject2'
import { ModalProject3 } from './ModalProject3'
import { ModalProject4 } from './ModalProject4'
import Carousel from '@itseasy21/react-elastic-carousel'

import './Content.css'
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
import nety from './images/netlify.svg'
import  css  from './images/css-3.svg'
import node  from './images/nodejs.svg'
import mongo from './images/mongodb.svg'
import jest from './images/jest.svg'
import task1 from './images/task-1.png'
import task2 from './images/task-2.png'
import loginLight from './images/login-light.png'
import loginDark from './images/login-dark.png'

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
    <div className='carousel' >
    <Carousel itemsToShow={1}>
    <img className='projects-img' src={task1} alt="first pic task" />
    <img className='projects-img' src={task2} alt="second pic task" />
    <img className='projects-img' src={loginLight} alt="login light" />
    <img className='projects-img' src={loginDark} alt="login dark" />
</Carousel>
    </div>
    <div>
    <h2 className='project-title mob'>Task Manager</h2>

    <p className='modal-paragraph'>Introducing my comprehensive task manager application, 
        designed to keep you organized effortlessly. 
        This versatile tool empowers users to efficiently manage tasks, 
        bills, and appointments, all within a single platform. 
        With a sleek dark mode for enhanced visual comfort and a s
        eamless toggle between Spanish and English languages, 
        the app is tailored to suit diverse user preferences. 
        Rigorously tested with Jest, it's not just a task manager; 
        it's your reliable digital assistant for staying on top of life's demands.</p>
      
       </div>
    <div>
  
    <p className='built'>Built with : </p>
    <div className='content-container'>
    <img   style={
      {
        marginTop: '5px',
      }
    } src={js} alt="javascript" />
    <img  src={html} alt="html" />
    <img  src={css} alt="css" />
    <img  src={nety} alt="netlify" />
    <img style={
      {
        width: '80px',
        height: '80px',
        paddingBottom: '10px'
      }
    } src={node} alt="node" />
    <img  style={
      {
        width: '75px',
        height: '68px',
        backgroundColor: 'grey',
        borderRadius: '15px'
        
      }
    } src={ax} alt="axios" />
    <img  src={react} alt="react" />
    <img style={
      {
        width: '100px',
        height: '100px',
        paddingBottom : '50px'

      }
    }
     src={mongo} alt="mongo" />
    <img style={
      {
        width: '80px',
        height: '80px',
        paddingBottom : '30px',
        fontWeight: 'bold'}
    } src={jest} alt="jest" />
    </div>
   
  
    
    </div>
  
    <div className='btn-container'>
    <a href='https://shimmering-buttercream-92b1e0.netlify.app/'  target="_blank" className='btn'  >See Live</a>
    <a href='https://github.com/sjdev2212/taskmng.git' target="_blank" className='btn'  >See Source</a>
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
