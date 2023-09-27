import React from 'react'
import ReactDom from 'react-dom'
import './Modal.css'
import * as AiIcons from 'react-icons/ai'
import budget from './images/budget.png'


  

export const Modal = ({open,  onClose}) => {
    if (!open) return null
  return ReactDom.createPortal (
    <>
    <section>

    <div className='over'/>
      <div className='modal-styles'>
        <div className='modal-content'>
          <div className='modal-header'>
        <AiIcons.AiOutlineClose className='exes' onClick={onClose}/>
          </div>
        
          <h2 className='modal-title'>Task Manager</h2>

        <p className='modal-paragraph'>"Introducing my comprehensive task manager application, 
        designed to keep you organized effortlessly. 
        This versatile tool empowers users to efficiently manage tasks, 
        bills, and appointments, all within a single platform. 
        With a sleek dark mode for enhanced visual comfort and a s
        eamless toggle between Spanish and English languages, 
        the app is tailored to suit diverse user preferences. 
        Rigorously tested with Jest, it's not just a task manager; 
        it's your reliable digital assistant for staying on top of life's demands."</p>
        <img className='modal-img'  src={budget} alt="project" />
        <div className='modal-btns'>
        <a href='https://budget-app.herokuapp.com/' target='blank' className='live-btn'>See Live</a>
        <a href='https://github.com/sj1978/budget-app.git' target='blank' className='source-btn'>See Source</a>
        </div>
          </div>
      
    
      </div>
    </section>
    </>, document.getElementById('modal')
  )
}
