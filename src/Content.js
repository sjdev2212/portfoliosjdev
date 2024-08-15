import Carousel from "@itseasy21/react-elastic-carousel";
import "./Content.css";
import { useState } from "react";
import task1 from "./images/task-1.png";
import task2 from "./images/task-2.png";
import task3 from "./images/home-light.png";
import task4 from "./images/add-bill.png";
import task5 from "./images/add-task.png";
import task6 from "./images/calendar.png";
import loginLight from "./images/login-light.png";
import loginDark from "./images/login-dark.png";
import Socorros from "./Socorros";
import Scraper from "./Scraper";



export const Content = ({
  activeSocorros,
  activeScraper,
  setActiveSocorros,
  setActiveScraper,
}) => {
  const [activeTask, setActiveTask] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: smooth scrolling
    });
  };

  const handleActiveTask = () => {
    setActiveTask(!activeTask);
    scrollToTop();
  };
  const  handleActiveSocorros = () => {
    setActiveSocorros(!activeSocorros);
      scrollToTop();
  }

  const handleActiveScraper = () => {
    setActiveScraper(!activeScraper);
    scrollToTop();
  }

  return (
    <main className="content">
      <h1>Latest Projects</h1>
<section className="cards-container">
<div className="card" onClick={handleActiveTask}>
          <h2 className="title">Task Manager </h2>
        </div>
        <div className="card" onClick={handleActiveTask}>
          <h2 className="title">Task Manager </h2>
        </div>
        <div className="card-soc" onClick={handleActiveSocorros}>
          <h2 className="title">Socorros Mutuos</h2>
        </div>
        <div className="card-scrap" onClick={handleActiveScraper} >
          <h2 className="title">Web Scraper</h2>
        </div>
       
      </section>

      <section className={activeTask ? "task-manager-active" : "task-closed"}>
        <div className="task-content">
          <div className="task-content-upper">
            <h2>Task Manager</h2>
            <p>
              Introducing my comprehensive task manager application, designed to
              keep you organized effortlessly. This versatile tool empowers
              users to efficiently manage tasks, bills, and appointments, all
              within a single platform. With a sleek dark mode for enhanced
              visual comfort and a seamless toggle between Spanish and English
              languages, the app is tailored to suit diverse user preferences.
              Rigorously tested with Jest, it's not just a task manager; it's
              your reliable digital assistant for staying on top of life's
              demands.
            </p>
            <div className="neon-text">
              Built with React, Axios, Node.js, Express, MongoDB, and Jest.
              Deployed on Netlify.
            </div>
          </div>
          <div className="task-content-downer">
            <div className="carousel-task">
              <Carousel itemsToShow={1}>
                <img className="task-img" src={task2} alt="second pic task" />
                <img className="task-img" src={loginLight} alt="login light" />
                <img className="task-img" src={loginDark} alt="login dark" />
                <img className="task-img" src={task3} alt="home light" />
                <img className="task-img" src={task4} alt="add bill" />
                <img className="task-img" src={task5} alt="add task" />
                <img className="task-img" src={task6} alt="calendar" />
                <img className="task-img" src={task1} alt="firstpic task" />
              </Carousel>
            </div>
            <div className="task-btns">
              <a
                href="https://shimmering-buttercream-92b1e0.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                See Live
              </a>

              <image onClick={handleActiveTask} className="btn">
                Go Back
              </image>
              <a
                href="https://github.com/sjdev2212/taskmng.git"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                See Source
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={activeSocorros ? "task-manager-active" : "task-closed"}>
        <Socorros 
        activeSocorros={activeSocorros}
        setActiveSocorros={setActiveSocorros}
        
        />
        </section>

        <section className={activeScraper ? "task-manager-active" : "task-closed"}>
        <Scraper 
        activeScraper={activeScraper}
        setActiveScraper={setActiveScraper}
        
        />
        </section>
    </main>
  );
};
