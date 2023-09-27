import React from 'react'
import ReactDom from 'react-dom'
import './Modal.css'
import * as AiIcons from 'react-icons/ai'
import covid from './images/covid.png'

  

export const ModalProject2 = ({open2,  onClose}) => {
    if (!open2) return null
  return ReactDom.createPortal (
    <>
    <section>

    <div className='over'/>
      <div className='modal-styles'>
        <div className='modal-content'>
          <div className='modal-header'>
        <AiIcons.AiOutlineClose className='exes' onClick={onClose}/>
          </div>
        
          <h2 className='modal-title'>Covid in South Americaaaaaaaa</h2>

        <p className='modal-paragraph'>This is an application that gives the numbers for covid in South America. The user chooses a country and the app retrieves the information from an external API. Created with React Redux'.</p>
        <img className='modal-img'  src={covid} alt="project" />
        <div className='modal-btns'>
        <a href='https://react-redux-capstone-sj1978.herokuapp.com/' target='blank' className='live-btn'>See Live</a>
        <a href='https://github.com/sj1978/react-redux-capstone.git'target='blank' className='source-btn'>See Source</a>
        </div>
          </div>
      
    
      </div>
    </section>
    </>, document.getElementById('modal')
  )
}
