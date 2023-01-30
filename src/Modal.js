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
        
          <h2 className='modal-title'>Expense Tracker</h2>

        <p className='modal-paragraph'>Expense tracker is an application where the user creates an account and can keep track of their expenses. It is a mobile app. Created with Ruby on Rails.</p>
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
