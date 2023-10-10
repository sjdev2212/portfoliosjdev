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
        
          <h2 className='modal-title'>Socorros Mutuos</h2>

        <p className='modal-paragraph'>This React application has been exclusively designed for the Socorros Mutuos Association in Argentina. Serving as a comprehensive static service page, it offers affiliates a centralized platform to access a wealth of information and stay updated on all the latest news and developments pertaining to the Socorros Mutuos Association. Whether you are a member or supporter, this platform is your gateway to a treasure trove of resources and insights about the association. </p>
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
