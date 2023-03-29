import  { useRef } from 'react';
import {useNavigate } from 'react-router';
import {Link} from 'react-router-dom'
import emailjs from '@emailjs/browser';
import toast, {Toaster}  from 'react-hot-toast';
import mail from './images/mail.svg';
import './Contact.css'




export const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();
  const mailSuccess = () => {
    toast.success('Email sent successfully! I will get back to you as soon as possible.');
    setTimeout(() => {
      navigate('/');
    }
    , 3000);
  }
  const sendEmail = (e) => {
    e.preventDefault();
   let variant = document.getElementById('vari')
    if (form.current.user_name.value === '' || form.current.user_email.value === '' || form.current.message.value === '') {
      toast.error('Please fill all the fields');
      return;
    }
   emailjs.sendForm('service_yyhugbz', 'template_t0z9cfi', form.current, 'vvsATdb4z4kkoYGOa')
      .then((result) => {
          console.log(result.text);
          if (result.text === 'OK') {
        variant.setAttribute('class', 'mail-gone')
            mailSuccess();
           
            form.current.reset();

          }
      }, (error) => {
          console.log(error.text);

      });
  };

  return (
   <section className='contact'>
      <Toaster 
      position="top-center"
      reverseOrder={false}
      autoClose={6000}
      toastOptions={{
        style:{
          background: '#363636',
          borderRadius : '3%',
          color: 'whitesmoke',
          height: '15vw', 
          
        }
      }}
      className="tosti"/>
      <form className='contact-form' ref={form} onSubmit={sendEmail} >
      <label>Name</label>
      <input className='inputs' type="text" name="user_name" />
      <label>Email</label>
      <input className='inputs' type="email" name="user_email" />
      <label>Message</label>
      <textarea className='text-area' name="message" />
      <input className='button' type="submit" value="Send" />
      <img id='vari'  src={mail} alt='mail icon' />
    </form>
<Link to='/' className='back'>Back</Link>
   </section>
  )
}
