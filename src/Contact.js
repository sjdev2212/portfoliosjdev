import React from 'react'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yyhugbz', 'template_t0z9cfi', form.current, 'vvsATdb4z4kkoYGOa')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
   <section className='contact'>
      <h1>Contact</h1>
      <form className='contact-form' ref={form} onSubmit={sendEmail} >
      <label>Name</label>
      <input className='inputs' type="text" name="user_name" />
      <label>Email</label>
      <input className='inputs' type="email" name="user_email" />
      <label>Message</label>
      <textarea className='text-area' name="message" />
      <input className='button' type="submit" value="Send" />
    </form>
   </section>
  )
}
