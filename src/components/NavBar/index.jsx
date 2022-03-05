import React from "react";
import Fade from "react-reveal/Fade"

import "./styles.css";

const NavBar = () => {
  return (
    <Fade top duration={1000} distance="20px">
      <nav>
        <div className="navWide">
          <div className="wideDiv">
            <span className="name">Drew Perkins</span>
            <a href="#about">About Me</a>
            <a href="#projects">Portfolio</a>
            <a href="#contact">Contact Me</a>
            <a
              href="https://drive.google.com/file/d/1GSAWeg8Ze2GUiDOh153sQQ7nY5DMwTfH/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
            <span className="ref-stack">
              <p className="ref-text">drewperkins@gmail.com</p>
              <p className="ref-text">+460720137236</p>
            </span>
          </div>
        </div>
        <div className="navNarrow">
          <div className="nav-icon" />
          <div className="narrowLinks">
            <a href="#hero">
              About
            </a>
            <a href="#projects">
              Portfolio
            </a>
            <a href="#contact">
              Contact
            </a>
            <a
              href="https://drive.google.com/file/d/1GSAWeg8Ze2GUiDOh153sQQ7nY5DMwTfH/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </div>
        </div>
      </nav>
    </Fade>
  )
}
export default React.memo(NavBar)
