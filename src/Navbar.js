import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { useLocation } from 'react-router-dom';
import { IconContext } from "react-icons";
import linked from "./images/link.svg";
import github from "./images/github-icon.svg";
import newTwitter from "./images/twitter.jpeg";


const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
 
  const location = useLocation();
  console.log(location.pathname)
 
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  useEffect(() => {
    const showSideOnTime = () => {
      setTimeout(() => {
        setSidebar(true);
      }, 260);
    };
    showSideOnTime();
   
  });
 
  return (
    <section className="navbar-res">
      <IconContext.Provider value={{ color: "whitesmoke", marginTop: "2vw" }}>
        <div className="navbar">
         
          <div className="icons">
            <ul className="icons">
              <li className="li-icons">
                <a
                  href="https://www.linkedin.com/in/anibal-amoroso/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="links" src={linked} alt="linkedin icon" />
                </a>
              </li>
              <li className="li-icons">
                <a
                  href="https://github.com/sjdev2212"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="github" src={github} alt="github icon" />
                </a>
              </li>

              <li className="li-icons">
                <a
                  href="https://twitter.com/AmorosoAnibal"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="angel" src={newTwitter} alt="Twitter icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
    

            {SidebarData.map((item, index) => {
              return  (  
                <li key={index} className={ item.path ===  location.pathname ?  'disabled'  :  item.cName}>
                <Link to={item.path} className="nav-text">
              
                {item.icon}
             
                  <span className={item.title === location.pathname ?  'disabled' : "show"}>{item.title}</span>
                </Link>
              </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </section>
  );
};

export default Navbar;
