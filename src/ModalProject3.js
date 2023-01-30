import React from 'react'
import ReactDom from 'react-dom'
import './Modal.css'
import * as AiIcons from 'react-icons/ai'
import reserv from './images/reservify.png'

  

export const ModalProject3 = ({open3,  onClose}) => {
    if (!open3) return null
  return ReactDom.createPortal (
    <>
    <section>

    <div className='over'/>
      <div className='modal-styles'>
        <div className='modal-content'>
          <div className='modal-header'>
        <AiIcons.AiOutlineClose className='exes' onClick={onClose}/>
          </div>
        
          <h2 className='modal-title'>Reservify</h2>

        <p className='modal-paragraph'>In this application the user can create an account and login to reserve a room in an hotel from a list of several countries.Created with React and Ruby on Rails.</p>
        <img className='modal-img'  src={reserv} alt="project" />
        <div className='modal-btns'>
        <a href='https://reservify.netlify.app/' target='blank' className='live-btn'>See Live</a>
        <a href='https://github.com/Yothu/reservify-back-end.git' target='blank' className='source-btn'>See Source</a>
        </div>
          </div>
      
    
      </div>
    </section>
    </>, document.getElementById('modal')
  )
}
