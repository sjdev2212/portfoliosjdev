import React from 'react'
import scraperOne from './images/scraper-1.png'
import scraperTwo from './images/scraper-2.png'
import scraperThree from './images/scraper-3.png'
import scraperFour from './images/scraper-4.png'
import scraperFive from './images/scraper-5.png'


import Carousel from "@itseasy21/react-elastic-carousel";
 

const Scraper = (
    {activeScraper,
    setActiveScraper,
    }
) => {

    const handleActiveScraper = () => {
        setActiveScraper(!activeScraper);
      }
  return (
    <>
        <div className="task-content">
          <div className="task-content-upper">
            <h2>Web Scraper</h2>
            <p>
            This full-stack web application, built with Ruby on Rails, allows users to log in securely using the Devise gem. Once logged in, users can upload a CSV file containing a list of words. The app performs a Google search for each word, retrieving the number of search results, AdWords count, the number of links, and the HTML code of the page or cache. It then presents this data in an organized and user-friendly interface, making it easy for users to analyze search engine data directly from the app
            </p>
            <div className="neon-text">
              Built with Ruby on Rails, Devise, and PostgreSQL.
             
            </div>
          </div>
          <div className="task-content-downer">
            <div className="carousel-task">
              <Carousel itemsToShow={1}>
                <img className="task-img" src={scraperOne} alt="scraper home" />
                <img className="task-img" src={scraperTwo} alt="second scrap" />
                <img className="task-img" src={scraperThree} alt="third scrap" />
                <img className="task-img" src={scraperFour} alt="fourth scrap" />
                <img className="task-img" src={scraperFive} alt="fifth scrap" />
       
              </Carousel>
            </div>
            <div className="task-btns">
              <a
                href="https://socorrosmutuos.com.ar/"
                target="_blank"
                rel="noreferrer"
                className="btn"
                style={{display: "none"}}
              >
                See Live
              </a>

              <image
              onClick={handleActiveScraper}
              className="btn">
                
                Go Back
              </image>
              <a
                href="https://github.com/sjdev2212/scraper.git"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                See Source
              </a>
            </div>
          </div>
        </div>
    </>
  )
}

export default Scraper