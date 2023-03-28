import React from 'react'
import { Link } from 'react-router-dom'
import linked from './images/link.svg'
import github from './images/github1.svg'
import angel from './images/angellist.svg'
import twitter from './images/twitter.svg'
import javascript from './images/jascri.svg'
import rails from './images/ror.svg'
import react from './images/react.svg'
import ruby from './images/ruby.svg'
import redux from './images/redux.svg'
import data from './images/sql.svg'
import html from './images/html-5.svg'
import boot from './images/bootstrap.svg'
import css  from './images/css-3.svg'
import tailwind from './images/tailwindcss-icon.svg'
import postgresql from './images/post.svg'
import git from './images/git-icon.svg'
import netlify from './images/netlify.svg'
import gitcat from './images/gitcat.svg'

import './About.css'

export const About = () => {
  return (
    <main className="about">
      <section className="about-section">
        <div className="logos">
          <img
            className="techs-mov floating"
            src={javascript}
            alt="javascript icon"
          />
          <img className="techs-mov floating" src={react} alt="react icon" />
          <img className="techs-mov floating" src={rails} alt="rails icon" />
          <img className="techs-mov floating" src={ruby} alt="ruby icon" />
          <img className="techs-mov floating" src={redux} alt="redux icon" />
          <img
            className="floating"
            style={{ width: '11vw', height: '11vw' }}
            src={data}
            alt="data icon"
          />
        </div>
        <p className="text-about">
          Hi! My name is Anibal, I'm a full-stack software developer with a
          focus on the MERN stack, but still exploring other technologies and
          frameworks that catch my interest! if you're looking for a developer
          to add to your team, I'd love to hear from you!
        </p>

        <p className="text-about">Some of my skills are:</p>
        <p className="text-about">
          Front-end: JavaScript, React, Redux, HTML5, CSS3, Bootstrap, Tailwind.
          <img className="techs-desk" style={{width:"3vw"}} src={javascript} alt="javascript icon" />
          <img className="techs-desk" style={{width:"3.1vw"}} src={react} alt="react icon" />
          <img className="techs-desk" style={{width:"3vw"}} src={redux} alt="redux icon" />
          <img className='techs-desk'style={{width:"3vw", height:"3.4vw"}} src={html} alt='html icon' />
          <img className='techs-desk' style={{width:"3.8vw", height:"4.2vw" , paddingTop: "0.6vw"}} src={css} alt='css icon' />
          <img className='techs-desk' style={{width:"3.5vw",height: "5vw", paddingTop: '1.7vw'}}  src={boot} alt='bootstrap icon' />
          <img className='techs-desk'style={{width:"3.5vw" ,height: "5vw",paddingTop: '1.7vw' }}  src={tailwind} alt='tailwind icon' />
        </p>
        <p className="text-about">
          Back-End: Ruby on Rails, Postgresql.
          <img className='techs-desk' style={{width:"3vw"}}  src={ruby}  alt='ruby icon' />
          <img className='techs-desk'style={{width:"3vw"}}  src={rails} alt='rails icon' />
          <img className='techs-desk' style={{width:"3vw"}}  src={postgresql} alt='postgresql icon' />
        </p>
        <p className="text-about">
          Tools and methods: Git, Github, Netlify, Render.
          <img className='techs-desk' style={{width:"3vw"}}  src={git} alt='git icon' />
          <img className='techs-desk' style={{width:"3.6vw", height: '3.8vw' ,paddingTop: '0.5vw' }}  src={gitcat} alt='github icon' />
          <img className='techs-desk' style={{width:"3vw"}}  src={netlify} alt='netlify icon' />

        </p>
      </section>
      <div className="links-mobile">
        <ul className="icons">
          <li className="li-icons">
            <a
              href="https://www.linkedin.com/in/anibalamoroso/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="link" src={linked} alt="linkedin icon" />
            </a>
          </li>
          <li className="li-icons">
            <a
              href="https://github.com/sjdev2212"
              target="_blank"
              rel="noreferrer"
            >
              <img className="link" src={github} alt="github icon" />
            </a>
          </li>
          <li className="li-icons">
            <a
              href="https://angel.co/u/anibal-amoroso"
              target="_blank"
              rel="noreferrer"
            >
              <img className="link" src={angel} alt="Angel list icon" />
            </a>
          </li>
          <li className="li-icons">
            <a
              href="https://twitter.com/AmorosoAnibal"
              target="_blank"
              rel="noreferrer"
            >
              <img className="link" src={twitter} alt="Twitter icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="about-mobile">
        <Link to="/">
          <button className="btn-about">Back</button>
        </Link>
      </div>
    </main>
  )
}
