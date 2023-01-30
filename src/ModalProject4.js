import React from 'react'
import ReactDom from 'react-dom'
import './Modal.css'
import * as AiIcons from 'react-icons/ai'
import ozone from './images/ozone.png'

  

export const ModalProject4 = ({open4,  onClose}) => {
    if (!open4) return null
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

        <p className='modal-paragraph'>In this application the user can enter zip code and the app will retrieve the ozone level from the AIRNOW API.Created with Ruby on Rails.</p>
        <img className='modal-img'  src={ozone} alt="project" />
        <div className='modal-btns'>
        <a href='https://airozonequality.herokuapp.com/' target='blank' className='live-btn'>See Live</a>
        <a href='https://github.com/sj1978/ozone-rails-app.git' target='blank' className='source-btn'>See Source</a>
        </div>
          </div>
      
    
      </div>
    </section>
    </>, document.getElementById('modal')
  )
}
