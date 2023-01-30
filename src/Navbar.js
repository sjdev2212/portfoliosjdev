import {Link} from 'react-router-dom'
import { useState } from 'react'
import { SidebarData } from './SidebarData'
import './Navbar.css';
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import { IconContext } from 'react-icons';
import linked from './images/link.svg'
import github from './images/github1.svg'
import angel from './images/angellist.svg'
import twitter from './images/twitter.svg'



const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
      console.log (sidebar)
        setSidebar(!sidebar);
    }
  return (
    <>
          <IconContext.Provider value={{ color: 'whitesmoke', marginTop: '2vw' }}>
    <div className="navbar">

<Link to='#' className='menu-bars' >
        <FaIcons.FaBars  onClick={showSidebar} />
      </Link>     
      <div className='icons'>
        <ul className='icons'>
          <li className='li-icons'>
            <a href='https://www.linkedin.com/in/anibalamoroso/' target="_blank" rel="noreferrer" >
          <img  className="links" src={linked} alt="linkedin icon" />
          </a >
          </li>
          <li className='li-icons'>
            <a href='https://github.com/sjdev2212' target="_blank" rel="noreferrer" >
          <img  className="github" src={github} alt="github icon" />
          </a >
          </li>
          <li className='li-icons'>
            <a href='https://angel.co/u/anibal-amoroso' target="_blank" rel="noreferrer" >
          <img  className="angel" src={angel} alt="Angel list icon" />
          </a >
          </li>
          <li className='li-icons'>
            <a href='https://twitter.com/AmorosoAnibal' target="_blank" rel="noreferrer" >
          <img  className="angel" src={twitter} alt="Twitter icon" />
          </a >
          </li>
        </ul>
        </div>        
    </div>


     <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items'  onClick={showSidebar}>
        <li className='navbar-toggle'>
          <Link to='#' className='menu-bars'>
            <AiIcons.AiOutlineClose/>
          </Link>
        </li>


        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path} className='nav-text'>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        }
        )}
</ul>

</nav>
</IconContext.Provider>
   </>
  )
}

export default Navbar