import React from "react";
import "./Home.css";
import cara from "./images/carucha.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <main className="main">
      <section className="home-container">
        <div>
          <motion.img
            initial={{ y: "100%" }}
            animate={{ y: "calc(15vw - 50%)", rotate: 360, scale: 0.98 }}
            className="caripela"
            src={cara}
            alt="caripela"
          ></motion.img>
        </div>
        <div>
          <h1 className="nombre">Aníbal Amoroso</h1>

          <div className="typing-demo dev">Full-Stack Developer</div>
        </div>
        <p className="paragraph">
          Hi! I'm a Full Stack Developer who loves building web applications. I
          enjoy working on both the visual parts and the behind-the-scenes
          functionality. My focus is on writing clean code and designing
          user-friendly experiences. I'm passionate about creating solutions
          that work well and meet the needs of users and businesses.
        </p>
      </section>
      <section className="options">
        <ul>
          <Link to="/projects">
            <li>
              {" "}
              <button className="sm-btn">Projects</button>
            </li>
          </Link>
          <Link to="/contact">
            <li>
              <button className="sm-btn"> Contact</button>{" "}
            </li>
          </Link>
          <Link to="/about">
            <li>
              <button className="sm-btn">About</button>
            </li>
          </Link>
        </ul>
      </section>
    </main>
  );
};
